import jwt from 'jsonwebtoken'

export const validador = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];
    try {
        jwt.verify(token, "claveSecreta", (err, decode) => {
        if(token && !err) {
            return next()
        }
        console.log(err)
        res.status(400).send(err)
    })
    }
    catch(error){
        console.log(error)
    }
    
}