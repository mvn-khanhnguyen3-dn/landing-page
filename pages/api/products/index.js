import { repoData } from "../../../helper/repoData";

export default function handler(req, res) {
  switch (req.method) {
    case "GET":
      return getAll();
    case "POST":
      return createData();
    default:
      return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
  function getAll() {
    const data = repoData.getAllData();
    return res.status(200).json(data);
  }
  function createData() {
    try {
      repoData.create(req.body);
      return res.status(200).json({});
    } catch (error) {
      return res.status(400).json({ message: error });
    }
  }
}
