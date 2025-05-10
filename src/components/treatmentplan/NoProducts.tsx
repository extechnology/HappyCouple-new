import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";




export default function NoProducts() {


    return (


        <div className="h-[90vh] bg-white flex flex-col items-center justify-center px-4">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center max-w-md"
            >
                <img
                    src="/No-Products.png"
                    alt="Server Error"
                    loading='lazy'
                    className="w-52 h-52 mx-auto"
                />
                <h1 className="text-5xl md:text-6xl font-bold text-[#25434E] mb-4">
                    Oops!
                </h1>
                <p className="text-lg md:text-xl text-[#25434E] mb-3">
                    No Products Found
                </p>
                <p className="text-sm text-[#25434E] mb-6">
                    We couldn't find any products at the moment. Please check back later.
                </p>
                <Button onClick={() => window.location.reload()} className='hover:cursor-pointer bg-[#25434E] hover:transform hover:scale-105'>
                    Try Again
                </Button>
            </motion.div>
        </div>

    )


}
