import { ProductType } from "@/types";
import ProductListingView from "@/views/Product/Listing";

export default function ServerProductPage({
  products,
  isError,
  isLoading,
}: {
  products: ProductType[];
  isError: boolean;
  isLoading: boolean;
}) {
  return (
    <div>
      <ProductListingView
        products={products}
        isError={isError}
        isLoading={isLoading}
      />
    </div>
  );
}

// This function gets called on every request
export async function getServerSideProps() {
  try {
    // fetch data from an API
    const data = await fetch(`${process.env.HOST_URL}/api/product`);
    const response = await data.json();

    return {
      props: {
        products: response.data,
        isError: false,
        isLoading: false,
      },
    };
  } catch (error: unknown) {
    console.error(error);
    return {
      props: {
        products: [],
        isError: true,
        isLoading: false,
      },
    };
  }
}
