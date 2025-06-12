import { useAuth } from "@/context/Authcontext";
import { useEffect } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { toast } from "sonner";



export default function ProtectedAuth({ children }: { children: React.ReactNode }) {


    // check if user is authenticated
    const location = useLocation();


    // Auth context
    const { isAuthenticated } = useAuth();


    // Toast if user is not authenticated
    useEffect(() => {

        if (!isAuthenticated) {

            toast.error("Oops..!", { description: "You are not logged in.", duration: 5000 })

        }

    }, [isAuthenticated]);


    if (!isAuthenticated) {
        return <Navigate to="/auth" state={{ from: location }} replace />;
    }

    return <>{children}</>;


}
