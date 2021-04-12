import { NextFunction, Request, Response } from "express";



import {  validationResult } from 'express-validator';

export const validatePlaces = (req:any,res:Response,next:NextFunction)=>{
    
    
    const errors1 = validationResult(req);
    const errors2= req.errors;
    if(!errors1.isEmpty() || errors2){
      return  res.status(400).json({errors1,errors2});
    }
   
    next();
}

