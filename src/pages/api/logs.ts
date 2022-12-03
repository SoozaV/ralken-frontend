import { type NextApiRequest, type NextApiResponse } from "next";

import { prisma } from "../../server/db/client";

const logs = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    try {
      const logs = await prisma.logs.findMany();
      return res.status(200).json(logs);
    } catch (error) {
      return res.status(500).json(error)
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
      return res.status(200).json({message: "Log created!"});
    } catch (error) {
      return res.status(500).end()
    }
  }
};

export default logs;
