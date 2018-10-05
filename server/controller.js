module.exports = {
    getAll: (req, res, next) => {
        const dbInstance = req.app.get('db');

        dbInstance.get_houses()
        .then(houses=> res.status(200).send(houses))
        .catch((err)=>{
            res.status(500).send({errorMessage: 'Well this is embarrasing, it didnt work'});
            console.log(err)
        })
    },
    create: (req, res, next)=>{
        const dbInstance = req.app.get('db');
        const {name, address, city, state, zip} = req.body

        dbInstance.add_house([name, address, city, state, zip])
        .then((house)=> res.status(200).send(house))
        .catch(err=>{
            res.status(500).send({errorMessage: 'Well it didnt work try again'})
            console.log(err)
        })
    },
    delete: (req, res, next)=>{
        const dbInstance = req.app.get('db');
        const {params} = req;
        console.log(params.id)
        dbInstance.delete_house(params.id)
        .then((houses)=> res.status(200).send(houses))
        .catch((err)=>{
            res.status(500).send({errorMessage: 'Well it didnt work try again'})
            console.log(err)
        })
    }   
}