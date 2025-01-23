'use client'
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter();

  return (
    <main className="min-h-screen p-8 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">
          JavaScript Performance Optimization Techniques
        </h1>
        
        <div className="grid gap-8 md:grid-cols-3">
          {/* Throttle Card */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h2 className="text-2xl font-semibold mb-4 text-blue-600">Throttle</h2>
            <p className="text-gray-600 mb-4">
              Throttling enforces a maximum number of times a function can be called over time. 
              It ensures a function executes at a regular interval.
            </p>
            <button 
              onClick={() => router.push('/throttle')}
              className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors"
            >
              Learn Throttling
            </button>
          </div>

          {/* Debounce Card */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h2 className="text-2xl font-semibold mb-4 text-green-600">Debounce</h2>
            <p className="text-gray-600 mb-4">
              Debouncing ensures that a function is only executed after a certain amount of time has passed 
              since its last invocation.
            </p>
            <button 
              onClick={() => router.push('/debounce')}
              className="w-full bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition-colors"
            >
              Learn Debouncing
            </button>
          </div>

          {/* Event Delegation Card */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h2 className="text-2xl font-semibold mb-4 text-purple-600">Event Delegation</h2>
            <p className="text-gray-600 mb-4">
              Event delegation is a technique of handling events at a higher level in the DOM 
              than the element on which the event originated.
            </p>
            <button 
              onClick={() => router.push('/eventdelegation')}
              className="w-full bg-purple-500 text-white py-2 px-4 rounded hover:bg-purple-600 transition-colors"
            >
              Learn Event Delegation
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}
