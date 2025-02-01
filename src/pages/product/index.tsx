import { useRouter } from "next/router";
import { useEffect, useState } from "react";

type Product = {
  id: number;
  name: string;
  price: number;
};

export default function ProductPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [products, setProducts] = useState([]);
  const { push } = useRouter();

  useEffect(() => {
    if (!isLogin) {
      push("/auth/login");
    }
  }, [isLogin, push]);

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((response) => {
        if (response?.status) setProducts(response.data);
      });
  }, []);

  return (
    <div className="px-4 py-8">
      <h1 className="text-xl font-medium">Product Page</h1>
      <div className="p-8">
        {products.map((product: Product) => (
          <div key={product.id} className="">
            <h3 className="">{product.name}</h3>
            <p className="">{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
