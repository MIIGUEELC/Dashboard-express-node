import { Request, Response } from "express";
import { fetchAllRooms, fetchRoomById, removeRoom, editRoom, addRoom } from "../services/roomService";

export const getAllRooms = (req: Request, res: Response) => {
    const rooms = fetchAllRooms()
    res.status(200).json(rooms)
}

export const getRoomById = (req: Request, res: Response) => {
    const { id } = req.params;
    const roomId = Number(id);
    const room = fetchRoomById(roomId);
    if (!room) {
        res.status(404).json({ message: 'Room not found' })
        return;
    }
    res.status(200).json(room);
}

export const createRoom = (req: Request, res: Response) => {
    const newRoom = req.body;
    const rooms = addRoom(newRoom);
    res.status(201).json(rooms);
}

export const updateRoom = (req: Request, res: Response) => {
    const { id } = req.params;
    const roomId = Number(id);
    const updatedRoom = req.body;
    const rooms = editRoom(roomId, updatedRoom);
    res.status(200).json(rooms)
}

export const deleteRoom = (req: Request, res: Response) => {
    const { id } = req.params;
    const roomId = Number(id);
    const rooms = removeRoom(roomId);
    res.status(200).json(rooms);
}