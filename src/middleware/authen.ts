
import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

// Cargar variables de entorno
dotenv.config();

// Obtener la clave secreta desde el archivo .env
const SECRET_KEY = process.env.SECRET_KEY || "default_secret_key";

// Middleware de autenticación
export const authenticateToken = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers['authorization']?.split(' ')[1]; // El formato debe ser "Bearer <token>"

  if (!token) {
    return res.status(401).json({ error: 'Token no proporcionado' });
  }

  // Verificar el token con la clave secreta
  jwt.verify(token, SECRET_KEY, (err, user) => {
    if (err) {
      return res.status(403).json({ error: 'Token no válido' });
    }
    req.user = user;
    next();
  });
};
