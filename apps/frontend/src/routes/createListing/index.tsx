import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/createListing/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/createListing/"!</div>
}
