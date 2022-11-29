import { notFoundError } from "@/errors";
import hotelsRepository from "@/repositories/hotels-repository";
import ticketRepository from "@/repositories/ticket-repository";

async function listAllHotels() {
  const verifyHotels = await ticketRepository.listTicketTypesWithHotels();
  if (!verifyHotels || verifyHotels.Ticket.length === 0) {
    throw notFoundError();
  }
  const hotels = await hotelsRepository.listHotels();  
  return hotels;
}

async function listHotelRooms(hotelId: number) {
  const rooms = await hotelsRepository.listHotelRooms(hotelId);
  if (!rooms || rooms.Rooms.length === 0) {
    throw notFoundError();
  }
  return rooms;
}

const hotelsService = {
  listAllHotels,
  listHotelRooms
};

export default hotelsService;
