const BACKEND_URL = import.meta.env.VITE_BACKEND_URL as string

interface FetcherOptions {
  endpoint: string
  init?: RequestInit
}

export async function fetcher<T>({ endpoint, init = {} }: FetcherOptions) {
  const response = await fetch(`${BACKEND_URL}${endpoint}`, {
    ...init,
    headers: {
      'Content-Type': 'application/json',
      ...init.headers,
    },
  })

  return (await response.json()) as T
}
