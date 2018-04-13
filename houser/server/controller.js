module.exports = {
 create: (req, res, next) => {
   const db = req.app.get('db');

   db.get_houses().then (products => {
    res.status(200).send( products )
   })
 }
}