import mongoose from "mongoose";
import Image from "./Image.js";
import Address from "./Address.js";
import phoneRegex from "../../../utils/phoneRegex.js";
import passwordRegex from "../../../utils/passwordRegex.js";
import URL from "../helper/urlStringValidation.js";

const CardSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    minLength: 2,
    maxLength: 256,
    trim: true,
  },
  subtitle: {
    type: String,
    required: true,
    minLength: 2,
    maxLength: 256,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    minLength: 2,
    maxLength: 256,
    trim: true,
  },
  phone: {
    type: String,
    required: true,
    match: RegExp(phoneRegex),
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    match: RegExp(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/),
  },
  password: {
    type: String,
    required: true,
    minLength: 7,
    maxLength: 20,
    match: RegExp(passwordRegex),
  },
  web: URL,
  image: Image,
  address: Address,
  isBusiness: {
    type: Boolean,
    default: false,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
const Card = mongoose.model("card", CardSchema);

export default Card;
