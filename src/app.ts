import "reflect-metadata";
import {createConnection} from "typeorm";
import {Server} from './server'

import * as dotenv from 'dotenv';

import {ProductController} from './controllers/product.controller';
import { SupplierController } from "./controllers/supplier.controller";
import { CategoryController } from "./controllers/category.controller";
 

dotenv.config();
createConnection().then(async connection => {

    const server = new Server([new ProductController(),new SupplierController(),new CategoryController()]
    );
    server.listen();

}).catch(error => console.log(error));
