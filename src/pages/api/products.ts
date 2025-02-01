import { retrieveData } from "@/lib/firebase/service";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  status: boolean;
  statusCode: number;
  message: string;
  data: {
    id: number;
    name: string;
    price: number;
  }[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const products = await retrieveData("products");
  res.status(200).json({
    status: true,
    statusCode: 200,
    message: "products fetched successfully",
    data: products,
  });
}
