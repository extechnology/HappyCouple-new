import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { GoogleOAuthProvider } from '@react-oauth/google';
import { AuthProvider } from './context/Authcontext.tsx';
import { ProductProvider } from './context/Productcontext.tsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';


const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(


  <BrowserRouter>

    <QueryClientProvider client={queryClient}>

      <GoogleOAuthProvider clientId='29717202964-nijskvugln8sha3ip1c4dq358ds4batk.apps.googleusercontent.com'>

        <AuthProvider>

          <ProductProvider>

            <App />

          </ProductProvider>

        </AuthProvider>

      </GoogleOAuthProvider>

    </QueryClientProvider>

  </BrowserRouter >


)
