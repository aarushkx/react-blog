import conf from "../conf/conf";
import { Client, ID, Databases, Storage, Query } from "appwrite";

/**
 * Service class is responsible for handling database related operations with Appwrite API.
 * It provides methods to create, update, delete, and get posts from the database.
 */
export class Service {
    client = new Client();
    databases;
    storage;

    /**
     * Constructor for the Service class.
     * It sets the endpoint and project ID of the Appwrite API client using the values from the conf file.
     */
    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);

        this.databases = new Databases(this.client);
        this.storage = new Storage(this.client);
    }

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

const service = new Service();

export default service;
