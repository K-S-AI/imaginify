import { Schema, model, models } from "mongoose";

import { URL } from 'url'; 

interface IImage {
    title: string;
    tranformationType: string;
    pubulicId: string;
    secureUrl: string;
    width?: number;
    height?: number;
    config?: Object; // 'Object' type in TypeScript is actually 'any'. You might want to define a more specific type.
    transformationURL?: URL;
    aspectRatio?: string;
    color?: string;
    prompt?: string;
    author: {_id: string; firstName: string; lastName: string;}; 
    createdAt?: Date;
    updatedAt?: Date;
}

 const ImageSchema = new Schema({
    title : { type: String, required: true },
    tranformationType : { type: String, required: true },
    pubulicId : { type: String, required: true },
    secureUrl : { type: URL, required: true },
    width: { type: Number},
    height: { type: Number},
    config: { type: Object},
    transformationURL: { type: URL}, 
    aspectRatio: { type: String},
    color: { type: String },
    prompt: { type: String},
    author: { type: Schema.Types.ObjectId, ref: 'User' },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
 }); 
  const Image = models?.Image || model('Image', ImageSchema);

  export default Image;