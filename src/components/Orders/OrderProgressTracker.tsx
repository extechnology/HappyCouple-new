import { format, isValid } from 'date-fns';
import { Check, Clock, Package, Truck, MapPin, XOctagon, Bike } from 'lucide-react';
import { motion } from 'framer-motion';
import { TimelineTypes } from '@/services/orders/types';



// Interface for the OrderProgressTracker component
interface OrderProgressTrackerProps {
    steps: TimelineTypes[];
    currentStatus: string;
    progressPercentage: number;
    isCancelled?: boolean;
}



// Mapping of status to icons
const statusIcons = {
    ordered: Clock,
    confirmed: Package,
    shipped: Truck,
    out_for_delivery: Bike,
    delivered: MapPin,
    cancelled: XOctagon
};


// Mapping of status to labels
const statusToLabel = {
    ordered: 'Ordered',
    confirmed: 'Confirmed',
    shipped: 'Shipped',
    out_for_delivery: 'Out for Delivery',
    delivered: 'Delivered',
    cancelled: 'Cancelled'
};



const OrderProgressTracker = ({ steps, currentStatus, progressPercentage, isCancelled = false }: OrderProgressTrackerProps) => {


    return (


        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
        >



            {/* Header */}
            <div className="bg-gradient-to-r from-[#25434E] to-[#1a879c] p-6">
                <h2 className="font-bold text-lg text-white flex items-center">
                    {isCancelled ? (
                        <XOctagon className="mr-2 h-5 w-5 text-red-400" />
                    ) : (
                        <Package className="mr-2 h-5 w-5" />
                    )}
                    {isCancelled ? 'Order Cancelled' : 'Order Status'}
                </h2>
            </div>




            <div className="p-6">


                {/* Status points with animations */}
                <div className="relative flex justify-between">


                    {steps?.map((step: TimelineTypes, index : number) => {


                        const currentStepIndex = steps?.findIndex(s => s?.status.toLowerCase() === currentStatus?.toLowerCase());

                        const isCurrent = step?.status?.toLowerCase() === currentStatus?.toLowerCase();

                        const isCompleted = isCancelled ? step?.status?.toLowerCase() === 'cancelled' : currentStepIndex >= index;


                        // Icons Dynamic
                        const Icon = statusIcons[step?.status as keyof typeof statusIcons] || Package;


                        // Text color and background Dyanmic
                        const textColor = isCancelled && step?.status.toLowerCase() === 'cancelled' ? 'text-red-500' : isCompleted ? 'text-[#25434E]' : 'text-gray-400';

                        const bgColor = isCancelled && step?.status.toLowerCase() === 'cancelled' ? 'bg-red-500 text-white' : isCompleted ? 'bg-gradient-to-r from-[#25434E] to-[#20a0bb] text-white' : 'bg-gray-100 text-gray-400';



                        return (


                            <motion.div
                                key={step.status}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className={`flex flex-col items-center w-1/5 ${textColor}`}
                            >



                                {/* Circle indicator */}
                                <motion.div
                                    className={`relative z-10 w-12 h-12 rounded-full flex items-center justify-center shadow-md ${bgColor} ${isCurrent ? 'ring-4 ring-[#d3f0f7]' : ''}`}
                                    whileHover={{ scale: 1.1 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                >
                                    {isCompleted ? (
                                        step?.status === 'cancelled' ?
                                            <XOctagon className="w-5 h-5" /> :
                                            <Check className="w-5 h-5" />
                                    ) : (
                                        <Icon className="w-5 h-5" />
                                    )}
                                </motion.div>



                                {/* Status label */}
                                <p className={`mt-3 font-medium text-center ${isCancelled && step?.status === 'cancelled' ? 'text-red-500' :
                                    isCompleted ? 'text-[#19788e]' : 'text-gray-400'
                                    }`}>
                                    {statusToLabel[step?.status as keyof typeof statusToLabel]}
                                </p>


                                {/* Date (if available) */}
                                {step?.date && isValid(new Date(step?.date)) ? (
                                    <p className="mt-1 text-xs text-center">
                                        {format(new Date(step.date), 'MMM dd, h:mm a')}
                                    </p>
                                ) : isCurrent ? (
                                    <p className="mt-1 text-xs text-center font-medium text-[#19788e]">In progress</p>
                                ) : (
                                    <p className="mt-1 text-xs text-center text-gray-400">Pending</p>
                                )}


                                {/* Status description */}
                                <p className="mt-1 text-xs text-center max-w-[120px]">
                                    {step?.description}
                                </p>


                            </motion.div>

                        );

                    })}


                    {/* Connecting line */}
                    <div className="absolute top-6 left-0 right-0 h-0.5 bg-gray-200 z-0">
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{
                                width: isCancelled ? '100%' : `${progressPercentage}%`,
                                backgroundColor: isCancelled ? '#ef4444' : undefined
                            }}
                            transition={{ duration: 1.5, ease: "easeOut" }}
                            className={`absolute h-0.5 ${isCancelled
                                ? 'bg-red-500'
                                : 'bg-gradient-to-r from-[#19788e] to-[#20a0bb]'
                                }`}
                        />
                    </div>


                </div>

            </div>

        </motion.div>
    );
};

export default OrderProgressTracker;