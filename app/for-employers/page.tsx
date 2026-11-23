'use client';

import Link from 'next/link';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

export default function ForEmployersPage() {
  return (
    <div style={{ background: 'var(--ivory)', color: 'var(--charcoal)' }}>
      <Nav />

      {/* ── HERO ── */}
      <section
        className="relative pt-48 pb-28 px-6"
        style={{ background: 'var(--forest)' }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-mono-label mb-8" style={{ color: 'rgba(241,248,244,0.45)', fontSize: '0.65rem' }}>
            For Employers
          </p>
          <h1 className="headline-xl text-white mb-8">
            Less financial stress,
            <br />
            <em className="italic-accent">more peace of mind.</em>
          </h1>
          <p style={{ color: 'rgba(241,248,244,0.65)', fontSize: '1.1rem', lineHeight: 1.8, maxWidth: '520px', margin: '0 auto 2.5rem' }}>
            Offer Nest Builder Finance as an employee savings program. Your team builds emergency funds and savings habits, and you see only aggregate participation.
          </p>
          <Link href="/talk-to-sales" className="btn-primary">
            Offer It to Your Team
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>

      {/* ── PILLARS ── */}
      <section style={{ background: 'var(--forest)', borderTop: '1px solid rgba(241,248,244,0.08)' }}>
        <div className="max-w-5xl mx-auto px-6 py-14">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                ),
                title: 'Aggregate participation only',
                desc: 'Employers see overall participation. Individual balances and personal savings details are never shared.',
              },
              {
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                ),
                title: 'Easy to roll out',
                desc: 'Share an Employer ID and employees can join on their own, with no complicated setup for your team.',
              },
              {
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                    <polyline points="16 7 22 7 22 13" />
                  </svg>
                ),
                title: 'A caring benefit',
                desc: 'Show your team you care about the stress that unexpected bills can cause, with tools that encourage steady saving.',
              },
            ].map((pillar, i) => (
              <div key={i} className="flex items-start gap-4">
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(241,248,244,0.1)', color: 'rgba(241,248,244,0.7)' }}
                >
                  {pillar.icon}
                </div>
                <div>
                  <p style={{ color: 'var(--ivory)', fontWeight: 600, fontSize: '0.9rem', marginBottom: '0.35rem' }}>
                    {pillar.title}
                  </p>
                  <p style={{ color: 'rgba(241,248,244,0.5)', fontSize: '0.82rem', lineHeight: 1.6 }}>
                    {pillar.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4 FEATURES (Origin-inspired) ── */}
      <section className="py-28 px-6" style={{ background: 'var(--ivory)' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="font-mono-label mb-6" style={{ color: 'var(--olive)', fontSize: '0.65rem' }}>
              Why Nest Builder Finance
            </p>
            <h2 className="headline-lg" style={{ color: 'var(--forest)' }}>
              A savings benefit
              <br />
              <em className="italic-accent">your team can use.</em>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                label: 'Emergency Fund Habits',
                body: 'Employees set a goal, track their progress and get payday reminders, so building a cushion becomes a routine instead of a chore.',
              },
              {
                label: 'Goals for Real Life',
                body: 'From holidays to car repairs to a move, employees save for what matters to them, at a pace that works for them.',
              },
              {
                label: 'Friendly Challenges',
                body: 'Optional savings challenges, like the 52-week challenge, a no-spend weekend or a round-up week, make saving feel social and fun.',
              },
              {
                label: 'Onboarding Help',
                body: 'We help with your invite message and rollout details, so your HR team can launch the program without extra work.',
              },
            ].map((f, i) => (
              <div key={i} className="card-feature p-8" style={{ minHeight: '280px' }}>
                <p className="font-mono-label mb-6" style={{ color: 'var(--olive)', fontSize: '0.6rem', lineHeight: 1.5 }}>
                  {f.label}
                </p>
                <p style={{ color: 'var(--charcoal)', fontSize: '0.95rem', lineHeight: 1.75 }}>
                  {f.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS FOR EMPLOYERS ── */}
      <section className="py-28 px-6" style={{ background: 'var(--white)' }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <p className="font-mono-label mb-6" style={{ color: 'var(--olive)', fontSize: '0.65rem' }}>
              Simple Rollout
            </p>
            <h2 className="headline-lg" style={{ color: 'var(--forest)' }}>
              Simple to start,
              <br />
              <em className="italic-accent">easy to run.</em>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                num: '01',
                title: 'Set Up Your Program',
                desc: 'Tell us about your company and we will set up your savings program and give you an Employer ID to share.',
              },
              {
                num: '02',
                title: 'Invite Your Employees',
                desc: 'Share a short invite with the Employer ID. Employees sign up in minutes and can start setting savings goals right away. Joining is always optional.',
              },
              {
                num: '03',
                title: 'See Participation',
                desc: 'View overall participation from your employer dashboard, while individual balances and personal savings details stay private.',
              },
            ].map((step, i) => (
              <div key={step.num}>
                <p className="font-mono-label mb-4" style={{ color: 'rgba(10,31,26,0.25)', fontSize: '0.65rem' }}>
                  {step.num}
                </p>
                <h3 className="font-serif mb-3" style={{ fontSize: '1.2rem', fontWeight: 600, color: 'var(--forest)' }}>
                  {step.title}
                </h3>
                <p style={{ color: 'rgba(10,31,26,0.6)', fontSize: '0.9rem', lineHeight: 1.75 }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EMPLOYER DASHBOARD ── */}
      <section className="py-28 px-6" style={{ background: 'var(--forest)' }}>
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="font-mono-label mb-6" style={{ color: 'rgba(241,248,244,0.4)', fontSize: '0.65rem' }}>
                Employer Dashboard
              </p>
              <h2 className="headline-lg text-white mb-6">
                See the program,
                <br />
                <em className="italic-accent">never the balances.</em>
              </h2>
              <p style={{ color: 'rgba(241,248,244,0.65)', fontSize: '1rem', lineHeight: 1.8, marginBottom: '2.5rem' }}>
                Your dashboard shows aggregate participation so you know the program is being used. It never shows an individual employee&apos;s balances or savings details.
              </p>
              <div className="space-y-4">
                {[
                  'Employees who have joined',
                  'Savings goals created',
                  'Savings challenge participation',
                  'Payday reminders turned on',
                  'Aggregate numbers only, never individual balances',
                ].map(item => (
                  <div key={item} className="flex items-center gap-3">
                    <div
                      className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ background: 'rgba(241,248,244,0.15)' }}
                    >
                      <svg width="7" height="7" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                        <path d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p style={{ color: 'rgba(241,248,244,0.75)', fontSize: '0.9rem' }}>{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Dashboard mockup */}
            <div
              className="rounded-2xl p-6"
              style={{ background: 'rgba(241,248,244,0.06)', border: '1px solid rgba(241,248,244,0.1)' }}
            >
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="font-mono-label" style={{ color: 'rgba(241,248,244,0.4)', fontSize: '0.6rem' }}>
                    Employer Dashboard
                  </p>
                  <p style={{ color: 'var(--ivory)', fontWeight: 600, marginTop: '0.25rem' }}>Participation Overview</p>
                </div>
                <div
                  className="px-3 py-1 rounded-full font-mono-label"
                  style={{ background: 'rgba(62,201,138,0.2)', color: '#3EC98A', fontSize: '0.6rem' }}
                >
                  Live
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 mb-6">
                {[
                  { label: 'Employees Joined', value: '120', change: 'sample data' },
                  { label: 'Goals Created', value: '210', change: 'sample data' },
                  { label: 'Challenges Joined', value: '65', change: 'sample data' },
                  { label: 'Reminders Enabled', value: '98', change: 'sample data' },
                ].map(stat => (
                  <div key={stat.label} className="rounded-xl p-4" style={{ background: 'rgba(241,248,244,0.05)' }}>
                    <p className="font-mono-label mb-2" style={{ color: 'rgba(241,248,244,0.35)', fontSize: '0.55rem' }}>
                      {stat.label}
                    </p>
                    <p style={{ color: 'var(--ivory)', fontSize: '1.5rem', fontWeight: 700, letterSpacing: '-0.02em' }}>
                      {stat.value}
                    </p>
                    <p style={{ color: '#3EC98A', fontSize: '0.72rem', marginTop: '0.2rem' }}>{stat.change}</p>
                  </div>
                ))}
              </div>

              <div
                className="rounded-xl p-4 flex items-start gap-3"
                style={{ background: 'rgba(62,201,138,0.1)', border: '1px solid rgba(62,201,138,0.2)' }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#3EC98A" strokeWidth="2" className="flex-shrink-0 mt-0.5">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
                <p style={{ color: 'rgba(241,248,244,0.7)', fontSize: '0.75rem', lineHeight: 1.5 }}>
                  <strong style={{ color: 'var(--ivory)' }}>Privacy protected:</strong> Employers see aggregate participation only — never individual balances.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-28 px-6" style={{ background: 'var(--ivory)' }}>
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-mono-label mb-8" style={{ color: 'var(--olive)', fontSize: '0.65rem' }}>
            Get Started
          </p>
          <h2 className="headline-lg mb-8" style={{ color: 'var(--forest)' }}>
            Help your team
            <br />
            <em className="italic-accent">save with confidence.</em>
          </h2>
          <p style={{ color: 'rgba(10,31,26,0.55)', fontSize: '1rem', lineHeight: 1.8, maxWidth: '420px', margin: '0 auto 2.5rem' }}>
            Bring Nest Builder Finance to your workplace and give employees a simple way to start building an emergency fund.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/talk-to-sales" className="btn-forest">
              Offer It to Your Team
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
            <Link href="/product" className="btn-outline" style={{ color: 'var(--forest)', borderColor: 'rgba(10,31,26,0.3)' }}>
              See the Product
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
