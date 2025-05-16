import { ProductType } from "../products/types";
import { UserAddressTypes } from "../checkout/types";




// Order Type
export interface OrderTypes {
    id: number;
    product: ProductType;
    address: UserAddressTypes;
    price: number;
    order_date: string | null;
    order_status: 'PENDING' | 'PROCESSING' | 'SHIPPED' | 'DELIVERED' | string;
    payment_status: 'PENDING' | 'PAID' | 'FAILED' | string;
    transaction_id: string;
    paid: boolean;
    user: number;
}
