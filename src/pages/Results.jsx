import { useSearchParams, useNavigate } from 'react-router-dom'

export default function Results() {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const score = parseInt(searchParams.get('score') || '0')
  const total = parseInt(searchParams.get('total') || '1')
  const mode = searchParams.get('mode') || 'practice'
  const pct = Math.round((score / total) * 100)

  const passed = pct >= 61 // CAPM passing score is roughly 61%

  function getColor() {
    if (pct >= 80) return 'text-green-400'
    if (pct >= 61) return 'text-yellow-400'
    return 'text-red-400'
  }

  function getMessage() {
    if (pct >= 80) return 'Excellent work! You\'re on track to pass.'
    if (pct >= 61) return 'Good effort — above passing threshold. Keep studying.'
    return 'Below passing score. Review the weak areas and try again.'
  }

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 text-center">
          <p className="text-slate-400 text-sm uppercase tracking-wide mb-2">
            {mode === 'exam' ? 'Exam Simulation' : 'Practice Session'} Complete
          </p>
          <div className={`text-7xl font-bold mb-2 ${getColor()}`}>{pct}%</div>
          <p className="text-slate-300 text-lg mb-1">
            {score} / {total} correct
          </p>
          <p className={`text-sm mb-8 ${passed ? 'text-green-400' : 'text-red-400'}`}>
            {passed ? 'PASS' : 'FAIL'} — {getMessage()}
          </p>

          <div className="bg-slate-800 rounded-xl p-4 mb-6 text-left">
            <p className="text-xs text-slate-500 uppercase tracking-wide mb-2">CAPM Passing Threshold</p>
            <div className="flex items-center gap-3">
              <div className="flex-1 bg-slate-700 rounded-full h-2">
                <div
                  className={`h-2 rounded-full transition-all ${pct >= 61 ? 'bg-green-500' : 'bg-red-500'}`}
                  style={{ width: `${pct}%` }}
                />
              </div>
              <span className="text-slate-400 text-xs">61% to pass</span>
            </div>
          </div>

          <div className="space-y-3">
            <button
              onClick={() => navigate('/quiz?mode=practice')}
              className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl py-3 transition-colors"
            >
              Practice Again
            </button>
            <button
              onClick={() => navigate('/quiz?mode=exam')}
              className="w-full border border-slate-700 hover:border-indigo-500 text-slate-300 hover:text-white font-semibold rounded-xl py-3 transition-colors"
            >
              Start Exam Simulation
            </button>
            <button
              onClick={() => navigate('/dashboard')}
              className="w-full text-slate-500 hover:text-slate-300 text-sm py-2 transition-colors"
            >
              Back to Dashboard
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
