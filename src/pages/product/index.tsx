import { useProducts } from "@/lib/swr/fetcher";
import ProductListingView from "@/views/Product/Listing";

export default function ProductPage() {
  const { products, isError, isLoading } = useProducts();

  return (
    <>
      <ProductListingView
        products={products}
        isError={isError}
        isLoading={isLoading}
      />
    </>
  );
}
