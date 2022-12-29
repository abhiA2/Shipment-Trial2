const { faker } = require("@faker-js/faker");

exports.seed = async function (knex) {
  const fakeShipmentDetails = [];

  for (let i = 0; i < 10; i++) {
    const fakeShipmentDetail = {
      actualWeight: faker.datatype.number({ min: 1, max: 100 }),
      length: faker.datatype.number({ min: 1, max: 100 }),
      breadth: faker.datatype.number({ min: 1, max: 100 }),
      height: faker.datatype.number({ min: 1, max: 100 }),
    };

    fakeShipmentDetails.push(fakeShipmentDetail);
  }

  await knex("shipment_details").insert(fakeShipmentDetails);
};
