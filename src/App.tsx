import { Suspense, lazy } from "react"
import { Routes, Route } from "react-router-dom"
import ScrollToTop from "./components/common/ScrollToTop.tsx"
import MainLoader from "./components/Loaders/MainLoader.tsx"
import { Toaster } from 'sonner';
import ProtectedAuth from "./routes/ProtectedAuth.tsx";


// Lazy loading layouts
const MainLayout = lazy(() => import('./components/layout/MainLayout.tsx'))
const AuthLayout = lazy(() => import('./components/layout/AuthLayout.tsx'))


// Lazy loading pages
const Landing = lazy(() => import('./pages/Landing.tsx'))
const TreatmentPlan = lazy(() => import('./pages/TreatmentPlan.tsx'))
const TalkToDoctor = lazy(() => import('./pages/TalkToDoctor.tsx'))
const TalkToExpert = lazy(() => import('./pages/TalkToExpert.tsx'))
const AiConsult = lazy(() => import('./pages/AiConsult.tsx'))
const ProductDetail = lazy(() => import('./pages/ProductDetail.tsx'))
const Checkout = lazy(() => import('./pages/Checkout.tsx'))
const Auth = lazy(() => import('./pages/Auth.tsx'))
const AboutUs = lazy(() => import('./pages/AboutUs.tsx'))
const ContactUs = lazy(() => import('./pages/ContactUs.tsx'))
const Orders = lazy(() => import('./pages/Orders.tsx'))
const OrderDetails = lazy(() => import('./pages/OrderDetails.tsx'))
const BookConsultSuccess = lazy(() => import('./pages/BookingSuccess.tsx'))
const CheckoutSuccess = lazy(() => import('./pages/CheckoutSuccess.tsx'))
const Terms = lazy(() => import('./pages/Terms.tsx'))
const Privacy = lazy(() => import('./pages/Privacy.tsx'))
const RefundPolicy = lazy(() => import('./pages/RefundPolicy.tsx'))
const ShippingPolicy = lazy(() => import('./pages/ShippingPolicy.tsx'))
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

            <Route path="/talktoexpert" element={<TalkToExpert />} />

            <Route path="/aiconsult" element={<AiConsult />} />

            <Route path="/talktodoctor" element={<TalkToDoctor />} />

            <Route path="/productdetail/:id" element={<ProductDetail />} />

            <Route path="/aboutus" element={<AboutUs />} />

            <Route path="/contactus" element={<ContactUs />} />

            <Route path="/bookconsultsuccess" element={<BookConsultSuccess />} />

            <Route path="/termsandconditions" element={<Terms />} />

            <Route path="/privacypolicy" element={<Privacy />} />

            <Route path="/refundpolicy" element={<RefundPolicy />} />

            <Route path="/shippingpolicy" element={<ShippingPolicy />} />



            {/* Protected Routes */}
            <Route path="/checkout" element={<ProtectedAuth><Checkout /> </ProtectedAuth>} />

            <Route path="/orders" element={<ProtectedAuth><Orders /> </ProtectedAuth>} />

            <Route path="/orderdetails/:id" element={<ProtectedAuth><OrderDetails /> </ProtectedAuth>} />

            <Route path="/ordersuccess" element={<ProtectedAuth><CheckoutSuccess /></ProtectedAuth>} />


          </Route>



          {/* Auth Layout  */}
          <Route element={<AuthLayout />}>

            <Route path="/auth" element={<Auth />} />

          </Route>


          {/* Not Found */}
          <Route path="*" element={<NotFound />} />


        </Routes>


      </Suspense >


      <Toaster />

    </>

  )


}


export default App
