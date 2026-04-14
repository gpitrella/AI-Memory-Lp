import type { Metadata } from 'next'
import { ArrowLeft, Brain, Check, Zap, Shield, Globe, Clock, Smartphone, Search, Sparkles, Star, Users, ArrowRight, Download, Chrome, Monitor, Terminal, Globe2, MonitorSmartphone } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Browser Extensions - AI Memory',
  description: 'Add persistent memory to ChatGPT, Claude, Gemini and more. Available for Chrome, Edge, Firefox, and Safari.',
}

const browsers = [
  {
    name: 'Chrome',
    icon: Chrome,
    users: '3B+',
    color: 'from-red-500 to-orange-500',
    bgColor: 'bg-red-500/20',
    borderColor: 'border-red-500/50',
    textColor: 'text-red-400',
    status: 'available',
    description: 'The most popular browser. Get started in seconds from the Chrome Web Store.',
    features: [
      'One-click installation',
      'Auto-capture conversations',
      'Click-to-inject memories',
      'Dark & light mode',
    ],
  },
  {
    name: 'Microsoft Edge',
    icon: Monitor,
    users: '400M+',
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'bg-blue-500/20',
    borderColor: 'border-blue-500/50',
    textColor: 'text-blue-400',
    status: 'available',
    description: 'Built on Chromium. Fast, secure, and perfect for Copilot users.',
    features: [
      'Seamless Copilot integration',
      'Same features as Chrome',
      'Windows native performance',
      'Syncs with Microsoft account',
    ],
  },
  {
    name: 'Firefox',
    icon: Globe2,
    users: '180M+',
    color: 'from-orange-500 to-yellow-500',
    bgColor: 'bg-orange-500/20',
    borderColor: 'border-orange-500/50',
    textColor: 'text-orange-400',
    status: 'available',
    description: 'Privacy-focused browser. Full functionality without tracking.',
    features: [
      'Enhanced tracking protection',
      'Container tabs support',
      'Lightweight & fast',
      'Open source foundation',
    ],
  },
  {
    name: 'Safari',
    icon: MonitorSmartphone,
    users: '200M+',
    color: 'from-blue-600 to-purple-600',
    bgColor: 'bg-blue-600/20',
    borderColor: 'border-blue-600/50',
    textColor: 'text-blue-400',
    status: 'available',
    description: 'Apple ecosystem integration. Works on Mac, iPhone, and iPad.',
    features: [
      'Native Apple Silicon optimized',
      'iCloud sync across devices',
      'Low battery consumption',
      'Private Relay compatible',
    ],
  },
]

const globalFeatures = [
  {
    icon: Globe,
    title: 'Works with Any AI',
    description: 'ChatGPT, Claude, Gemini, Perplexity, Copilot, and more. One extension, all your AI tools.',
  },
  {
    icon: Clock,
    title: 'Memories Never Expire',
    description: 'Your AI remembers everything across conversations. No more repeating yourself.',
  },
  {
    icon: Shield,
    title: '100% Private',
    description: 'Free tier stores everything locally. Your data never leaves your browser.',
  },
  {
    icon: Search,
    title: 'Instant Recall',
    description: 'Click the brain icon to inject relevant memories into any conversation.',
  },
  {
    icon: Smartphone,
    title: 'Cross-Device Sync',
    description: 'Premium plans sync memories across all your devices. Access anywhere.',
  },
  {
    icon: Users,
    title: 'Team Sharing',
    description: 'Share memories with your team. Everyone stays on the same page.',
  },
]

const plans = [
  {
    name: 'Free',
    price: '$0',
    period: '/forever',
    description: 'No account required',
    features: [
      '100 memories/day',
      'Local storage only',
      'All browsers supported',
      'ChatGPT, Claude, Gemini',
      '100% private',
    ],
    cta: 'Install Free',
    highlight: false,
  },
  {
    name: 'Starter',
    price: '$3',
    period: '/month',
    description: 'Cloud sync for individuals',
    features: [
      '1,000 memories/day',
      'Cloud sync',
      'Access from any device',
      'All browsers',
      'Email support',
    ],
    cta: 'Start Starter Trial',
    highlight: false,
  },
  {
    name: 'Plus',
    price: '$9',
    period: '/month',
    description: 'Most popular for power users',
    features: [
      '5,000 memories/day',
      'Cloud sync',
      'Advanced search',
      'Priority support',
      'Browser badge counter',
    ],
    cta: 'Start Plus Trial',
    highlight: true,
  },
  {
    name: 'Premium',
    price: '$29',
    period: '/month',
    description: 'For teams and power users',
    features: [
      'Unlimited memories',
      'Multiple AI personas',
      'Team sharing',
      'API access',
      'Priority everything',
    ],
    cta: 'Start Premium Trial',
    highlight: false,
  },
]

const supportedAIs = [
  { name: 'ChatGPT', icon: '🤖', status: 'supported' },
  { name: 'Claude', icon: '🧠', status: 'supported' },
  { name: 'Gemini', icon: '✨', status: 'supported' },
  { name: 'Perplexity', icon: '🔍', status: 'supported' },
  { name: 'Copilot', icon: '💻', status: 'supported' },
  { name: 'DeepSeek', icon: '🔮', status: 'coming' },
  { name: 'Groq', icon: '⚡', status: 'coming' },
  { name: 'Ollama', icon: '🦙', status: 'coming' },
]

export default function ExtensionPage() {
  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header */}
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

      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-purple-600/10 border border-purple-500/20 rounded-full px-4 py-2 mb-6">
              <Sparkles className="w-4 h-4 text-purple-400 mr-2" />
              <span className="text-purple-400 text-sm font-medium">Browser Extensions</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Memory for <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Every Browser</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
              Install AI Memory on Chrome, Edge, Firefox, or Safari. Get persistent memory for any AI assistant, on any device.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <button className="inline-flex items-center justify-center px-6 py-3 font-medium rounded-xl text-white bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 transition-all shadow-lg">
                <Chrome className="mr-2 w-5 h-5" />
                Add to Chrome
              </button>
              <button className="inline-flex items-center justify-center px-6 py-3 font-medium rounded-xl text-white bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 transition-all shadow-lg">
                <Monitor className="mr-2 w-5 h-5" />
                Add to Edge
              </button>
              <button className="inline-flex items-center justify-center px-6 py-3 font-medium rounded-xl text-white bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 transition-all shadow-lg">
                <Globe2 className="mr-2 w-5 h-5" />
                Add to Firefox
              </button>
              <button className="inline-flex items-center justify-center px-6 py-3 font-medium rounded-xl text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg">
                <MonitorSmartphone className="mr-2 w-5 h-5" />
                Add to Safari
              </button>
            </div>
            <p className="text-sm text-gray-500">Free tier available on all browsers • 50,000+ active users</p>
          </div>

          {/* Global Reach Stats */}
          <div className="mb-20 bg-gradient-to-r from-purple-900/30 via-gray-900 to-pink-900/30 rounded-3xl p-8 border border-gray-800">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-white mb-2">3.8B+</div>
                <div className="text-gray-400">Total Browser Users</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-white mb-2">50K+</div>
                <div className="text-gray-400">Active Users</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-white mb-2">4</div>
                <div className="text-gray-400">Browsers Supported</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-white mb-2">8+</div>
                <div className="text-gray-400">AI Assistants</div>
              </div>
            </div>
          </div>

          {/* Supported AI Platforms */}
          <div className="mb-20">
            <h2 className="text-2xl font-bold text-white text-center mb-8">
              Works with Your Favorite AI
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {supportedAIs.map((ai, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-xl border text-center ${
                    ai.status === 'supported'
                      ? 'bg-gray-800/50 border-gray-700/50'
                      : 'bg-gray-800/30 border-gray-700/30 opacity-60'
                  }`}
                >
                  <div className="text-3xl mb-2">{ai.icon}</div>
                  <p className={`text-sm font-medium ${
                    ai.status === 'supported' ? 'text-white' : 'text-gray-500'
                  }`}>
                    {ai.name}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    {ai.status === 'supported' ? '✓ Supported' : 'Coming soon'}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Browser Details */}
          <div className="mb-20">
            <h2 className="text-2xl font-bold text-white text-center mb-12">
              Choose Your Browser
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {browsers.map((browser, index) => (
                <div
                  key={index}
                  className={`relative rounded-2xl p-6 bg-gray-800/50 border ${browser.borderColor}`}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`w-14 h-14 rounded-xl ${browser.bgColor} flex items-center justify-center`}>
                      <browser.icon className={`w-8 h-8 ${browser.textColor}`} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-xl font-bold text-white">{browser.name}</h3>
                        {browser.status === 'available' && (
                          <span className="px-2 py-0.5 text-xs font-medium bg-emerald-500/20 text-emerald-400 rounded-full">
                            Available
                          </span>
                        )}
                      </div>
                      <p className="text-gray-400 text-sm">{browser.users} users worldwide</p>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm mb-4">{browser.description}</p>
                  <ul className="space-y-2">
                    {browser.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-sm text-gray-400">
                        <Check className={`w-4 h-4 mr-2 ${browser.textColor}`} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button
                    className={`w-full mt-6 py-3 rounded-xl font-medium text-white bg-gradient-to-r ${browser.color} hover:opacity-90 transition-opacity flex items-center justify-center`}
                  >
                    <Download className="mr-2 w-5 h-5" />
                    Install for {browser.name}
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Global Features */}
          <div className="mb-20">
            <h2 className="text-2xl font-bold text-white text-center mb-12">
              Same Features, Every Browser
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {globalFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="p-6 bg-gray-800/50 rounded-xl border border-gray-700/50"
                >
                  <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-purple-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-400 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* How It Works */}
          <div className="mb-20">
            <h2 className="text-2xl font-bold text-white text-center mb-12">
              How It Works
            </h2>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-purple-500/20 flex items-center justify-center mx-auto mb-4">
                  <Download className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">1. Install</h3>
                <p className="text-gray-400 text-sm">
                  Add to your browser from the Web Store. Free tier works immediately.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-purple-500/20 flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">2. Chat</h3>
                <p className="text-gray-400 text-sm">
                  Use ChatGPT, Claude, or any supported AI. Memories are captured automatically.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-purple-500/20 flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">3. Remember</h3>
                <p className="text-gray-400 text-sm">
                  AI Memory stores context, preferences, and important details automatically.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-purple-500/20 flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">4. Recall</h3>
                <p className="text-gray-400 text-sm">
                  In new conversations, click the brain icon to inject relevant memories.
                </p>
              </div>
            </div>
          </div>

          {/* Pricing */}
          <div className="mb-20">
            <h2 className="text-2xl font-bold text-white text-center mb-4">
              Simple, Unified Pricing
            </h2>
            <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
              One subscription works across all browsers and devices. Start free, upgrade when you need more.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {plans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative rounded-2xl p-6 ${
                    plan.highlight
                      ? 'bg-gradient-to-br from-purple-900/50 to-gray-900 border-2 border-purple-500 shadow-lg shadow-purple-500/20'
                      : 'bg-gray-800/50 border border-gray-700/50'
                  }`}
                >
                  {plan.highlight && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-purple-500 text-white text-xs font-medium rounded-full">
                      Most Popular
                    </span>
                  )}
                  <h3 className="text-lg font-semibold text-white mb-1">{plan.name}</h3>
                  <p className="text-sm text-gray-500 mb-4">{plan.description}</p>
                  <div className="mb-4">
                    <span className="text-3xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-500">{plan.period}</span>
                  </div>
                  <ul className="space-y-2 mb-6">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-sm text-gray-300">
                        <Check className="w-4 h-4 text-purple-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button
                    className={`w-full py-3 rounded-lg font-medium transition-colors ${
                      plan.highlight
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

          {/* Comparison Table */}
          <div className="mb-20 overflow-x-auto">
            <h2 className="text-2xl font-bold text-white text-center mb-12">
              Feature Comparison
            </h2>
            <div className="bg-gray-800/50 rounded-2xl border border-gray-700/50 overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-700">
                    <th className="text-left p-4 text-white font-semibold">Feature</th>
                    <th className="text-center p-4 text-white font-semibold">Free</th>
                    <th className="text-center p-4 text-white font-semibold">Starter</th>
                    <th className="text-center p-4 text-white font-semibold">Plus</th>
                    <th className="text-center p-4 text-white font-semibold">Premium</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-700/50">
                    <td className="p-4 text-gray-300">Memories per day</td>
                    <td className="p-4 text-center text-gray-400">100</td>
                    <td className="p-4 text-center text-gray-400">1,000</td>
                    <td className="p-4 text-center text-gray-400">5,000</td>
                    <td className="p-4 text-center text-white">Unlimited</td>
                  </tr>
                  <tr className="border-b border-gray-700/50">
                    <td className="p-4 text-gray-300">Cloud sync</td>
                    <td className="p-4 text-center text-gray-400">-</td>
                    <td className="p-4 text-center text-emerald-400">✓</td>
                    <td className="p-4 text-center text-emerald-400">✓</td>
                    <td className="p-4 text-center text-emerald-400">✓</td>
                  </tr>
                  <tr className="border-b border-gray-700/50">
                    <td className="p-4 text-gray-300">Cross-browser sync</td>
                    <td className="p-4 text-center text-gray-400">-</td>
                    <td className="p-4 text-center text-gray-400">-</td>
                    <td className="p-4 text-center text-emerald-400">✓</td>
                    <td className="p-4 text-center text-emerald-400">✓</td>
                  </tr>
                  <tr className="border-b border-gray-700/50">
                    <td className="p-4 text-gray-300">All browsers</td>
                    <td className="p-4 text-center text-emerald-400">✓</td>
                    <td className="p-4 text-center text-emerald-400">✓</td>
                    <td className="p-4 text-center text-emerald-400">✓</td>
                    <td className="p-4 text-center text-emerald-400">✓</td>
                  </tr>
                  <tr className="border-b border-gray-700/50">
                    <td className="p-4 text-gray-300">Team sharing</td>
                    <td className="p-4 text-center text-gray-400">-</td>
                    <td className="p-4 text-center text-gray-400">-</td>
                    <td className="p-4 text-center text-gray-400">-</td>
                    <td className="p-4 text-center text-emerald-400">✓</td>
                  </tr>
                  <tr>
                    <td className="p-4 text-gray-300">API access</td>
                    <td className="p-4 text-center text-gray-400">-</td>
                    <td className="p-4 text-center text-gray-400">-</td>
                    <td className="p-4 text-center text-gray-400">-</td>
                    <td className="p-4 text-center text-emerald-400">✓</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center bg-gradient-to-r from-purple-900/50 via-gray-900 to-pink-900/50 rounded-3xl p-12 border border-purple-500/20">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Never Forget?
            </h2>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto">
              Join 50,000+ users who never have to repeat themselves to AI again.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-xl text-white bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 transition-all shadow-lg">
                <Download className="mr-2 w-5 h-5" />
                Install Free - All Browsers
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
