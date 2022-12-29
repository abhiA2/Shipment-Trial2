const { faker } = require("@faker-js/faker");

exports.seed = async function (knex) {
  const fakeAddresses = [];

  for (let i = 0; i < 10; i++) {
    fakeAddresses.push({
      orderId: faker.datatype.number({ min: 1, max: 10 }),

      userId: faker.datatype.number(),
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      mobileNo: faker.datatype.number({ min: 6111111111, max: 9999999999 }),
      alternateMobileNo: faker.datatype.number({
        min: 6111111111,
        max: 9999999999,
      }),
      fullAddress: faker.address.streetAddress(),
      landmark: faker.address.secondaryAddress(),
      pincode: faker.address.zipCode(),
      city: faker.address.city(),
      country: faker.address.country(),
      state: faker.address.state(),
    });
  }

  await knex("order_pickup_addresses").insert(fakeAddresses);
};
