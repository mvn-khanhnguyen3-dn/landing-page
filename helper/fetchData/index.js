const postData = async (url, body) => {
  const requestOption = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  };
  try {
    await fetch(url, requestOption);
  } catch (error) {
    console.error("Error:", error);
  }
};

const putData = async (url, body) => {
  const requestOption = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  };
  try {
    await fetch(url, requestOption);
  } catch (error) {
    console.error("Error:", error);
  }
};
const deleteData = (url) => {
  const requestOption = {
    method: "DELETE",
  };
  return fetch(url, requestOption);
};
export const fetchData = {
  postData,
  putData,
  deleteData,
};
