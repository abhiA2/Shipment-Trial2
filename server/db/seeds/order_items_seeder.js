const { faker } = require("@faker-js/faker");

exports.seed = async function (knex) {
  const fakeOrderItems = [];

  for (let i = 0; i < 10; i++) {
    const fakeOrderItem = {
      orderId: faker.datatype.number({ min: 1, max: 10 }),
      productName: faker.commerce.productName(),
      sku: faker.random.alphaNumeric(10),
      hsn: faker.random.alphaNumeric(8),
      qty: faker.datatype.number({ min: 1, max: 10 }),
      unitPrice: faker.datatype.number({ min: 1, max: 1000 }),
    };

    fakeOrderItems.push(fakeOrderItem);
  }

  await knex("order_items").insert(fakeOrderItems);
};
