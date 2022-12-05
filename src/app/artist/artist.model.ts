export class artistData {
    public artistName?: string;
    public artistId?: number;
    public artistType?: {
        artistTypeName: string;
    };
    public artistImage?: {
        artistImage: string;
    }
}

export class artistHistory {
    bookingId!: number;
    userName!: string;
    dateOfBooking!: string;
    bookingDate!: string;
    bookingFor!: string;
}