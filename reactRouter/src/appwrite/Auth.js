import { Client, Account, ID } from "appwrite";
import config from "./config";


export class AuthService {
    client = new Client();
    account ;

    constructor (){
        this.client
            .setEndpoint(config.APPWRITE_URL) // Your API Endpoint
            .setProject(config.APPWRITE_PROJECT_ID); // Your project ID

        this.account = new Account(this.client);
    }

    async createAccount({email, password , name}){
        try {
            const userAccount = await this.account.create(ID.unique() , email , password , name)
            if(userAccount){
                return this.Login({email , password}) // login function  is in down 
            }else{
                return userAccount
            }
        }catch (error) { 
            console.log("Appwrite service :: createAccount :: error" , error)
        }
    }
    
    async Login ({email , password}){
        try {
            return await this.account.createEmailPasswordSession(email , password) 
        }catch (error) {
            console.log("Appwrite service :: Login :: error" , error)
        }
    }

    async getCurrentUser(){
        try {
            return await this.account.get()
        }catch (error) {
            console.log("Appwrite service :: getCurrentUser :: error" , error)
        }

        return null
    }

    async logout(){
        try {
            return await this.account.deleteSession()  // logging out from all device
        }catch (error) {
            console.log("Appwrite service :: logout :: error" , error)
        }
    }
}




const authservice = new AuthService() //exporting as a object for using (. notaion ) , like authservice.create()
export default authservice ;


