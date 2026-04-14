import { Metadata } from 'next'
import { Zap } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Cookie Policy - AI Memory',
  description: 'Cookie Policy for AI Memory - Open Source Persistent Memory for AI Applications',
}

export default function CookiesPage() {
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
          <h1 className="text-4xl font-bold text-white mb-8">Cookie Policy</h1>
          
          <div className="bg-blue-600/10 border border-blue-500/20 rounded-2xl p-4 mb-6">
            <p className="text-blue-400 text-sm">
              <strong>Quick Summary:</strong> AI Memory is an open-source library. The library itself does not use cookies. 
              This policy only applies to our website (aibrain.dev). You can manage your preferences at any time.
            </p>
          </div>

          <div className="space-y-6">
            <section className="bg-gray-800/30 border border-gray-700/50 rounded-2xl p-6">
              <h2 className="text-xl font-semibold text-white mb-4">1. What Are Cookies</h2>
              <p className="text-gray-400 leading-relaxed">
                Cookies are small text files placed on your device when you visit a website. They are widely used to 
                make websites work more efficiently and provide information to website owners. Cookies allow the site 
                to remember your preferences and recognize you on subsequent visits.
              </p>
            </section>

            <section className="bg-gray-800/30 border border-gray-700/50 rounded-2xl p-6">
              <h2 className="text-xl font-semibold text-white mb-4">2. How We Use Cookies</h2>
              <p className="text-gray-400 leading-relaxed mb-4">
                <strong>Important:</strong> AI Memory is an open-source library that runs locally on your infrastructure. 
                The library itself does not set or use cookies.
              </p>
              <p className="text-gray-400 leading-relaxed">
                However, our website (aibrain.dev) uses cookies for the following purposes:
              </p>
              <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4 mt-2">
                <li><strong>Essential Cookies:</strong> Required for the website to function properly</li>
                <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website</li>
                <li><strong>Functional Cookies:</strong> Remember your preferences and settings</li>
              </ul>
            </section>

            <section className="bg-gray-800/30 border border-gray-700/50 rounded-2xl p-6">
              <h2 className="text-xl font-semibold text-white mb-4">3. Types of Cookies We Use</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium text-blue-400 mb-2">Essential Cookies</h3>
                  <p className="text-gray-400 text-sm">
                    These cookies are necessary for the website to function. They are usually only set in response to 
                    actions you take, such as setting privacy preferences, logging in, or filling out forms. You can 
                    set your browser to block these cookies, but some parts of the site may not work properly.
                  </p>
                  <div className="mt-2 bg-gray-900/50 rounded-lg p-3">
                    <p className="text-gray-500 text-xs"><strong>Examples:</strong> Session cookies, security tokens</p>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-blue-400 mb-2">Analytics Cookies</h3>
                  <p className="text-gray-400 text-sm">
                    These cookies help us understand how visitors arrive at and navigate our website, which pages are 
                    visited most often, and if there are any errors. This helps us improve website performance. 
                    All data collected is anonymized and cannot be used to identify you personally.
                  </p>
                  <div className="mt-2 bg-gray-900/50 rounded-lg p-3">
                    <p className="text-gray-500 text-xs"><strong>Examples:</strong> Google Analytics (if enabled), page view statistics</p>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-blue-400 mb-2">Functional Cookies</h3>
                  <p className="text-gray-400 text-sm">
                    These cookies allow the website to remember choices you make (such as language preference or region) 
                    and provide enhanced, more personalized features. They may also remember changes you&apos;ve made 
                    to text size, fonts, and other customizable elements.
                  </p>
                  <div className="mt-2 bg-gray-900/50 rounded-lg p-3">
                    <p className="text-gray-500 text-xs"><strong>Examples:</strong> Language preference, theme selection</p>
                  </div>
                </div>
              </div>
            </section>

            <section className="bg-gray-800/30 border border-gray-700/50 rounded-2xl p-6">
              <h2 className="text-xl font-semibold text-white mb-4">4. Third-Party Cookies</h2>
              <p className="text-gray-400 leading-relaxed mb-4">
                Some cookies are placed by third-party services that appear on our pages. We do not control these cookies. 
                Third parties include:
              </p>
              <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4">
                <li><strong>Google Analytics:</strong> Website analytics. View <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Google Privacy Policy</a></li>
                <li><strong>GitHub:</strong> Repository links and embedded content. View <a href="https://github.com/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">GitHub Privacy Policy</a></li>
                <li><strong>npm:</strong> Package information. View <a href="https://www.npmjs.com/policies/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">npm Privacy Policy</a></li>
              </ul>
              <p className="text-gray-400 leading-relaxed mt-4">
                We recommend reviewing the privacy policies of these third parties to understand how they use cookies.
              </p>
            </section>

            <section className="bg-gray-800/30 border border-gray-700/50 rounded-2xl p-6">
              <h2 className="text-xl font-semibold text-white mb-4">5. Cookie Duration</h2>
              <p className="text-gray-400 leading-relaxed mb-4">
                Cookies have different lifespans:
              </p>
              <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4">
                <li><strong>Session Cookies:</strong> Deleted when you close your browser</li>
                <li><strong>Persistent Cookies:</strong> Remain on your device for a set period (up to 12 months)</li>
              </ul>
              <p className="text-gray-400 leading-relaxed mt-4">
                You can view specific cookie durations in your browser cookie settings.
              </p>
            </section>

            <section className="bg-gray-800/30 border border-gray-700/50 rounded-2xl p-6">
              <h2 className="text-xl font-semibold text-white mb-4">6. Managing Your Cookie Preferences</h2>
              <p className="text-gray-400 leading-relaxed mb-4">
                You have the right to decide whether to accept or reject cookies. You can manage your preferences in the following ways:
              </p>
              <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4">
                <li><strong>Browser Settings:</strong> Most web browsers allow you to control cookies through their settings. You can set to block all cookies, allow only essential cookies, or set preferences for certain sites.</li>
                <li><strong>Cookie Consent Banner:</strong> Use our cookie consent tool when first visiting the site</li>
                <li><strong>Third-Party Opt-Out:</strong> Use opt-out tools like <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Google Analytics Opt-out</a></li>
              </ul>
              <p className="text-gray-400 leading-relaxed mt-4">
                <strong>Note:</strong> If you reject essential cookies, some features of our website may not work properly.
              </p>
            </section>

            <section className="bg-gray-800/30 border border-gray-700/50 rounded-2xl p-6">
              <h2 className="text-xl font-semibold text-white mb-4">7. International Compliance</h2>
              <p className="text-gray-400 leading-relaxed mb-4">
                Our cookie practices comply with various international regulations:
              </p>
              <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4">
                <li><strong>GDPR (EU):</strong> Require explicit consent for non-essential cookies</li>
                <li><strong>CCPA (California):</strong> Allow opt-out of cookie-based data sales</li>
                <li><strong>PIPEDA (Canada):</strong> Require meaningful consent for cookies</li>
                <li><strong>LGPD (Brazil):</strong> Require consent for data collection via cookies</li>
              </ul>
            </section>

            <section className="bg-gray-800/30 border border-gray-700/50 rounded-2xl p-6">
              <h2 className="text-xl font-semibold text-white mb-4">8. Updates to This Policy</h2>
              <p className="text-gray-400 leading-relaxed">
                We may update this Cookie Policy from time to time to reflect changes in our practices or for operational, 
                legal, or regulatory reasons. We will post any changes on this page and update the &quot;last updated&quot; date 
                at the bottom. We encourage you to review this policy periodically to stay informed about our cookie practices.
              </p>
            </section>

            <section className="bg-gray-800/30 border border-gray-700/50 rounded-2xl p-6">
              <h2 className="text-xl font-semibold text-white mb-4">9. Contact Us</h2>
              <p className="text-gray-400 leading-relaxed mb-4">
                If you have any questions about our use of cookies or this Cookie Policy, please contact us:
              </p>
              <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4">
                <li><strong>Email:</strong> aibrain@gmail.com</li>
                <li><strong>GitHub:</strong> Open an issue on our repository</li>
              </ul>
            </section>

            <p className="text-gray-500 text-sm mt-8">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>
        </div>
      </main>

      <footer className="bg-gray-900 border-t border-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-500 text-sm">
          © 2024 AI Memory. Open source MIT license.
        </div>
      </footer>
    </div>
  )
}