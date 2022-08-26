import { repoData } from "../../../helper/repoData";
import dashboardData from "../../../utils/dashboardData.json";

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
      const id = req.query.id;
      const dashboardDataDelete = dashboardData.find(
        (item) => item.id.toString() === id.toString()
      );
      if (!dashboardDataDelete) {
        res.status(404);
        res.end();
        return;
      }
      const index = dashboardData.findIndex(
        (item) => item.id.toString() === id.toString()
      );
      dashboardData.slice(index, 1);
      return res.status(200).json({ data: id });
    } catch (error) {
      return res.status(400).json({ message: error });
    }
  }
}
