import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/listings/$listingID')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/listings/$listingID"!</div>
}
