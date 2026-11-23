'use client';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Link from 'next/link';

export default function IntegrationsPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] blob opacity-30"
          style={{ background: 'radial-gradient(circle, rgba(62,201,138,0.4) 0%, transparent 70%)' }} />
        <div className="absolute bottom-[10%] left-[-5%] w-[400px] h-[400px] blob opacity-25"
          style={{ background: 'radial-gradient(circle, rgba(26,122,82,0.3) 0%, transparent 70%)' }} />
      </div>

      <Nav />

      <section className="pt-32 pb-20 px-6 relative text-center" style={{ zIndex: 1 }}>
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-green-700 mb-8"
            style={{ background: 'rgba(62,201,138,0.2)', border: '1px solid rgba(62,201,138,0.4)' }}>
            <span>🔗</span>
            Payroll &amp; HR Connections
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 tracking-tight mb-6">
            Works with the systems
            <br /><span className="gradient-text-green">your employer already uses.</span>
          </h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            Nest Builder Finance can use your employer&apos;s payroll and HR systems to confirm who is eligible and to time payday savings reminders. There are no bank connections and no money movement.
          </p>
        </div>
      </section>

      {/* Payroll & HR — Primary */}
      <section className="py-16 px-6 relative" style={{ zIndex: 1 }}>
        <div className="max-w-5xl mx-auto">
          <div className="glass-card p-10 mb-8">
            <div className="flex flex-col md:flex-row items-start gap-8">
              <div className="flex-shrink-0">
                <div className="w-24 h-24 rounded-3xl flex items-center justify-center shadow-xl"
                  style={{ background: 'linear-gradient(135deg, #1A7A52, #3EC98A)' }}>
                  <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <h2 className="text-3xl font-bold text-gray-900">Payroll &amp; HR Systems</h2>
                  <span className="px-3 py-1 text-sm font-semibold text-green-700 rounded-full"
                    style={{ background: 'rgba(62,201,138,0.25)' }}>Primary Connection</span>
                </div>
                <p className="text-lg text-gray-500 mb-6 leading-relaxed">
                  Your employer can share a simple employee list and pay schedule with Nest Builder Finance. We use it to check eligibility when you sign up and to send payday savings reminders on the right day.
                </p>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
                  {[
                    { name: 'Eligibility', desc: 'Confirms you are an employee' },
                    { name: 'Pay Schedule', desc: 'Weekly, biweekly or monthly' },
                    { name: 'Payday Dates', desc: 'So reminders land on time' },
                    { name: 'Employer ID', desc: 'Links you to your program' },
                    { name: 'Opt-In Status', desc: 'Only if you choose texts' },
                    { name: 'Aggregate Counts', desc: 'Overall participation only' },
                  ].map(item => (
                    <div key={item.name} className="p-4 rounded-2xl" style={{ background: 'rgba(0,0,0,0.03)' }}>
                      <div className="flex items-center gap-2 mb-1">
                        <div className="w-2 h-2 rounded-full bg-green-500" />
                        <p className="text-sm font-semibold text-gray-900">{item.name}</p>
                      </div>
                      <p className="text-xs text-gray-400">{item.desc}</p>
                    </div>
                  ))}
                </div>

                <div className="p-4 rounded-2xl flex items-start gap-3"
                  style={{ background: 'rgba(62,201,138,0.1)', border: '1px solid rgba(62,201,138,0.3)' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1A7A52" strokeWidth="2" className="flex-shrink-0 mt-0.5">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                  <p className="text-sm text-green-800">
                    <strong>No bank connections.</strong> Nest Builder Finance does not connect to bank accounts and does not move money. Payroll and HR information is used only for eligibility and reminder timing.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Other connections */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              {
                icon: '🗂️',
                title: 'HR Systems',
                desc: 'Your HR team can share a list of eligible employees so only people at your company can join.',
                examples: ['Employee list', 'Eligibility check', 'Employer ID setup'],
                color: '#1A7A52',
              },
              {
                icon: '🗓️',
                title: 'Payroll Schedules',
                desc: 'A pay schedule lets us send reminders on payday, not a few days late.',
                examples: ['Weekly or biweekly', 'Semi-monthly or monthly', 'Holiday adjustments'],
                color: '#228A60',
              },
              {
                icon: '📱',
                title: 'Reminder Channels',
                desc: 'Choose how you hear from us. Text alerts are optional and only sent if you opt in.',
                examples: ['Email reminders', 'Optional text alerts', 'In-app reminders'],
                color: '#3EC98A',
              },
            ].map(item => (
              <div key={item.title} className="glass-card p-6">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl mb-4"
                  style={{ background: `${item.color}15` }}>
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500 mb-4 leading-relaxed">{item.desc}</p>
                <ul className="space-y-1">
                  {item.examples.map(e => (
                    <li key={e} className="flex items-center gap-2 text-xs text-gray-400">
                      <div className="w-1 h-1 rounded-full" style={{ background: item.color }} />
                      {e}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Important note */}
          <div className="glass-card p-8 text-center">
            <span className="text-3xl mb-4 block">ℹ️</span>
            <h3 className="text-xl font-bold text-gray-900 mb-3">About Connections</h3>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Connections vary by employer. We do not claim direct integrations with specific payroll or HR brands unless explicitly stated. Where a connection is not available, your employer can share a simple file instead. Message and data rates may apply to text alerts.
            </p>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 px-6 relative" style={{ zIndex: 1 }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 tracking-tight mb-4">
              How the connection works.
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: '1', icon: '🗂️', title: 'Employer shares details', desc: 'Your HR team provides an employee list and pay schedule for the savings program.' },
              { step: '2', icon: '✅', title: 'You sign up', desc: 'You enter your Employer ID and we confirm you are eligible to join.' },
              { step: '3', icon: '🔔', title: 'Reminders are timed', desc: 'Payday savings reminders are scheduled around your pay dates.' },
              { step: '4', icon: '📊', title: 'Participation is counted', desc: 'Your employer sees overall participation numbers only, never individual balances.' },
            ].map(item => (
              <div key={item.step} className="glass-card p-6 text-center relative">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white mx-auto mb-4"
                  style={{ background: 'linear-gradient(135deg, #1A7A52, #3EC98A)' }}>
                  {item.step}
                </div>
                <span className="text-3xl mb-3 block">{item.icon}</span>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Privacy */}
      <section className="py-16 px-6 relative" style={{ zIndex: 1 }}>
        <div className="max-w-3xl mx-auto">
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl">🔐</span>
              <h2 className="text-2xl font-bold text-gray-900">Privacy &amp; permissions</h2>
            </div>
            <div className="space-y-4">
              {[
                { title: 'Only what is needed', desc: 'We ask employers only for the details needed to check eligibility and time reminders.' },
                { title: 'You choose your alerts', desc: 'Text alerts are optional. Reply STOP to any text to opt out, or update your settings any time.' },
                { title: 'Employers see aggregate data only', desc: 'Employers never see individual balances. They see overall participation for their program.' },
                { title: 'No bank access, no money movement', desc: 'We do not connect to bank accounts, and we do not hold, move, lend or invest your money.' },
              ].map(item => (
                <div key={item.title} className="flex items-start gap-4 p-4 rounded-2xl" style={{ background: 'rgba(0,0,0,0.02)' }}>
                  <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ background: 'rgba(26,122,82,0.15)' }}>
                    <div className="w-2 h-2 rounded-full bg-green-500" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">{item.title}</p>
                    <p className="text-sm text-gray-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 text-center">
              <Link href="/privacy" className="text-sm font-semibold text-green-600 hover:text-green-700">
                Read our full privacy policy →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 relative" style={{ zIndex: 1 }}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Questions about connecting?</h2>
          <p className="text-lg text-gray-500 mb-8">
            Employees need an Employer ID from their HR team to get started. Employers can tell us which systems they use.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/signup"
              className="px-8 py-4 text-base font-semibold text-white rounded-2xl shadow-xl hover:opacity-90 transition-all"
              style={{ background: 'linear-gradient(135deg, #1A7A52, #3EC98A)' }}>
              Employee Sign Up
            </Link>
            <Link href="/talk-to-sales"
              className="px-8 py-4 text-base font-semibold text-gray-700 rounded-2xl glass-button">
              Offer It to Your Team
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
