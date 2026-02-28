import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/community/$eventListID')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/community/$eventListID"!</div>
}
