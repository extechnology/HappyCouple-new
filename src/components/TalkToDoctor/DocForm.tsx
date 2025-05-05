import { LockKeyhole } from "lucide-react";
import { useState } from "react";

export default function DocForm() {


    const today = new Date();
    const tomorrow = new Date();
    tomorrow.setDate(today.getDate() + 1);


    const formatDate = (date: Date) => date.toISOString().split('T')[0];


    const [selectedDate, setSelectedDate] = useState(formatDate(today));
    const [selectedTime, setSelectedTime] = useState('');

    
    const timeSlots = Array.from({ length: 9 }, (_, i) => {
        const hour = 9 + i;
        const suffix = hour >= 12 ? 'PM' : 'AM';
        const displayHour = hour > 12 ? hour - 12 : hour;
        return `${displayHour}:00 ${suffix}`;
    });



    return (



        <>

            <form className="mt-10 space-y-10">



                <div>
                    <label className="block text-left text-[#145566] mb-1">Name</label>
                    <input
                        type="text"
                        placeholder="Full Name"
                        className="w-full border border-gray-400 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#145566]"
                    />
                </div>



                <div>
                    <label className="block text-left text-[#145566] mb-1">Phone Number (Whatsapp preferred)</label>
                    <input
                        type="text"
                        placeholder='Eg: +91 1234567890'
                        className="w-full border border-gray-400 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#145566]"
                    />
                </div>



                <div>
                    <label className="block text-left text-[#145566] mb-1">Email ID (Optional)</label>
                    <input
                        type="email"
                        placeholder="email@example.com"
                        className="w-full border border-gray-400 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#145566]"
                    />
                </div>



                <div>

                    <label className="block text-left text-[#145566] mb-1">Preferred Time to Call (Optional)</label>

                    <div className="grid grid-cols-2 gap-4">

                        <input
                            type="date"
                            min={formatDate(today)}
                            max={formatDate(tomorrow)}
                            value={selectedDate}
                            onChange={(e) => setSelectedDate(e.target.value)}
                            className="w-full border border-gray-400 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#145566]"
                        />


                        <select
                            value={selectedTime}
                            onChange={(e) => setSelectedTime(e.target.value)}
                            className="w-full border border-gray-400 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#145566]"
                        >
                            <option value="">Time</option>
                            {timeSlots.map((slot, idx) => (
                                <option key={idx} value={slot}>{slot}</option>
                            ))}
                        </select>


                    </div>

                </div>


                <div>
                    <label className="block text-left text-[#145566] mb-1">Health Concern (Optional, Helps Us Assign the Right Doctor)</label>
                    <select className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#145566]">
                        <option>Erectile dysfunction</option>
                        {/* More concerns can be added here */}
                    </select>
                </div>


                <div>
                    <label className="block text-left text-[#145566] mb-1">
                        Make Payment - ₹300 (Secure Razorpay or UPI integration)
                    </label>

                    <button
                        type="button"
                        className="w-full bg-[#145566] hover:cursor-pointer flex items-center justify-center text-white text-lg font-medium py-3 rounded-md transition-all duration-300 ease-in-out hover:bg-[#0e404d] hover:scale-105"
                    >
                        Pay Now <LockKeyhole size={20} className="ml-2" />
                    </button>

                    <p className="text-sm text-gray-400 mt-2">
                        Note: Your ₹300 will be completely refunded if you choose to proceed with any treatment plan suggested after consultation
                    </p>
                </div>

            </form>

        </>




    )




}
