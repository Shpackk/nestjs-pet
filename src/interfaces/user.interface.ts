export class User {
  name: string;
  login: string;
  location: string;
  request?: string;
  //current request of user which is not fullfilled
  historyOfRequests?: string;
  //historyOfRequests should be type of request[]
}
