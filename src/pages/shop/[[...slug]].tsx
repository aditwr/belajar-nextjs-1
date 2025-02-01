import { useRouter } from "next/router";
import type { NextRouter } from "next/router";

export default function ShopDetailPage() {
  const router: NextRouter = useRouter();
  const { slug } = router.query;
  console.log("slug", slug);

  return (
    <div className="">
      <h1>Shop Detail Page</h1>
      <div className="">
        {slug && slug.length > 0 ? (
          <div className="">
            <h2>Slug:</h2>
            <ul>
              {Array.isArray(slug) ? (
                slug.map((slugPart, index) => <li key={index}>{slugPart}</li>)
              ) : (
                <li>{slug}</li>
              )}
            </ul>
          </div>
        ) : (
          <p>No slug provided</p>
        )}
      </div>
    </div>
  );
}
