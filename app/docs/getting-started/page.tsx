import type { Metadata } from 'next'
import { ArrowLeft, BookOpen, Code, Zap, Check, Brain } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Getting Started - AI Memory',
  description: 'Learn how to install and use AI Memory in your project.',
}

export default function GettingStarted() {
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
              <Link href="/" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
                Home
              </Link>
              <Link href="/#features" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
                Features
              </Link>
              <Link href="/#pricing" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
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
          {/* Back Link */}
          <Link href="/" className="inline-flex items-center text-gray-400 hover:text-white transition-colors mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>

          <div className="grid lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-2">
                <Link href="/docs/getting-started" className="flex items-center px-4 py-3 bg-blue-600/10 border border-blue-500/20 text-blue-400 rounded-xl hover:bg-blue-600/20 transition-colors">
                  <BookOpen className="w-5 h-5 mr-3" />
                  Getting Started
                </Link>
                <Link href="/docs/api" className="flex items-center px-4 py-3 text-gray-400 hover:bg-gray-800/50 hover:text-white rounded-xl transition-colors">
                  <Code className="w-5 h-5 mr-3" />
                  API Reference
                </Link>
              </div>
            </div>

            {/* Content */}
            <div className="lg:col-span-3">
              <div className="space-y-8">
                {/* Header */}
                <div className="bg-gray-800/30 border border-gray-700/50 rounded-2xl p-8">
                  <h1 className="text-4xl font-bold text-white mb-4">Getting Started with AI Memory</h1>
                  <p className="text-xl text-gray-400 leading-relaxed">
                    A developer-first persistent memory system for LLM applications. Get up and running in minutes.
                  </p>
                </div>

                {/* Installation */}
                <div className="bg-gray-800/30 border border-gray-700/50 rounded-2xl p-6">
                  <h2 className="text-2xl font-semibold text-white mb-4 flex items-center">
                    <span className="w-8 h-8 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center mr-3 text-sm font-bold">1</span>
                    Installation
                  </h2>
                  <div className="bg-gray-900/80 border border-gray-700 rounded-xl p-4">
                    <pre className="text-gray-100 font-mono text-sm">npm install aimemory-core</pre>
                  </div>
                </div>

                {/* Quick Start */}
                <div className="bg-gray-800/30 border border-gray-700/50 rounded-2xl p-6">
                  <h2 className="text-2xl font-semibold text-white mb-4 flex items-center">
                    <span className="w-8 h-8 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center mr-3 text-sm font-bold">2</span>
                    Quick Start
                  </h2>
                  <div className="bg-gray-900/80 border border-gray-700 rounded-xl overflow-hidden">
                    <div className="flex items-center px-4 py-3 bg-gray-800/50 border-b border-gray-700">
                      <div className="flex space-x-2">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      </div>
                      <span className="ml-4 text-gray-400 text-sm">basic-usage.ts</span>
                    </div>
                    <pre className="p-6 overflow-x-auto text-sm text-gray-300 font-mono leading-relaxed">
{`import { createAIMemory, EmbeddingFunction } from 'ai-memory';

// Your embedding function (OpenAI, Cohere, etc.)
const embeddingFunction: EmbeddingFunction = async (text) => {
  return await openai.embeddings.create({
    model: 'text-embedding-3-small',
    input: text,
  }).then(res => res.data[0].embedding);
};

const brain = createAIMemory();
brain.setEmbeddingFunction(embeddingFunction);

// Remember facts with metadata
await brain.remember('User prefers dark mode', {
  userId: 'user-123',
  tags: ['preferences', 'ui'],
  importance: 0.9,
});

// Semantic search with similarity threshold
const results = await brain.recall('user preferences', {
  limit: 5,
  threshold: 0.75,
});

// Build optimized context for LLM
const context = await brain.getContext('What does user prefer?');
console.log(context.messages);`}
                    </pre>
                  </div>
                </div>

                {/* Core Concepts */}
                <div className="bg-gray-800/30 border border-gray-700/50 rounded-2xl p-6">
                  <h2 className="text-2xl font-semibold text-white mb-6 flex items-center">
                    <span className="w-8 h-8 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center mr-3 text-sm font-bold">3</span>
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
                            <span className="px-2 py-1 bg-blue-600/20 text-blue-400 text-xs font-mono rounded mr-3">{item.type}</span>
                            <span className="text-gray-400 text-sm">{item.desc}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-medium text-blue-400 mb-3">Search & Recall</h3>
                      <div className="bg-gray-900/80 border border-gray-700 rounded-xl p-4">
                        <pre className="text-gray-300 font-mono text-sm">
{`// Semantic search with filters
const results = await brain.recall('user preferences', {
  limit: 10,
  threshold: 0.7,
  types: ['fact', 'preference'],
  tags: ['ui', 'theme'],
});

// Query by specific criteria
const facts = await brain.getMemoriesByType('fact');
const userMemories = await brain.getMemoriesByUser('user-123');`}
                        </pre>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Configuration */}
                <div className="bg-gray-800/30 border border-gray-700/50 rounded-2xl p-6">
                  <h2 className="text-2xl font-semibold text-white mb-4 flex items-center">
                    <span className="w-8 h-8 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center mr-3 text-sm font-bold">4</span>
                    Configuration
                  </h2>
                  <div className="bg-gray-900/80 border border-gray-700 rounded-xl p-4">
                    <pre className="text-gray-300 font-mono text-sm">
{`const brain = createAIMemory({
  maxMemories: 10000,
  defaultImportance: 0.5,
  embeddingDimension: 1536,
  
  // Context building configuration
  context: {
    maxTokens: 4000,
    relevanceThreshold: 0.7,
    memoryTypes: ['fact', 'preference', 'instruction'],
    maxMemories: 10,
  },
  
  // Automatic cleanup settings
  autoCleanup: {
    enabled: true,
    maxAge: 90 * 24 * 60 * 60 * 1000, // 90 days
    minImportance: 0.3,
  },
});`}
                    </pre>
                  </div>
                </div>

                {/* Next Steps */}
                <div className="bg-gradient-to-r from-emerald-900/30 to-blue-900/30 border border-gray-700/50 rounded-2xl p-6">
                  <h2 className="text-2xl font-semibold text-white mb-4">Next Steps</h2>
                  <p className="text-gray-400 mb-4">
                    Ready to build? Explore the API reference for complete documentation of all available methods.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Link href="/docs/api" className="inline-flex items-center px-4 py-2 bg-emerald-600/20 text-emerald-400 rounded-lg hover:bg-emerald-600/30 transition-colors">
                      <Code className="w-4 h-4 mr-2" />
                      API Reference
                    </Link>
                    <Link href="https://github.com" target="_blank" className="inline-flex items-center px-4 py-2 bg-gray-800 text-gray-300 rounded-lg hover:bg-gray-700 transition-colors">
                      View on GitHub
                    </Link>
                  </div>
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