import dotenv from 'dotenv'

//Load the specific .env file based on that variable
dotenv.config({path: `./env/.env.${process.env.ENV || "prod"}`});

export class ConfigReader
{
  static readonly url = process.env.BASEURL;
  static readonly username = process.env.USER;
  static readonly password = process.env.PASSWORD;

}
