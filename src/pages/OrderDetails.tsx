import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { format } from 'date-fns';
import { ArrowLeft, FileText, CalendarDays, Info } from 'lucide-react';
import { useEffect, useState } from 'react';
import OrderProgressTracker from '@/components/Orders/OrderProgressTracker';
import ProductCard from '@/components/Orders/ProductCard';
import { toast } from 'sonner';




// Mock data for orders
const orders = [
    {
        id: 1,
        status: 'shipped',
        orderDate: '2023-05-10T10:30:00',
        title: 'VitalCore Solution – Nutraceutical Therapy',
        description: 'Advanced formula with essential nutrients for optimal health and wellness',
        price: 1470,
        quantity: 1,
        image: 'https://images.unsplash.com/photo-1556155092-490a1ba16284?q=80&w=1470&auto=format&fit=crop',
        deliveryDate: '2023-05-16T18:00:00',
        trackingId: 'IN7236459871',
        carrier: 'BlueDart Express',
        isCancelled: false,
        payment: {
            method: 'Paytm',
            transactionId: 'PTM78451236',
            date: '2023-05-10T10:32:15',
            amount: 1470,
            status: 'completed',
        },
        address: {
            name: 'Aditya C',
            phone: '9074058593',
            street: '123 Ocean View, Feroke Road, Ramanattukara',
            landmark: 'Near City Hospital',
            postal: '676509',
            city: 'Calicut',
            state: 'Kerala',
        },
        timeline: [
            {
                status: 'ordered',
                date: '2023-05-10T10:30:00',
                description: 'Your order has been placed successfully'
            },
            {
                status: 'confirmed',
                date: '2023-05-10T14:15:00',
                description: 'Seller has processed your order'
            },
            {
                status: 'shipped',
                date: '2023-05-12T09:45:00',
                description: 'Your item has been shipped'
            },
            {
                status: 'out_for_delivery',
                date: null,
                description: 'Your item is out for delivery'
            },
            {
                status: 'delivered',
                date: null,
                description: 'Your item has been delivered'
            }
        ]
    },
    {
        id: 2,
        status: 'delivered',
        orderDate: '2023-04-15T14:20:00',
        title: 'ImmunoBoost Complete - Immunity Support Supplement',
        description: 'Powerful immune system support with vitamins C, D, zinc and elderberry',
        price: 990,
        quantity: 2,
        image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=1530&auto=format&fit=crop',
        deliveryDate: '2023-04-20T12:30:00',
        trackingId: 'IN9876543210',
        carrier: 'DTDC Express',
        isCancelled: false,
        payment: {
            method: 'Credit Card',
            transactionId: 'CC78451285',
            date: '2023-04-15T14:22:30',
            amount: 1980,
            status: 'completed',
        },
        address: {
            name: 'Aditya C',
            phone: '9074058593',
            street: '123 Ocean View, Feroke Road, Ramanattukara',
            landmark: 'Near City Hospital',
            postal: '676509',
            city: 'Calicut',
            state: 'Kerala',
        },
        timeline: [
            {
                status: 'ordered',
                date: '2023-04-15T14:20:00',
                description: 'Your order has been placed successfully'
            },
            {
                status: 'confirmed',
                date: '2023-04-15T16:45:00',
                description: 'Seller has processed your order'
            },
            {
                status: 'shipped',
                date: '2023-04-16T10:30:00',
                description: 'Your item has been shipped'
            },
            {
                status: 'out_for_delivery',
                date: '2023-04-19T08:15:00',
                description: 'Your item is out for delivery'
            },
            {
                status: 'delivered',
                date: '2023-04-19T14:25:00',
                description: 'Your item has been delivered'
            }
        ]
    },
    {
        id: 3,
        status: 'cancelled',
        orderDate: '2023-06-05T16:20:00',
        title: 'Ultimate Wellness Pack - Premium Health Supplements',
        description: 'Complete wellness solution with multiple supplements for overall health',
        price: 2450,
        quantity: 1,
        image: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?q=80&w=1470&auto=format&fit=crop',
        deliveryDate: null,
        trackingId: null,
        carrier: null,
        isCancelled: true,
        payment: {
            method: 'UPI',
            transactionId: 'UPI78451290',
            date: '2023-06-05T16:22:30',
            amount: 2450,
            status: 'refunded',
        },
        address: {
            name: 'Aditya C',
            phone: '9074058593',
            street: '123 Ocean View, Feroke Road, Ramanattukara',
            landmark: 'Near City Hospital',
            postal: '676509',
            city: 'Calicut',
            state: 'Kerala',
        },
        timeline: [
            {
                status: 'ordered',
                date: '2023-06-05T16:20:00',
                description: 'Your order has been placed successfully'
            },
            {
                status: 'confirmed',
                date: '2023-06-05T17:15:00',
                description: 'Seller has processed your order'
            },
            {
                status: 'cancelled',
                date: '2023-06-06T09:45:00',
                description: 'Your order has been cancelled'
            }
        ]
    }
]




export default function OrderDetails() {


    const { id } = useParams();


    const navigate = useNavigate();



    const [order, setOrder] = useState<typeof orders[0] | undefined>(
        orders.find((o) => o.id.toString() === id)
    );


    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        // Simulate data loading
        const timer = setTimeout(() => {
            setIsLoading(false);

            if (!order) {
                toast.error("Order not found", {
                    description: "We couldn't find the order you're looking for."
                });
            } else {
                toast.success("Order details loaded", {
                    description: `Viewing order #${order.id}`
                });
            }
        }, 500);

        setOrder(orders[0])

        return () => clearTimeout(timer);
    }, [order]);




    if (isLoading) {
        return (
            <div className="bg-[#f1fafd] min-h-screen flex flex-col items-center justify-center">
                <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-[#19788e]"></div>
                <p className="mt-4 text-[#19788e]">Loading order details...</p>
            </div>
        );
    }



    if (!order) {
        return (
            <div className="bg-[#f1fafd] min-h-screen p-6 flex flex-col items-center justify-center">
                <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full text-center">
                    <Info className="mx-auto h-16 w-16 text-red-500 mb-4" />
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">Order Not Found</h2>
                    <p className="text-gray-600 mb-6">We couldn't find the order you're looking for.</p>
                    <Button onClick={() => navigate('/orders')} className="bg-[#19788e] hover:bg-[#146275]">
                        View All Orders
                    </Button>
                </div>
            </div>
        );
    }



    // Current status step number (0-based index)
    const currentStepIndex = order.timeline.findIndex(step => step.status === order.status);
    const progressPercentage = order.isCancelled ? 100 : ((currentStepIndex + 1) / 5) * 100;



    return (


        <div className="bg-[#f1fafd] min-h-screen pb-12">


            {/* Glassmorphic header with back button */}
            <div className="backdrop-blur-sm bg-white/80 shadow-sm sticky top-0 z-20 mb-4 border-b border-gray-100">
                <div className="container mx-auto px-4 py-4 max-w-6xl">
                    <button
                        onClick={() => navigate(-1)}
                        className="flex items-center gap-1.5 text-md text-[#25434E] hover:text-[#146275] transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4" /> Back to Orders
                    </button>
                </div>
            </div>



            <div className="container mx-auto px-2 sm:px-4 max-w-7xl">



                {/* Order header with ID and date */}
                <div className="bg-white rounded-lg shadow-md p-6 mb-6 animate-fade-in relative overflow-hidden">


                    <div className="flex flex-wrap justify-between items-start gap-4 relative z-10">


                        <div>

                            <div className="flex items-center gap-2">
                                <h1 className="text-xl font-bold text-gray-800">Order #{order.id}</h1>
                                {order.isCancelled && (
                                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                                        Cancelled
                                    </span>
                                )}
                            </div>

                            <p className="text-gray-500 flex items-center gap-1.5 mt-1">
                                <CalendarDays className="w-4 h-4" />
                                Placed on {format(new Date(order.orderDate), 'MMMM dd, yyyy')} at {format(new Date(order.orderDate), 'hh:mm a')}
                            </p>

                        </div>


                        <div className="flex flex-wrap gap-3 sm:flex-nowrap">

                            <Button
                                variant="outline"
                                className="border-[#19788e] font-semibold bg-[#25434E] text-white hover:bg-transparent hover:text-[#25434E] hover:cursor-pointer transition-colors ease-in-out duration-300"
                            >
                                <FileText className="w-4 h-4 mr-2" /> Download Invoice
                            </Button>

                        </div>

                    </div>

                </div>



                {/* Order progress tracker */}
                <div className="mb-6 animate-fade-in" style={{ animationDelay: '100ms' }}>
                    <OrderProgressTracker
                        steps={order.timeline}
                        currentStatus={order.status}
                        progressPercentage={progressPercentage}
                        isCancelled={order.isCancelled}

                    />
                </div>


                {/* Product Card */}
                <ProductCard address={order.address} order={order} />


            </div>


        </div>

    );

}