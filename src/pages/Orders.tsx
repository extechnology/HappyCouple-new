import { useMemo, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useGetAllOrders } from '@/services/orders/queries';
import { OrderTypes } from '@/services/orders/types';
import ServerError from '@/components/common/Error';
import OrdercardLoader from '@/components/Loaders/OrdercardLoader';
import { Package, PackageSearch } from 'lucide-react';
import { Link } from 'react-router-dom';




// Status Colors
const statusColors: { [key: string]: string } = {
    CANCELLED: 'bg-red-200 text-red-800',
    DELIVERED: 'bg-green-200 text-green-800',
    PENDING: 'bg-blue-200 text-blue-800',
    SHIPPED: 'bg-yellow-200 text-yellow-800',
};




export default function Orders() {



    // Get All User Orders
    const { data, isLoading, isFetching, isError } = useGetAllOrders()



    // Current Selected Tab
    const [selectedTab, setSelectedTab] = useState('All');



    // Filtered Orders
    const filteredOrders = useMemo(() => {
        if (!data) return [];
        return selectedTab === 'All' ? data : data.filter((order: OrderTypes) => order.order_status === selectedTab);
    }, [data, selectedTab]);




    // Handle Error
    if (isError) return <ServerError />



    return (

        <div className="bg-[#f1fafd] min-h-screen px-2 md:px-16 py-8">


            <h1 className="gap-3 text-4xl sm:text-4xl md:text-5xl font-serif font-bold text-gray-800 mb-9">
                My Orders
                <Package className="w-8 sm:w-10 h-8 sm:h-10 text-primar inline-block ms-2" />
            </h1>



            {/* Tabs Component */}
            <div className="flex flex-wrap items-center gap-4 mb-8">
                <Tabs value={selectedTab} onValueChange={setSelectedTab}>
                    <TabsList
                        className="flex flex-wrap sm:flex-nowrap gap-2 bg-transparent p-0"
                    >
                        {['All', 'PENDING', 'SHIPPED', 'DELIVERED', 'CANCELLED'].map((tab) => (
                            <TabsTrigger
                                key={tab}
                                value={tab}
                                className={`px-4 py-1 border border-gray-400 shadow-sm rounded-full text-sm font-medium whitespace-nowrap hover:cursor-pointer ${selectedTab === tab ? 'bg-[#25434E]! text-white' : 'bg-white text-black'
                                    }`}
                            >
                                {tab}
                            </TabsTrigger>
                        ))}
                    </TabsList>
                </Tabs>
            </div>



            <div className="space-y-6 pt-8 sm:pt-0">


                {isLoading || isFetching || !filteredOrders ? (

                    <OrdercardLoader />

                ) : (

                    <>

                        {filteredOrders?.length > 0 ? (

                            <>

                                {filteredOrders?.map((order: OrderTypes) => (


                                    <Card key={order?.id} className="flex flex-col md:flex-row items-start md:items-center gap-4 p-3 sm:p-6 shadow-md rounded-xl border">


                                        {/* Product Image */}
                                        <div className="w-full md:w-32 flex justify-center md:justify-start">
                                            <img
                                                src={order?.product?.image}
                                                alt="product"
                                                loading="lazy"
                                                className="w-52 sm:w-28 h-28 object-contain rounded-md"
                                            />
                                        </div>


                                        {/* Product Info */}
                                        <CardContent className="flex-1 w-full">


                                            <div className="flex flex-wrap items-center gap-2 sm:gap-4 mb-3 text-sm">


                                                {/* Order Status */}
                                                <span
                                                    className={`px-2 py-0.5 rounded-full font-medium text-xs sm:text-sm ${statusColors[order?.order_status]}`}
                                                >
                                                    {order?.order_status}
                                                </span>


                                                {/* Order Date */}
                                                <span className="text-gray-600 font-medium text-xs sm:text-sm">
                                                    Ordered on{' '}
                                                    {order?.order_date
                                                        ? new Date(order?.order_date).toLocaleDateString('en-GB', {
                                                            day: 'numeric',
                                                            month: 'short',
                                                            year: 'numeric',
                                                        })
                                                        : 'No date available'}
                                                </span>


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


                                            {/* Product Name */}
                                            <p className="font-semibold text-base sm:text-lg text-gray-900">
                                                {order?.product?.name}
                                            </p>


                                            {/* Product Price */}
                                            <p className="text-lg sm:text-xl font-bold text-gray-800 mt-1 sm:mt-2">
                                                ₹{order?.price}
                                            </p>


                                            {/* Optional Button */}
                                            {/* <Button variant="outline" className="mt-3 text-sm rounded-md">
                                                View Details
                                            </Button> */}


                                        </CardContent>


                                    </Card>

                                ))}

                            </>

                        ) : (

                            <div className="p-16 flex flex-col items-center justify-center bg-transparent animate-fade-in space-y-4 border-2 border-dashed border-[#25434E] rounded-xl">
                                <div className="h-28 w-28 text-[#25434E] animate-float flex items-center justify-center">
                                    <PackageSearch className="h-24 w-24 text-[#25434E] animate-bounce-slow" />
                                </div>

                                <p className="text-lg text-[#25434E] font-semibold text-center animate-fade-in-up transition-all duration-1000 ease-in-out">
                                    No {selectedTab} ORDERS FOUND..!<br />
                                    <span className="text-md font-medium opacity-80">You haven't placed any orders yet.</span>
                                </p>

                                <Link to={'/treatmentplans'}>
                                    <button className="mt-2 hover:cursor-pointer px-4 py-2 bg-[#25434E] text-white text-sm rounded-xl shadow-lg hover:bg-[#1b323b] transition duration-300 ease-in-out">
                                        Browse Products
                                    </button>
                                </Link>

                            </div>

                        )}

                    </>
                )}

            </div>

        </div>


    );
}
