import conf from "../conf/conf";
import { Client, ID, Databases, Storage, Query } from "appwrite";

/**
 * Service class is responsible for handling database related operations with Appwrite API.
 * It provides methods to create, update, delete, and get posts from the database.
 */
export class Service {
    // Create a new instance of the Client class from the Appwrite SDK
    // This client will be used to communicate with the Appwrite API
    client = new Client();
    // Create a new instance of the Databases class from the Appwrite SDK using the client
    databases;
    // Create a new instance of the Storage class from the Appwrite SDK using the client
    storage;

    /**
     * Constructor for the Service class.
     * It sets the endpoint and project ID of the Appwrite API client using the values from the conf file.
     */
    constructor() {
        /** Set the endpoint of the Appwrite API client
         * This is necessary to indicate where the API is located
         * Set the project ID of the Appwrite API client
         * This is necessary to identify the project that the API belongs to
         */
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);

        // Create a new instance of the Databases class from the Appwrite SDK using the client
        this.databases = new Databases(this.client);
        // Create a new instance of the Storage class from the Appwrite SDK using the client
        this.storage = new Storage(this.client);
    }

    /**
     * This function creates a new post in the database.
     * It takes an object as a parameter with properties: title, slug, content, featuredImage, status, and userId.
     * The function sends a POST request to the Appwrite API to create a new document in the specified collection.
     * If the request is successful, it returns the created document.
     * If there is an error, it logs the error to the console.
     */
    async createPost({ title, slug, content, featuredImage, status, userId }) {
        try {
            // Create a new document in the collection
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId,
                }
            );
        } catch (error) {
            console.log("Appwrite Service :: createPost ::  Error", error);
        }
    }

    /**
     * This function updates an existing post in the database.
     * It takes two parameters: slug (the unique identifier of the post) and an object with properties:
     * title, content, featuredImage, and status (all of these properties are optional).
     * The function sends a PUT request to the Appwrite API to update the document in the specified collection.
     * If the request is successful, it returns the updated document.
     * If there is an error, it logs the error to the console.
     */
    async updatePost(slug, { title, content, featuredImage, status }) {
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                }
            );
        } catch (error) {
            console.log("Appwrite Service :: updatePost ::  Error", error);
        }
    }

    /**
     * This function deletes an existing post from the database.
     * It takes a slug (the unique identifier of the post) as a parameter.
     * The function sends a DELETE request to the Appwrite API to delete the document in the specified collection.
     * If the request is successful, it returns true.
     * If there is an error, it logs the error to the console and returns false.
     */
    async deletePost(slug) {
        try {
            await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            );
            return true;
        } catch (error) {
            console.log("Appwrite Service :: deletePost ::  Error", error);
            return false;
        }
    }

    /**
     * This function fetches a post from the database based on the provided slug.
     * It sends a GET request to the Appwrite API to retrieve the document from the specified collection.
     * If the request is successful, it returns the document.
     * If there is an error, it logs the error to the console.
     */
    async getPost(slug) {
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            );
        } catch (error) {
            console.log("Appwrite Service :: getPost ::  Error", error);
        }
    }

    /**
     * This function fetches all active posts from the database.
     * It sends a GET request to the Appwrite API to retrieve the documents from the specified collection.
     * The documents are filtered by the "status" field, which should be equal to "active".
     * If the request is successful, it returns the list of documents.
     * If there is an error, it logs the error to the console.
     */
    async getPosts() {
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                [Query.equal("status", "active")]
            );
        } catch (error) {
            console.log("Appwrite Service :: getPosts ::  Error", error);
            return false;
        }
    }

    /**
     * This function uploads a file to the Appwrite storage.
     * It sends a POST request to the Appwrite API to create a new file in the specified storage.
     * The function takes a file object as a parameter and returns the created file object if the upload is successful.
     * If there is an error, it logs the error to the console and returns false.
     */
    async uploadFile(file) {
        try {
            return await this.storage.createFile(
                conf.appwriteStorageId,
                ID.unique(),
                file
            );
        } catch (error) {
            console.log("Appwrite Service :: uploadFile ::  Error", error);
            return false;
        }
    }

    /**
     * This function deletes a file from the Appwrite storage.
     * It sends a DELETE request to the Appwrite API to delete the specified file from the storage.
     * The function takes a fileId as a parameter and returns true if the deletion is successful.
     * If there is an error, it logs the error to the console and returns false.
     */
    async deleteFile(fileId) {
        try {
            await this.storage.deleteFile(conf.appwriteStorageId, fileId);
            return true;
        } catch (error) {
            console.log("Appwrite Service :: deleteFile ::  Error", error);
            return false;
        }
    }

    /**
     * This function retrieves the preview URL for a file stored in Appwrite storage.
     * It sends a GET request to the Appwrite API to fetch the preview URL for the specified file.
     * The function takes a fileId as a parameter and returns the preview URL
     */
    getFilePreview(fileId) {
        return this.storage.getFilePreview(conf.appwriteStorageId, fileId);
    }
}

// Create an instance of the service
const service = new Service();

export default service;
