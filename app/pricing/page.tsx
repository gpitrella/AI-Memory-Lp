import type { Metadata } from 'next'
import { ArrowLeft, Check, Brain, Sparkles, Users, Building, Zap, Shield, Globe, Clock, Rocket, ArrowRight, CheckCircle, Download } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Pricing - AI Memory | Universal AI Memory Layer',
  description: 'Simple, transparent pricing for AI Memory. Start free, scale as you grow. Browser extension and developer SDK plans.',
}

const plans = [
  {
    name: 'Free',
    price: '$0',
    period: 'forever',
    description: 'Perfect for getting started',
    badge: null,
    features: [
      '1 browser extension',
      '500 memories stored',
      '1,000 API calls/month',
      'ChatGPT, Claude, Gemini support',
      'Basic semantic search',
      '7-day memory retention',
      'Local storage only',
    ],
    cta: 'Get Started Free',
    ctaLink: '/extension',
    highlight: false,
    color: 'emerald',
  },
  {
    name: 'Pro',
    price: '$12',
    period: 'per month',
    description: 'For power users who need more',
    badge: 'Most Popular',
    features: [
      'All 4 browsers supported',
      '5,000 memories stored',
      '50,000 API calls/month',
      'Cloud sync across devices',
      'Advanced semantic search',
      '90-day memory retention',
      'Priority email support',
      'API access',
    ],
    cta: 'Start Pro Trial',
    ctaLink: 'https://dashboard.aimemory.lat/register',
    highlight: true,
    color: 'purple',
  },
  {
    name: 'Team',
    price: '$49',
    period: 'per month',
    description: 'For teams that need shared memory',
    badge: null,
    features: [
      'Everything in Pro',
      '25,000 memories stored',
      'Unlimited API calls',
      'Shared team workspaces',
      'Team memory & collaboration',
      '1-year memory retention',
      'Role-based access control',
      'Team analytics dashboard',
    ],
    cta: 'Start Team Trial',
    ctaLink: 'https://dashboard.aimemory.lat/register?plan=team',
    highlight: false,
    color: 'cyan',
  },
  {
    name: 'Enterprise',
    price: '$199',
    period: 'per month',
    description: 'For organizations with custom needs',
    badge: null,
    features: [
      'Everything in Team',
      'Unlimited memories',
      'Unlimited API calls',
      'SSO/SAML authentication',
      'Audit logs (1 year)',
      'Custom integrations',
      'SLA 99.99% uptime',
      'Dedicated support manager',
    ],
    cta: 'Contact Sales',
    ctaLink: 'mailto:sales@aimemory.lat',
    highlight: false,
    color: 'orange',
  },
]

const comparisonFeatures = [
  {
    category: 'Core Features',
    items: [
      { name: 'Browser extensions', free: '1 browser', pro: '4 browsers', team: '4 browsers', enterprise: '4 browsers' },
      { name: 'Memories stored', free: '500', pro: '5,000', team: '25,000', enterprise: 'Unlimited' },
      { name: 'API calls/month', free: '1,000', pro: '50,000', team: 'Unlimited', enterprise: 'Unlimited' },
      { name: 'Cloud sync', free: false, pro: true, team: true, enterprise: true },
      { name: 'API access', free: false, pro: true, team: true, enterprise: true },
      { name: 'Semantic search', free: 'Basic', pro: 'Advanced', team: 'Advanced', enterprise: 'Advanced' },
    ],
  },
  {
    category: 'Memory & Retention',
    items: [
      { name: 'Memory retention', free: '7 days', pro: '90 days', team: '1 year', enterprise: 'Custom' },
      { name: 'Data export', free: true, pro: true, team: true, enterprise: true },
    ],
  },
  {
    category: 'Collaboration',
    items: [
      { name: 'Workspaces', free: '1', pro: '5', team: 'Unlimited', enterprise: 'Unlimited' },
      { name: 'Team members', free: '1', pro: '1', team: '10', enterprise: 'Unlimited' },
      { name: 'Shared team memory', free: false, pro: false, team: true, enterprise: true },
      { name: 'Team analytics', free: false, pro: false, team: true, enterprise: true },
      { name: 'Role-based access', free: false, pro: false, team: true, enterprise: true },
    ],
  },
  {
    category: 'Support',
    items: [
      { name: 'Community support', free: true, pro: true, team: true, enterprise: true },
      { name: 'Email support', free: false, pro: true, team: true, enterprise: true },
      { name: 'Priority support', free: false, pro: false, team: true, enterprise: true },
      { name: 'Dedicated manager', free: false, pro: false, team: false, enterprise: true },
    ],
  },
  {
    category: 'Security & Compliance',
    items: [
      { name: 'SSO/SAML', free: false, pro: false, team: false, enterprise: true },
      { name: 'Audit logs', free: false, pro: false, team: false, enterprise: '1 year' },
      { name: 'SLA uptime', free: false, pro: false, team: false, enterprise: '99.99%' },
    ],
  },
]

const faqs = [
  {
    question: 'Can I switch plans later?',
    answer: 'Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately, and we\'ll prorate any difference.',
  },
  {
    question: 'What happens if I exceed my monthly events?',
    answer: 'We\'ll notify you when you reach 80% of your limit. You can upgrade your plan or wait until the next billing cycle. We never cut off access without warning.',
  },
  {
    question: 'Is there a free trial for paid plans?',
    answer: 'Yes! All paid plans include a 14-day free trial with full access. No credit card required to start.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards (Visa, Mastercard, Amex) and PayPal. Enterprise customers can pay via wire transfer.',
  },
  {
    question: 'Can I cancel anytime?',
    answer: 'Absolutely. Cancel anytime from your dashboard. Your data remains accessible until the end of your billing period.',
  },
  {
    question: 'Do you offer refunds?',
    answer: 'Yes, we offer a 30-day money-back guarantee for all paid plans. No questions asked.',
  },
  {
    question: 'What is considered an "event"?',
    answer: 'An event is any memory capture, retrieval, or search action. Creating a memory = 1 event. Retrieving context = 1 event. Batch operations count each item separately.',
  },
  {
    question: 'Can I use AI Memory for my users/clients?',
    answer: 'Yes! The Team and Enterprise plans include features for building memory-powered applications for your users. Contact us for white-label options.',
  },
]

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-gray-900">
      <header className="bg-gray-900 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center text-gray-400 hover:text-white">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
            <Link href="/" className="flex items-center space-x-2">
              <Brain className="w-8 h-8 text-emerald-400" />
              <span className="text-lg font-bold text-white">AI Memory</span>
            </Link>
            <div className="w-32" />
          </div>
        </div>
      </header>

      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-purple-600/10 border border-purple-500/20 rounded-full px-4 py-2 mb-6">
              <Sparkles className="w-4 h-4 text-purple-400 mr-2" />
              <span className="text-purple-400 text-sm font-medium">Simple, Transparent Pricing</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Start Free.<br />
              <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                Scale When Ready.
              </span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              One memory layer for everyone. Browser-first for users, powerful SDK for developers.
              No hidden fees, no surprises.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-20">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative rounded-2xl p-6 ${
                  plan.highlight
                    ? 'bg-gradient-to-br from-purple-900/50 to-gray-900 border-2 border-purple-500 shadow-lg shadow-purple-500/20'
                    : 'bg-gray-800/50 border border-gray-700/50'
                }`}
              >
                {plan.badge && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-purple-500 text-white text-xs font-medium rounded-full">
                    {plan.badge}
                  </span>
                )}
                
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-white">{plan.name}</h3>
                  <p className="text-sm text-gray-400 mt-1">{plan.description}</p>
                </div>
                
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-gray-400 text-sm ml-1">/{plan.period}</span>
                </div>
                
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start text-sm text-gray-300">
                      <Check className="w-5 h-5 text-emerald-400 mr-2 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link
                  href={plan.ctaLink}
                  className={`block w-full py-3 rounded-lg font-medium text-center transition-colors ${
                    plan.highlight
                      ? 'bg-purple-500 text-white hover:bg-purple-600'
                      : 'bg-gray-700 text-white hover:bg-gray-600'
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>

          <div className="mb-20">
            <h2 className="text-2xl font-bold text-white text-center mb-8">
              Compare Plans
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-700">
                    <th className="py-4 px-6 text-left text-gray-400 font-medium">Feature</th>
                    <th className="py-4 px-6 text-center text-white font-semibold">Free</th>
                    <th className="py-4 px-6 text-center text-purple-400 font-semibold">Pro</th>
                    <th className="py-4 px-6 text-center text-cyan-400 font-semibold">Team</th>
                    <th className="py-4 px-6 text-center text-orange-400 font-semibold">Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonFeatures.map((section, sIndex) => (
                    <>
                      <tr key={`section-${sIndex}`} className="bg-gray-800/50">
                        <td colSpan={5} className="py-3 px-6 text-sm font-semibold text-white">
                          {section.category}
                        </td>
                      </tr>
                      {section.items.map((item, iIndex) => (
                        <tr key={`item-${sIndex}-${iIndex}`} className="border-b border-gray-800">
                          <td className="py-3 px-6 text-gray-400">{item.name}</td>
                          <td className="py-3 px-6 text-center">
                            {typeof item.free === 'boolean' ? (
                              item.free ? (
                                <CheckCircle className="w-5 h-5 text-emerald-400 mx-auto" />
                              ) : (
                                <span className="text-gray-600">—</span>
                              )
                            ) : (
                              <span className="text-white text-sm">{item.free}</span>
                            )}
                          </td>
                          <td className="py-3 px-6 text-center">
                            {typeof item.pro === 'boolean' ? (
                              item.pro ? (
                                <CheckCircle className="w-5 h-5 text-purple-400 mx-auto" />
                              ) : (
                                <span className="text-gray-600">—</span>
                              )
                            ) : (
                              <span className="text-white text-sm">{item.pro}</span>
                            )}
                          </td>
                          <td className="py-3 px-6 text-center">
                            {typeof item.team === 'boolean' ? (
                              item.team ? (
                                <CheckCircle className="w-5 h-5 text-cyan-400 mx-auto" />
                              ) : (
                                <span className="text-gray-600">—</span>
                              )
                            ) : (
                              <span className="text-white text-sm">{item.team}</span>
                            )}
                          </td>
                          <td className="py-3 px-6 text-center">
                            {typeof item.enterprise === 'boolean' ? (
                              item.enterprise ? (
                                <CheckCircle className="w-5 h-5 text-orange-400 mx-auto" />
                              ) : (
                                <span className="text-gray-600">—</span>
                              )
                            ) : (
                              <span className="text-white text-sm">{item.enterprise}</span>
                            )}
                          </td>
                        </tr>
                      ))}
                    </>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-2xl font-bold text-white text-center mb-8">
              Frequently Asked Questions
            </h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50">
                  <h3 className="font-semibold text-white mb-2">{faq.question}</h3>
                  <p className="text-gray-400 text-sm">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center bg-gradient-to-r from-purple-900/30 via-gray-900 to-cyan-900/30 rounded-3xl p-12 border border-purple-500/20">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Never Forget?
            </h2>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto">
              Join thousands of users who never have to repeat themselves to AI again.
              Start free, upgrade when you need more.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/extension"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-xl text-white bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 transition-all shadow-lg"
              >
                <Download className="mr-2 w-5 h-5" />
                Install Free - Browser Extension
              </Link>
              <Link
                href="https://dashboard.aimemory.lat/register"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-xl text-white border-2 border-gray-600 hover:border-white hover:bg-white/10 transition-colors"
              >
                Create Developer Account
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
