import { faker } from '@faker-js/faker';
import { User } from '../models/user';

export class UserFactory {
  static create(): User {
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();

    const birthday = faker.date.between({
      from: '1970-01-01',
      to: '2005-12-31',
    });

    return {
      accountInformation: {
        name: firstName,
        emailAddress: faker.internet.email({
          firstName: `${firstName}${Date.now()}`,
          lastName,
        }),
        title: faker.helpers.arrayElement(['Mr.', 'Mrs.']),
        password: faker.internet.password({
          length: 12,
        }),
        day: birthday.getDate().toString(),
        month: (birthday.getMonth() + 1).toString(),
        year: birthday.getFullYear().toString(),
        signUp: true,
        receiveSpecialOffers: true,
      },

      addressInformation: {
        firstName,
        lastName,
        company: faker.company.name(),
        address: faker.location.streetAddress(),
        address2: faker.location.secondaryAddress(),
        country: faker.helpers.arrayElement([
          'India',
          'United States',
          'Canada',
          'Australia',
          'Israel',
          'New Zealand',
          'Singapore',
        ]),
        state: faker.location.state(),
        city: faker.location.city(),
        zipCode: faker.location.zipCode(),
        mobileNumber: faker.phone.number(),
      },
    };
  }
}
