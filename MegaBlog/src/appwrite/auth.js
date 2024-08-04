import conf from "../conf/conf";
import { Client, Account, ID } from "appwrite";

/**
 * AuthService class is responsible for handling authentication related operations with Appwrite API.
 * It provides methods to create a new account, login, get current user and logout.
 */
export class AuthService {
    /**
     * Create a new instance of the Client class from the Appwrite SDK
     * This client will be used to communicate with the Appwrite API
     */
    client = new Client();

    /**
     * Constructor for the AuthService class.
     * It sets the endpoint and project ID of the Appwrite API client using the values from the conf file.
     */
    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
            
        this.account = new Account(this.client);
    }

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

    async login({ email, password }) {
        try {
            return await this.account.createEmailSession(email, password);
        } catch (error) {
            console.log("Appwrite Service :: login ::  Error", error);
        }
    }

    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            console.log("Appwrite Service :: getCurrentUser ::  Error", error);
        }
        return null;
    }

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
