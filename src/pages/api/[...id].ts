import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // const products = await retrieveData("products");
  // res.status(200).json({
  //   status: true,
  //   statusCode: 200,
  //   message: "products fetched successfully",
  //   data: products,
  // });
  console.log(req.query.id);
  res.status(200).json({
    url: "api/[id]",
    id: req.query.id,
  });
}
