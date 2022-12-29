const Paytm = require("paytm-pg-node-sdk");
const environment =
  process.env.NODE_ENV === "production"
    ? Paytm.LibraryConstants.PRODUCTION_ENVIRONMENT
    : Paytm.LibraryConstants.STAGING_ENVIRONMENT;

const mid = process.env.PAYTM_MERCHANT_ID;
const key = process.env.PAYTM_MERCHANT_KEY;
const website = process.env.PAYTM_WEBSITE;
const callbackUrl = process.env.PAYTM_CALLBACK_URL;

Paytm.MerchantProperties.setCallbackUrl(callbackUrl);
Paytm.MerchantProperties.initialize(environment, mid, key, website);

class PaytmController {
  static async generateChecksum(req, res) {
    try {
      const order = req.body;
      const checksum = await Paytm.Checksum.generateSignature(order, key);
      res.json({ checksum });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
  static async verifyChecksum(req, res) {
    try {
      const { checksum, ...order } = req.body;
      const isValid = await Paytm.Checksum.verifySignature(
        order,
        key,
        checksum
      );
      res.json({ isValid });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
  static async createOrder(req, res) {
    try {
      // Get the order details from the request body
      const order = req.body;

      // Create the order using the Paytm SDK
      const response = await Paytm.Order.createOrder(order);

      // Return the response to the client
      res.json(response);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
  static async getOrderStatus(req, res) {
    try {
      // Get the order details from the request body
      const order = req.body;

      // Create the order using the Paytm SDK
      const response = await Paytm.Order.getOrderStatus(order);

      // Return the response to the client
      res.json(response);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

const test = async () => {
  const channelId = Paytm.EChannelId.WEB;
  const orderId = "728338";
  const txnAmount = Paytm.Money.constructWithCurrencyAndValue(
    Paytm.EnumCurrency.INR,
    "10.00"
  );
  const userInfo = new Paytm.UserInfo("1");
  userInfo.setAddress("vijay nagar");
  userInfo.setEmail("vishalbty@gmail.com");
  userInfo.setFirstName("Vishal");
  userInfo.setLastName("Basumatary");
  userInfo.setMobile("8134003821");
  userInfo.setPincode("783347");
  const paymentDetailBuilder = new Paytm.PaymentDetailBuilder(
    channelId,
    orderId,
    txnAmount,
    userInfo
  );
  const paymentDetail = paymentDetailBuilder.build();
  const response = await Paytm.Payment.createTxnToken(paymentDetail);
  console.log(response);
};

test();
