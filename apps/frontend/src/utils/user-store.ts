import { create } from 'zustand'

type UserStore = {
  zipcode: string
  setZipcode: (newZip: string) => void
}

export const useUserStore = create<UserStore>((set) => ({
  zipcode: '19711',
  setZipcode: (newZip: string) => {
    set({ zipcode: newZip })
  },
}))
