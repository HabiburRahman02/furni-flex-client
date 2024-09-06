import { useLoaderData } from "react-router-dom";
import ItemCard from "./ItemCard";


const CartItems = () => {
    const items = useLoaderData();
    return (
        <div className="max-w-[1200px] mx-auto">
            <div className="md:w-2/3 bg-[#FAFAFA]">
                {
                    items.map(item => <ItemCard
                        key={item._id}
                        item={item}
                    ></ItemCard>)
                }
            </div>
            <div className="md:w-1/3">

            </div>
        </div>
    );
};

export default CartItems;