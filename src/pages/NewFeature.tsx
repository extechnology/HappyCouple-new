import { Cog, House } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';



const FeatureComingSoon = () => {
    return (
        <main className="relative overflow-hidden min-h-screen flex justify-center bg-white px-4 pt-28">

            {/* Animated Background Blobs */}
            <motion.div
                className="absolute top-[-10%] left-[-10%] w-[300px] h-[300px] bg-[#25434E] opacity-20 rounded-full filter blur-3xl"
                animate={{ x: [0, 40, 0], y: [0, 20, 0] }}
                transition={{ repeat: Infinity, duration: 10, ease: 'easeInOut' }}
            />
            <motion.div
                className="absolute bottom-[-15%] right-[-15%] w-[350px] h-[350px] bg-[#406f7e] opacity-20 rounded-full filter blur-2xl"
                animate={{ x: [0, -40, 0], y: [0, -20, 0] }}
                transition={{ repeat: Infinity, duration: 12, ease: 'easeInOut' }}
            />

            <motion.div
                className="text-center max-w-xl w-full z-10"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >

                {/* Animated Gear Icon */}
                <motion.div
                    className="mx-auto mb-6 w-fit rounded-full bg-gradient-to-tr from-[#25434E] to-[#406f7e] p-6"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 180, damping: 14 }}
                >
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{
                            repeat: Infinity,
                            duration: 6,
                            ease: 'linear',
                        }}
                    >
                        <Cog size={64} color="white" strokeWidth={2} />
                    </motion.div>
                </motion.div>

                {/* Heading */}
                <h1 className="text-4xl md:text-5xl font-bold text-[#25434E] mb-4">
                    Feature Coming Soon !
                </h1>

                {/* Subtext */}
                <p className="text-[#25434E] text-base md:text-lg mb-6">
                    We're building something awesome for you Stay tuned !
                </p>

                {/* Button */}
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Link
                        to="/"
                        className="inline-block px-6 py-3 bg-[#25434E] text-white rounded-lg text-lg shadow-lg transition-all duration-300"
                    >
                        <House className='mr-1 inline-block' size={20} /> Back to Home
                    </Link>
                </motion.div>

            </motion.div>

        </main>

    );

};

export default FeatureComingSoon;
