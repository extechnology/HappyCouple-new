import Navbar from "../common/Navbar"
import Footer from "../common/Footer"
import { Outlet } from "react-router-dom"


export default function MainLayout() {


  return (


    <>

      <main className="w-full min-h-screen flex flex-col">


        {/* Header */}
        <header aria-label="header">

          <Navbar />

        </header>


        <section className="flex-grow">

          <Outlet />

        </section>


        {/* Footer */}
        <footer aria-label="footer">

          <Footer />

        </footer>

      </main>




    </>


  )


}
