import { useQuery } from "@tanstack/react-query";
import type { GetRoomResponse } from "./types/get-room-response";

export function useRooms() {
  return useQuery({
    queryKey: ["get-rooms"],
    queryFn: async () => {
      const response = await fetch("http://localhost:3333/rooms");
      const rooms: GetRoomResponse = await response.json();
      return rooms;
    },
  });
}
