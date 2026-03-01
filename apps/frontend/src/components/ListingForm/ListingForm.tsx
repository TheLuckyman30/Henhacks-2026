import { useMutation } from '@tanstack/react-query'
import { useEffect, useState } from 'react'
import type { CreatePosting, PostingOut } from '@repo/db-types'
import { fetcher } from '#/utils/fetcher'

type ListingFormModalProps = {
  isOpen: boolean
  onClose: () => void
}

export function ListingFormModal({ isOpen, onClose }: ListingFormModalProps) {
  const [title, setTitle] = useState<string>('')
  const [description, setDescription] = useState<string>('')
  const [address, setAddress] = useState<string>('')

  const mutation = useMutation({
    mutationFn: (createPosting: CreatePosting) =>
      fetcher<PostingOut>({
        endpoint: '/posting',
        init: { method: 'POST', body: JSON.stringify(createPosting) },
      }),
  })

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl mx-4 bg-[#fefae0] rounded-2xl shadow-2xl p-8 border border-[#6c3b27]/20"
        onClick={(e) => e.stopPropagation()} // prevent close on inside click
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#6c3b27] hover:opacity-70 text-lg"
        >
          ✕
        </button>

        <h2 className="text-2xl font-semibold text-[#6c3b27] mb-6">
          Create a Listing
        </h2>

        <form className="space-y-5">
          {/* Title */}
          <div>
            <label className="block text-sm font-medium text-[#6c3b27] mb-1">
              Title
            </label>
            <input
              value={title}
              type="text"
              placeholder="e.g., Extra Mason Jars"
              className="w-full rounded-xl border border-[#6c3b27]/30 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#bc6c25]"
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          {/* Category */}
          <div>
            <label className="block text-sm font-medium text-[#6c3b27] mb-1">
              Category
            </label>
            <select className="w-full rounded-xl border border-[#6c3b27]/30 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#bc6c25]">
              <option>Glass</option>
              <option>Plastic</option>
              <option>Fabric</option>
              <option>Wood</option>
              <option>Metal</option>
              <option>Other</option>
            </select>
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-[#6c3b27] mb-1">
              Description
            </label>
            <textarea
              value={description}
              rows={4}
              placeholder="Describe condition, quantity, and pickup preferences..."
              className="w-full rounded-xl border border-[#6c3b27]/30 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#bc6c25]"
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          {/* Location */}
          <div>
            <label className="block text-sm font-medium text-[#6c3b27] mb-1">
              Location
            </label>
            <input
              value={address}
              type="text"
              placeholder="City, neighborhood, or zipcode"
              className="w-full rounded-xl border border-[#6c3b27]/30 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#bc6c25]"
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>

          {/* Submit */}
          <div className="pt-4 flex justify-end">
            <button
              onClick={(e) => {
                e.preventDefault()
                mutation.mutate({
                  userId: '1',
                  title,
                  description,
                  address,
                })
              }}
              className="bg-[#6c3b27] text-white px-6 py-2 rounded-full hover:bg-[#5a2f1f] transition"
            >
              Post Listing
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
