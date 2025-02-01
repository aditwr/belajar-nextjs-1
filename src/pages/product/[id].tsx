import { useRouter } from "next/router";

export default function DetailProductPage() {
  const { query } = useRouter();

  return (
    <div>
      <h1 className="">Detail Product</h1>
      <p className="">Product : {query?.id}</p>
    </div>
  );
}
