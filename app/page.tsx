'use client'

import { useState } from 'react'
import { 
  Code, Database, Search, Users, Zap, Shield, ArrowRight, Github, Terminal, BookOpen, 
  Check, Brain, Sparkles, Layers, Lock, Globe, Cpu, Rocket, Star, DollarSign, Clock, 
  TrendingUp, MessageSquare, ChevronRight, ArrowDown, Server, DatabaseZap, Bot, RefreshCw, 
  Workflow, Boxes, Link2, ShieldCheck, Zap as Zap2, Code2, MessageCircle, Download,
  Chrome, Monitor, Globe2, MonitorSmartphone
} from 'lucide-react'
import Link from 'next/link'

const integrations = [
  { name: 'ChatGPT', icon: Bot, status: 'supported', color: 'emerald' },
  { name: 'Claude', icon: Brain, status: 'supported', color: 'orange' },
  { name: 'Gemini', icon: Sparkles, status: 'supported', color: 'blue' },
  { name: 'Perplexity', icon: Search, status: 'supported', color: 'cyan' },
  { name: 'VSCode', icon: Code, status: 'supported', color: 'blue' },
  { name: 'Cursor', icon: Terminal, status: 'supported', color: 'purple' },
  { name: 'WordPress', icon: Globe, status: 'supported', color: 'cyan' },
  { name: 'HubSpot', icon: Users, status: 'supported', color: 'orange' },
  { name: 'Shopify', icon: DollarSign, status: 'supported', color: 'green' },
]

const browsers = [
  { name: 'Chrome', icon: Chrome, users: '3B+ users', color: 'red' },
  { name: 'Edge', icon: Monitor, users: '400M+ users', color: 'blue' },
  { name: 'Firefox', icon: Globe2, users: '180M+ users', color: 'orange' },
  { name: 'Safari', icon: MonitorSmartphone, users: '200M+ users', color: 'purple' },
]

const problems = [
  {
    emoji: '😤',
    title: 'ChatGPT forgets everything',
    description: 'Close the tab, lose the context. Start over every session.',
  },
  {
    emoji: '😫',
    title: "Claude doesn't know your codebase",
    description: 'Every new chat is a stranger. No memory of your project.',
  },
  {
    emoji: '🤯',
    title: 'Switching tools loses context',
    description: 'What you discussed in Gemini is gone when you open Claude.',
  },
  {
    emoji: '😓',
    title: 'Team decisions get lost',
    description: 'Important architectural decisions buried in Slack threads.',
  },
]

const solutions = [
  {
    emoji: '🪄',
    title: 'Memory that persists',
    description: 'Conversations remembered across sessions, tools, and time.',
  },
  {
    emoji: '🔗',
    title: 'Context follows you',
    description: 'What you discussed with ChatGPT is there when you use Claude.',
  },
  {
    emoji: '🚀',
    title: 'Instant setup',
    description: 'Install the extension. Sign in with Google. Done.',
  },
  {
    emoji: '👥',
    title: 'Team knowledge shared',
    description: 'Architecture decisions, coding standards, and learnings available to everyone.',
  },
]

const features = [
  {
    icon: Bot,
    title: 'Works Where You Work',
    description: 'Browser extension captures context from ChatGPT, Claude, Gemini, and more. Automatically.',
    color: 'emerald',
  },
  {
    icon: Search,
    title: 'Instant Semantic Search',
    description: 'Find any memory instantly. Natural language queries return relevant context in milliseconds.',
    color: 'purple',
  },
  {
    icon: Code,
    title: 'IDE Integration',
    description: 'VSCode and Cursor extensions bring memory into your development workflow.',
    color: 'blue',
  },
  {
    icon: Shield,
    title: '100% Private',
    description: 'Your memories are yours. Local-first with optional cloud sync. GDPR compliant.',
    color: 'cyan',
  },
  {
    icon: Users,
    title: 'Team Memory',
    description: 'Share context across your team. Shared workspaces, collaborative memory.',
    color: 'orange',
  },
  {
    icon: Zap,
    title: 'Zero Config',
    description: 'Install and start using it immediately. No API keys needed for basic use.',
    color: 'yellow',
  },
]

const stats = [
  { value: '50K+', label: 'Active Users' },
  { value: '10M+', label: 'Memories Captured' },
  { value: '4', label: 'Browsers Supported' },
  { value: '8+', label: 'AI Platforms' },
]

export default function HomePage() {
  const [copied, setCopied] = useState(false)

  const copyCode = () => {
    navigator.clipboard.writeText('npm install @ai-memory/sdk')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center space-x-2">
              <Brain className="w-8 h-8 text-emerald-400" />
              <span className="text-lg font-bold">AI Memory</span>
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/extension" className="text-gray-300 hover:text-white transition-colors">Extensions</Link>
              <Link href="/docs/getting-started" className="text-gray-300 hover:text-white transition-colors">Docs</Link>
              <Link href="/pricing" className="text-gray-300 hover:text-white transition-colors">Pricing</Link>
            </div>
            <div className="flex items-center space-x-3">
              <Link href="https://dashboard.aimemory.lat/login" className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors">Sign In</Link>
              <Link href="https://dashboard.aimemory.lat/register" className="px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-emerald-500 to-teal-600 rounded-lg hover:from-emerald-600 hover:to-teal-700 transition-all">Get Started</Link>
            </div>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 bg-gradient-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center bg-emerald-600/10 border border-emerald-500/20 rounded-full px-4 py-2 mb-8">
            <Layers className="w-4 h-4 text-emerald-400 mr-2" />
            <span className="text-emerald-400 text-sm font-medium">Universal AI Memory Layer</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Your AI forgets.<br />
            <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
              AI Memory doesn't.
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-3xl mx-auto">
            One memory layer that works everywhere your AI does.<br />
            Browser extension. IDE integration. SDK for developers.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button
              onClick={copyCode}
              className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-gradient-to-r from-emerald-500 to-teal-600 rounded-xl hover:from-emerald-600 hover:to-teal-700 transition-all shadow-lg hover:shadow-emerald-500/25"
            >
              <Terminal className="mr-2 w-5 h-5" />
              {copied ? 'Copied!' : 'npm install @ai-memory/sdk'}
            </button>
            <Link
              href="/extension"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-gray-300 border border-gray-700 rounded-xl hover:bg-gray-800 hover:border-gray-600 transition-all"
            >
              <Download className="mr-2 w-5 h-5" />
              Install Browser Extension
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-3xl font-bold text-white">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-900 border-y border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Browser Extensions for Everyone
          </h2>
          <p className="text-gray-400 mb-12 max-w-2xl mx-auto">
            Install AI Memory on Chrome, Edge, Firefox, or Safari. Free tier includes 1 browser with local storage.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {browsers.map((browser, index) => (
              <div
                key={index}
                className="p-6 rounded-xl border bg-gray-800/50 border-gray-700/50 hover:border-gray-600 transition-colors"
              >
                <browser.icon className={`w-10 h-10 mx-auto mb-3 text-${browser.color}-400`} />
                <p className="text-lg font-semibold text-white">{browser.name}</p>
                <p className="text-sm text-gray-400">{browser.users}</p>
                <span className="inline-block mt-2 px-2 py-1 text-xs bg-emerald-500/20 text-emerald-400 rounded-full">
                  Available
                </span>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <Link
              href="/extension"
              className="inline-flex items-center justify-center px-6 py-3 text-white bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl hover:from-purple-600 hover:to-pink-700 transition-all"
            >
              <Download className="mr-2 w-5 h-5" />
              View All Extensions
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-900 border-y border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Works Everywhere Your AI Works
          </h2>
          <p className="text-gray-400 mb-12 max-w-2xl mx-auto">
            AI Memory connects every AI tool you use into one unified memory layer.
          </p>
          
          <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-4 max-w-5xl mx-auto">
            {integrations.map((item, index) => (
              <div
                key={index}
                className="p-4 rounded-xl border bg-gray-800/50 border-gray-700/50 hover:border-gray-600 transition-colors"
              >
                <item.icon className="w-8 h-8 mx-auto mb-2 text-gray-300" />
                <p className="text-sm font-medium text-white">{item.name}</p>
                <p className="text-xs text-emerald-400 mt-1">✓ Available</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
                The Problem
              </h2>
              <div className="space-y-6">
                {problems.map((problem, index) => (
                  <div key={index} className="bg-red-900/20 border border-red-500/20 rounded-xl p-6">
                    <div className="flex items-start gap-4">
                      <span className="text-3xl">{problem.emoji}</span>
                      <div>
                        <h3 className="font-semibold text-white mb-1">{problem.title}</h3>
                        <p className="text-gray-400 text-sm">{problem.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
                The Solution
              </h2>
              <div className="space-y-6">
                {solutions.map((solution, index) => (
                  <div key={index} className="bg-emerald-900/20 border border-emerald-500/20 rounded-xl p-6">
                    <div className="flex items-start gap-4">
                      <span className="text-3xl">{solution.emoji}</span>
                      <div>
                        <h3 className="font-semibold text-white mb-1">{solution.title}</h3>
                        <p className="text-gray-400 text-sm">{solution.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-900 border-y border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Everything You Need
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              From zero-config browser extension to powerful SDK for developers.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50">
                <div className={`w-12 h-12 rounded-xl bg-${feature.color}-500/20 flex items-center justify-center mb-4`}>
                  <feature.icon className={`w-6 h-6 text-${feature.color}-400`} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center bg-purple-600/10 border border-purple-500/20 rounded-full px-4 py-2 mb-6">
                <Code2 className="w-4 h-4 text-purple-400 mr-2" />
                <span className="text-purple-400 text-sm font-medium">For Developers</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                SDK-First Architecture
              </h2>
              <p className="text-gray-400 mb-8 text-lg">
                One SDK, every platform. TypeScript-native, edge-runtime-ready, and production-ready.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <Check className="w-5 h-5 text-emerald-400 mr-3" />
                  <span className="text-gray-300">5KB gzipped - zero bloat</span>
                </div>
                <div className="flex items-center">
                  <Check className="w-5 h-5 text-emerald-400 mr-3" />
                  <span className="text-gray-300">Edge, Node, Serverless compatible</span>
                </div>
                <div className="flex items-center">
                  <Check className="w-5 h-5 text-emerald-400 mr-3" />
                  <span className="text-gray-300">Full TypeScript support</span>
                </div>
                <div className="flex items-center">
                  <Check className="w-5 h-5 text-emerald-400 mr-3" />
                  <span className="text-gray-300">Workspaces, teams, enterprise</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-900/80 border border-gray-800 rounded-2xl overflow-hidden">
              <div className="flex items-center px-4 py-3 bg-gray-800/50 border-b border-gray-700">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <span className="ml-4 text-gray-400 text-sm">example.ts</span>
              </div>
              <pre className="p-6 overflow-x-auto text-sm">
                <code className="text-gray-300">{`import { AIMemoryClient } from '@ai-memory/sdk';

const memory = new AIMemoryClient({
  apiKey: process.env.AIMEMORY_API_KEY,
  workspaceId: 'ws_xxx'
});

// Capture code decisions
await memory.capture(
  'User decided to use JWT with refresh tokens',
  { type: 'decision', tags: ['auth'] }
);

// Retrieve when needed
const context = await memory.retrieveContext(
  'What auth approach did we choose?'
);`}</code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-dark">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center bg-cyan-600/10 border border-cyan-500/20 rounded-full px-4 py-2 mb-6">
            <Zap2 className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">Key Differentiator</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            AI Memory is not a feature.<br />
            <span className="text-cyan-400">It's infrastructure.</span>
          </h2>
          <p className="text-xl text-gray-400">
            Stop building memory into every AI tool you use.<br />
            Build once. Use everywhere.
          </p>
        </div>
      </section>

      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Simple Architecture
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Built for production. Extensible for the future.
            </p>
          </div>
          
          <div className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700/50">
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto rounded-2xl bg-purple-500/20 flex items-center justify-center mb-4">
                  <Boxes className="w-8 h-8 text-purple-400" />
                </div>
                <h4 className="font-semibold text-white mb-2">Extensions</h4>
                <p className="text-sm text-gray-400">Chrome, Edge, Firefox, Safari</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto rounded-2xl bg-emerald-500/20 flex items-center justify-center mb-4">
                  <ShieldCheck className="w-8 h-8 text-emerald-400" />
                </div>
                <h4 className="font-semibold text-white mb-2">@ai-memory/sdk</h4>
                <p className="text-sm text-gray-400">Unified TypeScript SDK</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto rounded-2xl bg-cyan-500/20 flex items-center justify-center mb-4">
                  <Server className="w-8 h-8 text-cyan-400" />
                </div>
                <h4 className="font-semibold text-white mb-2">REST API</h4>
                <p className="text-sm text-gray-400">Events, Context, Memories</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto rounded-2xl bg-orange-500/20 flex items-center justify-center mb-4">
                  <Database className="w-8 h-8 text-orange-400" />
                </div>
                <h4 className="font-semibold text-white mb-2">pgvector</h4>
                <p className="text-sm text-gray-400">Semantic search, relations</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-dark">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to build persistent intelligence?
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Join thousands of developers building AI-powered workflows with AI Memory.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://dashboard.aimemory.lat/register"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-gradient-to-r from-emerald-500 to-teal-600 rounded-xl hover:from-emerald-600 hover:to-teal-700 transition-all shadow-lg"
            >
              Start Free
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              href="/docs/getting-started"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-gray-300 border border-gray-700 rounded-xl hover:bg-gray-800 transition-all"
            >
              <BookOpen className="mr-2 w-5 h-5" />
              Read the Docs
            </Link>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 border-t border-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Brain className="w-6 h-6 text-emerald-400" />
                <span className="text-lg font-bold text-white">AI Memory</span>
              </div>
              <p className="text-gray-400 text-sm">
                Universal persistent memory layer for developers, teams, and AI-powered workflows.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link href="/extension">Extensions</Link></li>
                <li><Link href="/pricing">Pricing</Link></li>
                <li><Link href="/docs/getting-started">Documentation</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Resources</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link href="/docs/getting-started">Getting Started</Link></li>
                <li><Link href="/docs/api">API Reference</Link></li>
                <li><Link href="https://github.com/gpitrella/ai-memory">GitHub</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link href="/privacy">Privacy</Link></li>
                <li><Link href="/terms">Terms</Link></li>
                <li><Link href="/cookies">Cookies</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
            © 2024-2026 AI Memory. All rights reserved. Owned by Gabriel Pitrella.
          </div>
        </div>
      </footer>
    </div>
  )
}
