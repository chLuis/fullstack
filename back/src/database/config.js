import mongoose from 'mongoose';
import { MongoClient } from 'mongodb';

export const dbConnect = async() => {
    try{
        const data = await MongoClient.connect(process.env.URL_DB);
        console.log('DB1 connected');
        return (data);
    }
    catch(error){
        console.log(error)
        throw new Error(error);
    }
}