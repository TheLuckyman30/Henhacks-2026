'use client'
import { useEffect, useState } from 'react'

type ListingFormModalProps = {
  isOpen: boolean
  onClose: () => void
}

export function ListingFormModal({ isOpen, onClose }: ListingFormModalProps) {
  const [tags, setTags] = useState<string[]>([])
  const [tagInput, setTagInput] = useState('')
  const [images, setImages] = useState<string[]>([])

  // Lock scroll
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto'
  }, [isOpen])

  if (!isOpen) return null

  const addTag = () => {
    if (tagInput.trim() && !tags.includes(tagInput.trim())) {
      setTags([...tags, tagInput.trim()])
      setTagInput('')
    }
  }

  const removeTag = (tagToRemove: string) => {
    setTags(tags.filter((tag) => tag !== tagToRemove))
  }

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return

    const newImages = Array.from(e.target.files).map((file) =>
      URL.createObjectURL(file),
    )

    setImages([...images, ...newImages])
  }

  const removeImage = (indexToRemove: number) => {
    setImages(images.filter((_, index) => index !== indexToRemove))
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto mx-6 bg-[#fefae0] rounded-3xl shadow-2xl p-10 border border-[#6c3b27]/20"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-[#6c3b27] hover:opacity-70 text-xl"
        >
          ✕
        </button>

        <h2 className="text-3xl font-semibold text-[#6c3b27] mb-8">
          Create a Listing
        </h2>

        <form className="space-y-6">
          {/* Title */}
          <div>
            <label className="block text-sm font-medium text-[#6c3b27] mb-2">
              Title
            </label>
            <input
              type="text"
              className="w-full rounded-xl border border-[#6c3b27]/30 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#bc6c25]"
              placeholder="e.g., Extra Mason Jars"
            />
          </div>

          {/* Category */}
          <div>
            <label className="block text-sm font-medium text-[#6c3b27] mb-2">
              Category
            </label>
            <select className="w-full rounded-xl border border-[#6c3b27]/30 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#bc6c25]">
              <option>Glass</option>
              <option>Plastic</option>
              <option>Fabric</option>
              <option>Wood</option>
              <option>Metal</option>
              <option>Other</option>
            </select>
          </div>

          {/*location */}
          <div>
            <label className="block text-sm font-medium text-[#6c3b27] mb-2">
              Location
            </label>
            <textarea
              rows={2}
              className="w-full rounded-xl border border-[#6c3b27]/30 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#bc6c25]"
              placeholder=""
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-[#6c3b27] mb-2">
              Description
            </label>
            <textarea
              rows={4}
              className="w-full rounded-xl border border-[#6c3b27]/30 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#bc6c25]"
              placeholder="Describe condition, quantity, and pickup preferences..."
            />
          </div>

          {/* Tags */}
          <div>
            <label className="block text-sm font-medium text-[#6c3b27] mb-2">
              Tags
            </label>

            <div className="flex gap-2">
              <input
                type="text"
                value={tagInput}
                onChange={(e) => setTagInput(e.target.value)}
                onKeyDown={(e) =>
                  e.key === 'Enter' && (e.preventDefault(), addTag())
                }
                placeholder="Add a tag and press Enter"
                className="flex-1 rounded-xl border border-[#6c3b27]/30 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#bc6c25]"
              />
              <button
                type="button"
                onClick={addTag}
                className="bg-[#6c3b27] text-white px-4 rounded-xl"
              >
                Add
              </button>
            </div>

            <div className="flex flex-wrap gap-2 mt-3">
              {tags.map((tag) => (
                <div
                  key={tag}
                  className="flex items-center gap-2 bg-[#bc6c25] text-white px-3 py-1 rounded-full text-sm"
                >
                  {tag}
                  <button
                    type="button"
                    onClick={() => removeTag(tag)}
                    className="text-xs hover:opacity-70"
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Photos */}
          <div>
            <label className="block text-sm font-medium text-[#6c3b27] mb-3">
              Photos
            </label>

            {/* Hidden Input */}
            <input
              type="file"
              multiple
              accept="image/*"
              id="imageUpload"
              onChange={handleImageUpload}
              className="hidden"
            />

            {/* Upload Button */}
            <label
              htmlFor="imageUpload"
              className="cursor-pointer inline-flex items-center justify-center px-6 py-3 bg-[#6c3b27] text-white rounded-full hover:bg-[#5a2f1f] transition shadow-md"
            >
              + Upload Photos
            </label>

            {/* Preview Grid */}
            {images.length > 0 && (
              <div className="grid grid-cols-3 gap-4 mt-6">
                {images.map((src, index) => (
                  <div
                    key={index}
                    className="relative group rounded-xl overflow-hidden shadow-lg"
                  >
                    <img
                      src={src}
                      alt="preview"
                      className="w-full h-32 object-cover"
                    />

                    {/* Delete Overlay */}
                    <button
                      type="button"
                      onClick={() => removeImage(index)}
                      className="absolute top-2 right-2 bg-black/70 text-white rounded-full w-7 h-7 flex items-center justify-center text-sm opacity-0 group-hover:opacity-100 transition"
                    >
                      ✕
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Submit */}
          <div className="pt-6 flex justify-end">
            <button
              type="submit"
              className="bg-[#6c3b27] text-white px-8 py-3 rounded-full hover:bg-[#5a2f1f] transition"
            >
              Post Listing
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
