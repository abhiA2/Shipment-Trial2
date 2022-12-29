const { faker } = require("@faker-js/faker");
const bcrypt = require("bcrypt");

const saltRounds = 10;

exports.seed = async function (knex) {
  const fakeUsers = [];

  for (let i = 0; i < 10; i++) {
    const password = faker.internet.password();
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const fakeUser = {
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      mobileNumber: faker.datatype.number({ min: 6111111111, max: 9999999999 }),
      email: faker.internet.email(),
      password: hashedPassword,
      accountType: faker.helpers.arrayElement(["personal", "business"]),
    };

    fakeUsers.push(fakeUser);
  }

  await knex("users").insert(fakeUsers);
};
