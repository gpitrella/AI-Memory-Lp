import { Metadata } from 'next'
import { Brain } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy - AI Memory',
  description: 'Privacy Policy for AI Memory - Open Source Persistent Memory for AI Applications',
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-dark">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-2">
              <Brain className="w-8 h-8 text-emerald-400" />
              <span className="text-lg font-bold text-white">AI Memory</span>
            </Link>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <Link href="/" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Home</Link>
              <Link href="/#features" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Features</Link>
              <Link href="/#pricing" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Pricing</Link>
              <Link href="/docs/getting-started" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Docs</Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white mb-8">Privacy Policy</h1>
          
          <div className="space-y-6">
            <div className="bg-blue-600/10 border border-blue-500/20 rounded-2xl p-4 mb-6">
              <p className="text-blue-400 text-sm">
                <strong>International Notice:</strong> This Privacy Policy complies with GDPR (EU), CCPA (California), LGPD (Brazil), 
                and other international data protection regulations. We are committed to protecting your privacy globally.
              </p>
            </div>

            <section className="bg-gray-800/30 border border-gray-700/50 rounded-2xl p-6">
              <h2 className="text-xl font-semibold text-white mb-4">1. Overview</h2>
              <p className="text-gray-400 leading-relaxed">
                AI Memory is an open-source library that you install and run locally or on your own infrastructure. 
                <strong> We do not collect, store, or process any personal data through the library itself.</strong> 
                All data processed by AI Memory remains under your control on your servers or infrastructure.
              </p>
            </section>

            <section className="bg-gray-800/30 border border-gray-700/50 rounded-2xl p-6">
              <h2 className="text-xl font-semibold text-white mb-4">2. Information We Collect</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium text-blue-400 mb-2">2.1 Information You Provide</h3>
                  <p className="text-gray-400 leading-relaxed">
                    We collect information you voluntarily provide when contacting us via email, 
                    submitting issues on GitHub, or participating in community discussions. This may include:
                  </p>
                  <ul className="list-disc list-inside text-gray-400 space-y-1 ml-4 mt-2">
                    <li>Email address (when you contact us)</li>
                    <li>GitHub username (if you submit issues)</li>
                    <li>Any other information you choose to provide</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-blue-400 mb-2">2.2 Automatically Collected Information</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Our website (aibrain.dev) may collect limited technical information:
                  </p>
                  <ul className="list-disc list-inside text-gray-400 space-y-1 ml-4 mt-2">
                    <li>IP address (anonymized)</li>
                    <li>Browser type and version</li>
                    <li>Pages visited and visit duration</li>
                    <li>Referral source</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="bg-gray-800/30 border border-gray-700/50 rounded-2xl p-6">
              <h2 className="text-xl font-semibold text-white mb-4">3. How We Use Your Information</h2>
              <p className="text-gray-400 leading-relaxed mb-4">
                Any information we collect is used for the following purposes:
              </p>
              <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4">
                <li><strong>Service Improvement:</strong> To improve and optimize AI Memory functionality</li>
                <li><strong>Analytics:</strong> To understand how users interact with our website</li>
                <li><strong>Support:</strong> To provide technical support when requested</li>
                <li><strong>Communication:</strong> To respond to your inquiries and questions</li>
                <li><strong>Security:</strong> To detect and prevent fraudulent or illegal activities</li>
              </ul>
            </section>

            <section className="bg-gray-800/30 border border-gray-700/50 rounded-2xl p-6">
              <h2 className="text-xl font-semibold text-white mb-4">4. Data Protection & GDPR Compliance</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium text-blue-400 mb-2">4.1 Legal Basis for Processing (GDPR)</h3>
                  <p className="text-gray-400 leading-relaxed">
                    For users in the European Economic Area (EEA), we process personal data based on:
                  </p>
                  <ul className="list-disc list-inside text-gray-400 space-y-1 ml-4 mt-2">
                    <li><strong>Consent:</strong> When you contact us or subscribe to updates</li>
                    <li><strong>Legitimate Interest:</strong> For analytics and service improvement</li>
                    <li><strong>Legal Obligation:</strong> When required by applicable law</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-blue-400 mb-2">4.2 Your Rights Under GDPR</h3>
                  <p className="text-gray-400 leading-relaxed mb-2">
                    If you are located in the EEA, you have the following rights:
                  </p>
                  <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4">
                    <li><strong>Right to Access:</strong> Request a copy of your personal data</li>
                    <li><strong>Right to Rectification:</strong> Request correction of inaccurate data</li>
                    <li><strong>Right to Erasure:</strong> Request deletion of your personal data (&quot;Right to be forgotten&quot;)</li>
                    <li><strong>Right to Restriction:</strong> Request limitation of processing</li>
                    <li><strong>Right to Data Portability:</strong> Request export of your data in machine-readable format</li>
                    <li><strong>Right to Object:</strong> Object to processing based on legitimate interest</li>
                    <li><strong>Right to Withdraw Consent:</strong> Withdraw consent at any time</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="bg-gray-800/30 border border-gray-700/50 rounded-2xl p-6">
              <h2 className="text-xl font-semibold text-white mb-4">5. CCPA Compliance (California)</h2>
              <p className="text-gray-400 leading-relaxed mb-4">
                If you are a California resident, you have additional rights under the California Consumer Privacy Act (CCPA):
              </p>
              <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4">
                <li><strong>Right to Know:</strong> Request information about what personal data we collect</li>
                <li><strong>Right to Delete:</strong> Request deletion of your personal data</li>
                <li><strong>Right to Opt-Out:</strong> Opt-out of the sale of your personal data</li>
                <li><strong>Right to Non-Discrimination:</strong> Not be discriminated against for exercising these rights</li>
              </ul>
              <p className="text-gray-400 leading-relaxed mt-4">
                <strong>We do not sell your personal data.</strong> We do not and will not sell your personal information to anyone.
              </p>
            </section>

            <section className="bg-gray-800/30 border border-gray-700/50 rounded-2xl p-6">
              <h2 className="text-xl font-semibold text-white mb-4">6. Data Security</h2>
              <p className="text-gray-400 leading-relaxed mb-4">
                We implement appropriate technical and organizational measures to protect your data:
              </p>
              <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4">
                <li>Encryption in transit (HTTPS/TLS)</li>
                <li>Regular security audits and assessments</li>
                <li>Access controls and authentication</li>
                <li>Secure data storage and processing</li>
                <li>Incident response procedures</li>
              </ul>
            </section>

            <section className="bg-gray-800/30 border border-gray-700/50 rounded-2xl p-6">
              <h2 className="text-xl font-semibold text-white mb-4">7. Third-Party Services</h2>
              <p className="text-gray-400 leading-relaxed mb-4">
                We may use third-party services to support our operations. These providers are carefully selected and comply 
                with applicable data protection laws:
              </p>
              <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4">
                <li><strong>Hosting:</strong> Vercel or similar providers for website hosting</li>
                <li><strong>Analytics:</strong> Optional analytics tools (you can opt-out)</li>
                <li><strong>Email:</strong> Email service providers for communications</li>
              </ul>
              <p className="text-gray-400 leading-relaxed mt-4">
                AI Memory library integrations (vector databases, LLM providers) are configured by you and operate under 
                your own privacy terms. Please review their respective privacy policies.
              </p>
            </section>

            <section className="bg-gray-800/30 border border-gray-700/50 rounded-2xl p-6">
              <h2 className="text-xl font-semibold text-white mb-4">8. Data Retention</h2>
              <p className="text-gray-400 leading-relaxed mb-4">
                We retain personal data only for as long as necessary:
              </p>
              <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4">
                <li><strong>Contact Inquiries:</strong> 2 years after last contact</li>
                <li><strong>Technical Data:</strong> 12 months from collection</li>
                <li><strong>Legal Requirements:</strong> As long as required by law</li>
              </ul>
              <p className="text-gray-400 leading-relaxed mt-4">
                <strong>Important:</strong> Data processed by AI Memory library remains on your infrastructure. 
                We have no access to or control over this data. You are responsible for managing retention and deletion.
              </p>
            </section>

            <section className="bg-gray-800/30 border border-gray-700/50 rounded-2xl p-6">
              <h2 className="text-xl font-semibold text-white mb-4">9. International Data Transfers</h2>
              <p className="text-gray-400 leading-relaxed">
                Your information may be transferred to and processed in countries other than your country of residence. 
                These countries may have different data protection laws. We ensure appropriate safeguards are in place 
                for international transfers, including Standard Contractual Clauses (SCCs) and adequacy decisions where applicable.
              </p>
            </section>

            <section className="bg-gray-800/30 border border-gray-700/50 rounded-2xl p-6">
              <h2 className="text-xl font-semibold text-white mb-4">10. Children&apos;s Privacy</h2>
              <p className="text-gray-400 leading-relaxed">
                Our Service is not intended for children under 13 (or 16 in certain jurisdictions). We do not knowingly 
                collect personal information from children. If you become aware that a child has provided us with personal 
                data, please contact us. We will take steps to delete such information.
              </p>
            </section>

            <section className="bg-gray-800/30 border border-gray-700/50 rounded-2xl p-6">
              <h2 className="text-xl font-semibold text-white mb-4">11. Changes to This Policy</h2>
              <p className="text-gray-400 leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any material changes by posting 
                the new policy on this page and updating the &quot;last updated&quot; date. We encourage you to review this 
                policy periodically for any changes.
              </p>
            </section>

            <section className="bg-gray-800/30 border border-gray-700/50 rounded-2xl p-6">
              <h2 className="text-xl font-semibold text-white mb-4">12. Contact Us</h2>
              <p className="text-gray-400 leading-relaxed mb-4">
                If you have any questions, concerns, or requests regarding this Privacy Policy or your personal data, 
                please contact us:
              </p>
              <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4">
                <li><strong>Email:</strong> support@aimemory.lat</li>
                <li><strong>GitHub:</strong> Open an issue on our repository</li>
              </ul>
              <p className="text-gray-400 leading-relaxed mt-4">
                We will respond to your request within 30 days as required by applicable law.
              </p>
            </section>

            <section className="bg-green-600/10 border border-green-500/20 rounded-2xl p-6">
              <h2 className="text-xl font-semibold text-white mb-4">13. Billing & Payment Services</h2>
              <p className="text-gray-400 leading-relaxed mb-4">
                <strong className="text-green-400">This section applies when you subscribe to paid plans.</strong>
              </p>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium text-green-400 mb-2">13.1 Payment Processing</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Payments are processed by <strong>Polar.sh</strong>, our authorized payment processor. All subscription fees 
                    are collected and processed through Polar.sh on behalf of <strong>AI Memory / Gabriel Pitrella</strong>{' '}
                    (&quot;we,&quot; &quot;us,&quot; or &quot;owner&quot;).
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-green-400 mb-2">13.2 Revenue Ownership</h3>
                  <p className="text-gray-400 leading-relaxed">
                    <strong>All subscription fees belong to and are retained by AI Memory / Gabriel Pitrella.</strong> We (Gabriel Pitrella) 
                    are the sole owner and recipient of all revenue generated from paid subscriptions.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-green-400 mb-2">13.3 Billing Information We Collect</h3>
                  <p className="text-gray-400 leading-relaxed mb-2">
                    When you subscribe to a paid plan, we may collect and process:
                  </p>
                  <ul className="list-disc list-inside text-gray-400 space-y-1 ml-4">
                    <li>Name and email address (for account creation and receipts)</li>
                    <li>Payment method details (processed and stored by Polar.sh, not by us directly)</li>
                    <li>Billing address (if required for tax compliance)</li>
                    <li>Transaction history and subscription status</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-green-400 mb-2">13.4 Data Sharing with Payment Processors</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Polar.sh acts as our authorized payment processor and data controller for payment-related information. 
                    Please review <a href="https://polar.sh/privacy" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">Polar.sh&apos;s Privacy Policy</a> for how they handle your payment data.
                  </p>
                </div>
              </div>
            </section>

            <section className="bg-blue-600/10 border border-blue-500/20 rounded-2xl p-6">
              <h2 className="text-xl font-semibold text-white mb-4">14. Refund Policy</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium text-blue-400 mb-2">14.1 Money-Back Guarantee</h3>
                  <p className="text-gray-400 leading-relaxed">
                    We offer a <strong>30-day money-back guarantee</strong> for all paid subscription plans. If you are not 
                    satisfied with our service, you may request a full refund within 30 days of your initial purchase.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-blue-400 mb-2">14.2 How to Request a Refund</h3>
                  <p className="text-gray-400 leading-relaxed mb-2">
                    To request a refund, contact us at:
                  </p>
                  <ul className="list-disc list-inside text-gray-400 space-y-1 ml-4">
                    <li><strong>Email:</strong> support@aimemory.lat</li>
                    <li><strong>Subject Line:</strong> Refund Request</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-blue-400 mb-2">14.3 Refund Processing</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Approved refunds are typically processed within <strong>5-10 business days</strong>. The refund will be 
                    credited to your original payment method through Polar.sh.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-blue-400 mb-2">14.4 Subscription Cancellation</h3>
                  <p className="text-gray-400 leading-relaxed">
                    You may cancel your subscription at any time. Cancellations take effect at the end of your current 
                    billing period. <strong>No partial-month refunds are provided</strong> unless required by applicable law.
                  </p>
                </div>
              </div>
            </section>

            <section className="bg-purple-600/10 border border-purple-500/20 rounded-2xl p-6">
              <h2 className="text-xl font-semibold text-white mb-4">15. Data Controller & Owner</h2>
              
              <div className="space-y-4">
                <p className="text-gray-400 leading-relaxed">
                  For the purposes of data protection laws (GDPR, CCPA, etc.), the data controller and service operator is:
                </p>
                
                <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700/50">
                  <p className="text-white font-semibold mb-2">Owner / Data Controller</p>
                  <p className="text-gray-300">Gabriel Pitrella</p>
                  <p className="text-gray-400 text-sm mt-2">
                    <strong>Email:</strong> support@aimemory.lat<br />
                    <strong>Website:</strong> https://aimemory.lat
                  </p>
                </div>

                <p className="text-gray-400 leading-relaxed">
                  Gabriel Pitrella retains full ownership and control over all personal data collected through AI Memory services, 
                  including subscription information, usage data, and any communications.
                </p>
              </div>
            </section>

            <p className="text-gray-500 text-sm mt-8">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>
        </div>
      </main>

      <footer className="bg-gray-900 border-t border-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-500 text-sm">
          © 2024-2026 AI Memory. All rights reserved. Owned by Gabriel Pitrella.
        </div>
      </footer>
    </div>
  )
}