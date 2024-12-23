const express = require("express");
const orderRouter = express.Router();
const orderController = require("../Controller/orderController");

orderRouter.post("/orders", orderController.placeOrder);
orderRouter.get("/orders", orderController.getAllOrders);
orderRouter.put("/orders/:id", orderController.orderCompleted);

module.exports = orderRouter;
