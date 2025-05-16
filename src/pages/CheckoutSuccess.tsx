import { CheckCircle, ShoppingBag, XCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link, useSearchParams } from 'react-router-dom';
import { useGetVerifyOrder } from '@/services/checkout/queries';
import ServerError from '@/components/common/Error';
import CheckoutSuccessLoader from '@/components/Loaders/CheckoutSuccessLoader';



const CheckoutSuccess = () => {



    // Get Transaction ID
    const [searchParams] = useSearchParams();
    const transactionId = searchParams.get("transaction_id");



    // Get Verify Order
    const { data, isLoading, isFetching, isError } = useGetVerifyOrder(transactionId as string);



    // Handle Loading
    if (isLoading || isFetching || !data) return <CheckoutSuccessLoader />;



    // Handle Error
    if (isError) return <ServerError />;



    // Get Status
    const isSuccess = data?.status === true;




    return (


        <main className="min-h-screen flex justify-center pt-0 p-4 w-full">


            <motion.div
                className="p-8 md:p-12 text-center max-w-2xl w-full"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
            >


                <motion.div
                    className="flex items-center justify-center mb-6"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 200, damping: 12 }}
                >
                    <motion.div
                        className={`rounded-full p-4 ${isSuccess ? "bg-gradient-to-tr from-[#25434E] to-[#406f7e]" : "bg-red-600"
                            }`}
                        initial={{ rotate: -90, scale: 0 }}
                        animate={{ rotate: 0, scale: 1 }}
                        transition={{ type: 'spring', stiffness: 180, damping: 14, delay: 0.3 }}
                    >
                        {isSuccess ? (
                            <CheckCircle size={64} color="white" strokeWidth={2} />
                        ) : (
                            <XCircle size={64} color="white" strokeWidth={2} />
                        )}
                    </motion.div>
                </motion.div>



                <motion.h1
                    className={`text-3xl md:text-4xl font-bold mb-4 ${isSuccess ? "text-[#25434E]" : "text-red-600"
                        }`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                >
                    {isSuccess ? "Order Confirmed!" : "Payment Failed"}
                </motion.h1>



                <motion.p
                    className={`text-base md:text-lg leading-relaxed mb-6 ${isSuccess ? "text-[#25434E]" : "text-red-600"
                        }`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    {isSuccess
                        ? (
                            <>
                                Thank you for your purchase!<br />
                                Your order has been successfully placed and is being processed.
                            </>
                        )
                        : (
                            <>
                                Your payment was not completed.<br />
                                Please try again or contact support if the problem persists.
                            </>
                        )}
                </motion.p>



                {/* Product details always shown if product data is available */}
                {data?.product && (
                    <motion.div
                        className="bg-white shadow-md rounded-lg p-4 mb-6 text-left"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.7 }}
                    >
                        <div className="flex items-center space-x-4">
                            <img
                                src={data?.product?.image}
                                alt={data?.product?.name}
                                className="w-52 h-28 rounded-md object-cover"
                            />
                            <div>
                                <p className="text-lg font-medium">{data?.product?.name}</p>
                                <p className="text-gray-600">Quantity: 1</p>
                                <p className="text-gray-800 font-semibold">₹{data?.product?.price}</p>
                            </div>
                        </div>
                    </motion.div>
                )}



                <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                >
                    <Link
                        to={isSuccess ? "/treatmentplans" : "/"}
                        className={`inline-block px-6 py-3 rounded-lg text-lg shadow-lg transition-all duration-300 ${isSuccess
                            ? "bg-[#25434E] text-white hover:scale-105"
                            : "bg-red-600 text-white hover:bg-red-700"
                            }`}
                    >
                        {isSuccess ? (
                            <>
                                Continue Shopping <ShoppingBag size={20} className="inline-block ml-2" />
                            </>
                        ) : (
                            "Back to Home"
                        )}
                    </Link>
                </motion.div>


            </motion.div>


        </main>


    );


};


export default CheckoutSuccess;
