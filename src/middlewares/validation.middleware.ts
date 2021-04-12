import { plainToClass } from 'class-transformer';
import { validate, ValidationError } from 'class-validator';
import { NextFunction, Request, RequestHandler, Response } from 'express';
import { HttpException } from '../exceptions/HttpException';
import { ProductDto } from '../dto/product.dto';



// export function validationMiddleware<T>(type: any, skipMissingProperties = false): RequestHandler {
    export function validationMiddleware<T>(req:any,res:Response,next:NextFunction) {
        const type = ProductDto;
        const skipMissingProperties = true;

  
    
    validate(plainToClass(type, req.body), { skipMissingProperties })
      .then((errors: ValidationError[]) => {
        if (errors.length > 0) {
          const message = errors.map((error: ValidationError) => Object.values(error.constraints)).join(', ');
          req.errors = message;
          next();
        } else {
          next();
        }
      });
  
}