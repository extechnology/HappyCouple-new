import { motion } from 'framer-motion';
import { MapPin, ShoppingBag, Star } from 'lucide-react';



// Interface for the address
interface Address {
    name: string;
    phone: string;
    street: string;
    landmark?: string;
    postal: string;
    city: string;
    state: string;
}



// Interface for the product card
interface ProductCardProps {
    order: {
        id: number;
        title: string;
        description: string;
        price: number;
        quantity: number;
        image: string;
        isCancelled?: boolean;
    };
    address: Address;
}


const ProductCard = ({ order, address }: ProductCardProps) => {


    return (


        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-50"
        >



            <div className="bg-gradient-to-r from-[#25434E] to-[#1a879c] p-4 relative overflow-hidden">

                <h2 className="font-semibold text-lg flex items-center text-white relative z-10">
                    <ShoppingBag className="w-5 h-5 mr-2" />
                    Order Details
                </h2>

            </div>


            <div className="p-3 sm:p-5">


                <div className="flex flex-col sm:flex-row gap-6">


                    {/* Product image with hover effect */}
                    <motion.div
                        className="sm:w-1/4 flex-shrink-0"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300, damping: 10 }}
                    >
                        <div className="bg-gradient-to-br from-gray-50 to-white p-3 rounded-xl overflow-hidden h-full relative">
                            {order.isCancelled && (
                                <div className="absolute inset-0 bg-white/80 backdrop-blur-sm flex items-center justify-center">
                                    <div className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold rotate-[-15deg] shadow-lg">
                                        CANCELLED
                                    </div>
                                </div>
                            )}
                            <img
                                src={order.image}
                                alt={order.title}
                                loading='lazy'
                                className="w-full h-auto rounded-lg object-cover aspect-square"
                            />
                        </div>
                    </motion.div>


                    {/* Product details */}
                    <div className="flex-1">

                        <div className="flex items-start justify-between">
                            <h3 className="font-semibold text-xl text-gray-800">{order.title}</h3>
                            <div className="flex items-center bg-yellow-50 px-2 py-1 rounded-full">
                                <Star className="w-3 h-3 fill-yellow-400 text-yellow-400 mr-1" />
                                <span className="text-xs font-medium text-yellow-700">Top Rated</span>
                            </div>
                        </div>


                        <p className="text-gray-700 text-sm mt-2 mb-4 leading-relaxed">{order.description}</p>


                        <div className="bg-gradient-to-br from-gray-50 to-white rounded-lg p-4 mt-4 border shadow-sm">


                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">


                                <motion.div
                                    whileHover={{ scale: 1.03 }}
                                    className="p-3 rounded-md border border-gray-100"
                                >
                                    <p className="text-gray-500 text-xs mb-1">Quantity</p>
                                    <p className="font-medium text-lg">{order.quantity}</p>
                                </motion.div>


                                <motion.div
                                    whileHover={{ scale: 1.03 }}
                                    className="p-3 rounded-md border border-gray-100"
                                >
                                    <p className="text-gray-500 text-xs mb-1">Unit Price</p>
                                    <p className="font-medium text-lg">₹{order.price.toLocaleString()}</p>
                                </motion.div>


                                <motion.div
                                    whileHover={{ scale: 1.03 }}
                                    className="p-3 rounded-md border border-gray-100"
                                >
                                    <p className="text-gray-500 text-xs mb-1">Total</p>
                                    <p className="font-bold text-lg text-[#25434E]">₹{(order.price * order.quantity).toLocaleString()}</p>
                                </motion.div>

                            </div>

                        </div>



                        {/* Delivery Address */}
                        <div className="py-4">


                            <div className="space-y-4">


                                <div className="relative bg-gradient-to-r from-gray-50 to-white p-6 rounded-xl shadow-sm border">


                                    {/* Vertical accent bar */}
                                    <div className="absolute top-4 bottom-4 left-0 w-1  bg-[#19788e] rounded-full" />


                                    <h2 className="font-semibold text-lg flex items-center text-[#25434E] relative z-10 mb-3">
                                        <MapPin className="w-5 h-5 mr-2" />
                                        Delivery Address
                                    </h2>


                                    {/* Address Info */}
                                    <div className="pl-4">

                                        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-1">

                                            <span className="font-semibold text-gray-900 text-lg">{address.name}</span>
                                            <span className="text-sm text-gray-700">{address.phone}</span>

                                        </div>


                                        <p className="text-gray-700">{address.street}</p>


                                        {address.landmark && (
                                            <p className="text-gray-700 mt-1">{address.landmark}</p>
                                        )}


                                        <p className="text-gray-700 font-medium mt-1">
                                            {address.city}, {address.state}{" "}
                                            <span className="font-bold">- {address.postal}</span>
                                        </p>

                                    </div>


                                </div>

                            </div>

                        </div>


                    </div>

                </div>

            </div>


            {/* Price summary section */}
            <div className="bg-gradient-to-br from-gray-50 to-white p-5 mt-2 border-t border-gray-100">
                <div className="flex justify-between items-center">
                    <div className="flex items-center">
                        {!order.isCancelled && (
                            <motion.div
                                animate={{ scale: [1, 1.05, 1] }}
                                transition={{ duration: 2, repeat: Infinity }}
                                className="text-xs font-medium bg-green-100 text-green-700 px-2 py-1 rounded-full flex items-center"
                            >
                                <span className="w-2 h-2 rounded-full bg-green-500 mr-1.5"></span>
                                Item Confirmed
                            </motion.div>
                        )}
                    </div>
                    <div className="flex flex-col items-end">
                        <span className="text-md text-gray-500 font-semibold mb-1">Order Total</span>
                        <span className="font-bold text-xl text-[#25434E]">₹{(order.price * order.quantity).toLocaleString()}</span>
                    </div>
                </div>
            </div>

        </motion.div>

    );

};


export default ProductCard;