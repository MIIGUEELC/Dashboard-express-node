import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';


dotenv.config();


const SECRET_KEY = process.env.SECRET_KEY || "default_secret_key";


export const authenticateToken = (req: Request, res: Response, next: NextFunction) => {
    const token = req.header('Authorization')?.replace('Bearer ', '');

    if (!token) {
        res.status(401).json({ message: 'Acces Denied, No token provided.' });
        return;
    }

    try {
        jwt.verify(token, SECRET_KEY);
        next();
    } catch (error) {
        res.status(403).json({ message: 'Invalid token.' })
        return;
    }
}