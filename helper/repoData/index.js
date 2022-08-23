import dashboardData from "../../utils/dashboardData.json";
import fs from "fs";

const getAllData = () => {
  return dashboardData;
};
const getAllDataById = (id) => {
  return dashboardData.find((data) => data.id.toString() === id.toString());
};

const create = ({ id, image, title, time, desc, price }) => {
  const newData = { id, image, title, time, desc, price };
  dashboardData.push(newData);
  saveData();
};

const update = (id, { image, title, time, desc, price }) => {
  const params = { id, image, title, time, desc, price };
  const newData = dashboardData.find(
    (item) => item.id.toString() === id.toString()
  );

  newData && Object.assign(newData, params);
  saveData();
};

const _delete = (id) => {
  dashboardData = dashboardData.filter(
    (data) => data.id.toString() !== id.toString()
  );
  saveData();
};

const saveData = () => {
  try {
    fs.writeFileSync(
      "utils/dashboardData.json",
      JSON.stringify(dashboardData, null, 4)
    );
  } catch (error) {
    throw error;
  }
};

export const repoData = {
  getAllData,
  create,
  getAllDataById,
  update,
  delete: _delete,
};
