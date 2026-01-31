import React from 'react'
import Link from 'next/link'
import { Rocket, Box, Database, HelpCircle, ShieldCheck } from 'lucide-react'

export default function AdminGuide() {
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
            <h2 className="text-2xl font-bold">Getting Started</h2>
          </div>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Your portfolio is now connected to Sanity CMS. This allows you to easily manage your skills and projects
            without having to modify the code directly.
          </p>

          <div className="bg-secondary/30 p-6 rounded-xl border border-white/5">
            <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
              Access Sanity Studio
            </h3>
            <p className="text-muted-foreground mb-4">
              You can access the Sanity Studio by going to:
              <Link href="/studio" className="text-blue-500 ml-2 font-bold hover:underline">
                /studio
              </Link>
            </p>
            <p className="text-sm text-muted-foreground">
              The first time you visit, you'll need to log in with the Sanity account credentials you used during setup.
            </p>
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
                  <li><strong>Title:</strong> Skill name (e.g., "React")</li>
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