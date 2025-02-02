import type { ProductType } from "@/types";
import Image from "next/image";

export default function ProductListingView({
  products,
  isError,
  isLoading,
}: {
  products: ProductType[];
  isError: unknown;
  isLoading: boolean;
}) {
  if (isError) {
    if (isError instanceof Error) {
      return <div>Error : {isError.message}</div>;
    }
  }
  if (isLoading)
    return (
      <div className="flex items-center justify-center h-40 p-8">
        Loading...
      </div>
    );
  return (
    <div className="px-4 py-8">
      <h1 className="text-xl font-medium">Product Page</h1>
      <div className="flex gap-4 p-8">
        {products?.map((product: ProductType) => (
          <div key={product.id} className="flex flex-col gap-y-2">
            <Image
              src={product.image}
              width={200}
              height={200}
              style={{ width: "auto" }}
              alt="product-image"
              priority
            />
            <div>
              <h2 className="font-medium text-md">{product.name}</h2>
              <p className="text-sm text-neutral-500">{product.category}</p>
              <p className="font-medium text-neutral-800">
                {product.price.toLocaleString("id-ID", {
                  style: "currency",
                  currency: "IDR",
                })}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
