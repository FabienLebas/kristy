const express = require("express");
const Stripe = require("stripe");
const fetch = require("node-fetch");

if (process.env.NODE_ENV !== "production") {
  /**
   * This allows us to use the .env.local pattern offered by React.
   * Meaning we don't need to source our .env.local file and it does not
   * need to contain `export`, it can look like that:
   *
   * REACT_APP_PUBLISHABLE_KEY="mykey"
   * REACT_APP_SECRET_KEY="myscecretkey"
   */
  const path = require("path");
  require("dotenv").config({ path: path.resolve(process.cwd(), ".env.local") });
}

const app = express();

const keyPublishable = process.env.REACT_APP_PUBLISHABLE_KEY;
const keySecret = process.env.REACT_APP_SECRET_KEY;
const stripe = Stripe(keySecret);

function getProductPrice(product_id){
  return fetch(`https://decath-product-api.herokuapp.com/products/${product_id}`)
    .then(response => response.json())
    .then(result => {
      return {
        id: result.id,
        min_price: result.min_price
      }
    } )
    .catch(error => {
      console.warn("Error while retrieving price for item " + product_id);
    })
}

app.use(require("body-parser").json());
app.use(require("body-parser").urlencoded({ extended: false }));

app.post("/charge", (request, result) => {
  // here we need to calculate the price to pay depending on request infos
  //const amount = calculateAmount(request.body.products);
  const amount = 100;
  console.log("route charge vient d'être appelée avec :");
  console.log(request.body.products);
  const productQties = request.body.products.map(element => {
    return {
      product_id: element.product_id,
      qty: element.quantity
    }
  } );
  const productPrices = Promise.all(productQties.map(element => getProductPrice(element.product_id)))
    .then(resultArray => {
      let total = 0;
      for (let i = 0; i < resultArray.length; i++){
        total = total + productQties.find(e => e.product_id === resultArray[i].id).qty * resultArray[i].min_price;
      };
      total = Math.round(total * 100);
      return total;
    })
    .then(total => {
      stripe.customers
        .create({
          email: request.body.stripeData.email,
          source: request.body.stripeData.id
        })
        .then(customer =>
          stripe.charges.create({
            amount: total,
            currency: "eur",
            customer: customer.id
          })
        )
        .then(charge => result.json(charge));
    });
});

const port = process.env.PORT || 4000;

app.listen(port, function () {
  console.log("Server listening on port:" + port);
});

app.use("/static", express.static('build/static'));

app.use("/public", express.static('public'));

app.get("*", function (request, result) {
  result.sendFile(__dirname + "/build/index.html");
});
