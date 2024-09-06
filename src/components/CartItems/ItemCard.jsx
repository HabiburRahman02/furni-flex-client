/* eslint-disable react/prop-types */
import { RiMoneyEuroCircleLine } from "react-icons/ri";
import { RxCross1 } from "react-icons/rx";

const ItemCard = ({ item }) => {
    const { name, imageUrl, presentPrice } = item
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
                    <RxCross1 className="h-6 w-6 ml-14"></RxCross1>
                    <h6 className="text-xl font-semibold flex items-center gap-1">
                        <RiMoneyEuroCircleLine></RiMoneyEuroCircleLine>
                        {presentPrice}.00</h6>
                </div>
            </div>
        </div>
    );
};

export default ItemCard;