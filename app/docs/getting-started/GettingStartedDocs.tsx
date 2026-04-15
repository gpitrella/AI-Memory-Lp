'use client'

import { useState } from 'react'
import { ArrowLeft, BookOpen, Code, Brain } from 'lucide-react'
import Link from 'next/link'

const browserInstallLinks = [
  { name: 'Chrome', href: 'https://chrome.google.com/webstore' },
  { name: 'Edge', href: 'https://microsoftedge.microsoft.com/addons/MicrosoftEdge' },
  { name: 'Firefox', href: 'https://addons.mozilla.org/firefox/' },
  { name: 'Safari', href: 'https://apps.apple.com/' },
]

export default function GettingStartedDocs() {
  const [audience, setAudience] = useState<'users' | 'developers'>('users')

  return (
    <div className="min-h-screen bg-gradient-dark">
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
              <Link href="/" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
                Home
              </Link>
              <Link href="/pricing" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
                Pricing
              </Link>
              <Link href="/docs/getting-started" className="text-sm font-medium text-blue-400">
                Docs
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/" className="inline-flex items-center text-gray-400 hover:text-white transition-colors mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>

          <div className="grid lg:grid-cols-4 gap-8">
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-2">
                <Link
                  href="/docs/getting-started"
                  className="flex items-center px-4 py-3 bg-blue-600/10 border border-blue-500/20 text-blue-400 rounded-xl hover:bg-blue-600/20 transition-colors"
                >
                  <BookOpen className="w-5 h-5 mr-3" />
                  Getting Started
                </Link>
                <Link
                  href="/docs/api"
                  className="flex items-center px-4 py-3 text-gray-400 hover:bg-gray-800/50 hover:text-white rounded-xl transition-colors"
                >
                  <Code className="w-5 h-5 mr-3" />
                  API Reference
                </Link>
              </div>
            </div>

            <div className="lg:col-span-3">
              <div className="space-y-8">
                <div className="bg-gray-800/30 border border-gray-700/50 rounded-2xl p-8">
                  <h1 className="text-4xl font-bold text-white mb-4">Getting Started with AI Memory</h1>
                  <p className="text-xl text-gray-400 leading-relaxed">
                    Persistent memory that follows you across ChatGPT, Claude, Gemini, and your IDE — browser-first for
                    everyone, SDK for developers.
                  </p>
                </div>

                <div className="flex gap-2 p-1 bg-gray-800/50 rounded-xl border border-gray-700/50 w-fit flex-wrap">
                  <button
                    type="button"
                    onClick={() => setAudience('users')}
                    className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                      audience === 'users'
                        ? 'bg-emerald-600 text-white'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    For Users — Install Browser Extension
                  </button>
                  <button
                    type="button"
                    onClick={() => setAudience('developers')}
                    className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                      audience === 'developers'
                        ? 'bg-purple-600 text-white'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    &lt;/&gt; For Developers — Quick Start
                  </button>
                </div>

                {audience === 'users' && (
                  <div className="space-y-8">
                    <div className="bg-gray-800/30 border border-gray-700/50 rounded-2xl p-6">
                      <h2 className="text-2xl font-semibold text-white mb-2">Install the Browser Extension</h2>
                      <p className="text-gray-400 mb-6">
                        AI Memory works directly in your browser — no coding required. Your conversations gain{' '}
                        <span className="text-emerald-400 font-medium">persistent semantic memory</span> automatically.
                      </p>

                      <h3 className="text-lg font-medium text-white mb-3">Step 1: Choose your browser</h3>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                        {browserInstallLinks.map((b) => (
                          <a
                            key={b.name}
                            href={b.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center px-4 py-3 rounded-xl bg-emerald-600/20 border border-emerald-500/40 text-emerald-300 text-sm font-medium hover:bg-emerald-600/30 transition-colors"
                          >
                            Install for {b.name}
                          </a>
                        ))}
                      </div>

                      <h3 className="text-lg font-medium text-white mb-3">Step 2: Sign in with Google</h3>
                      <p className="text-gray-400 mb-8">
                        Click the AI Memory icon in your toolbar and sign in with your Google account to sync your
                        workspace.
                      </p>

                      <h3 className="text-lg font-medium text-white mb-3">Step 3: Start chatting</h3>
                      <p className="text-gray-400">
                        Open ChatGPT, Claude, Gemini, or Perplexity. AI Memory captures context in the background so your
                        next session still remembers what mattered.
                      </p>
                    </div>
                  </div>
                )}

                {audience === 'developers' && (
                  <div className="space-y-8">
                    <div className="bg-gray-800/30 border border-gray-700/50 rounded-2xl p-6">
                      <h2 className="text-2xl font-semibold text-white mb-4 flex items-center">
                        <span className="w-8 h-8 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center mr-3 text-sm font-bold">
                          1
                        </span>
                        Installation
                      </h2>
                      <div className="bg-gray-900/80 border border-gray-700 rounded-xl p-4">
                        <pre className="text-gray-100 font-mono text-sm">npm install @aimemory/sdk</pre>
                      </div>
                    </div>

                    <div className="bg-gray-800/30 border border-gray-700/50 rounded-2xl p-6">
                      <h2 className="text-2xl font-semibold text-white mb-4 flex items-center">
                        <span className="w-8 h-8 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center mr-3 text-sm font-bold">
                          2
                        </span>
                        Quick Start
                      </h2>
                      <div className="bg-gray-900/80 border border-gray-700 rounded-xl overflow-hidden">
                        <div className="flex items-center px-4 py-3 bg-gray-800/50 border-b border-gray-700">
                          <div className="flex space-x-2">
                            <div className="w-3 h-3 rounded-full bg-red-500" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500" />
                            <div className="w-3 h-3 rounded-full bg-green-500" />
                          </div>
                          <span className="ml-4 text-gray-400 text-sm">basic-usage.ts</span>
                        </div>
                        <pre className="p-6 overflow-x-auto text-sm text-gray-300 font-mono leading-relaxed">
                          {`import { AIMemoryClient } from '@aimemory/sdk';

const memory = new AIMemoryClient({
  apiKey: process.env.AIMEMORY_API_KEY!,
  workspaceId: process.env.AIMEMORY_WORKSPACE_ID,
});

await memory.capture(
  'User prefers REST over GraphQL for public APIs',
  {
    workspaceId: process.env.AIMEMORY_WORKSPACE_ID!,
    organizationId: 'org_xxx',
    userId: 'user-123',
    source: 'api',
    type: 'preference',
    tags: ['api', 'architecture'],
  }
);

const context = await memory.retrieveContext(
  'What API style does the user prefer?',
  process.env.AIMEMORY_WORKSPACE_ID!,
  'org_xxx',
  'user-123'
);
console.log(context.context);`}
                        </pre>
                      </div>
                    </div>

                    <div className="bg-gray-800/30 border border-gray-700/50 rounded-2xl p-6">
                      <h2 className="text-2xl font-semibold text-white mb-6 flex items-center">
                        <span className="w-8 h-8 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center mr-3 text-sm font-bold">
                          3
                        </span>
                        Core Concepts
                      </h2>

                      <div className="space-y-6">
                        <div>
                          <h3 className="text-lg font-medium text-blue-400 mb-3">Memory Types</h3>
                          <div className="grid md:grid-cols-2 gap-3">
                            {[
                              { type: 'fact', desc: 'Factual information about users' },
                              { type: 'preference', desc: 'User preferences and likes' },
                              { type: 'conversation', desc: 'Chat messages and dialogue' },
                              { type: 'instruction', desc: 'Rules and guidelines to follow' },
                              { type: 'context', desc: 'General context and background' },
                            ].map((item, i) => (
                              <div key={i} className="flex items-start p-3 bg-gray-900/50 rounded-lg">
                                <span className="px-2 py-1 bg-blue-600/20 text-blue-400 text-xs font-mono rounded mr-3">
                                  {item.type}
                                </span>
                                <span className="text-gray-400 text-sm">{item.desc}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h3 className="text-lg font-medium text-blue-400 mb-3">Search & Recall</h3>
                          <div className="bg-gray-900/80 border border-gray-700 rounded-xl p-4">
                            <pre className="text-gray-300 font-mono text-sm">
                              {`const results = await memory.search(
  'deployment preferences',
  process.env.AIMEMORY_WORKSPACE_ID!,
  { limit: 10, threshold: 0.7 }
);`}
                            </pre>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-800/30 border border-gray-700/50 rounded-2xl p-6">
                      <h2 className="text-2xl font-semibold text-white mb-4 flex items-center">
                        <span className="w-8 h-8 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center mr-3 text-sm font-bold">
                          4
                        </span>
                        Configuration
                      </h2>
                      <div className="bg-gray-900/80 border border-gray-700 rounded-xl p-4">
                        <pre className="text-gray-300 font-mono text-sm">
                          {`// Use AIMEMORY_API_KEY and AIMEMORY_WORKSPACE_ID in your environment.
const memory = new AIMemoryClient({
  apiKey: process.env.AIMEMORY_API_KEY!,
  workspaceId: process.env.AIMEMORY_WORKSPACE_ID,
  apiUrl: 'https://api.aimemory.lat',
  maxRetries: 3,
  timeout: 30000,
});`}
                        </pre>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-emerald-900/30 to-blue-900/30 border border-gray-700/50 rounded-2xl p-6">
                      <h2 className="text-2xl font-semibold text-white mb-4">Next Steps</h2>
                      <p className="text-gray-400 mb-4">
                        Explore the API reference for REST endpoints, stability markers, and plan limits.
                      </p>
                      <div className="flex flex-wrap gap-3">
                        <Link
                          href="/docs/api"
                          className="inline-flex items-center px-4 py-2 bg-emerald-600/20 text-emerald-400 rounded-lg hover:bg-emerald-600/30 transition-colors"
                        >
                          <Code className="w-4 h-4 mr-2" />
                          API Reference
                        </Link>
                        <Link
                          href="https://github.com/gpitrella/ai-memory"
                          target="_blank"
                          className="inline-flex items-center px-4 py-2 bg-gray-800 text-gray-300 rounded-lg hover:bg-gray-700 transition-colors"
                        >
                          View on GitHub
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-gray-900 border-t border-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-500 text-sm">
          © 2024-2026 AI Memory. MIT license.
        </div>
      </footer>
    </div>
  )
}
