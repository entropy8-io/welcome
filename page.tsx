import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Coming Soon',
  description: 'Our website is coming soon. Stay tuned!',
}

export default function ComingSoonPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <main className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Coming soon...</h1>
        <p className="text-xl text-gray-600">We're working hard to bring you something amazing.</p>
        <p className="text-xl text-gray-600">hello@entropy8.io</p>
      </main>
    </div>
  )
}
