import { User } from '../../ui/models/user';
import { User as ApiUser } from '../models/user';

export class UserMapper {
  static toApiUser(user: User): ApiUser {
    return {
      name: user.accountInformation.name,
      email: user.accountInformation.emailAddress,
      password: user.accountInformation.password,
      title: user.accountInformation.title,
      birth_date: user.accountInformation.day,
      birth_month: user.accountInformation.month,
      birth_year: user.accountInformation.year,
      firstname: user.addressInformation.firstName,
      lastname: user.addressInformation.lastName,
      company: user.addressInformation.company,
      address1: user.addressInformation.address,
      address2: user.addressInformation.address2,
      country: user.addressInformation.country,
      zipcode: user.addressInformation.zipCode,
      state: user.addressInformation.state,
      city: user.addressInformation.city,
      mobile_number: user.addressInformation.mobileNumber,
    };
  }
}
