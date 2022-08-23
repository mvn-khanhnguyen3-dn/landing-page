import { repoData } from "../../../helper/repoData";

export default function handler(req, res) {
  switch (req.method) {
    case "GET":
      return getAllById();
    case "PUT":
      return updateData();
    case "DELETE":
      return deleteData();
    default:
      return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
  function getAllById() {
    const data = repoData.getAllDataById(req.query.id);
    return res.status(200).json(data);
  }
  function updateData() {
    try {
      repoData.update(req.query.id, req.body);
      return res.status(200).json({});
    } catch (error) {
      return res.status(400).json({ message: error });
    }
  }
  function deleteData() {
    try {
      repoData.delete(req.query.id);
      return res.status(200).json({});
    } catch (error) {
      return res.status(400).json({ message: error });
    }
  }
}
