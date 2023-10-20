const express = require('express');
const routerApi = require('./routes')
const cors = require('cors')

const {logErrors, errorhandles, boomErrorHandler} = require('./middlewares/error.handler')

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors())

app.get('/', (req, res) => {
  res.send('Hola mi server en express');
});


app.listen(port, () =>{
  console.log("My port: " + port);

});

routerApi(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorhandles);
