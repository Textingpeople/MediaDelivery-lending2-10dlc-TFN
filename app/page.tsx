'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Nav from './components/Nav';
import Footer from './components/Footer';

// ─── App UI: Dashboard Mockup ──────────────────────────────────────────────────
function DashboardMockup() {
  return (
    <div className="app-card p-6 w-full max-w-sm mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <div>
          <p className="font-mono-label" style={{ color: 'var(--olive)', fontSize: '0.6rem' }}>Good morning</p>
          <p style={{ fontWeight: 600, color: 'var(--forest)', fontSize: '1rem' }}>Jordan, here&apos;s your savings</p>
        </div>
        <div
          className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-semibold"
          style={{ background: 'var(--forest)', color: 'var(--ivory)' }}
        >
          J
        </div>
      </div>

      {/* Savings Summary Card */}
      <div
        className="rounded-2xl p-4 mb-4"
        style={{ background: 'var(--forest)', color: 'var(--ivory)' }}
      >
        <p className="font-mono-label mb-1" style={{ color: 'rgba(241,248,244,0.5)', fontSize: '0.6rem' }}>Savings Tracked</p>
        <p style={{ fontSize: '1.75rem', fontWeight: 700, letterSpacing: '-0.02em' }}>$2,340</p>
        <p style={{ color: 'rgba(241,248,244,0.6)', fontSize: '0.75rem', marginTop: '0.25rem' }}>
          <span style={{ color: '#3EC98A' }}>↑ $75</span> since last payday
        </p>
      </div>

      {/* Goals */}
      <div className="space-y-3 mb-4">
        {[
          { label: 'Emergency Fund', current: 1400, goal: 2000, pct: 70, color: '#1A7A52' },
          { label: 'Holiday Goal', current: 450, goal: 900, pct: 50, color: '#0F2E26' },
          { label: 'Car Repair Fund', current: 240, goal: 600, pct: 40, color: '#1A7A52' },
        ].map(g => (
          <div key={g.label}>
            <div className="flex justify-between items-center mb-1">
              <span style={{ fontSize: '0.78rem', color: 'var(--charcoal)', fontWeight: 500 }}>{g.label}</span>
              <span className="font-mono-label" style={{ color: 'var(--olive)', fontSize: '0.6rem' }}>{g.pct}%</span>
            </div>
            <div className="rounded-full h-1.5" style={{ background: 'rgba(10,31,26,0.1)' }}>
              <div
                className="h-1.5 rounded-full"
                style={{ width: `${g.pct}%`, background: g.color, transition: 'width 1s ease' }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Nest Coach Tip */}
      <div
        className="rounded-xl p-3 flex items-start gap-3"
        style={{ background: 'rgba(26,122,82,0.1)', border: '1px solid rgba(26,122,82,0.2)' }}
      >
        <div
          className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
          style={{ background: 'var(--olive)' }}
        >
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
            <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 5v6m0 4h.01" />
          </svg>
        </div>
        <p style={{ fontSize: '0.72rem', color: 'var(--forest)', lineHeight: 1.5 }}>
          <strong>Nest Coach:</strong> Payday is Friday. A small step toward your emergency fund keeps your progress moving.
        </p>
      </div>
    </div>
  );
}

// ─── App UI: Nest Coach Chat Mockup ────────────────────────────────────────────
function ChatMockup() {
  const messages = [
    { role: 'user', text: 'Where do I start with an emergency fund?' },
    { role: 'ai', text: 'Start small. Name your goal, pick a pace that feels comfortable, and turn on a reminder for each payday. Steady steps add up.' },
    { role: 'user', text: 'What if I miss a payday?' },
    { role: 'ai', text: 'No problem. Pick it back up on the next one. You can adjust your goal or reminders any time.' },
  ];

  return (
    <div className="app-card p-5 w-full max-w-sm mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
      {/* Chat header */}
      <div className="flex items-center gap-3 mb-4 pb-4" style={{ borderBottom: '1px solid rgba(10,31,26,0.08)' }}>
        <div
          className="w-8 h-8 rounded-full flex items-center justify-center"
          style={{ background: 'var(--forest)' }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <path d="M12 2C8 2 4 6 4 10c0 5 8 12 8 12s8-7 8-12c0-4-4-8-8-8z" fill="#F1F8F4" opacity="0.9" />
          </svg>
        </div>
        <div>
          <p style={{ fontWeight: 600, fontSize: '0.85rem', color: 'var(--forest)' }}>Nest Coach</p>
          <div className="flex items-center gap-1">
            <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
            <p className="font-mono-label" style={{ color: 'var(--olive)', fontSize: '0.55rem' }}>Online</p>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="space-y-3 mb-4">
        {messages.map((msg, i) => (
          <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div
              className="rounded-2xl px-3 py-2 max-w-[85%]"
              style={{
                background: msg.role === 'user' ? 'var(--forest)' : 'rgba(26,122,82,0.1)',
                color: msg.role === 'user' ? 'var(--ivory)' : 'var(--charcoal)',
                fontSize: '0.72rem',
                lineHeight: 1.5,
                borderRadius: msg.role === 'user' ? '16px 16px 4px 16px' : '16px 16px 16px 4px',
              }}
            >
              {msg.text}
            </div>
          </div>
        ))}
      </div>

      {/* Input */}
      <div
        className="flex items-center gap-2 rounded-full px-4 py-2"
        style={{ background: 'rgba(10,31,26,0.06)', border: '1px solid rgba(10,31,26,0.1)' }}
      >
        <p style={{ fontSize: '0.72rem', color: 'rgba(10,31,26,0.35)', flex: 1 }}>Ask Nest Coach about your savings goals…</p>
        <div
          className="w-6 h-6 rounded-full flex items-center justify-center"
          style={{ background: 'var(--forest)' }}
        >
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </div>
  );
}

// ─── Main Page ─────────────────────────────────────────────────────────────────
export default function HomePage() {
  const [heroLoaded, setHeroLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setHeroLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={{ background: 'var(--ivory)', color: 'var(--charcoal)' }}>
      <Nav />

      {/* ── HERO ── */}
      <section
        className="relative min-h-screen flex items-center"
        style={{
          background: 'linear-gradient(135deg, #0A1F1A 0%, #0F2E26 40%, #143D32 70%, #0A1F1A 100%)',
          overflow: 'hidden',
        }}
      >
        {/* Animated grid background */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(26,122,82,0.15) 1px, transparent 1px),
              linear-gradient(90deg, rgba(26,122,82,0.15) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />

        {/* Glow orbs */}
        <div
          className="absolute"
          style={{
            width: '600px',
            height: '600px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(26,122,82,0.25) 0%, transparent 70%)',
            top: '-100px',
            right: '-100px',
          }}
        />
        <div
          className="absolute"
          style={{
            width: '400px',
            height: '400px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(62,201,138,0.15) 0%, transparent 70%)',
            bottom: '100px',
            left: '-50px',
          }}
        />

        {/* Content */}
        <div
          className="relative z-10 w-full max-w-6xl mx-auto px-6 pt-32 pb-20"
          style={{
            opacity: heroLoaded ? 1 : 0,
            transform: heroLoaded ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 1s ease, transform 1s ease',
          }}
        >
          <div className="max-w-3xl">
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full"
              style={{
                background: 'rgba(26,122,82,0.2)',
                border: '1px solid rgba(26,122,82,0.4)',
              }}
            >
              <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#3EC98A' }} />
              <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.8rem', fontWeight: 500 }}>
                Employer-Offered Savings Program
              </span>
            </div>

            {/* Headline */}
            <h1
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
                fontWeight: 800,
                lineHeight: 1.1,
                letterSpacing: '-0.03em',
                color: 'white',
                marginBottom: '1.5rem',
              }}
            >
              Build your safety net,
              <br />
              <span style={{ color: '#3EC98A' }}>one paycheck</span>
              <br />
              at a time.
            </h1>

            {/* Subheading */}
            <p
              style={{
                color: 'rgba(255,255,255,0.6)',
                fontSize: '1.15rem',
                lineHeight: 1.7,
                maxWidth: '520px',
                marginBottom: '2.5rem',
              }}
            >
              Nest Builder Finance is a savings program offered through your employer. Set goals, get payday reminders, and build an emergency fund at your own pace.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/talk-to-sales"
                className="inline-flex items-center gap-2"
                style={{
                  background: '#1A7A52',
                  color: 'white',
                  fontSize: '0.95rem',
                  fontWeight: 600,
                  padding: '0.875rem 2rem',
                  borderRadius: '10px',
                  transition: 'background 0.2s, transform 0.2s',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = '#228A60'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = '#1A7A52'; e.currentTarget.style.transform = 'translateY(0)'; }}
              >
                Start Saving
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
              <Link
                href="/for-employers"
                className="inline-flex items-center gap-2"
                style={{
                  color: 'rgba(255,255,255,0.8)',
                  fontSize: '0.95rem',
                  fontWeight: 500,
                  padding: '0.875rem 2rem',
                  borderRadius: '10px',
                  border: '1px solid rgba(255,255,255,0.2)',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.08)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.4)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'; }}
              >
                For Employers
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── PILLARS BAR ── */}
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
                title: 'Private by design',
                desc: 'Employers see only aggregate participation. Individual balances are never shared with them.',
              },
              {
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 5v6m0 4h.01" />
                  </svg>
                ),
                title: 'Gentle nudges, not lectures',
                desc: 'Nest Coach shares short, friendly savings tips and payday reminders to keep good habits going.',
              },
              {
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                    <polyline points="16 7 22 7 22 13" />
                  </svg>
                ),
                title: 'Goals that fit real life',
                desc: 'Save toward a rainy day, the holidays, a car repair or a move. Every goal moves at your own pace.',
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

      {/* ── EDITORIAL STATEMENT ── */}
      <section className="py-28 px-6" style={{ background: 'var(--ivory)' }}>
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-mono-label mb-8" style={{ color: 'var(--olive)', fontSize: '0.65rem' }}>
            Why Save Together
          </p>
          <h2 className="headline-lg mb-8" style={{ color: 'var(--forest)' }}>
            A little set aside
            <br />
            <em className="italic-accent">goes a long way.</em>
          </h2>
          <p style={{ color: 'rgba(10,31,26,0.6)', fontSize: '1.05rem', lineHeight: 1.8, maxWidth: '520px', margin: '0 auto 1.5rem' }}>
            An unexpected bill is easier to face when you have a cushion. Nest Builder Finance gives employees simple tools and friendly reminders to start one.
          </p>
          <p style={{ color: 'var(--forest)', fontSize: '0.9rem', lineHeight: 1.7, maxWidth: '520px', margin: '0 auto', fontWeight: 600 }}>
            Nest Builder Finance is not a bank. We do not hold, move, lend or invest your money.
          </p>
        </div>
      </section>

      {/* ── FEATURES (Origin-inspired) ── */}
      <section className="pb-28 px-6" style={{ background: 'var(--ivory)' }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                label: 'Savings Goals',
                body: 'Name a goal, like a rainy-day cushion, the holidays, a car repair or a move, and watch your progress build one payday at a time.',
              },
              {
                label: 'Payday Reminders',
                body: 'A friendly nudge on payday helps you remember to set something aside before the money gets spent elsewhere.',
              },
              {
                label: 'Savings Challenges',
                body: 'Join optional challenges like the 52-week challenge, a no-spend weekend or a round-up week. Small, fun and easy to start.',
              },
              {
                label: 'Nest Coach Tips',
                body: 'Short, plain-language savings tips from Nest Coach. They are educational only and never a substitute for professional advice.',
              },
            ].map((f, i) => (
              <div
                key={i}
                className="card-feature p-8"
                style={{ minHeight: '280px' }}
              >
                <p
                  className="font-mono-label mb-6"
                  style={{ color: 'var(--olive)', fontSize: '0.6rem', lineHeight: 1.5 }}
                >
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

      {/* ── HOW IT WORKS ── */}
      <section className="py-28 px-6" style={{ background: 'var(--white)' }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <p className="font-mono-label mb-6" style={{ color: 'var(--olive)', fontSize: '0.65rem' }}>
              How It Works
            </p>
            <h2 className="headline-lg" style={{ color: 'var(--forest)' }}>
              From first goal
              <br />
              <em className="italic-accent">to steady habit.</em>
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                num: '01',
                title: 'Join',
                desc: 'Sign up with the Employer ID from your onboarding email. It takes a few minutes, and joining is always your choice.',
                icon: (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                  </svg>
                ),
              },
              {
                num: '02',
                title: 'Set Goals',
                desc: 'Pick what you want to save for, like an emergency fund, the holidays, car repairs or a move, and choose a pace that feels right.',
                icon: (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="11" cy="11" r="8" />
                    <path d="m21 21-4.35-4.35" />
                  </svg>
                ),
              },
              {
                num: '03',
                title: 'Get Reminders',
                desc: 'Receive payday savings reminders and short tips from Nest Coach, so saving becomes part of your routine.',
                icon: (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M9 11l3 3L22 4" />
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                  </svg>
                ),
              },
              {
                num: '04',
                title: 'Celebrate',
                desc: 'Watch your progress milestones fill in and join savings challenges. Your employer sees only overall participation.',
                icon: (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                    <polyline points="16 7 22 7 22 13" />
                  </svg>
                ),
              },
            ].map((step, i) => (
              <div key={step.num} className="relative">
                <div
                  className="w-10 h-10 rounded-2xl flex items-center justify-center mb-5"
                  style={{ background: 'rgba(10,31,26,0.08)', color: 'var(--forest)' }}
                >
                  {step.icon}
                </div>
                <p
                  className="font-mono-label mb-3"
                  style={{ color: 'rgba(10,31,26,0.25)', fontSize: '0.65rem' }}
                >
                  {step.num}
                </p>
                <h3
                  className="font-serif mb-3"
                  style={{ fontSize: '1.2rem', fontWeight: 600, color: 'var(--forest)' }}
                >
                  {step.title}
                </h3>
                <p style={{ color: 'rgba(10,31,26,0.6)', fontSize: '0.88rem', lineHeight: 1.7 }}>
                  {step.desc}
                </p>
                {i < 3 && (
                  <div className="hidden md:block absolute top-5 -right-3 z-10">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(10,31,26,0.2)" strokeWidth="1.5">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── APP UI DEMO ── */}
      <section className="py-28 px-6" style={{ background: 'var(--ivory)' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <p className="font-mono-label mb-6" style={{ color: 'var(--olive)', fontSize: '0.65rem' }}>
              The Experience
            </p>
            <h2 className="headline-lg" style={{ color: 'var(--forest)' }}>
              Your savings,
              <br />
              <em className="italic-accent">always in view.</em>
            </h2>
            <p
              style={{
                color: 'rgba(10,31,26,0.55)',
                fontSize: '1rem',
                lineHeight: 1.8,
                maxWidth: '440px',
                margin: '1.5rem auto 0',
              }}
            >
              A simple dashboard for your goals and a friendly coach for your questions. Sample screens shown for illustration.
            </p>
          </div>

          {/* Two-column UI demo */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left: Dashboard */}
            <div>
              <p className="font-mono-label mb-4" style={{ color: 'var(--olive)', fontSize: '0.6rem' }}>
                Savings Dashboard
              </p>
              <p
                className="headline-md mb-6"
                style={{ color: 'var(--forest)', fontSize: '1.5rem' }}
              >
                Every savings goal in one place
              </p>
              <p style={{ color: 'rgba(10,31,26,0.55)', fontSize: '0.9rem', lineHeight: 1.75, marginBottom: '2rem' }}>
                See your emergency fund tracker, holiday goal and other savings goals, with progress milestones along the way, all in one calm view.
              </p>
              <div className="animate-float">
                <DashboardMockup />
              </div>
            </div>

            {/* Right: Nest Coach Chat */}
            <div>
              <p className="font-mono-label mb-4" style={{ color: 'var(--olive)', fontSize: '0.6rem' }}>
                Nest Coach
              </p>
              <p
                className="headline-md mb-6"
                style={{ color: 'var(--forest)', fontSize: '1.5rem' }}
              >
                Small tips for steady saving
              </p>
              <p style={{ color: 'rgba(10,31,26,0.55)', fontSize: '0.9rem', lineHeight: 1.75, marginBottom: '2rem' }}>
                Nest Coach offers short, educational savings tips and reminders. It does not give financial, investment or tax advice.
              </p>
              <div className="animate-float-delay">
                <ChatMockup />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── EMPLOYER SECTION ── */}
      <section className="py-28 px-6" style={{ background: 'var(--forest)' }}>
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="font-mono-label mb-6" style={{ color: 'rgba(241,248,244,0.4)', fontSize: '0.65rem' }}>
                For Employers
              </p>
              <h2 className="headline-lg text-white mb-6">
                Less financial stress.
                <br />
                <em className="italic-accent">A simple benefit to offer.</em>
              </h2>
              <p style={{ color: 'rgba(241,248,244,0.65)', fontSize: '1rem', lineHeight: 1.8, marginBottom: '2.5rem' }}>
                Offer your team a savings program that is easy to roll out and easy to use. Nest Builder Finance handles onboarding and reminders, and you see only aggregate participation.
              </p>
              <div className="space-y-5">
                {[
                  { title: 'Simple rollout', desc: 'Share one Employer ID and employees can join on their own.' },
                  { title: 'Aggregate participation only', desc: 'Employers never see individual balances or personal savings details.' },
                  { title: 'Support for your people', desc: 'Savings goals and gentle reminders help employees feel more prepared for the unexpected.' },
                ].map(item => (
                  <div key={item.title} className="flex items-start gap-4">
                    <div
                      className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ background: 'rgba(241,248,244,0.15)', border: '1px solid rgba(241,248,244,0.2)' }}
                    >
                      <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                        <path d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <p style={{ color: 'var(--ivory)', fontWeight: 600, fontSize: '0.9rem', marginBottom: '0.2rem' }}>{item.title}</p>
                      <p style={{ color: 'rgba(241,248,244,0.55)', fontSize: '0.85rem' }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-10">
                <Link href="/for-employers" className="btn-primary">
                  Learn More for Employers
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Employer dashboard mockup */}
            <div>
              <div
                className="rounded-2xl p-6"
                style={{
                  background: 'rgba(241,248,244,0.06)',
                  border: '1px solid rgba(241,248,244,0.1)',
                }}
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
                    <div
                      key={stat.label}
                      className="rounded-xl p-4"
                      style={{ background: 'rgba(241,248,244,0.05)' }}
                    >
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
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="py-28 px-6" style={{ background: 'var(--ivory)' }}>
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-mono-label mb-8" style={{ color: 'var(--olive)', fontSize: '0.65rem' }}>
            Get Started
          </p>
          <h2 className="headline-lg mb-8" style={{ color: 'var(--forest)' }}>
            Help your team build
            <br />
            <em className="italic-accent">a cushion for what&apos;s next.</em>
          </h2>
          <p
            style={{
              color: 'rgba(10,31,26,0.55)',
              fontSize: '1rem',
              lineHeight: 1.8,
              maxWidth: '420px',
              margin: '0 auto 2.5rem',
            }}
          >
            Bring Nest Builder Finance to your workplace and give employees a friendly place to start saving.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/talk-to-sales" className="btn-forest">
              Offer It to Your Team
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
            <Link href="/for-employers" className="btn-outline" style={{ color: 'var(--forest)', borderColor: 'rgba(10,31,26,0.3)' }}>
              For Employers
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
