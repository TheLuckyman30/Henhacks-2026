import { createFileRoute, Link } from '@tanstack/react-router'
import { Navbar } from '../components/navbar'
import CommunityVid from '../../public/images/Community1.mov'

export const Route = createFileRoute('/')({ component: App })

function App() {
  return (
    <div className="w-full min-h-screen bg-container flex flex-col">
      <main className="flex-1 w-full flex flex-col items-center space-y-16 pb-24">
        <section className="relative w-full h-screen overflow-hidden">
          {/* Background Video */}
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src={CommunityVid} type="video/mp4" />
          </video>

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/50 z-10"></div>

          {/* Navbar (on top of video) */}
          <header className=" w-full">
            <Navbar></Navbar>
          </header>

          {/* Content Layer */}
          <div className="relative z-10 h-full flex items-center justify-center px-6">
            <div className="max-w-5xl w-full flex flex-col md:flex-row items-center justify-between text-white">
              <div className="max-w-xl space-y-6">
                <h1 className="text-3xl md:text-4xl font-bold">
                  .. Is Another Man's Treasure !🌎
                </h1>

                <h2>
                  <i className="text-2xl">Just like the saying goes!</i>
                </h2>
                <br></br>
                <p className="text-lg text-white/90 ">
                  A community-powered recycling network that turns everyday
                  waste into opportunity. Share anything unwanted with your
                  neighbors who can reuse them, and make the community and
                  planet stronger- for free!
                </p>

                <div className="flex gap-4">
                  <Link
                    className="bg-[#6c3b27] text-white px-6 py-3 rounded-lg shadow-md hover:scale-105 transition"
                    to={'/listings'}
                  >
                    Post an Item
                  </Link>

                  <Link
                    className="border border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-[#6c3b27] transition"
                    to={'/listings'}
                  >
                    Browse Treasures
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-5/6 flex flex-col md:flex-row gap-10 justify-center ">
          <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center space-y-4 md:w-1/3">
            <div className="text-4xl">📦</div>
            <h3 className="text-xl font-semibold text-[#6c3b27]">
              Use it one more time
            </h3>
            <p className="text-gray-600">
              Before it hits your trash or recycling, list it here. From egg
              cartons to glass jars, someone nearby might need it.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center space-y-4 md:w-1/3">
            <div className="text-4xl">🎨</div>
            <h3 className="text-xl font-semibold text-[#6c3b27]">
              Inspire Creativity
            </h3>
            <p className="text-gray-600">
              Perfect for artists, teachers, and DIY lovers looking for low-cost
              materials to bring projects to life.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center space-y-4 md:w-1/3">
            <div className="text-4xl">🌱</div>
            <h3 className="text-xl font-semibold text-[#6c3b27]">
              Strengthen the community
            </h3>
            <p className="text-gray-600">
              Organize pickups and events, help your neighbors, and build a
              stronger local network of reuse and sustainability.
            </p>
          </div>
        </section>

        <section className="w-5/6">
          <div className="bg-white rounded-2xl shadow-xl p-12 space-y-10">
            <h2 className="text-3xl font-bold text-center text-[#6c3b27]">
              How It Works
            </h2>

            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="space-y-3 bg-[#606c38] rounded-xl p-6 shadow-md min-h-90">
                <div className="text-5xl text-gray-200 border-2 border-gray-200 rounded-md py-6 w-16 h-16 flex items-center justify-center mx-auto">
                  1
                </div>
                <h4 className="font-semibold text-lg text-white">
                  Post Your Item
                </h4>
                <p className="text-gray-200">
                  Upload a photo and description of materials you're giving
                  away. Make sure to:
                  <ul>
                    <li>Include clear photos of the item</li>
                    <li>
                      Describe the item's condition and any special features
                    </li>
                    <li>
                      Use relevant tags to help others find it (e.g. "glass",
                      "art supplies", "fabric")
                    </li>
                    <li>Specify pickup/dropoff preferences and location</li>
                    <li>
                      Indicate quantity or size to help others understand how
                      much is available
                    </li>
                  </ul>
                  maximize its chances of being reused!
                </p>
              </div>

              <div className="space-y-3 bg-[#dda15e] rounded-xl p-6 shadow-md">
                <div className="text-5xl text-gray-200 border-2 border-gray-200 rounded-md py-6 w-16 h-16 flex items-center justify-center mx-auto">
                  2
                </div>
                <h4 className="font-semibold text-lg text-white">
                  Match Locally
                </h4>
                <p className="text-gray-200">
                  Nearby community members can request pickup within your chosen
                  radius.
                </p>
              </div>
              <div className="space-y-3 bg-[#bc6c25] rounded-xl p-6 shadow-md">
                <div className="text-5xl text-gray-200 border-2 border-gray-200 rounded-md py-6 w-16 h-16 flex items-center justify-center mx-auto">
                  3
                </div>
                <h4 className="font-semibold text-lg text-white">
                  Make an Impact
                </h4>
                <p className="text-gray-200 ">
                  Reduce waste, support creativity, and strengthen your local
                  community.
                </p>
              </div>
            </div>

            <div className="mt-12 rounded-xl p-8 space-y-4">
              <div className="text-2xl text-[#6c3b27]">
                <i>
                  We pride ourselves on being a community-driven platform that
                  fosters local connections and promotes sustainability. This is
                  why we encourage you to take a look at what members in your
                  community are actively sharing and reusing. By engaging with
                  your neighbors, you can help create a stronger, more
                  sustainable community together.
                </i>
              </div>
              <div className="text-4xl text-[#6c3b27]">
                <i>Plus the best part, it's all free !</i>
              </div>
            </div>

            {/* Impact Metrics Mockup */}
            <div className="mt-12 bg-[#fefae0] rounded-xl p-8 text-center space-y-4">
              <h3 className="text-2xl font-bold text-[#6c3b27]">
                For those who...
              </h3>

              <div className="flex flex-col md:flex-row justify-center gap-10 text-lg font-medium">
                <div>♻️ Love to Recycle</div>
                <div>🌎 Love the Earth</div>
                <div>👥 Love the Community</div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
