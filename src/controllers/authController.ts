// src/controllers/authController.ts
import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

// Cargar variables de entorno
dotenv.config();

// Usuario hardcoded
const HARD_CODED_USER = {
  username: "user123",
  password: "password123", // No utilizar en producción
};

// Obtener la clave secreta desde el archivo .env
const SECRET_KEY = process.env.SECRET_KEY || "default_secret_key";

// Controlador para la ruta de login
export const login = (req: Request, res: Response) => {
  const { username, password } = req.body;

  // Verificar si las credenciales son correctas
  if (username === HARD_CODED_USER.username && password === HARD_CODED_USER.password) {
    // Generar un token JWT
    const token = jwt.sign({ username }, SECRET_KEY, { expiresIn: '1h' });
    return res.json({ token });
  }

  // Si las credenciales son incorrectas
  return res.status(401).json({ error: 'Credenciales incorrectas' });
};
