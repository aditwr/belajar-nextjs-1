import { retrieveDataById } from "@/lib/firebase/service";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { productID } = req.query;

  if (typeof productID != "string") {
    return res.status(400).json({
      status: false,
      statusCode: 400,
      message: "invalid product ID",
    });
  }

  const product = await retrieveDataById("products", productID);

  res.status(200).json({
    status: true,
    statusCode: 200,
    message: "products fetched successfully",
    data: product,
  });
}
