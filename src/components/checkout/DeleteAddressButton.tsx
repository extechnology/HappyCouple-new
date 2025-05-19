import { useDeleteUserAddress } from "@/services/checkout/mutations"
import { LoaderCircle, Trash2 } from "lucide-react";
import { toast } from "sonner";




export default function DeleteAddressButton({ id }: { id: number }) {



    // Mutations For Delete Address
    const { mutate: DeleteUserAddress, isPending } = useDeleteUserAddress();



    // Delete Address
    const Delete = () => {

        DeleteUserAddress(id, {

            onSuccess: (response) => {

                if (response.status >= 200 && response.status <= 300) {

                    toast.success("Deleted Successfully", { description: "You have successfully Deleted Address", duration: 5000 })

                } else {

                    toast.error("Oops..!", { description: "Something went wrong Please try again.", duration: 5000 })
                    console.error(response);

                }

            }

        })

    }


    return (


        <>

            <button onClick={Delete} disabled={isPending} className={`${isPending ? "cursor-not-allowed opacity-50" : "cursor-pointer"}`}>

                {isPending ? (

                    <>

                        <LoaderCircle className="animate-spin w-5 h-5" size={20} />

                    </>

                ) : (

                    <>

                        <Trash2 className="w-5 h-5" size={20} />

                    </>

                )}

            </button>


        </>

    )



}



