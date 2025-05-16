import { ProductType } from "../products/types";


// User Address Types
export interface UserAddressTypes {
    id: number;
    profile_photo: string | null;
    name: string;
    phone: string;
    phone2: string;
    email: string;
    city: string;
    state: string;
    landmark: string;
    pin_code: string;
    street_address: string;
    address_type: string;
    default: boolean
    user: number;
}




// Order verify Response Types
export interface PaymentResponseType {
    error: string;
    product: ProductType;
    payment_status: "PENDING" | "COMPLETED" | "FAILED";
    status: boolean;
}
