// controllers/OrderController.js
const { Order } = require("../models");

const { razorpay, calculateFee } = require("../utils");
class OrderController {
  static async upsertOrder(req, res) {
    try {
      const {
        shippingPartnerId,
        deliveryAddress,
        pickupAddress,
        shipmentDetails,
        shipmentModeId,
        items,
      } = req.body;
      const { actualWeight, length, breadth, height } = shipmentDetails;
      const { logisticFee, tax, total, billedWeight } = calculateFee({
        shippingPartnerId,
        actualWeight,
        length,
        breadth,
        height,
      });
      const payload = {
        logisticFee,
        tax,
        total,
        shipmentModeId,
        shippingPartnerId,
        deliveryAddress,
        pickupAddress,
        shipmentDetails,
        billedWeight,
        items,
        userId: req.user.id,
      };
      if (req.params.id) {
        payload.id = req.params.id;
      }
      console.log(payload);
      const order = await Order.query().upsertGraph(payload);
      const orderData = await Order.getOrder(order.id);

      res.status(201).json(orderData);
    } catch (error) {
      console.log(error);
      res.status(500).json({
        error: error.message,
      });
    }
  }

  static async getOrders(req, res) {
    try {
      const { status } = req.query;
      console.log(req.query, "query");
      const orders = await Order.getOrders(req.user.id, { status });

      res.status(200).json(orders);
    } catch (error) {
      res.status(500).json({
        error: error.message,
      });
    }
  }

  static async getOrder(req, res) {
    try {
      const { id } = req.params;

      const orderData = await Order.getOrder(id);

      res.status(200).json({
        order: orderData,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        error: error.message,
      });
    }
  }
  static async cancelOrder(req, res) {
    try {
      const { id } = req.params;
      const order = await Order.query().patchAndFetchById(id, {
        status: "cancelled",
      });
      res.status(200).json({
        order,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        error: error.message,
      });
    }
  }
  static async payOrder(req, res) {
    try {
      const order = await Order.getOrder(req.params.id);
      console.log(order);

      const { logisticFee, tax, total } = order;
      // Set the order details
      const options = {
        amount: order.total * 100, // amount in paise (500 INR)
        currency: "INR",
        receipt: "order_rcptid_" + order.id,
      };

      // Create the order using the Razorpay API
      const response = await razorpay.orders.create(options);

      // Use the ID of the returned order as the unique order ID
      const order_id = response.id;
      console.log(response);
      // Return the response to the client
      res.json({
        key_id: process.env.RAZORPAY_KEY_ID,
        amount: response.amount,
        email: req.user.email,
        deliveryAddress: order.deliveryAddress,
        callback_url: `${process.env.BASE_URL}/api/orders/${order.id}/payment`,
        cancel_url: `${process.env.BASE_URL}/api/orders/${order.id}/cancel`,
        order_id,
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = OrderController;
