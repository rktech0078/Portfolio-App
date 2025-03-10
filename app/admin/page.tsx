import React from 'react'
import Link from 'next/link'

export default function AdminGuide() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">Sanity CMS Admin Guide</h1>
      
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-8 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Getting Started</h2>
        <p className="mb-6">
          Your portfolio is now connected to Sanity CMS. This allows you to easily manage your skills and projects
          without having to modify the code directly.
        </p>
        
        <div className="mb-8">
          <h3 className="text-xl font-medium mb-3">Access Sanity Studio</h3>
          <p className="mb-4">
            You can access the Sanity Studio by going to: 
            <Link href="/studio" className="text-[#ffc107] ml-2 font-medium hover:underline">
              /studio
            </Link>
          </p>
          <p>
            The first time you visit, you&apos;ll need to log in with the Sanity account credentials you used during setup.
          </p>
        </div>
      </div>
      
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-8 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Adding Skills</h2>
        <p className="mb-4">
          To add a new skill to your portfolio:
        </p>
        <ol className="list-decimal pl-5 mb-6 space-y-2">
          <li>Go to the Sanity Studio at <code>/studio</code></li>
          <li>Click on &quot;Skills&quot; in the sidebar</li>
          <li>Click the &quot;Create new&quot; button</li>
          <li>Fill in the following fields:
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li><strong>Skill Title:</strong> Name of the skill (e.g., &quot;React&quot;, &quot;Node.js&quot;)</li>
              <li><strong>Proficiency:</strong> Your skill level as a percentage (0-100)</li>
              <li><strong>Icon Name:</strong> The name of the React icon (e.g., &quot;FaReact&quot;, &quot;FaNodeJs&quot;)</li>
              <li><strong>Display Order:</strong> The order in which this skill should appear (lower numbers first)</li>
            </ul>
          </li>
          <li>Click &quot;Publish&quot; to save your changes</li>
        </ol>
        <p className="text-sm bg-yellow-50 p-3 rounded border border-yellow-200">
          <strong>Note:</strong> For the Icon Name, you can use any icon name from the react-icons library. Common prefixes are:
          Fa* (Font Awesome), Si* (Simple Icons), Io* (Ionicons), etc. The icon mapper supports many common icons.
        </p>
      </div>
      
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-8 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Adding Projects</h2>
        <p className="mb-4">
          To add a new project to your portfolio:
        </p>
        <ol className="list-decimal pl-5 mb-6 space-y-2">
          <li>Go to the Sanity Studio at <code>/studio</code></li>
          <li>Click on &quot;Projects&quot; in the sidebar</li>
          <li>Click the &quot;Create new&quot; button</li>
          <li>Fill in the following fields:
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li><strong>Project Title:</strong> Main title of your project</li>
              <li><strong>Subtitle:</strong> A short descriptive subtitle</li>
              <li><strong>Description:</strong> Detailed description of the project</li>
              <li><strong>Project Link:</strong> URL to the live project or repository</li>
              <li><strong>Project Image:</strong> Upload a screenshot or image representing the project</li>
              <li><strong>Tags:</strong> Add relevant technology tags (optional)</li>
              <li><strong>Display Order:</strong> The order in which this project should appear (lower numbers first)</li>
            </ul>
          </li>
          <li>Click &quot;Publish&quot; to save your changes</li>
        </ol>
      </div>
      
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-2xl font-semibold mb-4">Tips & Troubleshooting</h2>
        <ul className="list-disc pl-5 space-y-3">
          <li>
            <strong>Images:</strong> For best results, use images with a 16:9 or 4:3 aspect ratio for projects.
          </li>
          <li>
            <strong>Changes not showing up?</strong> It may take a few moments for changes to propagate. Try refreshing your portfolio page.
          </li>
          <li>
            <strong>Icon not working?</strong> Make sure you&apos;re using the exact icon name from the react-icons library.
            You can refer to <a href="https://react-icons.github.io/react-icons/" target="_blank" rel="noopener noreferrer" className="text-[#ffc107] hover:underline">react-icons.github.io</a> for the complete list.
          </li>
        </ul>
      </div>
    </div>
  )
} 