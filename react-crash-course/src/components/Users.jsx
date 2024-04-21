import { useParams } from "react-router-dom"

function Users() {
    const params = useParams();
  return (
    <div>Users : {params.userId}</div>
  )
}

export default Users