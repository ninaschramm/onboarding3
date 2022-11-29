import { Router } from "express";
import { authenticateToken } from "@/middlewares";
import {  } from "@/controllers";
import { listAllHotels, listHotelRooms } from "@/controllers/hotels-controller";

const hotelsRouter = Router();

hotelsRouter
  .all("/*", authenticateToken)
  .get("/", listAllHotels)
  .get("/:hotelId", listHotelRooms);

export { hotelsRouter };
