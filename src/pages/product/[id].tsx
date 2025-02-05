import { useProduct } from "@/lib/swr/fetcher";
import { useRouter } from "next/router";
import type { ProductType } from "@/types";
import Image from "next/image";

type Data = {
  data: ProductType;
  error: Error;
  isLoading: boolean;
};

export default function DetailProductPage() {
  const { query } = useRouter();
  const { data, error, isLoading }: Data = useProduct(query?.id);
  console.log(isLoading);

  return (
    <div className="flex items-center justify-center min-h-screen bg-neutral-100">
      <div className="p-8 bg-white rounded-md max-w-96">
        <h1 className="mb-2 text-xl font-medium">Detail Product</h1>
        <div className="">
          {isLoading ? (
            <div>Loading...</div>
          ) : data ? (
            <div className="space-y-4">
              <div className="">
                <Image
                  src={data?.image}
                  width={380}
                  height={380}
                  alt="product-image"
                  priority
                />
              </div>
              <div className="space-y-2">
                <h1 className="font-medium text-md">{data?.name}</h1>
                <div className="">
                  <span className="px-3 py-1 text-xs font-medium text-white rounded-full bg-neutral-900">
                    {data?.category}
                  </span>
                </div>
                <p className="text-sm text-neutral-700">{data?.description}</p>
                <p className="font-medium text-md text-neutral-700">
                  {data?.price.toLocaleString("id-ID", {
                    style: "currency",
                    currency: "IDR",
                  })}
                </p>
              </div>
            </div>
          ) : (
            <div>No data found!</div>
          )}
        </div>
      </div>
    </div>
  );
}
