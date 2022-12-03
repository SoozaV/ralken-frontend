import { type NextApiRequest, type NextApiResponse } from "next";

import { prisma } from "../../server/db/client";

const logs = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    try {
      const logs = await prisma.logs.findMany();
      res.status(200).json(logs);
    } catch (error) {
      console.log(error);
      res.status(500).json(error)
    }
  }
  if (req.method === "POST") {
    try {
      const res = req.body;

      await prisma.logs.create({
        data: {
          method: res.method,
          route: res.route,
          status: res.status,
          responseTime: res.responseTime,
        },
      });
      res.status(200).json("Log created!");
    } catch (error) {
      console.log(error);
      res.status(500).json(error)
    }
  }
};

export default logs;
