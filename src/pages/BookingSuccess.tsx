import { CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';


const BookConsultSuccess = () => {


    return (


        <main className="min-h-screen flex justify-center pt-16  p-4 w-full">


            <motion.div
                className="p-8 md:p-12 text-center max-w-7xl w-full"
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
                        className="rounded-full bg-gradient-to-tr from-[#25434E] to-[#406f7e] p-4"
                        initial={{ rotate: -90, scale: 0 }}
                        animate={{ rotate: 0, scale: 1 }}
                        transition={{ type: 'spring', stiffness: 180, damping: 14, delay: 0.3 }}
                    >
                        <CheckCircle size={64} color="white" strokeWidth={2} />
                    </motion.div>
                </motion.div>


                <motion.h1
                    className="text-3xl md:text-4xl font-bold text-[#25434E] mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                >
                    Booking Confirmed!
                </motion.h1>


                <motion.p
                    className="text-[#25434E] text-base md:text-lg leading-relaxed mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    Thank you!<br />
                    We will contact you at your chosen appointment time.<br />
                    Check your email or phone for updates.
                </motion.p>


                <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                >
                    <Link to="/" className="inline-block px-6 py-3 bg-[#25434E] text-white rounded-lg text-lg shadow-lg hover:bg-[#1e373f] transition-all duration-300">
                        Go to Home
                    </Link>
                </motion.div>


            </motion.div>


        </main>

    );


};

export default BookConsultSuccess;
