import { Navbar } from '#/components/navbar'
import { Link, createFileRoute } from '@tanstack/react-router'
import jars from '../../../images/jars.jpg'
import { useUserStore } from '#/utils/user-store'
import type { SinglePostingOut } from '@repo/db-types'
import { fetcher } from '#/utils/fetcher'
import { useQuery } from '@tanstack/react-query'

export const Route = createFileRoute('/_protected-routes/listings/$listingID')({
  component: RouteComponent,
})

function RouteComponent() {
  const { listingID } = Route.useParams()
  const { zipcode } = useUserStore()

  const { data, isLoading } = useQuery<SinglePostingOut>({
    queryKey: ['posting', listingID],
    queryFn: () =>
      fetcher<SinglePostingOut>({
        endpoint: `/posting/${listingID}?zipcode=${zipcode}`,
      }),
    refetchOnWindowFocus: false,
  })

  if (isLoading) return <div>Loading...</div>

  if (!data) return null

  return (
    <div className="relative w-full min-h-screen flex flex-col bg-container">
      {/* Header */}
      <header className="w-full z-20">
        <Navbar />
      </header>

      <main className="flex-1 flex flex-col items-center space-y-16 mb-20">
        <section className="w-full">
          <div className="relative h-75 shadow-xl overflow-hidden">
            {/* Gradient Background */}
            <div className="absolute inset-0 bg-linear-to-r from-[#606c38] via-[#dda15e] to-[#bc6c25] opacity-90"></div>
            <div className="absolute inset-0 bg-black/30"></div>
            <Link
              to="/listings"
              className="text-[#e6d6cf] hover:underline text-lg"
            >
              ← Back to Listings
            </Link>
          </div>
        </section>
        {/* Back Button */}

        <section className="w-5/6">
          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* LEFT SIDE – Image Section */}
            <div className="space-y-6 mt-26">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={jars}
                  alt="Item"
                  className="w-full h-125 object-cover"
                />

                <div className="absolute top-4 right-4 bg-[#6c3b27] text-white text-xs px-4 py-1 rounded-full">
                  {data.category}
                </div>
              </div>

              {/* Optional Impact Badge */}
              <div className="bg-white/70 backdrop-blur-lg rounded-xl p-4 shadow-md text-sm">
                🌱 Reusing this item saves approximately 0.6 lbs of landfill
                waste.
              </div>
            </div>

            {/* RIGHT SIDE – Info + Contact */}
            <div className="space-y-8">
              <div>
                <h1 className="text-4xl font-bold text-[#6c3b27]">
                  {data.title}
                </h1>

                <p className="text-gray-600 mt-2">
                  Posted 1 day ago •{' '}
                  {data.distance <= 1
                    ? '<1 mile away'
                    : `${data.distance} miles away`}
                </p>
              </div>

              <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-8 shadow-xl space-y-6">
                <div>
                  <h2 className="text-xl font-semibold text-[#6c3b27] mb-2">
                    Description
                  </h2>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#6c3b27] rounded-full"></div>
                    <div>
                      <p className="font-semibold text-[#6c3b27]">
                        Posted by {data.user.name}
                      </p>
                      <p className="text-sm text-gray-500">
                        5 successful exchanges
                      </p>
                    </div>
                  </div>

                  <p className="text-gray-700 leading-relaxed">
                    {data.description}
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-[#6c3b27] mb-2">
                    Pickup Details
                  </h2>

                  <ul className="text-gray-700 space-y-1 text-sm">
                    <li>📍 Newark, NJ</li>
                    <li>🚗 Porch Pickup Available</li>
                    <li>🕒 Available Evenings</li>
                  </ul>
                </div>

                {/* Message Seller */}
                <div className="pt-6 border-t border-[#dda15e]/40 space-y-4">
                  <h2 className="text-xl font-semibold text-[#6c3b27]">
                    Message the Lister
                  </h2>

                  <textarea
                    placeholder="Hi! I’m interested in these jars..."
                    className="w-full p-4 rounded-xl border border-[#dda15e] focus:outline-none focus:ring-2 focus:ring-[#bc6c25] resize-none h-32"
                  />

                  <button className="w-full bg-[#6c3b27] text-white py-3 rounded-xl hover:bg-[#bc6c25] transition shadow-md">
                    Send Message
                  </button>
                </div>
              </div>

              {/* Claim Button */}
              <button className="w-full bg-[#dda15e] text-white py-4 rounded-2xl text-lg font-semibold hover:bg-[#bc6c25] transition shadow-xl">
                Claim This Item
              </button>
            </div>
          </div>
          <div className="bg-white/70 backdrop-blur-lg rounded-xl p-4  min-w-5/6 shadow-md text-sm mt-24">
            <h2 className="text-2xl font-bold text-[#6c3b27] ">
              More From Your Community
            </h2>
          </div>
        </section>
      </main>
    </div>
  )
}
