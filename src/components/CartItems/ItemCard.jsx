/* eslint-disable react/prop-types */
import { RiMoneyEuroCircleLine } from "react-icons/ri";
import { RxCross1 } from "react-icons/rx";
import Swal from "sweetalert2";

const ItemCard = ({ item, items, setItems }) => {
    const { _id, name, imageUrl, presentPrice } = item

    const handleDeleteCart = _id => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't to delete this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/carts/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Deleted Successfully",
                                icon: "success"
                            });
                            const remaining = items.filter(pro => pro._id !== _id)
                            setItems(remaining);
                        }
                    })


            }
        });
    }

    return (
        <div>
            <div className="flex justify-between items-center px-6 py-12 border-b rounded-none">
                <div className="flex gap-6">
                    <img className="h-24 w-24 rounded-lg" src={imageUrl} alt="" />
                    <div>
                        <h2 className="font-bold mt-3">{name}</h2>
                    </div>
                </div>

                <div className="space-y-8 ">
                    <RxCross1
                        onClick={() => handleDeleteCart(_id)}
                        className="h-6 w-6 ml-14 cursor-pointer"></RxCross1>
                    <h6 className="text-xl font-semibold flex items-center gap-1">
                        <RiMoneyEuroCircleLine></RiMoneyEuroCircleLine>
                        {presentPrice}.00</h6>
                </div>
            </div>
        </div>
    );
};

export default ItemCard;