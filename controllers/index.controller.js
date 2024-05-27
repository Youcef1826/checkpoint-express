export const homePage = (req, res) => {

  const title = "Home page";
  res.render("index", { title });
};