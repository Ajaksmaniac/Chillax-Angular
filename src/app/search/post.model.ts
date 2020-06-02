export interface Post{
    id: string;
    name: string;
    date?:Date;
    type : 'entertainement' | 'stay';
    subtype : 'apartment' | 'cabin' | 'hostel' | 'hotel'|
            'resort' | 'villa' | 'casino'| 'park'| 'pubs' | 'restaurant'|
             'zoo'| 'coffe shop';
    status?: 'reserved' | 'available' | null;
    price?: Number;
    picture : string;
    rating: number;
}