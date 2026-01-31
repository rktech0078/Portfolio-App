"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import { Rocket, Box, Database, HelpCircle, ShieldCheck, Lock, ArrowRight } from 'lucide-react'
import { useRouter } from 'next/navigation'

export default function AdminGuide() {
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isShaking, setIsShaking] = useState(false)
  const router = useRouter()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Verify against environment variable or hardcoded hash
    // This is client-side only for guide access - actual studio is protected by Sanity auth
    if (password === 'admin123' || password === process.env.NEXT_PUBLIC_ADMIN_PASSWORD) {
      router.push('/studio')
    } else {
      setIsShaking(true)
      setTimeout(() => setIsShaking(false), 500)
    }
    setIsLoading(false)
  }

  return (
    <div className="min-h-screen pt-24 pb-12 bg-background relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-b from-blue-500/10 to-transparent -z-10 blur-3xl rounded-full" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-t from-purple-500/10 to-transparent -z-10 blur-3xl rounded-full" />

      <div className="container mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-500/10 rounded-2xl mb-6 shadow-glow">
            <ShieldCheck className="w-8 h-8 text-blue-500" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/50 mb-6">
            Sanity CMS <span className="text-blue-500">Admin Guide</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Manage your content effortlessly with Sanity Studio.
          </p>
        </div>

        {/* Getting Started */}
        <div className="max-w-4xl mx-auto glass-card p-8 rounded-2xl border border-border/50 mb-8 relative overflow-hidden group hover:border-blue-500/30 transition-all duration-300">
          <div className="flex items-center gap-3 mb-6">
            <Rocket className="w-6 h-6 text-blue-500" />
            <p className="text-gray-400 mt-2">Enter your verification code to access the dashboard</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div className={`transform transition-all duration-300 ${isShaking ? 'translate-x-[-10px]' : ''}`}>
              <div className="relative group">
                <div className="absolute inset-0 bg-blue-500/20 rounded-xl blur-lg transition-all duration-300 group-hover:bg-blue-500/30 opacity-0 group-hover:opacity-100" />
                <div className="relative bg-[#0A0A0A] border border-white/10 rounded-xl p-1 transition-all duration-300 group-hover:border-blue-500/50 flex items-center">
                  <Lock className="w-5 h-5 text-gray-400 ml-3" />
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full bg-transparent border-none text-white p-3 focus:ring-0 placeholder-gray-500"
                    placeholder="Enter admin code"
                  />
                </div>
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-3 rounded-xl font-medium 
                hover:from-blue-500 hover:to-indigo-500 transition-all duration-300 transform hover:scale-[1.02]
                disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 group shadow-lg shadow-blue-900/20"
            >
              {isLoading ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <>
                  <span>Access Dashboard</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
          </form>

          <div className="mt-8 pt-6 border-t border-white/5 text-center">
            <p className="text-sm text-gray-500">Authorized Personnel Only</p>
          </div>
        </div>

        {/* Content Sections */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-8">
          <div className="glass-card p-8 rounded-2xl border border-border/50 hover:border-blue-500/30 transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <Database className="w-6 h-6 text-purple-500" />
              <h2 className="text-xl font-bold">Adding Skills</h2>
            </div>
            <ol className="list-decimal pl-5 space-y-3 text-muted-foreground">
              <li>Go to <code className="bg-secondary px-2 py-0.5 rounded text-foreground text-sm">/studio</code></li>
              <li>Select <strong>Skills</strong> in sidebar</li>
              <li>Click <strong>Create new</strong></li>
              <li>Fill in details:
                <ul className="list-disc pl-5 mt-2 space-y-1 text-sm text-muted-foreground/80">
                  <li><strong>Title:</strong> Skill name (e.g., &quot;React&quot;)</li>
                  <li><strong>Proficiency:</strong> 0-100%</li>
                  <li><strong>Icon:</strong> React Icon name (e.g., "FaReact")</li>
                  <li><strong>Order:</strong> Appearance order</li>
                </ul>
              </li>
              <li>Click <strong>Publish</strong></li>
            </ol>
            <div className="mt-6 p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-xl text-sm text-yellow-600 dark:text-yellow-400">
              <strong>Note:</strong> Use exact icon names from react-icons (e.g., FaNodeJs, SiNextdotjs).
            </div>
          </div>

          <div className="glass-card p-8 rounded-2xl border border-border/50 hover:border-blue-500/30 transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <Box className="w-6 h-6 text-emerald-500" />
              <h2 className="text-xl font-bold">Adding Projects</h2>
            </div>
            <ol className="list-decimal pl-5 space-y-3 text-muted-foreground">
              <li>Go to <code className="bg-secondary px-2 py-0.5 rounded text-foreground text-sm">/studio</code></li>
              <li>Select <strong>Projects</strong> in sidebar</li>
              <li>Click <strong>Create new</strong></li>
              <li>Fill in details:
                <ul className="list-disc pl-5 mt-2 space-y-1 text-sm text-muted-foreground/80">
                  <li><strong>Title & Subtitle</strong></li>
                  <li><strong>Description</strong></li>
                  <li><strong>Link:</strong> Live URL/Repo</li>
                  <li><strong>Image:</strong> Upload screenshot</li>
                  <li><strong>Tags:</strong> Tech stack tags</li>
                  <li><strong>Order:</strong> Appearance order</li>
                </ul>
              </li>
              <li>Click <strong>Publish</strong></li>
            </ol>
          </div>
        </div>

        {/* Tips */}
        <div className="max-w-4xl mx-auto glass-card p-8 rounded-2xl border border-border/50">
          <div className="flex items-center gap-3 mb-6">
            <HelpCircle className="w-6 h-6 text-orange-500" />
            <h2 className="text-2xl font-bold">Tips & Troubleshooting</h2>
          </div>
          <ul className="grid gap-4 text-muted-foreground">
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 mt-2 rounded-full bg-blue-500 flex-shrink-0" />
              <span><strong>Images:</strong> For best results, use images with a 16:9 or 4:3 aspect ratio for projects.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 mt-2 rounded-full bg-purple-500 flex-shrink-0" />
              <span><strong>Changes not showing?</strong> It may take a few moments. Try refreshing your portfolio page.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 mt-2 rounded-full bg-emerald-500 flex-shrink-0" />
              <span><strong>Icon issues?</strong> Verify the icon name on <a href="https://react-icons.github.io/react-icons/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">react-icons.github.io</a>.</span>
            </li>
          </ul>
        </div>

      </div>
    </div>
  )
} 