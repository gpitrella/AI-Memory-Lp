import { Metadata } from 'next'
import { Zap } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Terms of Service - AI Memory',
  description: 'Terms of Service for AI Memory - Persistent Memory for AI Applications',
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-dark">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-3 group">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-500 flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-green-400 bg-clip-text text-transparent">
                  AI Memory
                </span>
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
          <h1 className="text-4xl font-bold text-white mb-8">Terms of Service</h1>
          
          <div className="space-y-6">
            <section className="bg-gray-800/30 border border-gray-700/50 rounded-2xl p-6">
              <h2 className="text-xl font-semibold text-white mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-400 leading-relaxed">
                Welcome to AI Memory. By accessing or using our website, npm package, or any of our services (&quot;Service&quot;), 
                you agree to be bound by these Terms of Service (&quot;Terms&quot;). If you disagree with any part of these terms, 
                you may not access the Service. These Terms apply to all visitors, users, and others who access or use the Service.
              </p>
            </section>

            <section className="bg-gray-800/30 border border-gray-700/50 rounded-2xl p-6">
              <h2 className="text-xl font-semibold text-white mb-4">2. Use License</h2>
              <p className="text-gray-400 leading-relaxed mb-4">
                AI Memory is open source software released under the MIT License. Permission is granted to use, copy, modify, 
                and distribute the software for any purpose, including commercial purposes, subject to the following conditions:
              </p>
              <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4">
                <li>The above copyright notice and this permission notice shall be included in all copies or substantial portions of the software</li>
                <li>THE SOFTWARE IS PROVIDED &quot;AS IS&quot;, WITHOUT WARRANTY OF ANY KIND</li>
                <li>You may not use the software for any unlawful purpose</li>
                <li>You may not attempt to circumvent any technological measures designed to protect the software</li>
              </ul>
            </section>

            <section className="bg-gray-800/30 border border-gray-700/50 rounded-2xl p-6">
              <h2 className="text-xl font-semibold text-white mb-4">3. Disclaimer of Warranties</h2>
              <p className="text-gray-400 leading-relaxed">
                THE SERVICE IS PROVIDED ON AN &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; BASIS. AI Memory MAKES NO REPRESENTATIONS 
                OR WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, ABOUT THE COMPLETENESS, RELIABILITY, AVAILABILITY, OR ACCURACY 
                OF THE SERVICE. ANY ACTION YOU TAKE BASED ON THE INFORMATION FROM THE SERVICE IS STRICTLY AT YOUR OWN RISK.
              </p>
            </section>

            <section className="bg-gray-800/30 border border-gray-700/50 rounded-2xl p-6">
              <h2 className="text-xl font-semibold text-white mb-4">4. Limitation of Liability</h2>
              <p className="text-gray-400 leading-relaxed">
                IN NO EVENT SHALL AI Memory, ITS CONTRIBUTORS, OR ANY PARTY INVOLVED IN CREATING, PRODUCING, OR DELIVERING 
                THE SERVICE BE LIABLE FOR ANY INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING WITHOUT 
                LIMITATION, LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES RESULTING FROM (I) YOUR ACCESS 
                TO OR USE OF OR INABILITY TO ACCESS OR USE THE SERVICE; (II) ANY CONDUCT OR CONTENT OF ANY THIRD PARTY ON 
                THE SERVICE; (III) ANY CONTENT OBTAINED FROM THE SERVICE; AND (IV) UNAUTHORIZED ACCESS, USE OR ALTERATION 
                OF YOUR TRANSMISSIONS OR CONTENT.
              </p>
            </section>

            <section className="bg-gray-800/30 border border-gray-700/50 rounded-2xl p-6">
              <h2 className="text-xl font-semibold text-white mb-4">5. Intellectual Property</h2>
              <p className="text-gray-400 leading-relaxed mb-4">
                The Service, including but not limited to the software, documentation, website content, and logos, is protected 
                by copyright, trademark, and other intellectual property laws. The MIT License grants you certain rights, but 
                does not transfer any intellectual property rights to you.
              </p>
              <p className="text-gray-400 leading-relaxed">
                You retain ownership of all intellectual property rights in any content you store, process, or transmit using 
                AI Memory. You are solely responsible for ensuring you have the necessary rights to such content.
              </p>
            </section>

            <section className="bg-gray-800/30 border border-gray-700/50 rounded-2xl p-6">
              <h2 className="text-xl font-semibold text-white mb-4">6. User Responsibilities</h2>
              <p className="text-gray-400 leading-relaxed mb-4">
                When using AI Memory, you agree to:
              </p>
              <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4">
                <li>Comply with all applicable laws and regulations, including data protection laws (GDPR, CCPA, etc.)</li>
                <li>Obtain all necessary consents and permissions for processing personal data</li>
                <li>Implement appropriate technical and organizational measures to protect data</li>
                <li>Not use the Service for any harmful, unlawful, or malicious purposes</li>
                <li>Not attempt to gain unauthorized access to any part of the Service</li>
                <li>Not introduce viruses, trojans, or other harmful material</li>
              </ul>
            </section>

            <section className="bg-gray-800/30 border border-gray-700/50 rounded-2xl p-6">
              <h2 className="text-xl font-semibold text-white mb-4">7. Third-Party Services</h2>
              <p className="text-gray-400 leading-relaxed">
                The Service may contain links to third-party websites, services, or resources that are not owned or controlled 
                by AI Memory. We have no control over and assume no responsibility for the content, privacy policies, or practices 
                of any third-party sites or services. You acknowledge and agree that AI Memory shall not be responsible or liable 
                for any damage or loss caused or alleged to be caused by or in connection with use of or reliance on any such 
                content, goods, or services available on or through any such sites or services.
              </p>
            </section>

            <section className="bg-gray-800/30 border border-gray-700/50 rounded-2xl p-6">
              <h2 className="text-xl font-semibold text-white mb-4">8. Termination</h2>
              <p className="text-gray-400 leading-relaxed">
                We may terminate or suspend your access to the Service immediately, without prior notice or liability, for any 
                reason, including without limitation if you breach these Terms. Upon termination, your right to use the Service 
                will immediately cease. All provisions of the Terms which by their nature should survive termination shall survive.
              </p>
            </section>

            <section className="bg-gray-800/30 border border-gray-700/50 rounded-2xl p-6">
              <h2 className="text-xl font-semibold text-white mb-4">9. Governing Law & Dispute Resolution</h2>
              <p className="text-gray-400 leading-relaxed mb-4">
                These Terms shall be governed by and construed in accordance with applicable international laws and principles 
                of international law. Any disputes arising from these Terms shall be resolved through:
              </p>
              <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4">
                <li><strong>Negotiation:</strong> Good-faith discussions between the parties</li>
                <li><strong>Mediation:</strong> Professional mediation if negotiation fails</li>
                <li><strong>Arbitration:</strong> Binding arbitration under ICC rules, with English as the language</li>
              </ul>
            </section>

            <section className="bg-gray-800/30 border border-gray-700/50 rounded-2xl p-6">
              <h2 className="text-xl font-semibold text-white mb-4">10. Changes to Terms</h2>
              <p className="text-gray-400 leading-relaxed">
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. What constitutes 
                a material change will be determined at our sole discretion. By continuing to access or use our Service 
                after those revisions become effective, you agree to be bound by the revised terms. If you do not agree to 
                the new terms, please stop using the Service.
              </p>
            </section>

            <section className="bg-gray-800/30 border border-gray-700/50 rounded-2xl p-6">
              <h2 className="text-xl font-semibold text-white mb-4">11. Severability</h2>
              <p className="text-gray-400 leading-relaxed">
                If any provision of these Terms is held to be invalid, illegal, or unenforceable, the remaining provisions shall 
                continue in full force and effect. The invalid provision shall be modified to the minimum extent necessary 
                to make it valid while preserving the original intent of the parties.
              </p>
            </section>

            <section className="bg-gray-800/30 border border-gray-700/50 rounded-2xl p-6">
              <h2 className="text-xl font-semibold text-white mb-4">12. Contact Information</h2>
              <p className="text-gray-400 leading-relaxed">
                If you have any questions about these Terms of Service, please contact us at: <br />
                <span className="text-blue-400">support@aimemory.dev</span>
              </p>
            </section>

            <section className="bg-green-600/10 border border-green-500/20 rounded-2xl p-6">
              <h2 className="text-xl font-semibold text-white mb-4">13. Service Ownership & Operator</h2>
              
              <div className="space-y-4">
                <p className="text-gray-400 leading-relaxed">
                  <strong className="text-green-400">This Service is operated and owned by:</strong>
                </p>

                <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700/50">
                  <p className="text-white font-semibold mb-2">Owner / Operator</p>
                  <p className="text-gray-300">Gabriel Pitrella</p>
                  <p className="text-gray-400 text-sm mt-2">
                    <strong>Email:</strong> support@aimemory.dev<br />
                    <strong>Website:</strong> https://aimemory.dev
                  </p>
                </div>

                <p className="text-gray-400 leading-relaxed">
                  <strong>By entering into this agreement or by using our paid services, you acknowledge that you are entering 
                  into a binding agreement with Gabriel Pitrella</strong>, who retains all ownership rights to AI Memory and its 
                  associated services, branding, and revenue.
                </p>
              </div>
            </section>

            <section className="bg-blue-600/10 border border-blue-500/20 rounded-2xl p-6">
              <h2 className="text-xl font-semibold text-white mb-4">14. Billing & Payment Terms</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium text-blue-400 mb-2">14.1 Revenue Ownership</h3>
                  <p className="text-gray-400 leading-relaxed">
                    <strong>All subscription fees and revenue belong to Gabriel Pitrella</strong>, the owner and operator of 
                    AI Memory. Payments are processed through Polar.sh as our authorized payment processor, but all revenue 
                    is retained by the owner.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-blue-400 mb-2">14.2 Payment Obligations</h3>
                  <p className="text-gray-400 leading-relaxed mb-2">
                    When you subscribe to a paid plan, you agree to:
                  </p>
                  <ul className="list-disc list-inside text-gray-400 space-y-1 ml-4">
                    <li>Pay all fees as specified at the time of purchase</li>
                    <li>All fees are exclusive of applicable taxes unless stated otherwise</li>
                    <li>You are responsible for paying all applicable taxes (VAT, sales tax, etc.)</li>
                    <li>Prices are subject to change with 30 days prior notice</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-blue-400 mb-2">14.3 Subscription Terms</h3>
                  <p className="text-gray-400 leading-relaxed mb-2">
                    By subscribing, you authorize:
                  </p>
                  <ul className="list-disc list-inside text-gray-400 space-y-1 ml-4">
                    <li>Recurring billing on your selected payment method (monthly or annually)</li>
                    <li>Subscriptions automatically renew unless cancelled before the billing date</li>
                    <li>We may suspend or terminate accounts for non-payment</li>
                    <li>No refunds for partial billing periods (unless required by law or our refund policy)</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-blue-400 mb-2">14.4 Refund Policy</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Refunds are provided within 30 days of purchase under our money-back guarantee. After 30 days, 
                    no refunds are provided for partial billing periods. Contact <span className="text-blue-400">support@aimemory.dev</span> for refund requests.
                  </p>
                </div>
              </div>
            </section>

            <section className="bg-purple-600/10 border border-purple-500/20 rounded-2xl p-6">
              <h2 className="text-xl font-semibold text-white mb-4">15. Intellectual Property</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium text-purple-400 mb-2">15.1 Our Intellectual Property</h3>
                  <p className="text-gray-400 leading-relaxed mb-2">
                    <strong>Gabriel Pitrella retains all intellectual property rights</strong> to AI Memory, including but not limited to:
                  </p>
                  <ul className="list-disc list-inside text-gray-400 space-y-1 ml-4">
                    <li>All software code, APIs, and proprietary features</li>
                    <li>Trademarks, logos, and branding ("AI Memory", the brain logo, etc.)</li>
                    <li>Website content, design, and documentation</li>
                    <li>Marketing materials and copy</li>
                    <li>Database content and organization</li>
                    <li>All revenue and income derived from the service</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-purple-400 mb-2">15.2 Open Source License Limitations</h3>
                  <p className="text-gray-400 leading-relaxed">
                    The <strong>MIT License</strong> applies only to the core open-source library portions of AI Memory. 
                    <strong>This license does NOT include or transfer rights to:</strong>
                  </p>
                  <ul className="list-disc list-inside text-gray-400 space-y-1 ml-4 mt-2">
                    <li>Our trademarks and branding</li>
                    <li>Proprietary features and premium functionality</li>
                    <li>Cloud services and hosted API</li>
                    <li>Browser extensions</li>
                    <li>Documentation and marketing materials</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-purple-400 mb-2">15.3 Trademarks</h3>
                  <p className="text-gray-400 leading-relaxed">
                    "AI Memory", the brain icon/logo, "aimemory.dev", and all related marks are trademarks of 
                    <strong> Gabriel Pitrella</strong>. You may not use these trademarks without prior written permission.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-purple-400 mb-2">15.4 User Content</h3>
                  <p className="text-gray-400 leading-relaxed">
                    <strong>You retain full ownership</strong> of all content, data, and information you store, process, or 
                    transmit using AI Memory. By using our service, you grant us a limited license to process your content 
                    as necessary to provide the service. You are solely responsible for ensuring you have all necessary 
                    rights to the content you store.
                  </p>
                </div>
              </div>
            </section>

            <section className="bg-red-600/10 border border-red-500/20 rounded-2xl p-6">
              <h2 className="text-xl font-semibold text-white mb-4">16. Indemnification</h2>
              <p className="text-gray-400 leading-relaxed mb-4">
                You agree to indemnify, defend, and hold harmless <strong>Gabriel Pitrella</strong> and AI Memory from any 
                claims, damages, losses, or expenses arising from:
              </p>
              <ul className="list-disc list-inside text-gray-400 space-y-1 ml-4">
                <li>Your violation of these Terms of Service</li>
                <li>Your misuse of the Service</li>
                <li>Any content or data you store using AI Memory</li>
                <li>Any illegal or unauthorized use of your account</li>
                <li>Your violation of any third-party rights</li>
              </ul>
            </section>

            <section className="bg-amber-600/10 border border-amber-500/20 rounded-2xl p-6">
              <h2 className="text-xl font-semibold text-white mb-4">17. Governing Law & Jurisdiction</h2>
              <p className="text-gray-400 leading-relaxed mb-4">
                These Terms shall be governed by and construed in accordance with applicable laws. Given that the owner 
                (<strong>Gabriel Pitrella</strong>) operates from Argentina, any disputes shall be subject to:
              </p>
              <ul className="list-disc list-inside text-gray-400 space-y-1 ml-4">
                <li><strong>Primary:</strong> Laws of Argentina (Argentine law)</li>
                <li><strong>Dispute Resolution:</strong> Good-faith negotiation first</li>
                <li><strong>Secondary:</strong> Arbitration under Argentine Arbitration Chamber rules</li>
                <li><strong>Language:</strong> English, with Spanish as alternative</li>
              </ul>
              <p className="text-gray-400 leading-relaxed mt-4">
                For consumers in the EU, consumer protection laws of your country of residence may also apply.
              </p>
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