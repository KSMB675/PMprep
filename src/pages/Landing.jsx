import { useNavigate } from 'react-router-dom'

const features = [
  {
    title: 'Practice Mode',
    description: 'Answer questions at your own pace with detailed explanations after every wrong answer.',
  },
  {
    title: 'Exam Simulation',
    description: 'Timed 150-question exams that mirror the real CAPM/PMP testing experience.',
  },
  {
    title: 'Study by Category',
    description: 'Focus on weak areas — drill down by PMBOK knowledge area until you nail it.',
  },
  {
    title: 'AI Explanations',
    description: 'Get instant, clear explanations powered by Claude when you miss a question.',
  },
  {
    title: 'Progress Tracking',
    description: 'Track your scores over time and see exactly where you need to improve.',
  },
  {
    title: 'CAPM & PMP Ready',
    description: 'Questions aligned to the PMBOK Guide and PMI exam content outline.',
  },
]

export default function Landing() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Nav */}
      <nav className="flex items-center justify-between px-6 py-4 max-w-5xl mx-auto">
        <h1 className="text-xl font-bold text-white">PMprep</h1>
        <div className="flex items-center gap-3">
          <button
            onClick={() => navigate('/login')}
            className="text-slate-400 hover:text-white text-sm transition-colors"
          >
            Sign In
          </button>
          <button
            onClick={() => navigate('/signup')}
            className="bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
          >
            Get Started Free
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="text-center px-6 py-24 max-w-3xl mx-auto">
        <span className="text-xs font-semibold uppercase tracking-widest text-indigo-400 mb-4 block">
          CAPM &amp; PMP Exam Prep
        </span>
        <h2 className="text-5xl font-bold leading-tight mb-6">
          Pass your PM certification<br />on the first try
        </h2>
        <p className="text-slate-400 text-lg mb-10 leading-relaxed">
          PMprep gives you practice questions, timed exam simulations, and AI-powered explanations
          — everything you need to pass the CAPM or PMP exam with confidence.
        </p>
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={() => navigate('/signup')}
            className="bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-8 py-3.5 rounded-xl transition-colors text-lg"
          >
            Start Studying Free
          </button>
          <button
            onClick={() => navigate('/login')}
            className="border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-white font-semibold px-8 py-3.5 rounded-xl transition-colors text-lg"
          >
            Sign In
          </button>
        </div>
        <p className="text-slate-600 text-sm mt-4">No credit card required</p>
      </section>

      {/* Stats */}
      <section className="border-y border-slate-800 py-12 px-6">
        <div className="max-w-3xl mx-auto grid grid-cols-3 gap-8 text-center">
          {[
            { value: '150+', label: 'Practice Questions' },
            { value: '9', label: 'PMBOK Knowledge Areas' },
            { value: '61%', label: 'CAPM Passing Score' },
          ].map(stat => (
            <div key={stat.label}>
              <p className="text-3xl font-bold text-indigo-400">{stat.value}</p>
              <p className="text-slate-500 text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="px-6 py-24 max-w-5xl mx-auto">
        <h3 className="text-2xl font-bold text-center mb-12">Everything you need to pass</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map(f => (
            <div key={f.title} className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
              <h4 className="text-white font-semibold mb-2">{f.title}</h4>
              <p className="text-slate-400 text-sm leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="text-center px-6 py-24 border-t border-slate-800">
        <h3 className="text-3xl font-bold mb-4">Ready to get certified?</h3>
        <p className="text-slate-400 mb-8">Create your free account and start studying today.</p>
        <button
          onClick={() => navigate('/signup')}
          className="bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-8 py-3.5 rounded-xl transition-colors text-lg"
        >
          Create Free Account
        </button>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 px-6 py-6 text-center">
        <p className="text-slate-600 text-sm">© 2026 PMprep. Built for CAPM &amp; PMP candidates.</p>
      </footer>
    </div>
  )
}
