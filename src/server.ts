import {Application} from 'express';
import * as express from 'express';
import * as morgan from 'morgan';

import * as cors from 'cors';
import { Controller } from './interfaces/controller.interface';
import { errorMiddleware } from './middlewares/error.middleware';


export class Server{
    private app:Application;
    private port:any;
    private paths:any;
    constructor(controllers: Controller[]){
        this.app = express();
        this.port = process.env.PORT;  


        this.middlewares();        
        this.initControllers(controllers);
    }
    private middlewares(){
        this.app.use(cors());
        this.app.use(morgan('dev'));
        this.app.use(express.json());
        this.app.use(errorMiddleware);
    }
    
    private  initControllers(controllers:Controller[]){
        controllers.forEach((controller)=>{
            this.app.use('/api/',controller.router);
        });
    }
    public listen(){
        this.app.listen(this.port,()=>{
            console.log(`Server runing on port ${this.port}`);
        });
    }

}