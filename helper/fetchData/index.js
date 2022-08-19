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
export const fetchData = {
  postData,
};
