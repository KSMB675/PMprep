import { useState, useEffect, useCallback } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { questions } from '../data/questions'
import { supabase } from '../lib/supabase'

function shuffle(arr) {
  return [...arr].sort(() => Math.random() - 0.5)
}

export default function Quiz() {
  const [searchParams] = useSearchParams()
  const mode = searchParams.get('mode') || 'practice'
  const category = searchParams.get('category') || 'all'
  const navigate = useNavigate()

  const [quizQuestions, setQuizQuestions] = useState([])
  const [current, setCurrent] = useState(0)
  const [selected, setSelected] = useState(null)
  const [showResult, setShowResult] = useState(false)
  const [answers, setAnswers] = useState([])
  const [explanation, setExplanation] = useState('')
  const [loadingExplanation, setLoadingExplanation] = useState(false)
  const [timeLeft, setTimeLeft] = useState(null)

  useEffect(() => {
    let pool = category === 'all' ? questions : questions.filter(q => q.category === category)
    const shuffled = shuffle(pool)
    const limit = mode === 'exam' ? Math.min(150, shuffled.length) : Math.min(20, shuffled.length)
    setQuizQuestions(shuffled.slice(0, limit))

    if (mode === 'exam') {
      setTimeLeft(180 * 60) // 3 hours in seconds
    }
  }, [mode, category])

  useEffect(() => {
    if (mode !== 'exam' || timeLeft === null) return
    if (timeLeft <= 0) {
      finishQuiz(answers)
      return
    }
    const timer = setInterval(() => setTimeLeft(t => t - 1), 1000)
    return () => clearInterval(timer)
  }, [timeLeft, mode])

  const finishQuiz = useCallback(async (finalAnswers) => {
    const { data: { user } } = await supabase.auth.getUser()
    if (user) {
      const score = finalAnswers.filter(a => a.correct).length
      await supabase.from('quiz_results').insert({
        user_id: user.id,
        mode,
        category,
        total: quizQuestions.length,
        correct: score,
        answers: finalAnswers,
      })
    }
    navigate(`/results?score=${finalAnswers.filter(a => a.correct).length}&total=${quizQuestions.length}&mode=${mode}`)
  }, [quizQuestions, mode, category, navigate])

  async function handleSelect(optionIndex) {
    if (selected !== null) return
    setSelected(optionIndex)
    const q = quizQuestions[current]
    const correct = optionIndex === q.answer
    const newAnswers = [...answers, { questionId: q.id, selected: optionIndex, correct }]
    setAnswers(newAnswers)

    if (mode === 'practice' && !correct) {
      setLoadingExplanation(true)
      setExplanation(q.explanation)
      setLoadingExplanation(false)
    }
  }

  function handleNext() {
    if (current + 1 >= quizQuestions.length) {
      finishQuiz(answers)
    } else {
      setCurrent(c => c + 1)
      setSelected(null)
      setExplanation('')
    }
  }

  function formatTime(seconds) {
    const h = Math.floor(seconds / 3600)
    const m = Math.floor((seconds % 3600) / 60)
    const s = seconds % 60
    return `${h}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`
  }

  if (!quizQuestions.length) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <p className="text-slate-400">Loading questions...</p>
      </div>
    )
  }

  const q = quizQuestions[current]
  const progress = ((current + 1) / quizQuestions.length) * 100

  return (
    <div className="min-h-screen bg-slate-950 px-4 py-8">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <span className="text-xs font-medium px-2 py-1 rounded-full bg-indigo-900 text-indigo-300 uppercase tracking-wide">
              {mode === 'exam' ? 'Exam Simulation' : 'Practice Mode'}
            </span>
            <span className="ml-3 text-slate-400 text-sm">
              {current + 1} / {quizQuestions.length}
            </span>
          </div>
          {mode === 'exam' && timeLeft !== null && (
            <span className={`font-mono text-sm font-semibold ${timeLeft < 300 ? 'text-red-400' : 'text-slate-300'}`}>
              {formatTime(timeLeft)}
            </span>
          )}
        </div>

        {/* Progress bar */}
        <div className="w-full bg-slate-800 rounded-full h-1.5 mb-8">
          <div
            className="bg-indigo-500 h-1.5 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Question card */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 mb-4">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xs text-slate-500">{q.category}</span>
            <span className="text-slate-700">·</span>
            <span className={`text-xs capitalize ${q.difficulty === 'easy' ? 'text-green-400' : q.difficulty === 'medium' ? 'text-yellow-400' : 'text-red-400'}`}>
              {q.difficulty}
            </span>
          </div>
          <p className="text-white text-lg leading-relaxed">{q.question}</p>
        </div>

        {/* Options */}
        <div className="space-y-3 mb-6">
          {q.options.map((option, i) => {
            let style = 'border-slate-700 bg-slate-900 text-slate-300 hover:border-indigo-500 hover:text-white cursor-pointer'
            if (selected !== null) {
              if (i === q.answer) style = 'border-green-500 bg-green-950 text-green-300'
              else if (i === selected && selected !== q.answer) style = 'border-red-500 bg-red-950 text-red-300'
              else style = 'border-slate-800 bg-slate-900 text-slate-500'
            }
            return (
              <button
                key={i}
                onClick={() => handleSelect(i)}
                className={`w-full text-left border rounded-xl px-5 py-3.5 transition-colors ${style}`}
              >
                <span className="font-semibold mr-3 text-slate-500">
                  {String.fromCharCode(65 + i)}.
                </span>
                {option}
              </button>
            )
          })}
        </div>

        {/* Practice mode explanation */}
        {mode === 'practice' && explanation && (
          <div className="bg-slate-800 border border-slate-700 rounded-xl p-5 mb-6">
            <p className="text-xs font-semibold text-indigo-400 uppercase tracking-wide mb-2">Explanation</p>
            <p className="text-slate-300 text-sm leading-relaxed">{explanation}</p>
          </div>
        )}

        {/* Next button */}
        {selected !== null && (
          <button
            onClick={handleNext}
            className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl py-3 transition-colors"
          >
            {current + 1 >= quizQuestions.length ? 'See Results' : 'Next Question'}
          </button>
        )}
      </div>
    </div>
  )
}
