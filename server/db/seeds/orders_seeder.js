const { faker } = require("@faker-js/faker");

exports.seed = async function (knex) {
  const fakeOrders = [];

  for (let i = 0; i < 10; i++) {
    const fakeOrder = {
      logisticFee: faker.datatype.number({ min: 1, max: 100 }),
      tax: faker.datatype.number({ min: 1, max: 100 }),
      total: faker.datatype.number({ min: 1, max: 1000 }),
      shippingPartnerId: faker.datatype.number({ min: 1, max: 4 }),
      shipmentModeId: faker.datatype.number({ min: 1, max: 3 }),
      deliveryAddressId: faker.datatype.number({ min: 1, max: 10 }),
      billedWeight: faker.datatype.number({ min: 1, max: 100 }),
      pickupAddressId: faker.datatype.number({ min: 1, max: 10 }),
      userId: Math.floor(i / 2) + 1,
    };

    fakeOrders.push(fakeOrder);
  }

  await knex("orders").insert(fakeOrders);
};
