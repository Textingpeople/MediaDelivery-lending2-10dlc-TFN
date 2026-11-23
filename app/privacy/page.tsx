'use client';

import Link from 'next/link';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

const today = 'November 23, 2026';

export default function PrivacyPage() {
  return (
    <div style={{ background: 'var(--ivory)', color: 'var(--charcoal)' }}>
      <Nav />

      {/* ── HERO ── */}
      <section className="pt-40 pb-20 px-6" style={{ background: 'var(--forest)' }}>
        <div className="max-w-4xl mx-auto">
          <p className="font-mono-label mb-6" style={{ color: 'rgba(241,248,244,0.45)', fontSize: '0.65rem' }}>
            Legal
          </p>
          <h1 className="headline-xl text-white mb-4" style={{ maxWidth: '560px' }}>
            Privacy Policy
          </h1>
          <p style={{ color: 'rgba(241,248,244,0.5)', fontSize: '0.85rem' }}>
            Last Updated: {today}
          </p>
        </div>
      </section>

      {/* ── CONTENT ── */}
      <section className="py-20 px-6" style={{ background: 'var(--ivory)' }}>
        <div className="max-w-3xl mx-auto">
          <div className="space-y-10" style={{ fontSize: '0.92rem', lineHeight: 1.8, color: 'rgba(10,31,26,0.75)' }}>

            {/* Intro */}
            <div>
              <p>
                Media Delivery Solutions LLC, a Wyoming limited liability company, d/b/a Nest Builder Finance (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our employer-offered savings program and website at <strong>nestbuilderfinance.com</strong>. By using our service, you agree to the collection and use of information in accordance with this policy.
              </p>
            </div>

            {/* 1. Information We Collect */}
            <div>
              <h2 className="font-serif mb-4" style={{ fontSize: '1.3rem', fontWeight: 600, color: 'var(--forest)' }}>
                1. Information We Collect
              </h2>
              <p className="mb-3">When you create an account or use our service, we may collect:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Full name and work email address</li>
                <li>Employer ID (provided by your employer or HR team)</li>
                <li>Mobile phone number (if you opt in to SMS notifications)</li>
                <li>Savings goals, pay schedule, reminder preferences, and challenge participation you set within the program</li>
                <li>Questions and conversations you have with Nest Coach</li>
                <li>SMS opt-in consent preferences</li>
                <li>Usage data and device information (browser type, IP address, pages visited)</li>
              </ul>
            </div>

            {/* 2. SMS Messaging */}
            <div>
              <h2 className="font-serif mb-4" style={{ fontSize: '1.3rem', fontWeight: 600, color: 'var(--forest)' }}>
                2. SMS Messaging
              </h2>
              <p className="mb-3">
                Nest Builder Finance uses SMS messaging to deliver savings alerts and account notifications to employees who opt in. The following terms apply to our SMS program:
              </p>

              <div className="space-y-4">
                <div>
                  <p className="font-mono-label mb-2" style={{ color: 'var(--olive)', fontSize: '0.6rem' }}>Program Description</p>
                  <p>
                    Nest Builder Finance sends two types of SMS messages:
                  </p>
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li><strong>Transactional Account Notifications:</strong> Savings goal progress, emergency fund milestones, payday reminders, and account updates.</li>
                    <li><strong>Promotional Marketing Messages:</strong> New savings program features and monthly savings challenges.</li>
                  </ul>
                </div>

                <div>
                  <p className="font-mono-label mb-2" style={{ color: 'var(--olive)', fontSize: '0.6rem' }}>Sample Messages</p>
                  <p style={{ fontWeight: 600, color: 'var(--forest)', marginBottom: '0.5rem' }}>Account Notifications</p>
                  <div className="space-y-1 mb-4">
                    <p>1. Nest Builder Finance: You&apos;re signed up for savings alerts from your employer&apos;s savings program. Msg frequency varies. Msg & data rates may apply. Reply HELP for help, STOP to opt out.</p>
                    <p>2. Nest Builder Finance: You&apos;re halfway to your emergency fund goal. See your progress at nestbuilderfinance.com. Reply STOP to opt out.</p>
                    <p>3. Nest Builder Finance: Payday is Friday. Check your savings goals at nestbuilderfinance.com. Reply STOP to opt out.</p>
                  </div>
                  <p style={{ fontWeight: 600, color: 'var(--forest)', marginBottom: '0.5rem' }}>Promotional</p>
                  <div className="space-y-1">
                    <p>4. Nest Builder Finance: New in your savings program: goal templates for holidays and car repairs. Try them at nestbuilderfinance.com. Reply STOP to opt out.</p>
                    <p>5. Nest Builder Finance: This month&apos;s savings challenge: the no-spend weekend. Join at nestbuilderfinance.com. Reply STOP to opt out.</p>
                  </div>
                </div>

                <div>
                  <p className="font-mono-label mb-2" style={{ color: 'var(--olive)', fontSize: '0.6rem' }}>Opt-In</p>
                  <p>
                    You may opt in to receive SMS messages during the employee onboarding process by checking the applicable consent boxes. Opting in is entirely optional and is not required to use the Nest Builder Finance savings program. Consent is not a condition of purchasing any products or services.
                  </p>
                </div>

                <div>
                  <p className="font-mono-label mb-2" style={{ color: 'var(--olive)', fontSize: '0.6rem' }}>Message Frequency</p>
                  <p>
                    Message frequency varies based on your savings goals, pay schedule, and account settings. You may receive up to several messages per week depending on your preferences and milestones.
                  </p>
                </div>

                <div>
                  <p className="font-mono-label mb-2" style={{ color: 'var(--olive)', fontSize: '0.6rem' }}>Opt-Out</p>
                  <p>
                    You may opt out of SMS messages at any time by replying <strong>STOP</strong> to any message. You will receive a confirmation and no further messages will be sent. To re-enroll, reply <strong>START</strong>.
                  </p>
                </div>

                <div>
                  <p className="font-mono-label mb-2" style={{ color: 'var(--olive)', fontSize: '0.6rem' }}>Help</p>
                  <p>
                    Reply <strong>HELP</strong> to any message for assistance, or contact us at <a href="mailto:support@nestbuilderfinance.com" style={{ color: 'var(--olive)', textDecoration: 'underline' }}>support@nestbuilderfinance.com</a>.
                  </p>
                </div>

                <div>
                  <p className="font-mono-label mb-2" style={{ color: 'var(--olive)', fontSize: '0.6rem' }}>Rates</p>
                  <p>
                    Message and data rates may apply. Check with your mobile carrier for details.
                  </p>
                </div>

                <div
                  className="rounded-xl p-4"
                  style={{ background: 'rgba(26,122,82,0.06)', border: '1px solid rgba(26,122,82,0.15)' }}
                >
                  <p style={{ fontWeight: 600, color: 'var(--forest)', marginBottom: '0.5rem' }}>
                    No Mobile Data Sharing
                  </p>
                  <p>
                    <strong>No mobile information will be shared with third parties or affiliates for marketing or promotional purposes. Text messaging originator opt-in data and consent will not be shared with any third parties.</strong> Your mobile number is used solely to deliver the SMS messages you have opted into through Nest Builder Finance.
                  </p>
                </div>
              </div>
            </div>

            {/* 3. How We Use Your Information */}
            <div>
              <h2 className="font-serif mb-4" style={{ fontSize: '1.3rem', fontWeight: 600, color: 'var(--forest)' }}>
                3. How We Use Your Information
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>To create and manage your Nest Builder Finance account</li>
                <li>To connect your account to your employer&apos;s savings program</li>
                <li>To provide savings tips, goal tools, and reminders through Nest Coach</li>
                <li>To send SMS messages you have opted into (savings alerts, account notifications, or promotional messages)</li>
                <li>To track your savings goals and progress milestones</li>
                <li>To provide aggregate participation information to your employer (never individual balances)</li>
                <li>To improve our program and Nest Coach</li>
                <li>To comply with legal obligations</li>
              </ul>
            </div>

            {/* 4. Employer Data Sharing */}
            <div>
              <h2 className="font-serif mb-4" style={{ fontSize: '1.3rem', fontWeight: 600, color: 'var(--forest)' }}>
                4. Employer Data Sharing
              </h2>
              <p className="mb-3">
                Nest Builder Finance is designed with employee privacy in mind. Your employer will never see your individual balances, savings details, or conversations with Nest Coach.
              </p>
              <p>
                Employers receive only <strong>aggregate participation information</strong> — such as how many employees have joined and how many goals or challenges have been started. This information cannot be traced back to any individual employee.
              </p>
            </div>

            {/* 5. Data Security */}
            <div>
              <h2 className="font-serif mb-4" style={{ fontSize: '1.3rem', fontWeight: 600, color: 'var(--forest)' }}>
                5. Data Security
              </h2>
              <p>
                We implement industry-standard security measures to protect your information, including encryption in transit and at rest, access controls, and regular security reviews. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
              </p>
            </div>

            {/* 6. Your Rights */}
            <div>
              <h2 className="font-serif mb-4" style={{ fontSize: '1.3rem', fontWeight: 600, color: 'var(--forest)' }}>
                6. Your Rights
              </h2>
              <p className="mb-3">You have the right to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Access the personal information we hold about you</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your account and associated data</li>
                <li>Opt out of SMS communications at any time by replying STOP</li>
                <li>Change or remove savings goals and reminders at any time</li>
              </ul>
              <p className="mt-3">
                To exercise any of these rights, contact us at <a href="mailto:support@nestbuilderfinance.com" style={{ color: 'var(--olive)', textDecoration: 'underline' }}>support@nestbuilderfinance.com</a>.
              </p>
            </div>

            {/* 7. Contact */}
            <div>
              <h2 className="font-serif mb-4" style={{ fontSize: '1.3rem', fontWeight: 600, color: 'var(--forest)' }}>
                7. Contact Us
              </h2>
              <p>
                If you have questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="mt-3 space-y-1">
                <p><strong>Media Delivery Solutions LLC</strong>, a Wyoming limited liability company, d/b/a Nest Builder Finance</p>
                <p>Address: 9 Johnston Dr, Bloomsbury, NJ 08804, United States</p>
                <p>Phone: <a href="tel:+19083998307" style={{ color: 'var(--olive)', textDecoration: 'underline' }}>(908) 399-8307</a></p>
                <p>Email: <a href="mailto:support@nestbuilderfinance.com" style={{ color: 'var(--olive)', textDecoration: 'underline' }}>support@nestbuilderfinance.com</a></p>
                <p>Website: <a href="https://nestbuilderfinance.com" style={{ color: 'var(--olive)', textDecoration: 'underline' }}>nestbuilderfinance.com</a></p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
