// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  success: boolean;
  message: string;
  data?: object;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({
    success: true,
    message: "Welcome to the API",
    data: {
      name: "John Doe",
      age: 30,
      email: "john@gmail.com",
    },
  });
}
