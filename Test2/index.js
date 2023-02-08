const express = require("express");
const fs = require("fs");
const server = express();
fs.readFile("./goods.json", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    const goods = JSON.parse(data);
    server.get("/", (req, res) => {
      const count = parseInt(req.query.count);
      const offset = parseInt(req.query.offset);
      res
        .status(200)
        .send(
          count && offset
            ? goods.slice(offset, offset + count)
            : goods.map(
                (elem) => `${elem.name} : ${elem.price}$ : ${elem.quantity} `
              )
        );
    });
    server.get("/:id", (req, res) => {
      goods.length >= req.params.id && req.params.id > 0
        ? res.status(200).send(
            `Name: ${goods[req.params.id - 1].name} <br/>  
           Price:  ${goods[req.params.id - 1].price}$<br/>  
           Q-ty:   ${goods[req.params.id - 1].quantity}шт`)
        : res.status(404).send(`Error: good "${req.params.id}" not found`);
    });
  }});
server.listen(3000, () => {
  console.log("Working");
});