export interface User {
  accountInformation: {
    name: string;
    emailAddress: string;
    title: string;
    password: string;
    day: string;
    month: string;
    year: string;
    signUp: boolean;
    receiveSpecialOffers: boolean;
  };

  addressInformation: {
    firstName: string;
    lastName: string;
    company: string;
    address: string;
    address2: string;
    country: string;
    state: string;
    city: string;
    zipCode: string;
    mobileNumber: string;
  };
}
