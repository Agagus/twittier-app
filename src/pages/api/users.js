import prisma from "@/lib/prisma";

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const data = await prisma.user.findMany({
        include: {
          posts: true, // Include all posts in the returned object
        },
      });
      return res.status(200).json({ data });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ msg: "Something went wrong" });
    }
  }
  if (req.method === "POST") {
    try {
      console.log(req.body);
      const user = await prisma.user.create({ data: req.body });
      return res.status(200).json({ user });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ msg: "Something went wrong" });
    }
  }

  if (req.method === "DELETE") {
    try {
      const user = await prisma.user.delete({
        where: {
          username: req.body,
        },
      });
      return res.status(200).json({ user });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ msg: "Something went wrong" });
    }
  }
}
