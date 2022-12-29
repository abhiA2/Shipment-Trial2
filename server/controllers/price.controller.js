const calculateFee = require("../utils/calculateFee");
const { ShippingPartner } = require("../models");
class PriceController {
  static async getEstimate(req, res) {
    try {
      const {
        actualWeight,
        length,
        breadth,
        height,
        pincode,
        origin,
        destination,
      } = req.body;
      //actualWeight is required

      if (!actualWeight) {
        return res.status(400).json({
          error: "actualWeight is required",
        });
      }
      const shipping_partners = await ShippingPartner.getShippingPartners();

      const fees = shipping_partners.map((partner) => {
        const { logisticFee, tax, total, shipmentModeId } = calculateFee({
          actualWeight,
          length,
          breadth,
          height,
          pincode,
          origin,
          destination,
          shippingPartnerId: partner.id,
        });
        return {
          logisticFee,
          tax,
          total,
          shipmentModeId,
          partner,
        };
      });
      fees.sort((a, b) => a.total - b.total);
      res.status(200).json(fees);
    } catch (error) {
      res.status(500).json({
        error: error.message,
      });
    }
  }
}

module.exports = PriceController;
