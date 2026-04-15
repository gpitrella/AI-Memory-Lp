import type { Metadata } from 'next'
import { ArrowLeft, Code, BookOpen, Zap, Layers, Brain } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'API Reference - AI Memory',
  description: 'Complete API reference for AI Memory - Persistent Memory for AI Applications',
}

const methods = [
  { name: 'remember(content, metadata)', desc: 'Add a memory with content and optional metadata' },
  { name: 'rememberFact(content, metadata)', desc: 'Add a factual memory with fact type' },
  { name: 'rememberPreference(content, metadata)', desc: 'Add a user preference memory' },
  { name: 'rememberConversation(content, role, metadata)', desc: 'Add a conversation message (user/assistant)' },
  { name: 'recall(query, options)', desc: 'Search memories by semantic similarity with filters' },
  { name: 'getContext(query)', desc: 'Build optimized context for LLM with token management' },
  { name: 'getMemory(id)', desc: 'Retrieve a specific memory by its ID' },
  { name: 'updateMemory(id, updates)', desc: 'Update content or metadata of an existing memory' },
  { name: 'forget(id)', desc: 'Delete a memory permanently' },
  { name: 'getMemoriesByUser(userId)', desc: 'Get all memories for a specific user' },
  { name: 'getMemoriesByType(type)', desc: 'Get memories filtered by type (fact, preference, etc.)' },
  { name: 'getStats()', desc: 'Get memory statistics and usage metrics' },
  { name: 'exportData()', desc: 'Export all memories as JSON for backup' },
  { name: 'importData(memories)', desc: 'Import memories from JSON' },
]

export default function APIPage() {
  return (
    <div className="min-h-screen bg-gradient-dark">
      {/* Navigation */}
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
              <Link href="/" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Home</Link>
              <Link href="/#features" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Features</Link>
              <Link href="/#pricing" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Pricing</Link>
              <Link href="/docs/getting-started" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Docs</Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Link */}
          <Link href="/" className="inline-flex items-center text-gray-400 hover:text-white transition-colors mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>

          <div className="grid lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-2">
                <Link href="/docs/getting-started" className="flex items-center px-4 py-3 text-gray-400 hover:bg-gray-800/50 hover:text-white rounded-xl transition-colors">
                  <BookOpen className="w-5 h-5 mr-3" />
                  Getting Started
                </Link>
                <Link href="/docs/api" className="flex items-center px-4 py-3 bg-blue-600/10 border border-blue-500/20 text-blue-400 rounded-xl hover:bg-blue-600/20 transition-colors">
                  <Code className="w-5 h-5 mr-3" />
                  API Reference
                </Link>
              </div>
            </div>

            {/* Content */}
            <div className="lg:col-span-3 space-y-8">
              {/* Header */}
              <div className="bg-gray-800/30 border border-gray-700/50 rounded-2xl p-8">
                <h1 className="text-4xl font-bold text-white mb-4">API Reference</h1>
                <p className="text-xl text-gray-400 leading-relaxed">
                  Complete reference for all AI Memory methods, classes, and utilities.
                </p>
              </div>

              {/* AIMemory Class */}
              <div className="bg-gray-800/30 border border-gray-700/50 rounded-2xl p-6">
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center mr-4">
                    <Layers className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-semibold text-white">AIMemory Class</h2>
                    <p className="text-gray-400 text-sm">Main class for managing persistent memory</p>
                  </div>
                </div>

                <div className="overflow-hidden rounded-xl border border-gray-700/50">
                  <table className="min-w-full divide-y divide-gray-700">
                    <thead className="bg-gray-800/50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Method</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Description</th>
                      </tr>
                    </thead>
                    <tbody className="bg-gray-900/30 divide-y divide-gray-700/50">
                      {methods.map((method, index) => (
                        <tr key={index} className="hover:bg-gray-800/30 transition-colors">
                          <td className="px-6 py-4">
                            <code className="text-sm text-blue-400 font-mono">{method.name}</code>
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-400">{method.desc}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Plan Manager */}
              <div className="bg-gray-800/30 border border-gray-700/50 rounded-2xl p-6">
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 flex items-center justify-center mr-4">
                    <Code className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-semibold text-white">Plan Manager</h2>
                    <p className="text-gray-400 text-sm">Manage user plans and rate limiting for monetization</p>
                  </div>
                </div>

                <div className="bg-gray-900/80 border border-gray-700 rounded-xl overflow-hidden">
                  <div className="flex items-center px-4 py-3 bg-gray-800/50 border-b border-gray-700">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <span className="ml-4 text-gray-400 text-sm">plan-manager.ts</span>
                  </div>
                  <pre className="p-6 overflow-x-auto text-sm text-gray-300 font-mono leading-relaxed">
{`import { PlanManager, PLANS } from 'ai-memory';

const planManager = new PlanManager();

// Set user plan
planManager.setUserPlan('user-123', 'pro');

// Check rate limit
const rateResult = await planManager.checkRateLimit('user-123');
if (!rateResult.allowed) {
  console.log('Rate limit exceeded:', rateResult.retryAfter);
}

// Check usage limit
const usageResult = await planManager.checkUsageLimit('user-123', 'api_calls');
console.log(\`Remaining: \${usageResult.remaining}/\${usageResult.limit}\`);

// Get plan details
const plan = planManager.getPlan('pro');
console.log(\`Max memories: \${plan.limits.maxMemories}\`);`}
                  </pre>
                </div>
              </div>

              {/* Configuration Options */}
              <div className="bg-gray-800/30 border border-gray-700/50 rounded-2xl p-6">
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center mr-4">
                    <Code className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-semibold text-white">Configuration Options</h2>
                    <p className="text-gray-400 text-sm">All available configuration options for createAIMemory()</p>
                  </div>
                </div>

                <div className="overflow-hidden rounded-xl border border-gray-700/50">
                  <table className="min-w-full divide-y divide-gray-700">
                    <thead className="bg-gray-800/50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Option</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Type</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Default</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Description</th>
                      </tr>
                    </thead>
                    <tbody className="bg-gray-900/30 divide-y divide-gray-700/50">
                      <tr className="hover:bg-gray-800/30">
                        <td className="px-6 py-4"><code className="text-sm text-blue-400 font-mono">maxMemories</code></td>
                        <td className="px-6 py-4 text-sm text-gray-400">number</td>
                        <td className="px-6 py-4 text-sm text-gray-500">10000</td>
                        <td className="px-6 py-4 text-sm text-gray-400">Maximum memories to store</td>
                      </tr>
                      <tr className="hover:bg-gray-800/30">
                        <td className="px-6 py-4"><code className="text-sm text-blue-400 font-mono">embeddingDimension</code></td>
                        <td className="px-6 py-4 text-sm text-gray-400">number</td>
                        <td className="px-6 py-4 text-sm text-gray-500">1536</td>
                        <td className="px-6 py-4 text-sm text-gray-400">Embedding vector dimension</td>
                      </tr>
                      <tr className="hover:bg-gray-800/30">
                        <td className="px-6 py-4"><code className="text-sm text-blue-400 font-mono">maxTokens</code></td>
                        <td className="px-6 py-4 text-sm text-gray-400">number</td>
                        <td className="px-6 py-4 text-sm text-gray-500">4000</td>
                        <td className="px-6 py-4 text-sm text-gray-400">Max tokens for context</td>
                      </tr>
                      <tr className="hover:bg-gray-800/30">
                        <td className="px-6 py-4"><code className="text-sm text-blue-400 font-mono">relevanceThreshold</code></td>
                        <td className="px-6 py-4 text-sm text-gray-400">number</td>
                        <td className="px-6 py-4 text-sm text-gray-500">0.7</td>
                        <td className="px-6 py-4 text-sm text-gray-400">Min similarity score (0-1)</td>
                      </tr>
                      <tr className="hover:bg-gray-800/30">
                        <td className="px-6 py-4"><code className="text-sm text-blue-400 font-mono">defaultImportance</code></td>
                        <td className="px-6 py-4 text-sm text-gray-400">number</td>
                        <td className="px-6 py-4 text-sm text-gray-500">0.5</td>
                        <td className="px-6 py-4 text-sm text-gray-400">Default importance (0-1)</td>
                      </tr>
                      <tr className="hover:bg-gray-800/30">
                        <td className="px-6 py-4"><code className="text-sm text-blue-400 font-mono">autoCleanup</code></td>
                        <td className="px-6 py-4 text-sm text-gray-400">object</td>
                        <td className="px-6 py-4 text-sm text-gray-500">-</td>
                        <td className="px-6 py-4 text-sm text-gray-400">Auto cleanup configuration</td>
                      </tr>
                      <tr className="hover:bg-gray-800/30">
                        <td className="px-6 py-4"><code className="text-sm text-blue-400 font-mono">storage</code></td>
                        <td className="px-6 py-4 text-sm text-gray-400">object</td>
                        <td className="px-6 py-4 text-sm text-gray-500">memory</td>
                        <td className="px-6 py-4 text-sm text-gray-400">Storage backend config</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* REST API Endpoints */}
              <div className="bg-gray-800/30 border border-gray-700/50 rounded-2xl p-6">
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center mr-4">
                    <Code className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-semibold text-white">REST API Endpoints</h2>
                    <p className="text-gray-400 text-sm">Base URL: https://api.aimemory.lat/v1</p>
                  </div>
                </div>

                <div className="space-y-4">
                  {[
                    { method: 'GET', path: '/memories', desc: 'List all memories' },
                    { method: 'POST', path: '/memories', desc: 'Create a new memory' },
                    { method: 'GET', path: '/memories/:id', desc: 'Get memory by ID' },
                    { method: 'PUT', path: '/memories/:id', desc: 'Update a memory' },
                    { method: 'DELETE', path: '/memories/:id', desc: 'Delete a memory' },
                    { method: 'POST', path: '/memories/search', desc: 'Search memories' },
                    { method: 'GET', path: '/context', desc: 'Get AI context' },
                    { method: 'GET', path: '/events', desc: 'List events' },
                    { method: 'POST', path: '/events', desc: 'Record an event' },
                    { method: 'GET', path: '/analytics/summary', desc: 'Get analytics summary' },
                    { method: 'GET', path: '/workspaces', desc: 'List workspaces' },
                    { method: 'POST', path: '/workspaces', desc: 'Create workspace' },
                    { method: 'GET', path: '/organizations', desc: 'List organizations' },
                    { method: 'POST', path: '/organizations', desc: 'Create organization' },
                    { method: 'GET', path: '/members', desc: 'List team members' },
                    { method: 'POST', path: '/webhooks', desc: 'Create webhook' },
                  ].slice(0, 10).map((endpoint, i) => (
                    <div key={i} className="flex items-center p-3 bg-gray-900/50 rounded-lg">
                      <span className={`px-2 py-1 text-xs font-mono rounded mr-3 ${
                        endpoint.method === 'GET' ? 'bg-blue-600/20 text-blue-400' :
                        endpoint.method === 'POST' ? 'bg-green-600/20 text-green-400' :
                        endpoint.method === 'PUT' ? 'bg-yellow-600/20 text-yellow-400' :
                        'bg-red-600/20 text-red-400'
                      }`}>{endpoint.method}</span>
                      <code className="text-sm text-gray-300 font-mono">{endpoint.path}</code>
                      <span className="ml-auto text-sm text-gray-500">{endpoint.desc}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Available Plans */}
              <div className="bg-gray-800/30 border border-gray-700/50 rounded-2xl p-6">
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mr-4">
                    <Layers className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-semibold text-white">Available Plans</h2>
                    <p className="text-gray-400 text-sm">Plan limits and features</p>
                  </div>
                </div>

                <div className="overflow-hidden rounded-xl border border-gray-700/50">
                  <table className="min-w-full divide-y divide-gray-700">
                    <thead className="bg-gray-800/50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Feature</th>
                        <th className="px-6 py-3 text-center text-xs font-medium text-gray-400 uppercase tracking-wider">Free</th>
                        <th className="px-6 py-3 text-center text-xs font-medium text-emerald-400 uppercase tracking-wider">Pro</th>
                        <th className="px-6 py-3 text-center text-xs font-medium text-blue-400 uppercase tracking-wider">Team</th>
                        <th className="px-6 py-3 text-center text-xs font-medium text-purple-400 uppercase tracking-wider">Enterprise</th>
                      </tr>
                    </thead>
                    <tbody className="bg-gray-900/30 divide-y divide-gray-700/50">
                      <tr className="hover:bg-gray-800/30">
                        <td className="px-6 py-4 text-sm text-white">Memories</td>
                        <td className="px-6 py-4 text-center text-sm text-gray-400">500</td>
                        <td className="px-6 py-4 text-center text-sm text-gray-300">5,000</td>
                        <td className="px-6 py-4 text-center text-sm text-gray-300">25,000</td>
                        <td className="px-6 py-4 text-center text-sm text-gray-300">Unlimited</td>
                      </tr>
                      <tr className="hover:bg-gray-800/30">
                        <td className="px-6 py-4 text-sm text-white">Workspaces</td>
                        <td className="px-6 py-4 text-center text-sm text-gray-400">1</td>
                        <td className="px-6 py-4 text-center text-sm text-gray-300">5</td>
                        <td className="px-6 py-4 text-center text-sm text-gray-300">Unlimited</td>
                        <td className="px-6 py-4 text-center text-sm text-gray-300">Unlimited</td>
                      </tr>
                      <tr className="hover:bg-gray-800/30">
                        <td className="px-6 py-4 text-sm text-white">Team Members</td>
                        <td className="px-6 py-4 text-center text-sm text-gray-400">1</td>
                        <td className="px-6 py-4 text-center text-sm text-gray-400">1</td>
                        <td className="px-6 py-4 text-center text-sm text-gray-300">10</td>
                        <td className="px-6 py-4 text-center text-sm text-gray-300">Unlimited</td>
                      </tr>
                      <tr className="hover:bg-gray-800/30">
                        <td className="px-6 py-4 text-sm text-white">API Access</td>
                        <td className="px-6 py-4 text-center text-sm text-gray-400">-</td>
                        <td className="px-6 py-4 text-center text-sm text-emerald-400">✓</td>
                        <td className="px-6 py-4 text-center text-sm text-blue-400">✓</td>
                        <td className="px-6 py-4 text-center text-sm text-purple-400">✓</td>
                      </tr>
                      <tr className="hover:bg-gray-800/30">
                        <td className="px-6 py-4 text-sm text-white">Webhooks</td>
                        <td className="px-6 py-4 text-center text-sm text-gray-400">-</td>
                        <td className="px-6 py-4 text-center text-sm text-gray-400">-</td>
                        <td className="px-6 py-4 text-center text-sm text-blue-400">3</td>
                        <td className="px-6 py-4 text-center text-sm text-purple-400">Unlimited</td>
                      </tr>
                      <tr className="hover:bg-gray-800/30">
                        <td className="px-6 py-4 text-sm text-white">Support</td>
                        <td className="px-6 py-4 text-center text-sm text-gray-400">Community</td>
                        <td className="px-6 py-4 text-center text-sm text-gray-300">Email</td>
                        <td className="px-6 py-4 text-center text-sm text-gray-300">Priority</td>
                        <td className="px-6 py-4 text-center text-sm text-purple-400">24/7 SLA</td>
                      </tr>
                      <tr className="hover:bg-gray-800/30">
                        <td className="px-6 py-4 text-sm text-white font-semibold">Price</td>
                        <td className="px-6 py-4 text-center text-sm text-gray-400">$0</td>
                        <td className="px-6 py-4 text-center text-sm text-emerald-400 font-semibold">$12/mo</td>
                        <td className="px-6 py-4 text-center text-sm text-blue-400 font-semibold">$49/mo</td>
                        <td className="px-6 py-4 text-center text-sm text-purple-400 font-semibold">$199/mo</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Quick Navigation */}
              <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 border border-gray-700/50 rounded-2xl p-6">
                <h2 className="text-xl font-semibold text-white mb-4">Need More Help?</h2>
                <div className="flex flex-wrap gap-3">
                  <Link href="/docs/getting-started" className="inline-flex items-center px-4 py-2 bg-gray-800 text-gray-300 rounded-lg hover:bg-gray-700 transition-colors">
                    <BookOpen className="w-4 h-4 mr-2" />
                    Getting Started Guide
                  </Link>
                  <Link href="https://github.com" target="_blank" className="inline-flex items-center px-4 py-2 bg-gray-800 text-gray-300 rounded-lg hover:bg-gray-700 transition-colors">
                    <Code className="w-4 h-4 mr-2" />
                    View on GitHub
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-500 text-sm">
          © 2024 AI Memory. Open source MIT license.
        </div>
      </footer>
    </div>
  )
}