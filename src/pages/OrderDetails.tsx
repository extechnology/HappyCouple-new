import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { format } from 'date-fns';
import { ArrowLeft, FileText, LocateIcon } from 'lucide-react';



const orders = [
    {
        id: 1,
        status: 'In progress',
        date: '2022-05-10',
        title: 'VitalCore Solution – Nutraceutical Therapy',
        price: 1470,
        image: '/images/lygin.png',
        deliveryDate: '2022-05-16',
        orderDate: '2022-02-16',
        payment: 'Paytm',
        address: {
            name: 'Aditya c',
            phone: '9074058593',
            street: 'abc house, feroke road, ramanattukara',
            postal: '676509',
            city: 'calicut',
        },
    },
];




export default function OrderDetailsContent() {



    const { id } = useParams();
    const navigate = useNavigate();
    const order = orders.find((o) => o.id.toString() === id);



    if (!order) return <p>Order not found.</p>;



    return (
        <div className="bg-[#f1fafd] min-h-screen px-4 md:px-16 py-8">
            <button
                onClick={() => navigate(-1)}
                className="flex items-center gap-2 text-sm mb-6 text-blue-700 hover:underline"
            >
                <ArrowLeft className="w-4 h-4" /> Back to Orders
            </button>

            <Card className="p-4 mb-4 flex items-center gap-4 shadow-md">
                <img src={order.image} alt="product" className="w-24 object-contain" />
                <div className="flex-1">
                    <p className="font-semibold text-lg">{order.title} (₹{order.price} for 1-Month Supply)</p>
                    <p className="text-blue-700 font-bold mt-2">₹{order.price}</p>
                </div>
            </Card>

            <div className="text-sm mb-6">
                <p className="mb-1">
                    <strong>Order date:</strong> {format(new Date(order.orderDate), 'MMM dd, yyyy')}
                </p>
                <p className="text-blue-700 flex items-center gap-2">
                    <strong>Estimated delivery:</strong>
                    {format(new Date(order.deliveryDate), 'MMM dd, yyyy')}
                </p>
            </div>

            <div className="relative mb-10 bg-[#f1fafd]">
                <div className="flex justify-between items-center text-xs px-2 text-gray-600">
                    {[
                        { label: 'Order Confirmed', date: 'Wed, 11th Jan', active: true },
                        { label: 'Shipped', date: 'Wed, 11th Jan', active: true },
                        { label: 'Out For Delivery', date: 'Wed, 11th Jan', active: false },
                        { label: 'Delivered', date: 'Expected by, Mon 16th', active: false },
                    ].map((step, index) => (
                        <div key={index} className="text-center w-1/4">
                            <p className={`mb-1 font-medium ${step.active ? 'text-[#19788e]' : 'text-gray-400'}`}>
                                {step.label}
                            </p>
                            <div
                                className={`mx-auto w-52 h-2 rounded-full ${step.active ? 'bg-[#19788e]' : 'bg-gray-400'
                                    }`}
                            ></div>
                            <p className={`mt-1 text-[11px] ${step.active ? 'text-[#19788e]' : 'text-gray-400'}`}>
                                {step.date}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="absolute left-0 right-0 top-[20px] mx-4 h-[2px] bg-gray-300 z-[-1]">
                    <div className="h-full bg-[#19788e]" style={{ width: '50%' }}></div>
                </div>
            </div>


            <div className="mb-4">
                <h2 className="font-semibold mb-2">DELIVERY ADDRESS</h2>
                <div className="bg-white p-4 rounded-md shadow-sm">
                    <p>{order.address.name}</p>
                    <p>{order.address.phone}</p>
                    <p>
                        {order.address.street}<br />
                        {order.address.postal} {order.address.city}
                    </p>
                </div>
            </div>

            <div className="mb-4">
                <h2 className="font-semibold mb-2">PAYMENT</h2>
                <div className="bg-white p-4 rounded-md shadow-sm">Paid by {order.payment}</div>
            </div>

            <div className="flex gap-4 mt-6">
                <Button variant="outline" className="flex items-center gap-2">
                    <FileText className="w-4 h-4" /> Invoice
                </Button>
                <Button className="flex items-center gap-2">
                    <LocateIcon className="w-4 h-4" /> Track order
                </Button>
            </div>
        </div>
    );
}
