export default async (req, res, next) => {
  res.setHeader('X-Powered-By', 'Blood, sweat and tears');
  return next();
}