import { useLoaderData } from "react-router-dom";
import ProductCard from "../ProductCard/ProductCard";
import ProductFirstCol from "../ProductFirstCol/ProductFirstCol";


const Products = () => {
    const products = useLoaderData();
    // console.log(products)
    return (
        <div className="max-w-[1200px] mx-auto">
            <div className="md:flex gap-8 space-y-8 md:space-y-0">
                <div className="md:w-1/4 border-[#F1F1F1] border-r ">
                    <ProductFirstCol></ProductFirstCol>
                </div>
                <div className="md:w-3/4 grid grid-cols-1 md:grid-cols-3 gap-8">
                    {
                        products.map(product => <ProductCard
                            key={product._id}
                            product={product}
                        ></ProductCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Products;