/* eslint-disable react/prop-types */
import { RiMoneyEuroCircleLine } from "react-icons/ri";
import cartImg from '../../assets/icons/cart.png'

const ProductCard = ({ product }) => {
    const { imageUrl, name, prevPrice, presentPrice, discount, description } = product;
    return (
        <div className="p-4 border-[#F1F1F1] border rounded-lg">
            <img className="w-full h-[200px] rounded-lg object-cover mb-8" src={imageUrl} alt="" />
            <div className="space-y-4">
                <h6 className="text-lg font-semibold">{name}</h6>
                <div className="flex gap-2 justify-between">
                    <h5 className="text-lg font-bold flex items-center">
                        <RiMoneyEuroCircleLine></RiMoneyEuroCircleLine>
                        {presentPrice}.00</h5>
                    <h5 className="text-lg text-[#ABABAB] line-through flex items-center ">
                        <RiMoneyEuroCircleLine></RiMoneyEuroCircleLine>
                        {prevPrice}.00</h5>
                    <h5 className="text-lg font-bold text-[#B92E2E]">{discount}OFF</h5>
                </div>
                <p>{description}</p>
                <div>
                    <button className="bg-[#202020] w-full text-white font-semibold py-3 rounded-lg flex items-center justify-center gap-3">
                        <img src={cartImg} alt="" />
                        Add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;