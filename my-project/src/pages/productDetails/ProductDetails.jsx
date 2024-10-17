import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShoppingCartContext } from "../../context/Context";

function ProductDetails() {
  const { id } = useParams();
  const { productdetails, setProductDetails, handleAddToCart, cartItems } = useContext(ShoppingCartContext);
  const [loading, setLoading] = useState(true);

  async function fetchProductDetails() {
    try {
      setLoading(true);
      const apiResponse = await fetch(`https://dummyjson.com/products/${id}`);
      const result = await apiResponse.json();
      if (result) {
        setProductDetails(result);
        setLoading(false);
      }
    } catch (error) {
      console.error("Error fetching product details:", error);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProductDetails();
  }, [id]);

  if (loading) return <h1>Product details loading! Please wait</h1>;

  return (
    <div>
      <div className="p-6 lg:max-w-7xl max-w-4xl mx-auto">
        <div className="grid items-center grid-cols-1 lg:grid-cols-5 gap-12 shadow-sm p-6">
          <div className="lg:col-span-3 w-full lg:sticky top-0 text-center">
            <div className="px-4 py-10 rounded-xl shadow-lg relative">
              <img
                className="w-4/5 rounded object-cover"
                src={productdetails?.thumbnail}
                alt={productdetails?.title}
              />
            </div>
            <div className="mt-6 flex flex-wrap justify-center gap-6 mx-auto">
              {productdetails?.images?.length
                ? productdetails.images.map((imageItem) => (
                    <div className="rounded-xl p-4 shadow-md" key={imageItem}>
                      <img
                        src={imageItem}
                        className="w-24 cursor-pointer"
                        alt="Product secondary image"
                      />
                    </div>
                  ))
                : null}
            </div>
          </div>
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-extrabold text-[#333333]">
              {productdetails?.title}
            </h2>
            <div className="flex flex-wrap gap-4 mt-4">
              <p className="text-xl font-bold">${productdetails?.price}</p>
            </div>
            <div>
              <button
                disabled={
                  productdetails
                    ? cartItems.findIndex(
                        (item) => item.id === productdetails.id
                      ) > -1
                    : false
                }
                onClick={() => handleAddToCart(productdetails)} 
                className="disabled:opacity-65 mt-5 min-w-[200px] px-4 py-3 border border-[#333] bg-transparent text-sm font-semibold rounded"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
