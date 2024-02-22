export interface RoomList {
    roomNumber : number;
    roomType : string;
    roomPrice : number;
    checkIn : Date;
    checkOut: Date;
    RoomPhotos? : string;
}

export interface room{
    availableRooms : number;
    TotalRooms : number;
    AvailableRoomStatus : boolean;
    BookedRooms : number;
}