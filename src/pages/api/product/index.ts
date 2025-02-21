import { retrieveData } from "@/lib/firebase/service";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const products = await retrieveData("products");
  res.status(200).json({
    status: true,
    statusCode: 200,
    message: "products fetched successfully",
    data: products,
  });
}
