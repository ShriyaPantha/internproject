import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../Redux/features/productSlice";
import type { RootState, AppDispatch } from "../Redux/store"; // <- import types

function Products() {
  const dispatch = useDispatch<AppDispatch>(); // <- typed dispatch
  const { products, loading } = useSelector(
    (state: RootState) => state.product // <- typed state
  );

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h2>Products</h2>

      {products.map((p: any) => (
        <p key={p._id}>{p.title}</p>
      ))}
    </div>
  );
}

export default Products;