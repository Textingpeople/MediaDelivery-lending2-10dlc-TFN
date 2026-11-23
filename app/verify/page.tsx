'use client';

import { Suspense, useState } from 'react';
import { useSearchParams } from 'next/navigation';

function Spinner({ color = 'var(--forest)' }: { color?: string }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      className="animate-spin"
    >
      <circle
        cx="12"
        cy="12"
        r="10"
        stroke={color}
        strokeWidth="3"
        strokeOpacity="0.2"
      />
      <path
        d="M22 12a10 10 0 0 0-10-10"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

function PageSpinner() {
  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{ background: 'var(--ivory)' }}
    >
      <Spinner />
    </div>
  );
}

function VerifyContent() {
  const searchParams = useSearchParams();
  const phone = searchParams.get('phone');
  const destination = searchParams.get('destination');

  const [phoneValue, setPhoneValue] = useState(phone ?? '');
  const [isFocused, setIsFocused] = useState(false);
  const [isRedirecting, setIsRedirecting] = useState(false);

  if (!phone) {
    return (
      <div
        className="min-h-screen flex items-center justify-center px-6"
        style={{ background: 'var(--ivory)' }}
      >
        <p style={{ color: 'var(--forest)', fontFamily: 'Inter, sans-serif', fontSize: '0.95rem' }}>
          Invalid verification link. Phone number is missing.
        </p>
      </div>
    );
  }

  const handleVerify = () => {
    if (!destination) return;
    setIsRedirecting(true);

    const params = new URLSearchParams(searchParams.toString());
    params.delete('phone');

    const query = params.toString();
    const url = query ? `${destination}?${query}` : destination;

    window.location.href = url;
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center px-6"
      style={{ background: 'var(--ivory)' }}
    >
      <div
        className="w-full max-w-sm rounded-2xl overflow-hidden"
        style={{ background: 'white', boxShadow: '0 20px 60px rgba(15,46,38,0.12)' }}
      >
        <div style={{ height: '6px', background: 'var(--olive)' }} />

        <div className="px-8 py-10 flex flex-col items-center text-center">
          <div
            className="flex items-center justify-center rounded-full mb-6"
            style={{ width: '56px', height: '56px', background: 'var(--forest)' }}
          >
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 6L9 17l-5-5" />
            </svg>
          </div>

          <h1
            style={{
              fontFamily: 'Playfair Display, Georgia, serif',
              fontWeight: 600,
              fontSize: '1.5rem',
              color: 'var(--forest)',
              letterSpacing: '-0.01em',
            }}
            className="mb-6"
          >
            Validate your number.
          </h1>

          {!destination ? (
            <p style={{ color: 'var(--forest)', fontFamily: 'Inter, sans-serif', fontSize: '0.9rem' }}>
              Invalid verification link. Destination is missing.
            </p>
          ) : isRedirecting ? (
            <div className="flex flex-col items-center gap-3 py-2">
              <Spinner />
              <p style={{ color: 'var(--forest)', fontFamily: 'Inter, sans-serif', fontSize: '0.9rem' }}>
                Redirecting...
              </p>
            </div>
          ) : (
            <>
              <input
                type="tel"
                value={phoneValue}
                onChange={e => setPhoneValue(e.target.value)}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                className="w-full px-4 py-3 rounded-xl text-sm mb-4"
                style={{
                  background: 'rgba(10,31,26,0.04)',
                  border: `1px solid ${isFocused ? 'var(--olive)' : 'rgba(10,31,26,0.12)'}`,
                  color: 'var(--charcoal)',
                  outline: 'none',
                  fontFamily: 'Inter, sans-serif',
                  textAlign: 'center',
                  transition: 'border-color 0.2s',
                }}
              />

              <button
                type="button"
                onClick={handleVerify}
                className="w-full py-3 rounded-xl text-sm font-semibold"
                style={{
                  background: 'var(--forest)',
                  color: 'white',
                  fontFamily: 'Inter, sans-serif',
                  transition: 'background 0.2s',
                }}
                onMouseEnter={e => (e.currentTarget.style.background = 'var(--olive)')}
                onMouseLeave={e => (e.currentTarget.style.background = 'var(--forest)')}
              >
                Verify Number
              </button>
            </>
          )}

          <p
            className="font-mono-label mt-8"
            style={{ color: '#6B7280', fontSize: '0.62rem' }}
          >
            Secured by Nest Builder Finance
          </p>
        </div>
      </div>
    </div>
  );
}

export default function VerifyPage() {
  return (
    <Suspense fallback={<PageSpinner />}>
      <VerifyContent />
    </Suspense>
  );
}
