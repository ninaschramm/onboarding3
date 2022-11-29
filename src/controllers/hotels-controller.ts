import { AuthenticatedRequest } from "@/middlewares";
import hotelsService from "@/services/hotels-service";
import { Response } from "express";
import httpStatus from "http-status";

export async function listAllHotels(req: AuthenticatedRequest, res: Response) {
  try {
    const hotels = await hotelsService.listAllHotels();
    console.log(hotels);
    return res.status(httpStatus.OK).send(hotels);
  } catch (error) {
    return res.sendStatus(httpStatus.NOT_FOUND);
  }
}

export async function listHotelRooms(req: AuthenticatedRequest, res: Response) {
  try {
    const hotelId = Number(req.params.hotelId);
    if (!hotelId) {
      return res.sendStatus(httpStatus.BAD_REQUEST);
    }
    const rooms = await hotelsService.listHotelRooms(hotelId);
    return res.status(200).send(rooms);
  }
  catch (error) {        
    return res.sendStatus(httpStatus.NOT_FOUND);
  }
}
