


export default function CheckoutSuccessLoader() {

    return (

        <main
            className="fixed inset-0 flex flex-col items-center justify-center z-50 bg-[#25434E]/50 backdrop-blur-sm"
            aria-label="Verifying order loading"
        >
            {/* Spinner */}
            <svg
                className="animate-spin h-16 w-16 text-white mb-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                aria-hidden="true"
            >
                <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                ></circle>
                <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                ></path>
            </svg>

            {/* Loading text */}
            <p className="text-white text-xl md:text-2xl font-semibold tracking-wide select-none">
                Verifying your order...
            </p>
        </main>
    )

}
