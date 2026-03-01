import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_protected-routes/community/$eventListID')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/community/$eventListID"!</div>
}
