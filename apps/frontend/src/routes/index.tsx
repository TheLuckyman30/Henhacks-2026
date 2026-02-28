import { createFileRoute } from '@tanstack/react-router'
import { Navbar } from '../components/navbar'

export const Route = createFileRoute('/')({ component: App })

function App() {
  return (
    <div className="w-full min-h-screen bg-container flex flex-col">
      {/* Header */}
      <header className="w-full">
        <Navbar />
      </header>

      {/* Main Content */}
      <main className="flex-1 w-full flex flex-col items-center py-30 space-y-16">
        {/* Hero / Top Card */}
        <section className="w-5/6">
          <div className="h-60 bg-white rounded-lg shadow-md"></div>
        </section>

        {/* Cards Section */}
        <section className="w-5/6 flex max-w-5/6 flex-row gap-10 justify-center">
          <div className="h-60 w-1/4 bg-white rounded-lg shadow-md"></div>
          <div className="h-60 w-1/4 bg-white rounded-lg shadow-md"></div>
          <div className="h-60 w-1/4 bg-white rounded-lg shadow-md"></div>
        </section>

        <section className="w-5/6">
          <div className="h-200 bg-white rounded-lg shadow-md"></div>
        </section>
      </main>
    </div>
  )
}
