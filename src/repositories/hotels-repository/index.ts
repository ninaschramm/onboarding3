import { prisma } from "@/config";

async function listHotels() {
  const hotels = await prisma.hotel.findMany();
  return (hotels);
}

async function listHotelRooms(hotelId: number) {
  const rooms = await prisma.hotel.findFirst({
    where: {
      id: hotelId,
    },
    include: {
      Rooms: true,
    }
  });
  return (rooms);
}

const hotelsRepository = {
  listHotels,
  listHotelRooms
};

export default hotelsRepository;
