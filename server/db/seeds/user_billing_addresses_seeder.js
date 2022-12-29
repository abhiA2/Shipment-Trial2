const { faker } = require("@faker-js/faker");
console.log({
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
exports.seed = async function (knex) {
  const fakeAddresses = [];

  for (let i = 0; i < 10; i++) {
    fakeAddresses.push({
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
  await knex("user_billing_addresses").insert(fakeAddresses);
};
