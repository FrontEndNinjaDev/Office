import conf from "../conf/conf.js";

import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Service {
  client = new Client();
  databases;
  bucket;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);
    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }

  async createPost({ title, slug, content, featuredImage, status, userId }) {
    try {
      return await this.databases.createDocument(
        conf.appwriteDatabasesId,
        conf.appwriteCollectionId,
        slug,
        {
          title,
          // slug
          content,
          featuredImage,
          status,
          userId,
        }
      );
    } catch (error) {
      console.log(
        "🚀 ~ file: config.js:33 ~ Service ~ createPost ~ error:",
        error
      );
    }
  }

  async updatePost( slug , {title, content, featuredImage, status, userId} ) {
    try{
        return await this.databases.updateDocument(
            conf.appwriteDatabasesId,
            conf.appwriteCollectionId,
            slug,
            {
                title,
                content,
                featuredImage,
                status,
            }

        )
    }catch(err){
        console.log("🚀 ~ file: config.js:45 ~ Service ~ updatePost ~ err:", err)
        
    }
  }

  async deletePost(slug){
    try {
        await this.databases.deleteDocument(
            conf.appwriteDatabasesId,
            conf.appwriteCollectionId,
            slug
        )
        return true 
    } catch (error) {
        console.log("🚀 ~ file: config.js:65 ~ Service ~ deletePost ~ error:", error)
        return false 
    }
  }

  async getPost(slug){

    try {
        return await this.databases.getDocument(
            conf.appwriteDatabasesId,
            conf.appwriteCollectionId,
            slug
        )
    } catch (error) {
        console.log("🚀 ~ file: config.js:79 ~ Service ~ getPost ~ error:", error)
        return false
    }
  }

  // ^ if we want only active status its in query

  async getPosts(queries = [Query.equal("status","active")]){
    try{

        return await this.databases.listDocuments(
            conf.appwriteDatabasesId,
            conf.appwriteCollectionId,
            queries,
        )
    } catch (error) {
        console.log("🚀 ~ file: config.js:95 ~ Service ~ getPosts ~ error:", error)
        return false 
    }
  }

  // ^ file Upload here

  async uploadFile(file){
    try {
        return await this.bucket.createFile(
            conf.appwriteBucketId,
            ID.unique(),
            file
        )
    } catch (error) {
        console.log("🚀 ~ file: config.js:111 ~ Service ~ uploadFile ~ error:", error)
        return false 
    }
  }

  async deleteFile(fileId){
    try {
        await this.bucket.deleteFile(
            conf.appwriteBucketId,
            fileId
        )
        return true
    } catch (error) {
        console.log("🚀 ~ file: config.js:124 ~ Service ~ deleteFile ~ error:", error)
        
    }
  }

  getFilePreview(fileId){
    return this.bucket.getFilePreview(
        conf.appwriteBucketId,
        fileId
    )
  }



}

const service = new Service();

export default service;
