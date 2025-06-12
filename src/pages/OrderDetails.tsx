import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { format } from 'date-fns';
import { ArrowLeft, CalendarDays, FileText, Info } from 'lucide-react';
import OrderProgressTracker from '@/components/Orders/OrderProgressTracker';
import ProductCard from '@/components/Orders/ProductCard';
import { useGetSingleOrders } from '@/services/orders/queries';
import ServerError from '@/components/common/Error';
import { TimelineTypes } from '@/services/orders/types';



export default function OrderDetails() {



    // Get Order ID
    const { id } = useParams();



    const navigate = useNavigate();



    // Get All User Orders
    const { data: order, isLoading, isFetching, isError } = useGetSingleOrders(id!);




    // Handle Error
    if (isError) return <ServerError />




    // Handle Loading
    if (isLoading || isFetching) {
        return (
            <div className="bg-[#f1fafd] min-h-screen flex flex-col items-center justify-center">
                <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-[#19788e]"></div>
                <p className="mt-4 text-[#19788e]">Loading order details...</p>
            </div>
        );
    }



    // Handle Order Not Found
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
    const totalSteps = order?.timeline?.length || 1;
    const currentStepIndex = order?.timeline?.findIndex((step: TimelineTypes) => step?.status === order?.order_status);
    const progressPercentage = order?.isCancelled || currentStepIndex === -1 ? 100 : ((currentStepIndex + 1) / totalSteps) * 100;



    return (


        <div className="bg-[#f1fafd] min-h-screen pb-12">


            {/* Glassmorphic header with back button */}
            <div className="backdrop-blur-sm bg-white/80 shadow-sm sticky top-0 z-20 mb-4 border-b border-gray-100">
                <div className="container mx-auto px-4 py-4 max-w-6xl">
                    <button
                        onClick={() => navigate('/orders')}
                        className="flex items-center gap-1.5 text-md text-[#25434E] hover:text-[#146275] transition-colors hover:cursor-pointer"
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

                                <h1 className="text-xl font-bold text-gray-800">Order Id: {order?.unique_order_id}</h1>


                                {/* Cancelled */}
                                {order?.isCancelled && (
                                    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs sm:text-sm font-semibold bg-red-100 text-red-800">
                                        Cancelled
                                    </span>
                                )}


                                {/* Payment Status */}
                                <span
                                    className={`font-semibold px-2.5 py-1 rounded-full text-xs sm:text-sm ${order?.paid
                                        ? 'bg-green-100 text-green-700'
                                        : 'bg-red-100 text-red-700'
                                        }`}
                                >
                                    {order?.paid ? 'Paid' : 'Payment Failed'}
                                </span>

                            </div>


                            {/* Order Dates */}
                            <div className="flex flex-wrap items-center gap-x-8 text-sm mt-3 p-4 rounded-md border shadow-sm">

                                {/* Placed on */}
                                <p className="flex items-center gap-1.5 text-[#25434E] font-medium">
                                    <CalendarDays className="w-4 h-4 text-[#20a0bb]" />
                                    <span className="font-semibold text-black">Placed on:</span>&nbsp;
                                    {format(new Date(order?.order_date), 'MMMM dd, yyyy')} at {format(new Date(order?.order_date), 'hh:mm a')}
                                </p>


                                {/* Expected Delivery */}
                                {!order?.isCancelled && order?.excepted_delivery_date && (

                                    <p className="flex items-center gap-1.5 text-[#25434E] font-medium">
                                        <CalendarDays className="w-4 h-4 text-[#20a0bb]" />
                                        <span className="font-semibold text-black">Expected Delivery:</span>&nbsp;
                                        {format(new Date(order?.excepted_delivery_date), 'MMMM dd, yyyy')} Before 6PM
                                    </p>
                                )}

                            </div>


                        </div>


                        {/* Download Invoice */}
                        <div className="flex flex-wrap gap-3 sm:flex-nowrap">

                            <a href={order?.invoice_pdf} target="_blank" rel="noopener noreferrer" download={order?.invoice_pdf}>
                                <Button
                                    variant="outline"
                                    className="border-[#19788e] hover:scale-105 font-semibold bg-[#25434E] text-white hover:bg-transparent hover:text-[#25434E] hover:cursor-pointer transition-colors  duration-200"
                                >
                                    <FileText className="w-4 h-4 mr-2" /> Download Invoice
                                </Button>
                            </a>

                        </div>

                    </div>

                </div>


                {/* Order progress tracker */}
                <div className="mb-6 animate-fade-in" style={{ animationDelay: '100ms' }}>
                    <OrderProgressTracker
                        steps={order?.timeline}
                        currentStatus={order?.order_status}
                        progressPercentage={progressPercentage}
                        isCancelled={order?.isCancelled}
                    />
                </div>


                {/* Product Card */}
                <ProductCard address={order?.address} order={order} />


            </div>


        </div>

    );

}