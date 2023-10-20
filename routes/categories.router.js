
const express = require("express");


const router = express.Router();

router.get('/:categoryId/productos/:productosId',(req , res) => {
    const {categoryId, productosId} = req.params;
    res.json({
        categoryId,
        productosId,
        name: 'Producto 2',
        price: '2000'
    });
})

router.get("/", (req, res) =>{
    res.send("Hola soy una nueva ruta");
  });


module.exports = router;