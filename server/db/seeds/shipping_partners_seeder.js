const { faker } = require("@faker-js/faker");

exports.seed = async function (knex) {
  const fakeShippingPartners = [];

  const companies = ["Ghost", "DHL", "UPS", "FedEx", "USPS"];
  for (company of companies) {
    const fakeShippingPartner = {
      name: company,
    };

    fakeShippingPartners.push(fakeShippingPartner);
  }

  await knex("shipping_partners").insert(fakeShippingPartners);
};
