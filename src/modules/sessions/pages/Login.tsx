import { Outlet } from "react-router-dom"
import { Suspense } from "react"

const Login = () => {
  return (
    <>
    <Suspense fallback={"Cargando..."}>
        <Outlet />
    </Suspense>
    </>
  )
}

export default Login