import type { Metadata } from 'next'
import { ArrowLeft, Check, Brain, Users, Layers, Shield, Zap, Cpu, Globe, Lock, BarChart3, Database, Network, Sparkles, ArrowRight, CheckCircle } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Business Plan - AI Memory',
  description: 'Organizational Memory for teams. Share knowledge across your entire organization with Cross-Team Knowledge and Memory Robots.',
}

const features = [
  {
    icon: Users,
    title: 'Organizational Memory',
    description: 'Knowledge shared across all departments. When marketing learns something, sales knows it automatically.',
    highlight: true,
  },
  {
    icon: Network,
    title: 'Cross-Team Knowledge',
    description: 'Break down information silos. Every team contributes and benefits from collective intelligence.',
    highlight: true,
  },
  {
    icon: Cpu,
    title: 'Memory Robots (AI Agents)',
    description: 'AI agents that automatically learn from conversations and share insights across teams.',
    highlight: true,
  },
  {
    icon: Database,
    title: '50 Team Members',
    description: 'Enough for entire departments. Add everyone who needs access to organizational knowledge.',
    highlight: false,
  },
  {
    icon: BarChart3,
    title: '5M Requests/Month',
    description: 'Plenty of capacity for busy teams. Monitor usage and scale as needed.',
    highlight: false,
  },
  {
    icon: Lock,
    title: 'SSO/SAML Basic',
    description: 'Integrate with your existing identity provider. Enterprise-grade security for your data.',
    highlight: false,
  },
  {
    icon: Layers,
    title: 'Advanced Audit Logs',
    description: '90 days of detailed audit logs. Track who accessed what and when.',
    highlight: false,
  },
  {
    icon: Globe,
    title: 'Priority Support',
    description: 'Get help within 4 hours. Our team is ready to help you succeed.',
    highlight: false,
  },
]

const useCases = [
  {
    title: 'Sales Teams',
    description: 'Never lose a customer insight. When a sales rep learns a client preference, the entire team knows.',
    example: '"Client X prefers meetings after 3pm and discusses budget in EUR" → Shared automatically',
  },
  {
    title: 'Customer Support',
    description: 'Build a knowledge base from every support ticket. Solve issues 10x faster.',
    example: '"Customer Y always asks about integration with Salesforce" → Remembered for next ticket',
  },
  {
    title: 'Product Teams',
    description: 'Track feature requests and feedback in one place. Know what users really want.',
    example: '"Users request dark mode in the mobile app" → Aggregated from all conversations',
  },
  {
    title: 'HR & Onboarding',
    description: 'New hires get up to speed faster. All company knowledge in one place.',
    example: '"This is how we do deployments" → Remembered and shared with new engineers',
  },
]

const memoryRobots = [
  {
    name: 'Sales Bot',
    description: 'Learns from every customer interaction',
    capabilities: [
      'Tracks client preferences automatically',
      'Shares relevant insights with the team',
      'Remembers past conversations and decisions',
    ],
  },
  {
    name: 'Support Bot',
    description: 'Builds knowledge from support tickets',
    capabilities: [
      'Identifies common issues and solutions',
      'Suggests relevant KB articles',
      'Flags trends for product team',
    ],
  },
  {
    name: 'Research Bot',
    description: 'Aggregates insights from all sources',
    capabilities: [
      'Monitors market trends',
      'Summarizes competitive intelligence',
      'Highlights action items for teams',
    ],
  },
]

export default function BusinessPage() {
  return (
    <div className="min-h-screen bg-gray-900">
      <header className="bg-gray-900 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/pricing" className="flex items-center text-gray-400 hover:text-white">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Pricing
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
          {/* Hero */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-cyan-600/10 border border-cyan-500/20 rounded-full px-4 py-2 mb-6">
              <Sparkles className="w-4 h-4 text-cyan-400 mr-2" />
              <span className="text-cyan-400 text-sm font-medium">Business Plan</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Organizational Memory <br />
              <span className="text-gradient bg-gradient-to-r from-cyan-400 to-blue-500">for Growing Teams</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
              The Business plan is designed for organizations that need shared knowledge across teams. 
              With Organizational Memory, Cross-Team Knowledge, and Memory Robots, your entire company learns faster.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-xl text-gray-900 bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600 transition-all shadow-lg hover:shadow-cyan-500/25">
                Start 14-Day Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-xl text-white border-2 border-gray-600 hover:border-white hover:bg-white/10 transition-colors"
              >
                Talk to Sales
              </Link>
            </div>
          </div>

          {/* Price Card */}
          <div className="max-w-xl mx-auto mb-20">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl border-2 border-cyan-500/30 p-8 text-center shadow-2xl shadow-cyan-500/10">
              <h2 className="text-2xl font-bold text-white mb-2">Business Plan</h2>
              <p className="text-gray-400 mb-6">Everything your organization needs for shared knowledge</p>
              <div className="mb-6">
                <span className="text-5xl font-bold text-white">$399</span>
                <span className="text-xl text-gray-400">/month</span>
              </div>
              <ul className="text-left space-y-3 mb-8">
                <li className="flex items-center text-gray-300">
                  <Check className="w-5 h-5 text-cyan-400 mr-3" />
                  50 team members
                </li>
                <li className="flex items-center text-gray-300">
                  <Check className="w-5 h-5 text-cyan-400 mr-3" />
                  5,000,000 requests/month
                </li>
                <li className="flex items-center text-gray-300">
                  <Check className="w-5 h-5 text-cyan-400 mr-3" />
                  Organizational Memory
                </li>
                <li className="flex items-center text-gray-300">
                  <Check className="w-5 h-5 text-cyan-400 mr-3" />
                  Cross-Team Knowledge
                </li>
                <li className="flex items-center text-gray-300">
                  <Check className="w-5 h-5 text-cyan-400 mr-3" />
                  Memory Robots (AI Agents)
                </li>
              </ul>
              <button className="w-full py-4 px-6 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-medium hover:from-cyan-600 hover:to-blue-700 transition-all">
                Start Free Trial
              </button>
              <p className="text-sm text-gray-500 mt-4">No credit card required • 14-day free trial</p>
            </div>
          </div>

          {/* Features Grid */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-white text-center mb-4">
              Everything Included in Business
            </h2>
            <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
              Built for organizations that need shared knowledge and intelligent automation.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-2xl border ${
                    feature.highlight
                      ? 'bg-gradient-to-br from-cyan-900/30 to-blue-900/30 border-cyan-500/30'
                      : 'bg-gray-800/50 border-gray-700/50'
                  }`}
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                    feature.highlight ? 'bg-cyan-500/20' : 'bg-gray-700'
                  }`}>
                    <feature.icon className={`w-6 h-6 ${feature.highlight ? 'text-cyan-400' : 'text-gray-400'}`} />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-400 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Memory Robots Section */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <div className="inline-flex items-center bg-purple-600/10 border border-purple-500/20 rounded-full px-4 py-2 mb-4">
                <Cpu className="w-4 h-4 text-purple-400 mr-2" />
                <span className="text-purple-400 text-sm font-medium">Exclusive to Business</span>
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">Memory Robots</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                AI agents that automatically learn from your team conversations and share insights 
                across the organization. Like having a dedicated knowledge manager for every team.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {memoryRobots.map((robot, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-purple-900/30 to-gray-900 rounded-2xl border border-purple-500/20 p-8"
                >
                  <div className="w-16 h-16 rounded-2xl bg-purple-500/20 flex items-center justify-center mb-6">
                    <Cpu className="w-8 h-8 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{robot.name}</h3>
                  <p className="text-gray-400 mb-4">{robot.description}</p>
                  <ul className="space-y-2">
                    {robot.capabilities.map((cap, i) => (
                      <li key={i} className="flex items-start text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-purple-400 mr-2 mt-0.5 flex-shrink-0" />
                        {cap}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Use Cases */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              How Teams Use Organizational Memory
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <div
                  key={index}
                  className="bg-gray-800/50 rounded-2xl border border-gray-700/50 p-8"
                >
                  <h3 className="text-xl font-bold text-white mb-3">{useCase.title}</h3>
                  <p className="text-gray-400 mb-4">{useCase.description}</p>
                  <div className="bg-gray-900/50 rounded-lg p-4 border border-gray-700/50">
                    <p className="text-sm text-gray-500 mb-2">Example:</p>
                    <p className="text-cyan-400 text-sm italic">{useCase.example}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Comparison */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Business vs Team Plan
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-700">
                    <th className="py-4 px-6 text-left text-gray-400 font-medium">Feature</th>
                    <th className="py-4 px-6 text-center text-white font-semibold">Team ($149)</th>
                    <th className="py-4 px-6 text-center text-cyan-400 font-semibold">Business ($399)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-800">
                  <tr>
                    <td className="py-4 px-6 text-gray-400">Team members</td>
                    <td className="py-4 px-6 text-center text-white">10</td>
                    <td className="py-4 px-6 text-center text-cyan-400 font-semibold">50</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 text-gray-400">Requests/month</td>
                    <td className="py-4 px-6 text-center text-white">1M</td>
                    <td className="py-4 px-6 text-center text-cyan-400 font-semibold">5M</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 text-gray-400">Shared Team Memory</td>
                    <td className="py-4 px-6 text-center text-green-400">✓</td>
                    <td className="py-4 px-6 text-center text-cyan-400 font-semibold">✓</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 text-gray-400 text-cyan-400">Organizational Memory</td>
                    <td className="py-4 px-6 text-center text-gray-500">—</td>
                    <td className="py-4 px-6 text-center text-cyan-400 font-semibold">✓</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 text-gray-400 text-cyan-400">Cross-Team Knowledge</td>
                    <td className="py-4 px-6 text-center text-gray-500">—</td>
                    <td className="py-4 px-6 text-center text-cyan-400 font-semibold">✓</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 text-gray-400 text-purple-400">Memory Robots (AI Agents)</td>
                    <td className="py-4 px-6 text-center text-gray-500">—</td>
                    <td className="py-4 px-6 text-center text-purple-400 font-semibold">✓</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 text-gray-400">Audit logs</td>
                    <td className="py-4 px-6 text-center text-white">30 days</td>
                    <td className="py-4 px-6 text-center text-cyan-400 font-semibold">90 days</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 text-gray-400">Support</td>
                    <td className="py-4 px-6 text-center text-white">Slack</td>
                    <td className="py-4 px-6 text-center text-cyan-400 font-semibold">Priority (4hr)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Build Organizational Memory?
            </h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Join teams that use AI Memory Business to share knowledge across their entire organization. 
              Start your free trial today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-xl text-gray-900 bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600 transition-all shadow-lg">
                Start 14-Day Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-xl text-white border-2 border-gray-600 hover:border-white transition-colors">
                Schedule a Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
