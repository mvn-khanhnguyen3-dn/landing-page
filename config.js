const apiUrl =
  !process.env.NODE_ENV === "development"
    ? "https://landing-page-theta-ten.vercel.app/api"
    : "http://localhost:3000/api";

export { apiUrl };
