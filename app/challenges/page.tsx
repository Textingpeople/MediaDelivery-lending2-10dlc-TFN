'use client';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Link from 'next/link';

function ProgressBar({ pct, color }: { pct: number; color: string }) {
  return (
    <div className="w-full bg-gray-100 rounded-full h-2">
      <div className="h-2 rounded-full transition-all" style={{ width: `${pct}%`, background: color }} />
    </div>
  );
}

export default function ChallengesPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
        <div className="absolute top-[-10%] left-[-5%] w-[600px] h-[600px] blob opacity-30"
          style={{ background: 'radial-gradient(circle, rgba(134,239,172,0.4) 0%, transparent 70%)' }} />
        <div className="absolute bottom-[10%] right-[-5%] w-[400px] h-[400px] blob opacity-25"
          style={{ background: 'radial-gradient(circle, rgba(251,146,60,0.3) 0%, transparent 70%)' }} />
      </div>

      <Nav />

      <section className="pt-32 pb-20 px-6 relative text-center" style={{ zIndex: 1 }}>
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-orange-700 mb-8"
            style={{ background: 'rgba(251,146,60,0.15)', border: '1px solid rgba(251,146,60,0.3)' }}>
            <span>🏆</span>
            Savings Challenges
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 tracking-tight mb-6">
            Make saving feel like
            <br /><span className="gradient-text-green">a game you can win.</span>
          </h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            Nest Builder Finance savings challenges turn small habits into friendly goals. Join on your own or with coworkers, at your own pace. Challenges are optional and educational only.
          </p>
        </div>
      </section>

      {/* Challenge types */}
      <section className="py-20 px-6 relative" style={{ zIndex: 1 }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 tracking-tight mb-4">
              Four ways to join in.
            </h2>
            <p className="text-lg text-gray-500">
              Each one is designed to make saving simple, social and a little bit fun.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">

            {/* 52-Week Challenge */}
            <div className="glass-card p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl"
                  style={{ background: 'rgba(22,163,74,0.12)' }}>📅</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">52-Week Challenge</h3>
                  <p className="text-sm text-gray-400">One small step each week</p>
                </div>
              </div>
              <p className="text-gray-500 mb-6">
                Set aside a little more each week for a full year. The 52-week challenge builds a steady habit, and you can follow the pace that suits you.
              </p>
              <div className="p-5 rounded-2xl mb-4" style={{ background: 'rgba(0,0,0,0.03)' }}>
                <div className="flex justify-between items-center mb-2">
                  <p className="text-sm font-semibold text-gray-900">52-Week Challenge</p>
                  <span className="text-xs font-bold text-green-600">Badge</span>
                </div>
                <p className="text-xs text-gray-400 mb-3">Week 26 of 52 (sample)</p>
                <ProgressBar pct={50} color="#16a34a" />
                <p className="text-xs text-gray-400 mt-1">Halfway there</p>
              </div>
              <ul className="space-y-2">
                {['Weekly savings prompts', 'Flexible pace', 'Progress milestones', 'Payday reminders'].map(f => (
                  <li key={f} className="flex items-center gap-2 text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            {/* No-Spend Weekend */}
            <div className="glass-card p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl"
                  style={{ background: 'rgba(249,115,22,0.12)' }}>🏡</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">No-Spend Weekend</h3>
                  <p className="text-sm text-gray-400">A short, easy reset</p>
                </div>
              </div>
              <p className="text-gray-500 mb-6">
                Skip non-essential spending for one weekend and see how it feels. It is a quick, low-pressure way to build awareness and keep a little extra for your goals.
              </p>
              <div className="p-5 rounded-2xl mb-4" style={{ background: 'rgba(0,0,0,0.03)' }}>
                <div className="flex justify-between items-center mb-3">
                  <p className="text-sm font-semibold text-gray-900">No-Spend Weekend</p>
                  <span className="text-xs font-bold text-orange-600">Badge</span>
                </div>
                <div className="flex gap-2">
                  {[1,2,3,4,5].map(d => (
                    <div key={d} className={`flex-1 h-8 rounded-lg flex items-center justify-center text-xs font-bold ${d <= 4 ? 'text-white' : 'text-gray-300'}`}
                      style={{ background: d <= 4 ? 'linear-gradient(135deg, #f97316, #ef4444)' : 'rgba(0,0,0,0.05)' }}>
                      {d <= 4 ? '✓' : d}
                    </div>
                  ))}
                </div>
                <p className="text-xs text-gray-400 mt-2">4 of 5 check-ins complete (sample)</p>
              </div>
              <ul className="space-y-2">
                {['Friday-to-Sunday check-ins', 'Simple opt-in', 'Encouraging reminders', 'Completion badge'].map(f => (
                  <li key={f} className="flex items-center gap-2 text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            {/* Round-Up Week */}
            <div className="glass-card p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl"
                  style={{ background: 'rgba(8,145,178,0.12)' }}>🪙</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Round-Up Week</h3>
                  <p className="text-sm text-gray-400">Small amounts, big habit</p>
                </div>
              </div>
              <p className="text-gray-500 mb-6">
                For one week, round up each purchase in your head and set the difference aside for a goal. You track it yourself, and we cheer you on along the way.
              </p>
              <div className="p-5 rounded-2xl mb-4 space-y-3" style={{ background: 'rgba(0,0,0,0.03)' }}>
                <p className="text-sm font-semibold text-gray-900 mb-2">Round-Up Week Goals (sample)</p>
                {[
                  { name: '🎄 Holiday Goal', steps: 'Day 5 of 7', pct: 70, color: '#16a34a' },
                  { name: '🚗 Car Repair Fund', steps: 'Day 4 of 7', pct: 55, color: '#0891b2' },
                  { name: '📦 Moving Fund', steps: 'Day 3 of 7', pct: 40, color: '#7c3aed' },
                ].map(t => (
                  <div key={t.name}>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="font-medium text-gray-700">{t.name}</span>
                      <span className="text-gray-400">{t.steps}</span>
                    </div>
                    <ProgressBar pct={t.pct} color={t.color} />
                  </div>
                ))}
              </div>
              <ul className="space-y-2">
                {['Pick any savings goal', 'One-week commitment', 'Self-tracked and private', 'Friendly daily nudges'].map(f => (
                  <li key={f} className="flex items-center gap-2 text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            {/* Emergency Fund Month */}
            <div className="glass-card p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl"
                  style={{ background: 'rgba(124,58,237,0.12)' }}>🌿</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Emergency Fund Month</h3>
                  <p className="text-sm text-gray-400">Monthly program</p>
                </div>
              </div>
              <p className="text-gray-500 mb-6">
                A month-long program of small savings actions, like setting a goal, turning on payday reminders and reading a Nest Coach tip. Flexible and welcoming for everyone.
              </p>
              <div className="p-5 rounded-2xl mb-4" style={{ background: 'rgba(0,0,0,0.03)' }}>
                <div className="flex justify-between items-center mb-3">
                  <p className="text-sm font-semibold text-gray-900">Emergency Fund Month</p>
                  <span className="text-xs font-bold text-purple-600">Badge</span>
                </div>
                <div className="grid grid-cols-5 gap-1.5 mb-2">
                  {Array.from({ length: 15 }).map((_, i) => (
                    <div key={i} className={`h-6 rounded-md ${i < 11 ? 'bg-purple-400' : 'bg-gray-100'}`} />
                  ))}
                </div>
                <p className="text-xs text-gray-400">11 of 15 savings actions complete (sample)</p>
              </div>
              <ul className="space-y-2">
                {['Monthly action checklist', 'Many ways to take part', 'Flexible completion window', 'Welcoming for every budget'].map(f => (
                  <li key={f} className="flex items-center gap-2 text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How challenges work */}
      <section className="py-20 px-6 relative" style={{ zIndex: 1 }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 tracking-tight mb-4">
              Challenges that keep things simple.
            </h2>
            <p className="text-lg text-gray-500">
              HR teams share the program. Employees choose what to join. Reminders handle the rest.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              {[
                { icon: '✅', title: 'Opt in on your own', desc: 'Every challenge is optional. Pick the ones that fit your life and skip the rest.' },
                { icon: '📊', title: 'Clear progress', desc: 'See your challenge progress at a glance, with milestones along the way.' },
                { icon: '🏆', title: 'Completion badges', desc: 'Finish a challenge and earn a badge in your profile. Badges are just for fun.' },
                { icon: '🔔', title: 'Encouragement & reminders', desc: 'Get friendly nudges on payday and when you reach a milestone, by the channels you choose.' },
              ].map(item => (
                <div key={item.title} className="flex items-start gap-4">
                  <span className="text-2xl flex-shrink-0">{item.icon}</span>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">{item.title}</p>
                    <p className="text-sm text-gray-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="glass-card p-6">
              <p className="text-xs text-gray-400 uppercase tracking-wider font-medium mb-4">Active Challenges</p>
              <div className="space-y-4">
                {[
                  { name: '52-Week Challenge', type: 'Weekly', progress: 50, pts: 'Badge', color: '#16a34a', icon: '📅' },
                  { name: 'No-Spend Weekend', type: '3 days', progress: 80, pts: 'Badge', color: '#f97316', icon: '🏡' },
                  { name: 'Round-Up Week', type: '7 days', progress: 70, pts: 'Badge', color: '#0891b2', icon: '🪙' },
                  { name: 'Emergency Fund Month', type: '15 actions', progress: 73, pts: 'Badge', color: '#7c3aed', icon: '🌿' },
                ].map(c => (
                  <div key={c.name} className="p-4 rounded-2xl" style={{ background: 'rgba(0,0,0,0.03)' }}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span>{c.icon}</span>
                        <div>
                          <p className="text-sm font-semibold text-gray-900">{c.name}</p>
                          <p className="text-xs text-gray-400">{c.type}</p>
                        </div>
                      </div>
                      <span className="text-xs font-bold" style={{ color: c.color }}>{c.pts}</span>
                    </div>
                    <ProgressBar pct={c.progress} color={c.color} />
                    <p className="text-xs text-gray-400 mt-1">{c.progress}% complete</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 relative" style={{ zIndex: 1 }}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Ready to take the first step?</h2>
          <p className="text-lg text-gray-500 mb-8">
            Employers can offer the program to their team. Employees join with an Employer ID.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/for-employers"
              className="px-8 py-4 text-base font-semibold text-white rounded-2xl shadow-xl hover:opacity-90 transition-all"
              style={{ background: 'linear-gradient(135deg, #1A7A52, #3EC98A)' }}>
              Offer It to Your Team
            </Link>
            <Link href="/talk-to-sales"
              className="px-8 py-4 text-base font-semibold text-gray-700 rounded-2xl glass-button">
              Employee Sign Up
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
