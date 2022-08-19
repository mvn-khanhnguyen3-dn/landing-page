// import { featureData } from "../../utils/data";
import dashboardData from "../../utils/dashboardData.json";
import fs from "fs";

const getAllData = () => {
  return dashboardData;
};

const create = ({ id, image, title, time, desc, price }) => {
  const newData = { id, image, title, time, desc, price };
  dashboardData?.push(newData);
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

export const repoData = { getAllData, create };
