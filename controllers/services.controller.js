export const servicesPage = (req, res) => {
  
  const title = "Our services"; 
  res.render("services", { title });
};