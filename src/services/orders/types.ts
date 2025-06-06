import { ProductType } from "../products/types";
import { UserAddressTypes } from "../checkout/types";


// Timeline Type
export interface TimelineTypes {
    id: number;
    status: string;
    description: string;
    date: string;
    order: number
}



// Order Type
export interface OrderTypes {
    id: number;
    product: ProductType;
    address: UserAddressTypes;
    timeline: TimelineTypes[];
    price: number;
    order_date: string;
    excepted_delivery_date: string;
    order_status: 'CANCELLED' | 'DELIVERED' | 'OUT_FOR_DELIVERY' | 'SHIPPED' | 'PENDING' | string;
    payment_status: 'PENDING' | 'PAID' | 'FAILED' | string;
    transaction_id: string;
    unique_order_id: string;
    isCancelled: boolean
    paid: boolean;
    user: number;
}
