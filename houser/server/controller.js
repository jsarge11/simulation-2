module.exports = {
 read: (req, res, next) => {
   const db = req.app.get('db');

   db.get_houses().then (houses => {
    res.status(200).send( houses )
   })
 },
 create: (req, res, next) => {
   const db = req.app.get('db');
   console.log(req.body);
   let { name, address, city, state, zip, imageurl, monthly_mortgage, desired_rent} = req.body;

   db.create_house(name, address, city, state, zip, imageurl, monthly_mortgage, desired_rent).then (house => {
    res.status(200).send ( house );
   }) 
  },
  delete: (req, res, next) => {
   const db = req.app.get('db');
   let { id } = req.query;

   db.delete_house(id).then(houses => {
    res.status(200).send(houses);
   })
  }
}

//arrow functions but not import