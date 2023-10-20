
const express = require("express");

const router = express.Router();


router.get ('/users', (req, res)=> {
    const {limit, offset } = req.query;
    if (limit && offset){
        res.json({
            limit,
            offset
        })
    }else {
        res.send('No hay parametro');
    }
});

router.get("/", (req, res) =>{
    res.send("Hola soy una tienda en node");
  });


module.exports = router;