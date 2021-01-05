export default (req, res) => {
  const locale = req.headers["accept-language"] || "en";

  res.statusCode = 200;
  res.json({ name: `John Doe ${locale}` });
};
