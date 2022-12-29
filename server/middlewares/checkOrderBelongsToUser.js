const { Order } = require("../models");

const checkOrderBelongsToUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const order = await Order.query().findById(id);

    // If the order does not exist, return a 404 error
    if (!order) {
      return res.status(404).json({
        error: "Order not found",
      });
    }

    // If the order does not belong to the user, return a 403 error
    if (order.userId !== req.user.id) {
      return res.status(403).json({
        error: "Unauthorized access",
      });
    }

    // Attach the order to the request object so it can be used in the next handler
    req.order = order;

    // Call the next middleware or handler
    next();
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: error.message,
    });
  }
};

module.exports = checkOrderBelongsToUser;
