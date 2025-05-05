import { Outlet } from "react-router-dom"

export default function AuthLayout() {
  return (
    

    <main className="w-full min-h-screen flex flex-col"> 

      <Outlet />


    </main>
  

  )
}
