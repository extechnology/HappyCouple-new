import { Suspense, lazy } from "react"
import { Routes, Route } from "react-router-dom"
import ScrollToTop from "./components/common/ScrollToTop.tsx"
import MainLoader from "./components/common/MainLoader.tsx"




// Lazy loading 
const MainLayout = lazy(() => import('./components/layout/MainLayout.tsx'))
const AuthLayout = lazy(() => import('./components/layout/AuthLayout.tsx'))
const Landing = lazy(() => import('./pages/Landing.tsx'))
const TreatmentPlan = lazy(() => import('./pages/TreatmentPlan.tsx'))
const Consultation = lazy(() => import('./pages/Consultation.tsx'))
const TalkToDoctor = lazy(() => import('./pages/TalkToDoctor.tsx'))
const TalkToExpert = lazy(() => import('./pages/TalkToExpert.tsx'))
const ProductDetail = lazy(() => import('./pages/ProductDetail.tsx'))
const Checkout = lazy(() => import('./pages/Checkout.tsx'))
const Auth = lazy(() => import('./pages/Auth.tsx'))
const AboutUs = lazy(() => import('./pages/AboutUs.tsx'))
const ContactUs = lazy(() => import('./pages/ContactUs.tsx'))
const NotFound = lazy(() => import('./pages/NotFound.tsx'))




function App() {

  return (

    <>

      <Suspense fallback={<MainLoader />}>

        <ScrollToTop />


        <Routes>


          {/* Main Layout */}
          <Route element={<MainLayout />}>

            <Route path="/" element={<Landing />} />

            <Route path="/treatmentplans" element={<TreatmentPlan />} />

            <Route path="/consultation" element={<Consultation />} />

            <Route path="/talktoexpert" element={<TalkToExpert />} />

            <Route path="/talktodoctor" element={<TalkToDoctor />} />

            <Route path="/productdetail" element={<ProductDetail />} />

            <Route path="/checkout" element={<Checkout />} />

            <Route path="/aboutus" element={<AboutUs />} />

            <Route path="/contactus" element={<ContactUs />} />

          </Route>


          {/* Auth Layout  */}
          <Route element={<AuthLayout />}>

            <Route path="/auth" element={<Auth />} />

          </Route>


          <Route path="*" element={<NotFound />} />


        </Routes>


      </Suspense >



    </>

  )


}


export default App
