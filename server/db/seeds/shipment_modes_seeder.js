exports.seed = async function (knex) {
  const fakeShipmentModes = [];
  const companies = ["Air", "Rail", "Sea"];
  for (company of companies) {
    const fakeShipmentMode = {
      name: company,
    };

    fakeShipmentModes.push(fakeShipmentMode);
  }

  await knex("shipment_modes").insert(fakeShipmentModes);
};
