import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_protected-routes/listings/$listingID')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/listings/$listingID"!</div>
}
