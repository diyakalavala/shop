const express = require('express');
const app = express();
app.use(express.json());
app.use(express.static('idk/build')); //react app build portion
const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

app.get('api/currentOrder', (req, res) => {
    const id = req.params.id
    /*connection.query('SELECT * FROM currentOrder', (error, results, fields) => {
      if (error) throw error;
      res.json(results);
    });*/
    res.send({data: currentOrder});
  });