import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button"; 

const ServerError: React.FC = () => {
    return (
        <div className="h-[90vh] bg-white flex flex-col items-center justify-center px-4">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center max-w-md"
            >
                <img
                    src="/error-icon.png"
                    alt="Server Error"
                    loading='lazy'
                    className="w-52 h-52 mx-auto"
                />
                <h1 className="text-5xl md:text-6xl font-bold text-[#25434E] mb-4">
                    Oops!
                </h1>
                <p className="text-lg md:text-xl text-[#25434E] mb-3">
                    Something went wrong on our end.
                </p>
                <p className="text-sm text-[#25434E] mb-6">
                    The server might be down or not responding. Please try again.
                </p>
                <Button onClick={() => window.location.reload()} className='hover:cursor-pointer bg-[#25434E] hover:transform hover:scale-105'>
                    Try Again 
                </Button>
            </motion.div>
        </div>
    );
};

export default ServerError;
