import type { Metadata } from 'next'
import { ArrowLeft, Check, Zap, Shield, Users, Rocket, Brain, Sparkles, Cpu, Lock, Globe } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Pricing - AI Memory',
  description: 'Simple, transparent pricing for AI Memory - Persistent memory for AI applications.',
}

const npmPlans = [
  {
    name: 'Free',
    price: '$0',
    period: '/month',
    description: 'Perfect for learning and side projects',
    features: [
      '5,000 requests/day',
      '5,000 memories',
      'Individual use only',
      'Local storage (IndexedDB)',
      'Community support',
      'No API key required',
    ],
    icon: Zap,
    cta: 'Get Started',
    popular: false,
  },
  {
    name: 'Pro',
    price: '$29',
    period: '/month',
    description: 'For production applications',
    features: [
      '100,000 requests/day',
      '50,000 memories',
      'API Key dashboard',
      'Redis persistence',
      'Cloud sync',
      'Email support',
    ],
    icon: Rocket,
    cta: 'Start Free Trial',
    popular: true,
  },
  {
    name: 'Enterprise',
    price: '$99',
    period: '/month',
    description: 'For growing teams',
    features: [
      'Unlimited requests',
      'Unlimited memories',
      'PostgreSQL persistence',
      'SSO/SAML',
      'Custom integrations',
      'Priority support',
    ],
    icon: Shield,
    cta: 'Contact Sales',
    popular: false,
  },
]

const extensionPlans = [
  {
    name: 'Free',
    price: '$0',
    period: '/forever',
    description: 'No account required',
    features: [
      '5,000 memories/month',
      'Local storage (IndexedDB)',
      'ChatGPT, Claude, Gemini, Perplexity',
      '100% private',
      'Basic search',
    ],
    icon: Globe,
    cta: 'Install Free',
    popular: false,
  },
  {
    name: 'Starter',
    price: '$3',
    period: '/month',
    description: 'Cloud sync for individuals',
    features: [
      '10,000 memories/month',
      'Cloud sync',
      'Access from any device',
      'Browser extension support',
      'Community support',
    ],
    icon: Zap,
    cta: 'Start Starter Trial',
    popular: true,
  },
  {
    name: 'Plus',
    price: '$9',
    period: '/month',
    description: 'Cloud sync + more',
    features: [
      '50,000 memories/month',
      'Cloud sync',
      'Advanced search',
      'Priority support',
    ],
    icon: Rocket,
    cta: 'Start Plus Trial',
    popular: false,
  },
  {
    name: 'Premium',
    price: '$29',
    period: '/month',
    description: 'For power users',
    features: [
      'Unlimited memories',
      'Multiple AI personas',
      'Team sharing',
      'API access',
      'Priority support',
    ],
    icon: Sparkles,
    cta: 'Start Premium Trial',
    popular: false,
  },
]

const teamPlans = [
  {
    name: 'Team',
    price: '$149',
    period: '/month',
    description: 'For small teams (5-15 people)',
    features: [
      '10 team members',
      '1,000,000 requests/month',
      'Shared Team Memory',
      'Team dashboard',
      'Audit logs (30 days)',
      'Slack support',
    ],
    icon: Users,
    cta: 'Start Team Trial',
    popular: false,
  },
  {
    name: 'Business',
    price: '$399',
    period: '/month',
    description: 'For organizations (15-50 people)',
    features: [
      '50 team members',
      '5,000,000 requests/month',
      'Organizational Memory',
      'Cross-team Knowledge',
      'SSO/SAML basic',
      'Priority support',
    ],
    icon: Brain,
    cta: 'Start Business Trial',
    popular: true,
  },
  {
    name: 'Enterprise',
    price: '$999+',
    period: '/month',
    description: 'For large organizations (50+ people)',
    features: [
      'Unlimited seats',
      'Custom requests limit',
      'Memory Robots (AI Agents)',
      'Dedicated infrastructure',
      'Whitelabel option',
      'Custom SLA',
    ],
    icon: Cpu,
    cta: 'Contact Sales',
    popular: false,
  },
]

const faqs = [
  {
    question: 'Can I switch plans later?',
    answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately and we will prorate any difference.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards, PayPal, and wire transfers for Enterprise plans. All payments are processed securely through Polar.sh.',
  },
  {
    question: 'Is there a free trial?',
    answer: 'Yes! All paid plans include a 14-day free trial. No credit card required to start.',
  },
  {
    question: 'What happens if I exceed my limits?',
    answer: 'We will notify you when you are approaching your limits. You can upgrade your plan or wait until the next billing cycle.',
  },
  {
    question: 'Do you offer refunds?',
    answer: 'We offer a 30-day money-back guarantee for all paid plans. No questions asked.',
  },
  {
    question: 'What is Memory Robots (Enterprise)?',
    answer: 'Memory Robots are AI agents that automatically learn from team conversations and share knowledge across your organization. Available only on Enterprise plans.',
  },
  {
    question: 'Can I use AI Memory for my Chrome extension users?',
    answer: 'Yes! The Chrome Extension and NPM package are separate products. You can use the NPM package to build your own extension or integrate memory into your existing application.',
  },
  {
    question: 'Is my data secure?',
    answer: 'Absolutely. All data is encrypted at rest (AES-256) and in transit (TLS 1.3). We never use your data to train AI models.',
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
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-500 flex items-center justify-center">
                <Brain className="w-4 h-4 text-white" />
              </div>
              <span className="text-lg font-bold text-white">AI Memory</span>
            </Link>
            <div className="w-32" />
          </div>
        </div>
      </header>

      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Choose the plan that fits your needs. All plans include core features and dedicated support.
            </p>
          </div>

          {/* NPM Plans */}
          <div className="mb-20">
            <h2 className="text-2xl font-bold text-white text-center mb-2">NPM Package</h2>
            <p className="text-gray-400 text-center mb-8">For developers integrating memory into AI applications</p>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {npmPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-gray-800 rounded-2xl p-8 ${
                    plan.popular 
                      ? 'border-2 border-emerald-500 shadow-xl shadow-emerald-500/10' 
                      : 'border border-gray-700'
                  }`}
                >
                  {plan.popular && (
                    <span className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-emerald-500 text-white text-sm font-medium rounded-full">
                      Most Popular
                    </span>
                  )}
                  
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-emerald-500/20 mb-6">
                    <plan.icon className="w-6 h-6 text-emerald-400" />
                  </div>

                  <h3 className="text-xl font-semibold text-white text-center">{plan.name}</h3>
                  
                  <div className="mt-4 text-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400">{plan.period}</span>
                  </div>
                  
                  <p className="mt-2 text-center text-gray-400 text-sm">{plan.description}</p>

                  <ul className="mt-8 space-y-4">
                    {plan.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start text-gray-300">
                        <Check className="w-5 h-5 text-emerald-400 mr-3 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    className={`mt-8 w-full py-3 px-4 rounded-lg font-medium transition-colors ${
                      plan.popular
                        ? 'bg-emerald-500 text-white hover:bg-emerald-600'
                        : 'bg-gray-700 text-white hover:bg-gray-600'
                    }`}
                  >
                    {plan.cta}
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Chrome Extension Plans */}
          <div className="mb-20">
            <h2 className="text-2xl font-bold text-white text-center mb-2">Chrome Extension</h2>
            <p className="text-gray-400 text-center mb-8">For users who want memory in their browser AI tools</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {extensionPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-gray-800 rounded-2xl p-8 ${
                    plan.popular 
                      ? 'border-2 border-purple-500 shadow-xl shadow-purple-500/10' 
                      : 'border border-gray-700'
                  }`}
                >
                  {plan.popular && (
                    <span className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-purple-500 text-white text-sm font-medium rounded-full">
                      Most Popular
                    </span>
                  )}
                  
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-purple-500/20 mb-6">
                    <plan.icon className="w-6 h-6 text-purple-400" />
                  </div>

                  <h3 className="text-xl font-semibold text-white text-center">{plan.name}</h3>
                  
                  <div className="mt-4 text-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400">{plan.period}</span>
                  </div>
                  
                  <p className="mt-2 text-center text-gray-400 text-sm">{plan.description}</p>

                  <ul className="mt-8 space-y-4">
                    {plan.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start text-gray-300">
                        <Check className="w-5 h-5 text-purple-400 mr-3 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    className={`mt-8 w-full py-3 px-4 rounded-lg font-medium transition-colors ${
                      plan.popular
                        ? 'bg-purple-500 text-white hover:bg-purple-600'
                        : 'bg-gray-700 text-white hover:bg-gray-600'
                    }`}
                  >
                    {plan.cta}
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Team Plans */}
          <div className="mb-20">
            <h2 className="text-2xl font-bold text-white text-center mb-2">Team & Business</h2>
            <p className="text-gray-400 text-center mb-8">For organizations that need shared knowledge across teams</p>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {teamPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-gray-800 rounded-2xl p-8 ${
                    plan.popular 
                      ? 'border-2 border-cyan-500 shadow-xl shadow-cyan-500/10' 
                      : 'border border-gray-700'
                  }`}
                >
                  {plan.popular && (
                    <span className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-cyan-500 text-white text-sm font-medium rounded-full">
                      Recommended
                    </span>
                  )}
                  
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-cyan-500/20 mb-6">
                    <plan.icon className="w-6 h-6 text-cyan-400" />
                  </div>

                  <h3 className="text-xl font-semibold text-white text-center">{plan.name}</h3>
                  
                  <div className="mt-4 text-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400">{plan.period}</span>
                  </div>
                  
                  <p className="mt-2 text-center text-gray-400 text-sm">{plan.description}</p>

                  <ul className="mt-8 space-y-4">
                    {plan.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start text-gray-300">
                        <Check className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    className={`mt-8 w-full py-3 px-4 rounded-lg font-medium transition-colors ${
                      plan.popular
                        ? 'bg-cyan-500 text-white hover:bg-cyan-600'
                        : 'bg-gray-700 text-white hover:bg-gray-600'
                    }`}
                  >
                    {plan.cta}
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Comparison Table */}
          <div className="mb-20">
            <h2 className="text-2xl font-bold text-white text-center mb-8">
              Feature Comparison
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-700">
                    <th className="py-4 px-6 text-left text-gray-400 font-medium">Feature</th>
                    <th className="py-4 px-6 text-center text-white font-semibold">Free</th>
                    <th className="py-4 px-6 text-center text-white font-semibold">Pro</th>
                    <th className="py-4 px-6 text-center text-white font-semibold">Enterprise</th>
                    <th className="py-4 px-6 text-center text-white font-semibold">Team</th>
                    <th className="py-4 px-6 text-center text-white font-semibold">Business</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-800">
                  <tr>
                    <td className="py-4 px-6 text-gray-400">Requests/day</td>
                    <td className="py-4 px-6 text-center text-white">5,000</td>
                    <td className="py-4 px-6 text-center text-white">100,000</td>
                    <td className="py-4 px-6 text-center text-white">Unlimited</td>
                    <td className="py-4 px-6 text-center text-white">1M/mo</td>
                    <td className="py-4 px-6 text-center text-white">5M/mo</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 text-gray-400">Memories</td>
                    <td className="py-4 px-6 text-center text-white">5,000</td>
                    <td className="py-4 px-6 text-center text-white">50,000</td>
                    <td className="py-4 px-6 text-center text-white">Unlimited</td>
                    <td className="py-4 px-6 text-center text-white">500K</td>
                    <td className="py-4 px-6 text-center text-white">2M</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 text-gray-400">Storage (MB)</td>
                    <td className="py-4 px-6 text-center text-white">50</td>
                    <td className="py-4 px-6 text-center text-white">500</td>
                    <td className="py-4 px-6 text-center text-white">Unlimited</td>
                    <td className="py-4 px-6 text-center text-white">5,000</td>
                    <td className="py-4 px-6 text-center text-white">20,000</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 text-gray-400">Team members</td>
                    <td className="py-4 px-6 text-center text-white">1</td>
                    <td className="py-4 px-6 text-center text-white">5</td>
                    <td className="py-4 px-6 text-center text-white">Unlimited</td>
                    <td className="py-4 px-6 text-center text-white">10</td>
                    <td className="py-4 px-6 text-center text-white">50</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 text-gray-400">Cloud Sync</td>
                    <td className="py-4 px-6 text-center text-gray-500">—</td>
                    <td className="py-4 px-6 text-center text-green-400">✓</td>
                    <td className="py-4 px-6 text-center text-green-400">✓</td>
                    <td className="py-4 px-6 text-center text-green-400">✓</td>
                    <td className="py-4 px-6 text-center text-green-400">✓</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 text-gray-400">Shared Team Memory</td>
                    <td className="py-4 px-6 text-center text-gray-500">—</td>
                    <td className="py-4 px-6 text-center text-gray-500">—</td>
                    <td className="py-4 px-6 text-center text-gray-500">—</td>
                    <td className="py-4 px-6 text-center text-green-400">✓</td>
                    <td className="py-4 px-6 text-center text-green-400">✓</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 text-gray-400">Organizational Memory</td>
                    <td className="py-4 px-6 text-center text-gray-500">—</td>
                    <td className="py-4 px-6 text-center text-gray-500">—</td>
                    <td className="py-4 px-6 text-center text-gray-500">—</td>
                    <td className="py-4 px-6 text-center text-gray-500">—</td>
                    <td className="py-4 px-6 text-center text-green-400">✓</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 text-gray-400">Memory Robots (AI Agents)</td>
                    <td className="py-4 px-6 text-center text-gray-500">—</td>
                    <td className="py-4 px-6 text-center text-gray-500">—</td>
                    <td className="py-4 px-6 text-center text-gray-500">—</td>
                    <td className="py-4 px-6 text-center text-gray-500">—</td>
                    <td className="py-4 px-6 text-center text-green-400">✓</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 text-gray-400 text-cyan-400">Memory Robots (Enterprise)</td>
                    <td className="py-4 px-6 text-center text-gray-500">—</td>
                    <td className="py-4 px-6 text-center text-gray-500">—</td>
                    <td className="py-4 px-6 text-center text-gray-500">—</td>
                    <td className="py-4 px-6 text-center text-gray-500">—</td>
                    <td className="py-4 px-6 text-center text-gray-500">—</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 text-gray-400">SSO/SAML</td>
                    <td className="py-4 px-6 text-center text-gray-500">—</td>
                    <td className="py-4 px-6 text-center text-gray-500">—</td>
                    <td className="py-4 px-6 text-center text-green-400">✓</td>
                    <td className="py-4 px-6 text-center text-gray-500">—</td>
                    <td className="py-4 px-6 text-center text-green-400">Basic</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 text-gray-400">Audit logs</td>
                    <td className="py-4 px-6 text-center text-gray-500">—</td>
                    <td className="py-4 px-6 text-center text-gray-500">—</td>
                    <td className="py-4 px-6 text-center text-green-400">✓</td>
                    <td className="py-4 px-6 text-center text-white">30 days</td>
                    <td className="py-4 px-6 text-center text-white">90 days</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 text-gray-400">Support</td>
                    <td className="py-4 px-6 text-center text-white">Community</td>
                    <td className="py-4 px-6 text-center text-white">Email</td>
                    <td className="py-4 px-6 text-center text-white">Priority</td>
                    <td className="py-4 px-6 text-center text-white">Slack</td>
                    <td className="py-4 px-6 text-center text-white">Priority</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* FAQs */}
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-white text-center mb-8">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                  <h3 className="font-semibold text-white mb-2">{faq.question}</h3>
                  <p className="text-gray-400">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-20 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">
              Still have questions?
            </h2>
            <p className="text-gray-400 mb-6">
              Contact our team and we will help you find the right plan.
            </p>
            <button className="px-8 py-3 bg-emerald-500 text-white rounded-lg font-medium hover:bg-emerald-600 transition-colors">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
