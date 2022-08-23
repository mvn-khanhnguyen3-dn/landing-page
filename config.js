const apiUrl =
  process.env.NODE_ENV === "development"
    ? "https://landing-page-theta-ten.vercel.app/api"
    : "https://landing-page-theta-ten.vercel.app/api";

export { apiUrl };
