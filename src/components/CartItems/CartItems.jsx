import { useLoaderData } from "react-router-dom";
import ItemCard from "./ItemCard";
import { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider/AuthProvider";


const CartItems = () => {
    const { user } = useContext(AuthContext);
    const loadedTtems = useLoaderData();
    const [items, setItems] = useState(loadedTtems);
    return (
        <div className="max-w-[1200px] mx-auto">
            <div className="md:w-2/3 bg-[#FAFAFA]">
                {
                    user &&
                    <div>
                        {
                            items.map(item => <ItemCard
                                key={item._id}
                                item={item}
                                items={items}
                                setItems={setItems}
                            ></ItemCard>)
                        }
                    </div>
                }
            </div>
            <div className="md:w-1/3">

            </div>
        </div>
    );
};

export default CartItems;