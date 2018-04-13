module.exports = {
 read: (req, res, next) => {
   const db = req.app.get('db');

   db.get_houses().then (houses => {
    res.status(200).send( houses )
   })
 },
 create: (req, res, next) => {
   const db = req.app.get('db');
   let { name, address, city, state, zip} = req.body;

   db.create_house(name, address, city, state, zip).then (house => {
    res.status(200).send ( house );
   }) 
  }
}

//arrow functions but not import