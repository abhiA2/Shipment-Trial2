const express = require("express");
const app = express.Router();
require("dotenv").config();
require("../config/database");

const {
  PriceController,
  OrderController,
  ProfileController,
  AuthController,
  PlaceController,
} = require("../controllers");

const {
  auth,
  isGuest,
  isLogged,
  checkOrderBelongsToUser,
} = require("../middlewares");



app.use(auth);

app.get("/", function (req, res, next) {
  res.json({ message: "Welcome to the API" });
});

app.post("/auth/register", isGuest, AuthController.createAccount);
app.post("/auth/login", isGuest, AuthController.loginAccount);

app.patch("/profile/address", isLogged, ProfileController.updateAddress);
app.get("/profile/address", isLogged, ProfileController.getAddresses);

app.post("/orders", isLogged, OrderController.upsertOrder);
app.get("/orders", isLogged, OrderController.getOrders);
app.get(
  "/orders/:id",
  isLogged,
  checkOrderBelongsToUser,
  OrderController.getOrder
);
app.post(
  "/orders/pay/:id",
  isLogged,
  checkOrderBelongsToUser,
  OrderController.payOrder
);

app.patch(
  "/orders/cancel/:id",
  isLogged,
  checkOrderBelongsToUser,
  OrderController.cancelOrder
);
app.patch(
  "/orders/:id",
  isLogged,
  checkOrderBelongsToUser,
  OrderController.upsertOrder
);

app.post("/prices/estimate", PriceController.getEstimate);

app.get("/places/countries", PlaceController.getCountries);
app.get("/places/states/:countryId", PlaceController.getStatesByCountry);

module.exports = app;
