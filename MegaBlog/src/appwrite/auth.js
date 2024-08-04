import conf from "../conf/conf";
import { Client, Account, ID } from "appwrite";

/**
 * AuthService class is responsible for handling authentication related operations with Appwrite API.
 * It provides methods to create a new account, login, get current user and logout.
 */
export class AuthService {
    // Create a new instance of the Client class from the Appwrite SDK
    // This client will be used to communicate with the Appwrite API
    client = new Client();

    /**
     * Constructor for the AuthService class.
     * It sets the endpoint and project ID of the Appwrite API client using the values from the conf file.
     */
    constructor() {
        // Set the endpoint of the Appwrite API client
        this.client
            .setEndpoint(conf.appwriteUrl)
            // Set the project ID of the Appwrite API client
            .setProject(conf.appwriteProjectId);

        // Create a new instance of the Account class from the Appwrite SDK using the client
        this.account = new Account(this.client);
    }

    /**
     * Creates a new account with the provided email, password, and name using the Appwrite API.
     * If the account creation is successful, it logs in with the provided email and password
     * and returns the result of the login action. Otherwise, it returns the value of `userAccount`.
     */
    async createAccount({ email, password, name }) {
        try {
            await this.account.create(ID.unique(), email, password, name);
            if (userAccount) {
                return this.login({ email, password });
            } else {
                return userAccount;
            }
        } catch (error) {
            console.log("Appwrite Service :: createAccount ::  Error", error);
        }
    }

    /**
     * Creates a new account with the provided email, password, and name using the Appwrite API.
     * If the account creation is successful, it logs in with the provided email and password
     * and returns the result of the login action. Otherwise, it returns the value of `userAccount`.
     */
    async createAccount({ email, password, name }) {
        try {
            await this.account.create(ID.unique(), email, password, name);

            if (userAccount) {
                return this.login({ email, password });
            } else {
                return userAccount;
            }
        } catch (error) {
            console.log("Appwrite Service :: createAccount ::  Error", error);
        }
    }

    /**
     * This function creates a new account using the Appwrite API.
     * It takes an object as a parameter with properties: email, password, and name.
     *
     * If the account creation is successful, it calls the login function with the provided email and password.
     * Otherwise, it returns the value of `userAccount`.
     */
    async createAccount({ email, password, name }) {
        try {
            await this.account.create(ID.unique(), email, password, name);

            if (userAccount) {
                return this.login({ email, password });
            } else {
                return userAccount;
            }
        } catch (error) {
            console.log("Appwrite Service :: createAccount ::  Error", error);
        }
    }
    /**
     * This function creates a new account using the Appwrite API.
     * It takes an object as a parameter with properties: email, password, and name.
     *
     * It generates a unique ID using the ID.unique() method from the Appwrite SDK.
     * It then creates a new account using the email, password, and name.
     * If the account creation is successful, it calls the login function with the provided email and password.
     * Otherwise, it returns the value of `userAccount`.
     * If any error occurs during the account creation, it logs an error message.
     */
    async createAccount({ email, password, name }) {
        try {
            await this.account.create(ID.unique(), email, password, name);

            if (userAccount) {
                return this.login({ email, password });
            } else {
                return userAccount;
            }
        } catch (error) {
            console.log("Appwrite Service :: createAccount ::  Error", error);
        }
    }

    /**
     * This function creates a new account using the Appwrite API.
     * It takes an object as a parameter with properties: email, password, and name.
     *
     * It generates a unique ID using the ID.unique() method from the Appwrite SDK.
     * It then creates a new account using the email, password, and name.
     * If the account creation is successful, it calls the login function with the provided email and password.
     * Otherwise, it returns the value of `userAccount`.
     * If any error occurs during the account creation, it logs an error message.
     */
    async createAccount({ email, password, name }) {
        try {
            await this.account.create(ID.unique(), email, password, name);

            if (userAccount) {
                return this.login({ email, password });
            } else {
                return userAccount;
            }
        } catch (error) {
            console.log("Appwrite Service :: createAccount ::  Error", error);
        }
    }

    /**
     * This function creates a new account using the Appwrite API.
     * It takes an object as a parameter with properties: email, password, and name.
     *
     * It generates a unique ID using the ID.unique() method from the Appwrite SDK.
     * It then creates a new account using the email, password, and name.
     * If the account creation is successful, it calls the login function with the provided email and password.
     * Otherwise, it returns the value of `userAccount`.
     * If any error occurs during the account creation, it logs an error message.
     */
    async createAccount({ email, password, name }) {
        try {
            await this.account.create(ID.unique(), email, password, name);

            if (userAccount) {
                return this.login({ email, password });
            } else {
                return userAccount;
            }
        } catch (error) {
            console.log("Appwrite Service :: createAccount ::  Error", error);
        }
    }

    /**
     * This function creates a new account using the Appwrite API.
     * It takes an object as a parameter with properties: email, password, and name.
     *
     * It generates a unique ID using the ID.unique() method from the Appwrite SDK.
     * It then creates a new account using the email, password, and name.
     * If the account creation is successful, it calls the login function with the provided email and password.
     * Otherwise, it returns the value of `userAccount`.
     * If any error occurs during the account creation, it logs an error message.
     */
    async createAccount({ email, password, name }) {
        try {
            await this.account.create(ID.unique(), email, password, name);

            if (userAccount) {
                return this.login({ email, password });
            } else {
                return userAccount;
            }
        } catch (error) {
            console.log("Appwrite Service :: createAccount ::  Error", error);
        }
    }

    /**
     * This function creates a new account using the Appwrite API.
     * It takes an object as a parameter with properties: email, password, and name.
     *
     * It generates a unique ID using the ID.unique() method from the Appwrite SDK.
     * It then creates a new account using the email, password, and name.
     * If the account creation is successful, it calls the login function with the provided email and password.
     * Otherwise, it returns the value of `userAccount`.
     * If any error occurs during the account creation, it logs an error message.
     */
    async createAccount({ email, password, name }) {
        try {
            await this.account.create(ID.unique(), email, password, name);

            if (userAccount) {
                return this.login({ email, password });
            } else {
                return userAccount;
            }
        } catch (error) {
            console.log("Appwrite Service :: createAccount ::  Error", error);
        }
    }

    /**
     * This function creates a new account using the Appwrite API.
     * It takes an object as a parameter with properties: email, password, and name.
     *
     * It generates a unique ID using the ID.unique() method from the Appwrite SDK.
     * It then creates a new account using the email, password, and name.
     * If the account creation is successful, it calls the login function with the provided email and password.
     * Otherwise, it returns the value of `userAccount`.
     * If any error occurs during the account creation, it logs an error message.
     */
    async createAccount({ email, password, name }) {
        try {
            await this.account.create(ID.unique(), email, password, name);

            if (userAccount) {
                return this.login({ email, password });
            } else {
                return userAccount;
            }
        } catch (error) {
            console.log("Appwrite Service :: createAccount ::  Error", error);
        }
    }

    /**
     * This function logs in a user using the Appwrite API.
     * It takes an object as a parameter with properties: email and password.
     *
     * It creates a new email session using the email and password provided.
     * If the login is successful, it returns the result of the login action.
     * Otherwise, it logs an error message.
     */
    async login({ email, password }) {
        try {
            return await this.account.createEmailSession(email, password);
        } catch (error) {
            console.log("Appwrite Service :: login ::  Error", error);
        }
    }

    /**
     * This function fetches the details of the currently logged in user.
     * If the user is not logged in, it returns null.
     * If any error occurs during the fetch, it logs an error message.
     */
    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            console.log("Appwrite Service :: getCurrentUser ::  Error", error);
        }
        return null;
    }

    /**
     * This function logs out the currently logged in user.
     * It deletes the current user's sessions using the Appwrite API.
     * If the logout is successful, it returns the result of the logout action.
     * Otherwise, it logs an error message.
     */
    async logout() {
        try {
            return await this.account.deleteSessions("current");
        } catch (error) {
            console.log("Appwrite Service :: logout ::  Error", error);
        }
    }
}

/*
 * This line creates a new instance of the AuthService class.
 * It sets up the authentication service that will handle communication with the Appwrite API.
 * The `authService` constant is assigned the new instance of the AuthService class.
 * This allows us to call the methods provided by the AuthService class through the `authService` constant.
 */
const authService = new AuthService();

export default authService;
