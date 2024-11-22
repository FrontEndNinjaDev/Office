// ! we are using new keyword so we are going to use classes [ new AuthService() ];

import conf from "../conf/conf";

import { Client, Account, ID } from "appwrite";

export class AuthService {

  client = new Client();
  account;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);

    this.account = new Account(this.client);
  }

  // ^ async using bcoz i dont want to go next without creating a account
  async createAccount({ email, password, name }) {
    //^ it can fail so we are using try catch [fail , safe ]
    try {
      //^ awaiting for account
      // ! account have authservice account
      //^ we can generate unique ids from appwrite unique method
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );

      //^ we are just checking account is created or not
      if (userAccount) {
        // ^  return userAccount we can use it but we need to succefull login
        // ! call another method where we have A email and password for login
        return this.login({ email, password });
      } else {
        return userAccount;
      }
    } catch (error) {
      throw error;
    }
  }

  async login({ email, password }) {
    // ^ try -- finding for account
    try {
      return await this.account.createEmailPasswordSession(email, password);
    } catch (error) {
      throw error;
    }
  }

  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (err) {
      console.log(
        "🚀 ~ file: Auth.js:54 ~ AuthService ~ getCurrentUser ~ getCurrentUser:",
        err
      );
    }
    // ^ if we cannot get an account we just return empty [null]
    return null;
  }

  async logout() {
    try {
      // ^ just for logOut :-)

      await this.account.deleteSessions();
    } catch (err) {
      console.log("🚀 ~ file: Auth.js:70 ~ AuthService ~ logOut ~ err:", err);
    }
  }
}

// ! we are using new keyword so we are going to use classes 

const authService = new AuthService();

export default authService;
