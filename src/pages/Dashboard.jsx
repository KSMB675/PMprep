import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../lib/supabase'
import { categories } from '../data/questions'

export default function Dashboard() {
  const navigate = useNavigate()
  const [user, setUser] = useState(null)
  const [results, setResults] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function load() {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) { navigate('/login'); return }
      setUser(user)

      const { data } = await supabase
        .from('quiz_results')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false })
        .limit(10)

      setResults(data || [])
      setLoading(false)
    }
    load()
  }, [navigate])

  async function handleSignOut() {
    await supabase.auth.signOut()
    navigate('/login')
  }

  const totalQuizzes = results.length
  const avgScore = totalQuizzes
    ? Math.round(results.reduce((acc, r) => acc + (r.correct / r.total) * 100, 0) / totalQuizzes)
    : 0

  const bestScore = totalQuizzes
    ? Math.max(...results.map(r => Math.round((r.correct / r.total) * 100)))
    : 0

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <p className="text-slate-400">Loading...</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-slate-950 px-4 py-8">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-white">PMprep</h1>
            <p className="text-slate-400 text-sm">
              Welcome back, {user?.user_metadata?.full_name || user?.email}
            </p>
          </div>
          <button
            onClick={handleSignOut}
            className="text-slate-500 hover:text-slate-300 text-sm transition-colors"
          >
            Sign Out
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          {[
            { label: 'Quizzes Taken', value: totalQuizzes },
            { label: 'Avg Score', value: `${avgScore}%` },
            { label: 'Best Score', value: `${bestScore}%` },
          ].map(stat => (
            <div key={stat.label} className="bg-slate-900 border border-slate-800 rounded-xl p-4 text-center">
              <p className="text-2xl font-bold text-white">{stat.value}</p>
              <p className="text-slate-500 text-xs mt-1">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Start Quiz */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 mb-6">
          <h2 className="text-white font-semibold mb-4">Start a Quiz</h2>
          <div className="grid grid-cols-2 gap-3 mb-4">
            <button
              onClick={() => navigate('/quiz?mode=practice&category=all')}
              className="bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl py-3 transition-colors"
            >
              Practice Mode
              <p className="text-indigo-300 text-xs font-normal mt-0.5">Explanations after each question</p>
            </button>
            <button
              onClick={() => navigate('/quiz?mode=exam&category=all')}
              className="border border-slate-700 hover:border-indigo-500 text-slate-300 hover:text-white font-semibold rounded-xl py-3 transition-colors"
            >
              Exam Simulation
              <p className="text-slate-500 text-xs font-normal mt-0.5">Timed · Score at the end</p>
            </button>
          </div>

          <div>
            <p className="text-slate-500 text-xs uppercase tracking-wide mb-2">Practice by Category</p>
            <div className="flex flex-wrap gap-2">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => navigate(`/quiz?mode=practice&category=${encodeURIComponent(cat)}`)}
                  className="text-xs border border-slate-700 hover:border-indigo-500 text-slate-400 hover:text-indigo-300 rounded-lg px-3 py-1.5 transition-colors"
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Recent Results */}
        {results.length > 0 && (
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
            <h2 className="text-white font-semibold mb-4">Recent Results</h2>
            <div className="space-y-3">
              {results.map(r => {
                const pct = Math.round((r.correct / r.total) * 100)
                return (
                  <div key={r.id} className="flex items-center justify-between py-2 border-b border-slate-800 last:border-0">
                    <div>
                      <p className="text-slate-300 text-sm capitalize">{r.mode} · {r.category}</p>
                      <p className="text-slate-500 text-xs">
                        {new Date(r.created_at).toLocaleDateString()}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className={`font-semibold ${pct >= 61 ? 'text-green-400' : 'text-red-400'}`}>
                        {pct}%
                      </p>
                      <p className="text-slate-500 text-xs">{r.correct}/{r.total}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
