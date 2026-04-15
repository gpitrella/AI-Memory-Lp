import type { Metadata } from 'next'
import { ArrowLeft, Brain, Check, Zap, Shield, Globe, Clock, Smartphone, Search, Sparkles, Star, Users, ArrowRight, Download, Chrome, Monitor, Terminal, Globe2, MonitorSmartphone, CheckCircle } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Browser Extensions - AI Memory',
  description: 'Add persistent memory to ChatGPT, Claude, Gemini and more. Available for Chrome, Edge, Firefox, and Safari. Zero config, instant memory.',
}

const browsers = [
  {
    name: 'Chrome',
    icon: Chrome,
    users: '3B+ users worldwide',
    color: 'from-red-500 to-orange-500',
    bgColor: 'bg-red-500/20',
    borderColor: 'border-red-500/50',
    textColor: 'text-red-400',
    status: 'available',
    description: 'The most popular browser. Install from the Chrome Web Store in seconds.',
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
    users: '400M+ users worldwide',
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
    users: '180M+ users worldwide',
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
    users: '200M+ users worldwide',
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
  { name: 'Free', price: '$0', browsers: '1 browser', memory: '500 memories' },
  { name: 'Pro', price: '$12/mo', browsers: 'All 4 browsers', memory: '5,000 memories' },
  { name: 'Team', price: '$49/mo', browsers: 'All 4 browsers', memory: '25,000 memories' },
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

const howItWorks = [
  {
    step: '1',
    title: 'Install',
    description: 'Add AI Memory to your browser from the Web Store. Free tier works immediately.',
  },
  {
    step: '2',
    title: 'Sign In',
    description: 'Click "Sign in with Google". Your free account is created automatically.',
  },
  {
    step: '3',
    title: 'Chat',
    description: 'Use ChatGPT, Claude, or any supported AI. Memories are captured automatically.',
  },
  {
    step: '4',
    title: 'Recall',
    description: 'In new conversations, your past context is automatically retrieved and injected.',
  },
]

export default function ExtensionPage() {
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

      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            <div className="flex flex-wrap justify-center gap-4">
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
          </div>

          <div className="mb-20 bg-gradient-to-r from-purple-900/30 via-gray-900 to-pink-900/30 rounded-3xl p-8 border border-gray-800">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-white mb-2">3.8B+</div>
                <div className="text-gray-400">Browser Users</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-white mb-2">🔒</div>
                <div className="text-gray-400">Local-First Privacy</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-white mb-2">4</div>
                <div className="text-gray-400">Browsers Supported</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-white mb-2">5+</div>
                <div className="text-gray-400">AI Assistants</div>
              </div>
            </div>
          </div>

          <div className="mb-20 bg-gray-800/50 rounded-3xl p-8 border border-gray-700/50">
            <h2 className="text-2xl font-bold text-white text-center mb-8">
              Extension Plans
            </h2>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {plans.map((plan, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-xl border ${
                    index === 1 
                      ? 'bg-purple-900/30 border-purple-500/50' 
                      : 'bg-gray-800 border-gray-700/50'
                  }`}
                >
                  <h3 className="text-lg font-bold text-white mb-1">{plan.name}</h3>
                  <p className="text-2xl font-bold text-white mb-4">{plan.price}</p>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-emerald-400 mr-2" />
                      {plan.browsers}
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-emerald-400 mr-2" />
                      {plan.memory}
                    </li>
                  </ul>
                  <Link
                    href={index === 0 ? '/extension' : 'https://dashboard.aimemory.lat/register'}
                    className={`block w-full mt-4 py-2 rounded-lg font-medium text-center ${
                      index === 1
                        ? 'bg-purple-500 text-white hover:bg-purple-600'
                        : 'bg-gray-700 text-white hover:bg-gray-600'
                    }`}
                  >
                    {index === 0 ? 'Free Download' : 'Get Started'}
                  </Link>
                </div>
              ))}
            </div>
          </div>

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

          <div className="text-center bg-gradient-to-r from-purple-900/50 via-gray-900 to-pink-900/50 rounded-3xl p-12 border border-purple-500/20">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Never Forget?
            </h2>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto">
              Persistent memory across sessions — install once on your favorite browser.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-xl text-white bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 transition-all shadow-lg">
                <Download className="mr-2 w-5 h-5" />
                Install Free - All Browsers
              </button>
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-xl text-white border-2 border-gray-600 hover:border-white hover:bg-white/10 transition-colors"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
