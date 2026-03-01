import { useAuth } from '#/utils/auth-helpers'
import { useState, useEffect } from 'react'

type AuthModalProps = {
  isOpen: boolean
  onClose: () => void
}

export function AuthModal({ isOpen, onClose }: AuthModalProps) {
  const [isSignup, setIsSignup] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  })

  const { login, signup } = useAuth()

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto'
  }, [isOpen])

  if (!isOpen) return null

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.ChangeEvent) => {
    e.preventDefault()
    console.log(isSignup ? 'Signing Up:' : 'Logging In:', formData)
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-md bg-[#fefae0] rounded-3xl shadow-2xl p-10 mx-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-[#6c3b27] text-xl hover:opacity-70"
        >
          ✕
        </button>

        <h2 className="text-3xl font-bold text-[#6c3b27] mb-8 text-center">
          {isSignup ? 'Create Account 🌱' : 'Welcome Back 🌿'}
        </h2>

        <form className="space-y-5" onSubmit={handleSubmit}>
          {/* Name (Signup Only) */}
          {isSignup && (
            <div>
              <label className="block text-sm text-[#6c3b27] mb-1">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-xl border border-[#dda15e] focus:outline-none focus:ring-2 focus:ring-[#bc6c25]"
              />
            </div>
          )}

          {/* Email */}
          <div>
            <label className="block text-sm text-[#6c3b27] mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-xl border border-[#dda15e] focus:outline-none focus:ring-2 focus:ring-[#bc6c25]"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm text-[#6c3b27] mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-xl border border-[#dda15e] focus:outline-none focus:ring-2 focus:ring-[#bc6c25]"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-[#6c3b27] text-white py-2 rounded-full shadow-md hover:bg-[#5a2f1f] transition"
            onClick={() =>
              isSignup
                ? signup({
                    name: formData.name,
                    password: formData.password,
                    email: formData.email,
                  })
                : login({
                    name: '',
                    password: formData.password,
                    email: formData.email,
                  })
            }
          >
            {isSignup ? 'Sign Up' : 'Login'}
          </button>
        </form>

        {/* Toggle */}
        <div className="text-center mt-6 text-sm text-[#6c3b27]">
          {isSignup ? 'Already have an account?' : 'New here?'}
          <button
            onClick={() => setIsSignup(!isSignup)}
            className="ml-2 font-semibold underline hover:opacity-70"
          >
            {isSignup ? 'Login' : 'Create one'}
          </button>
        </div>
      </div>
    </div>
  )
}
