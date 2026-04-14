'use client'

import { useState } from 'react'
import { Code, Database, Search, Users, Zap, Shield, ArrowRight, Github, Terminal, BookOpen, Check, Brain, Sparkles, Layers, Lock, Globe, Cpu, Rocket, Star, DollarSign, Clock, TrendingUp, MessageSquare, ChevronRight, ArrowDown, Server, DatabaseZap, Bot, RefreshCw } from 'lucide-react'
import Link from 'next/link'

const features = [
  {
    icon: Brain,
    title: 'Memory That Never Forgets',
    description: 'Persistent semantic memory for any AI. Your users preferences, history, and context - always available.',
  },
  {
    icon: Search,
    title: 'Instant Recall',
    description: 'Vector-based semantic search finds the right memory in milliseconds. No more cold starts.',
  },
  {
    icon: Layers,
    title: 'Multi-Layer Context',
    description: 'From individual preferences to team knowledge. Scales from solo devs to enterprise organizations.',
  },
  {
    icon: Zap,
    title: 'TypeScript Native',
    description: 'Full TypeScript support with complete type definitions. Works everywhere Node.js runs.',
  },
  {
    icon: Lock,
    title: 'Secure by Default',
    description: 'API key authentication, rate limiting, and encrypted storage built-in from day one.',
  },
  {
    icon: Globe,
    title: 'Works Everywhere',
    description: 'NPM package, Chrome extension, or cloud API. Your AI remembers on any platform.',
  },
]

const differentiators = [
  {
    icon: Sparkles,
    title: 'Monetization-Ready',
    description: 'Your users pay per request. You earn. Built-in billing, API keys, and plans.',
  },
  {
    icon: Cpu,
    title: 'Memory Robots (Enterprise)',
    description: 'AI agents that automatically learn from conversations and share knowledge across teams.',
  },
  {
    icon: Users,
    title: 'Shared Team Memory',
    description: 'Everyone on the team sees and uses the same knowledge base. No more information silos.',
  },
]

const stats = [
  { value: '10x', label: 'Faster Development', description: 'With persistent memory' },
  { value: '85%', label: 'Cost Reduction', description: 'In AI prompt tokens' },
  { value: '60%', label: 'Better Responses', description: 'With context awareness' },
  { value: '24/7', label: 'Always Learning', description: 'Continuous improvement' },
]

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'CTO',
    company: 'TechFlow Inc.',
    avatar: 'SC',
    rating: 5,
    text: 'AI Memory transformed our customer support AI. It now remembers every customer interaction, reducing ticket resolution time by 70%.',
  },
  {
    name: 'Marcus Rodriguez',
    role: 'Lead Developer',
    company: 'DevTools.io',
    avatar: 'MR',
    rating: 5,
    text: 'The monetization feature alone is worth it. We went from a free tool to a $5K MRR product in 3 months. Our users love the memory capabilities.',
  },
  {
    name: 'Elena Kowalski',
    role: 'Product Manager',
    company: 'AI Startup',
    avatar: 'EK',
    rating: 5,
    text: 'Finally, a memory solution that scales. We went from 100 users to 10,000 without rewriting anything. The API is flawless.',
  },
]

const savings = [
  {
    icon: DollarSign,
    title: 'Token Savings',
    stat: '85%',
    description: 'Reduce AI prompt costs by providing context instead of repeating information',
    example: 'Instead of sending 500 tokens of context every time, send 50 + AI Memory reference',
  },
  {
    icon: Clock,
    title: 'Time Savings',
    stat: '10hrs',
    description: 'Per developer per week in re-explaining context to AI',
    example: 'Focus on building features instead of copying/pasting conversation history',
  },
  {
    icon: TrendingUp,
    title: 'Revenue Potential',
    stat: '$5K+',
    description: 'Monthly recurring revenue from monetizing your AI memory layer',
    example: 'Charge $0.001 per memory recall - 100 users at 1000 recalls/day = $100/day',
  },
  {
    icon: MessageSquare,
    title: 'Better UX',
    stat: '95%',
    description: 'User satisfaction improvement with persistent memory',
    example: 'Users no longer need to repeat their preferences in every conversation',
  },
]

const codeExample = `import { createAIMemory } from 'ai-memory';

const memory = createAIMemory({
  apiKey: process.env.IA_MEMORY_API_KEY,
  maxMemories: 50000,
});

// Your user chats with your AI
await memory.remember('User prefers dark mode', {
  userId: 'user-123',
  tags: ['preferences', 'ui'],
});

// Next conversation - AI remembers!
const context = await memory.recall('user preferences');
// → "The user prefers dark mode"

// Build context for your LLM
const prompt = await memory.getContext({
  query: 'What do we know about this user?',
  userId: 'user-123',
});`

const trustedBy = [
  { name: 'TechFlow', logo: 'TF' },
  { name: 'DevTools', logo: 'DT' },
  { name: 'AI Labs', logo: 'AL' },
  { name: 'CloudTech', logo: 'CT' },
  { name: 'DataPro', logo: 'DP' },
]

export default function Home() {
  const [copied, setCopied] = useState(false)

  const copyCode = () => {
    navigator.clipboard.writeText('npm install ai-memory')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-3 group">
                <div className="relative">
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-500 flex items-center justify-center">
                    <Brain className="w-5 h-5 text-white" />
                  </div>
                </div>
                <span className="text-xl font-bold text-gradient">AI Memory</span>
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="#features" className="text-sm font-medium text-gray-300 hover:text-white transition-colors relative group">
                Features
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-500 to-cyan-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link href="#how-it-works" className="text-sm font-medium text-gray-300 hover:text-white transition-colors relative group">
                How It Works
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-500 to-cyan-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link href="#pricing" className="text-sm font-medium text-gray-300 hover:text-white transition-colors relative group">
                Pricing
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-500 to-cyan-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link href="/extension" className="text-sm font-medium text-gray-300 hover:text-white transition-colors relative group">
                Extensions
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-500 to-cyan-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link href="/docs/getting-started" className="text-sm font-medium text-gray-300 hover:text-white transition-colors relative group">
                Docs
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-500 to-cyan-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link href="https://github.com/gpitrella/ai-memory" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Github className="w-5 h-5" />
              </Link>
            </div>
            <div className="flex items-center space-x-3">
              <Link
                href="https://dashboard.aimemory.dev/login"
                className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors"
              >
                Sign In
              </Link>
              <Link
                href="https://dashboard.aimemory.dev/register"
                className="px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-emerald-500 to-teal-600 rounded-lg hover:from-emerald-600 hover:to-teal-700 transition-all"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="inline-flex items-center bg-emerald-600/10 border border-emerald-500/20 rounded-full px-4 py-2 mb-6">
                <Sparkles className="w-4 h-4 text-emerald-400 mr-2" />
                <span className="text-emerald-400 text-sm font-medium">The Monetization-First Memory Layer</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Give Every AI <br />
                <span className="text-gradient">Persistent Memory</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-400 mb-8 leading-relaxed">
                The only memory system that remembers AND monetizes. 
                Built-in billing, API keys, and plans - so you can focus on building.
              </p>
              <div className="space-y-3 mb-10">
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                  <span className="text-gray-300">Semantic search with vector embeddings</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                  <span className="text-gray-300">Monetization-ready with Polar.sh billing</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                  <span className="text-gray-300">From individual to enterprise scale</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <button
                  onClick={copyCode}
                  className="group relative inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-gradient-to-r from-emerald-500 to-teal-600 rounded-xl hover:from-emerald-600 hover:to-teal-700 transition-all duration-300 shadow-lg hover:shadow-emerald-500/25"
                >
                  <Terminal className="mr-2 w-5 h-5" />
                  {copied ? 'Copied!' : 'npm install ai-memory'}
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <Link
                  href="/docs/getting-started"
                  className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-gray-300 border border-gray-700 rounded-xl hover:bg-gray-800 hover:border-gray-600 transition-all duration-300"
                >
                  <BookOpen className="mr-2 w-5 h-5" />
                  View Documentation
                </Link>
              </div>
              <div className="flex flex-wrap gap-6 text-sm text-gray-500">
                <div className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>1,000+ Active Developers</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-blue-400" />
                  <span>MIT Licensed</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-purple-400" />
                  <span>Polar.sh Powered</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/20 via-teal-900/20 to-cyan-900/20 rounded-3xl"></div>
              <div className="relative bg-gray-900/80 border border-gray-800 rounded-2xl overflow-hidden backdrop-blur-sm">
                <div className="flex items-center px-4 py-3 bg-gray-800/50 border-b border-gray-700">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <span className="ml-4 text-gray-400 text-sm">example.ts</span>
                </div>
                <pre className="p-6 overflow-x-auto">
                  <code className="text-sm text-gray-300 font-mono leading-relaxed">{codeExample}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-900/50 border-y border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-gradient bg-gradient-to-r from-emerald-400 to-cyan-400 mb-2">
                  {stat.value}
                </div>
                <div className="text-lg font-semibold text-white mb-1">{stat.label}</div>
                <div className="text-sm text-gray-500">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted By */}
      <section className="py-12 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-500 text-sm mb-8">Trusted by innovative teams worldwide</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {trustedBy.map((company, index) => (
              <div key={index} className="flex items-center space-x-2 text-gray-400">
                <div className="w-8 h-8 rounded-lg bg-gray-800 flex items-center justify-center text-sm font-bold">
                  {company.logo}
                </div>
                <span className="text-sm font-medium">{company.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Differentiators Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why <span className="text-gradient">AI Memory</span>?
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Not just another memory library. The only solution with built-in monetization.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {differentiators.map((item, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-gradient-to-br from-emerald-900/30 to-teal-900/30 border border-emerald-500/20"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-emerald-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Everything You Need for <span className="text-gradient">AI Memory</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              From simple key-value storage to enterprise-grade shared knowledge bases.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group p-6 rounded-2xl bg-gray-800/30 border border-gray-700/50 hover:border-gray-600/70 hover:bg-gray-800/50 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-6 h-6 text-emerald-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works - System Diagram */}
      <section id="how-it-works" className="py-20 bg-gradient-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              How <span className="text-gradient">AI Memory</span> Works
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              A complete memory system that seamlessly integrates with your application
            </p>
          </div>

          {/* System Flow Diagram */}
          <div className="relative mb-16">
            {/* Background Grid */}
            <div className="absolute inset-0 bg-gradient-to-b from-emerald-900/10 to-cyan-900/10 rounded-3xl"></div>
            
            <div className="relative bg-gray-900/60 backdrop-blur-sm border border-gray-800 rounded-3xl p-8 md:p-12">
              {/* Flow Diagram */}
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 items-center">
                {/* User/App */}
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-blue-500/30 to-blue-600/30 border border-blue-500/50 flex items-center justify-center mb-3">
                    <Globe className="w-10 h-10 text-blue-400" />
                  </div>
                  <h4 className="font-semibold text-white text-sm">Your App</h4>
                  <p className="text-xs text-gray-500">Chatbot / Extension</p>
                </div>

                {/* Arrow */}
                <div className="hidden lg:flex justify-center">
                  <ArrowRight className="w-6 h-6 text-gray-600" />
                </div>
                <div className="lg:hidden flex justify-center py-2">
                  <ArrowDown className="w-6 h-6 text-gray-600" />
                </div>

                {/* AI Memory API */}
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-emerald-500/30 to-emerald-600/30 border border-emerald-500/50 flex items-center justify-center mb-3 relative">
                    <Brain className="w-10 h-10 text-emerald-400" />
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-500 rounded-full animate-pulse"></div>
                  </div>
                  <h4 className="font-semibold text-white text-sm">AI Memory</h4>
                  <p className="text-xs text-gray-500">API & Storage</p>
                </div>

                {/* Arrow */}
                <div className="hidden lg:flex justify-center">
                  <ArrowRight className="w-6 h-6 text-gray-600" />
                </div>
                <div className="lg:hidden flex justify-center py-2">
                  <ArrowDown className="w-6 h-6 text-gray-600" />
                </div>

                {/* LLM */}
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-purple-500/30 to-purple-600/30 border border-purple-500/50 flex items-center justify-center mb-3">
                    <Bot className="w-10 h-10 text-purple-400" />
                  </div>
                  <h4 className="font-semibold text-white text-sm">LLM</h4>
                  <p className="text-xs text-gray-500">GPT / Claude / Gemini</p>
                </div>
              </div>

              {/* Flow Steps */}
              <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700/50">
                  <div className="flex items-center mb-2">
                    <div className="w-6 h-6 rounded-full bg-blue-500/30 flex items-center justify-center mr-2">
                      <span className="text-blue-400 text-xs font-bold">1</span>
                    </div>
                    <span className="text-white text-sm font-medium">User Input</span>
                  </div>
                  <p className="text-gray-400 text-xs">User chats with your AI application</p>
                </div>

                <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700/50">
                  <div className="flex items-center mb-2">
                    <div className="w-6 h-6 rounded-full bg-emerald-500/30 flex items-center justify-center mr-2">
                      <span className="text-emerald-400 text-xs font-bold">2</span>
                    </div>
                    <span className="text-white text-sm font-medium">remember()</span>
                  </div>
                  <p className="text-gray-400 text-xs">Store context, preferences & history</p>
                </div>

                <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700/50">
                  <div className="flex items-center mb-2">
                    <div className="w-6 h-6 rounded-full bg-emerald-500/30 flex items-center justify-center mr-2">
                      <span className="text-emerald-400 text-xs font-bold">3</span>
                    </div>
                    <span className="text-white text-sm font-medium">recall()</span>
                  </div>
                  <p className="text-gray-400 text-xs">Retrieve relevant memories instantly</p>
                </div>

                <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700/50">
                  <div className="flex items-center mb-2">
                    <div className="w-6 h-6 rounded-full bg-purple-500/30 flex items-center justify-center mr-2">
                      <span className="text-purple-400 text-xs font-bold">4</span>
                    </div>
                    <span className="text-white text-sm font-medium">Context + LLM</span>
                  </div>
                  <p className="text-gray-400 text-xs">Enriched response with memory</p>
                </div>
              </div>
            </div>
          </div>

          {/* Architecture Details */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-800/30 rounded-2xl p-6 border border-gray-700/50">
              <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center mb-4">
                <DatabaseZap className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Vector Storage</h3>
              <p className="text-gray-400 text-sm">
                Semantic embeddings stored with Pinecone, Redis, or PostgreSQL. Sub-millisecond retrieval at any scale.
              </p>
            </div>

            <div className="bg-gray-800/30 rounded-2xl p-6 border border-gray-700/50">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center mb-4">
                <Server className="w-6 h-6 text-emerald-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Smart Indexing</h3>
              <p className="text-gray-400 text-sm">
                Automatic tagging, categorization, and relevance scoring. Memories are organized and ready when needed.
              </p>
            </div>

            <div className="bg-gray-800/30 rounded-2xl p-6 border border-gray-700/50">
              <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center mb-4">
                <RefreshCw className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Context Injection</h3>
              <p className="text-gray-400 text-sm">
                Seamless integration with any LLM. Just add the context to your prompt - we handle the rest.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Savings Calculator */}
      <section className="py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              The <span className="text-gradient">Real Value</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              See how AI Memory saves time, money, and improves your AI
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {savings.map((item, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-gray-800/50 border border-gray-700/50"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-emerald-400" />
                </div>
                <div className="text-3xl font-bold text-gradient bg-gradient-to-r from-emerald-400 to-cyan-400 mb-2">
                  {item.stat}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm mb-3">{item.description}</p>
                <p className="text-xs text-gray-500 italic">{item.example}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Extensions Promo */}
      <section className="py-16 bg-gradient-dark border-y border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center">
                <Globe className="w-6 h-6 text-purple-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Also Available as Browser Extensions</h3>
                <p className="text-gray-400 text-sm">Chrome, Edge, Firefox & Safari - Get memory for any AI</p>
              </div>
            </div>
            <Link
              href="/extension"
              className="inline-flex items-center px-6 py-3 text-base font-medium text-white bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl hover:from-purple-600 hover:to-pink-700 transition-all duration-300"
            >
              <Rocket className="mr-2 w-5 h-5" />
              Explore Extensions
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Loved by <span className="text-gradient">Developers</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              See what developers are saying about AI Memory
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-gray-800/50 border border-gray-700/50"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.text}"</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center text-sm font-bold text-emerald-400 mr-3">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-medium text-white">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role} at {testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Link */}
      <section id="pricing" className="py-20 bg-gradient-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Simple, <span className="text-gradient">Transparent</span> Pricing
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Start free, scale as you grow. All plans include core memory features.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-xl text-gray-900 bg-gradient-to-r from-emerald-400 to-cyan-400 hover:from-emerald-500 hover:to-cyan-500 transition-all shadow-lg"
            >
              View All Plans
              <ChevronRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              href="/business"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-xl text-white border-2 border-cyan-500 hover:bg-cyan-500/10 transition-colors"
            >
              Business Plan - $399/mo
            </Link>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
            <span>Free forever tier</span>
            <span>•</span>
            <span>14-day free trials</span>
            <span>•</span>
            <span>No credit card required</span>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-900/50 via-gray-900 to-cyan-900/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Give Your AI Memory?
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Join thousands of developers building AI applications that never forget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={copyCode}
              className="inline-flex items-center px-8 py-4 text-lg font-medium rounded-xl text-gray-900 bg-white hover:bg-gray-100 transition-colors"
            >
              <Terminal className="mr-2 w-5 h-5" />
              npm install ai-memory
            </button>
            <Link
              href="https://github.com/gpitrella/ai-memory"
              target="_blank"
              className="inline-flex items-center px-8 py-4 text-lg font-medium rounded-xl text-white border-2 border-gray-600 hover:border-white hover:bg-white/10 transition-colors"
            >
              <Github className="mr-2 w-5 h-5" />
              Star on GitHub
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="flex items-center mb-4 md:mb-0">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-500 flex items-center justify-center mr-3">
                <Brain className="w-4 h-4 text-white" />
              </div>
              <span className="text-lg font-bold text-white">AI Memory</span>
              <span className="ml-3 px-2 py-1 text-xs font-medium bg-gray-800 text-gray-400 rounded">
                Open Source
              </span>
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <Link href="https://github.com/gpitrella/ai-memory" target="_blank" className="text-gray-400 hover:text-white transition-colors">GitHub</Link>
              <Link href="https://npmjs.com/package/ai-memory" target="_blank" className="text-gray-400 hover:text-white transition-colors">npm</Link>
              <Link href="/extension" className="text-gray-400 hover:text-white transition-colors">Extensions</Link>
              <Link href="/pricing" className="text-gray-400 hover:text-white transition-colors">Pricing</Link>
              <Link href="/business" className="text-cyan-400 hover:text-cyan-300 transition-colors">Business Plan</Link>
              <Link href="/docs/getting-started" className="text-gray-400 hover:text-white transition-colors">Docs</Link>
              <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">Terms</Link>
              <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">Privacy</Link>
            </div>
          </div>
          <div className="pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
            © 2024-2026 AI Memory. Open source MIT license. Powered by Polar.sh
          </div>
        </div>
      </footer>
    </main>
  )
}
