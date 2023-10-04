import { useRouteError } from "react-router-dom"

export default function Error() {
const error = useRouteError();
console.error(error)
    return (
    <div>
      <h1>opps! </h1>
      <p>Sorry, an unexpected error has occured.</p>
      <i>404 Not Found </i>
    </div>
  )
}
