import {Post} from './post.model';
import { iif } from 'rxjs';



export class PostsService {
    private posts : Post [] = [
        {id: '1', name:"Hotel Srbija", type: "stay",subtype: "hotel", status:"available",date:new Date, price:140, picture: "assets/img/HotelImages/hotel1.jpg",rating:4},
        {id: '2', name:"Hotel Beograd", type: "stay",subtype: "hotel", status:"available",date:new Date, price:140, picture: "assets/img/HotelImages/hotel2.jpg",rating:4},
        {id: '3', name:"Villa Jelena", type: "stay",subtype: "villa", status:"reserved",date:new Date, price:140, picture: "assets/img/hotel.jpg",rating:4},
        {id: '4', name:"Villa Raviojla", type: "stay",subtype: "villa", status:"available",date:new Date, price:140, picture: "assets/img/hotel.jpg",rating:4},
        {id: '5', name:"Hotel Moskva", type: "stay",subtype: "hotel", status:"available",date:new Date, price:140, picture: "assets/img/HotelImages/hotel3.jpg",rating:4},
        {id: '6', name:"Hostel 1", type: "stay",subtype: "hostel", status:"available",date:new Date, price:140, picture: "assets/img/hotel.jpg",rating:3},
        {id: '7', name:"Hostel 2", type: "stay",subtype: "hostel", status:"available",date:new Date, price:140, picture: "assets/img/hotel.jpg",rating:2},
        {id: '8', name:"Hotel Random", type: "stay",subtype: "hotel", status:"reserved",date:new Date, price:140, picture: "assets/img/HotelImages/hotel4.jpg",rating:5},
        {id: '9', name: "Belgrade Apartments",  type: "stay",subtype: "apartment", status:"available",date:new Date, price:140, picture: "assets/img/HotelImages/hotel4.jpg",rating:5},
        {id: '10', name:"Some Apartments", type: "stay",subtype: "apartment", status:"available",date:new Date, price:140, picture: "assets/img/HotelImages/hotel4.jpg",rating:3},
        {id: '11', name:"Nice Apartments", type: "stay",subtype: "apartment", status:"reserved",date:new Date, price:140, picture: "assets/img/HotelImages/hotel4.jpg",rating:5},
        {id: '12', name:"White Hotel", type: "stay",subtype: "hotel", status:"reserved",date:new Date, price:140, picture: "assets/img/HotelImages/hotel4.jpg",rating:3},
        {id: '13', name:"Hotel Dunav", type: "stay",subtype: "hotel", status:"reserved",date:new Date, price:140, picture: "assets/img/HotelImages/hotel2.jpg",rating:2},
        {id: '14', name:"Blue Cabins", type: "stay",subtype: "cabin", status:"available",date:new Date, price:140, picture: "assets/img/HotelImages/hotel4.jpg",rating:1},
        {id: '15', name:"Water Resort", type: "stay",subtype: "resort", status:"available",date:new Date, price:140, picture: "assets/img/HotelImages/hotel4.jpg",rating:1},
        {id: '16', name:"Blue Lagoon", type: "stay",subtype: "resort", status:"available",date:new Date, price:140, picture: "assets/img/HotelImages/hotel4.jpg",rating:3},
        {id: '17', name:"Villa Random", type: "stay",subtype: "villa", status:"available",date:new Date, price:140, picture: "assets/img/HotelImages/hotel4.jpg",rating:2},
        {id: '18', name:"Hotel Random", type: "stay",subtype: "hotel", status:"reserved",date:new Date, price:140, picture: "assets/img/HotelImages/hotel4.jpg",rating:5},
        {id: '19', name:"Hotel Random", type: "stay",subtype: "hotel", status:"reserved",date:new Date, price:140, picture: "assets/img/HotelImages/hotel4.jpg",rating:2},
        {id: '20', name:"White Apartments", type: "stay",subtype: "apartment", status:"available",date:new Date, price:140, picture: "assets/img/HotelImages/hotel4.jpg",rating:1},
        {id: '21', name:"Random Cabins", type: "stay",subtype: "cabin", status:"reserved",date:new Date, price:140, picture: "assets/img/HotelImages/hotel4.jpg",rating:3},
        {id: '22', name:"Big Cabins", type: "stay",subtype: "cabin", status:"available",date:new Date, price:140, picture: "assets/img/HotelImages/hotel4.jpg",rating:4},
        {id: '23', name:"Wooden Cabins", type: "stay",subtype: "cabin", status:"reserved",date:new Date, price:140, picture: "assets/img/HotelImages/hotel4.jpg",rating:2},
        {id: '24', name:"Resort Random", type: "stay",subtype: "resort", status:"available",date:new Date, price:140, picture: "assets/img/HotelImages/hotel4.jpg",rating:5},
        {id: '25', name:"Nice resort", type: "stay",subtype: "resort", status:"reserved",date:new Date, price:140, picture: "assets/img/HotelImages/hotel4.jpg",rating:4},
        {id: '26', name:"Big resort", type: "stay",subtype: "resort", status:"available",date:new Date, price:140, picture: "assets/img/HotelImages/hotel4.jpg",rating:5},
        {id: '27', name:"Golden Casino", type: "entertainement",subtype: "casino",date:new Date, picture: "assets/img/HotelImages/hotel4.jpg",rating:3},
        {id: '28', name:"Mozzart", type: "entertainement",subtype: "casino",date:new Date, picture: "assets/img/HotelImages/hotel4.jpg",rating:5},
        {id: '29', name:"Lucky Bet", type: "entertainement",subtype: "casino",date:new Date, picture: "assets/img/HotelImages/hotel4.jpg",rating:2},
        {id: '30', name:"Royale", type: "entertainement",subtype: "casino",date:new Date, picture: "assets/img/HotelImages/hotel4.jpg",rating:4},
        {id: '31', name:"Meridian", type: "entertainement",subtype: "casino",date:new Date, picture: "assets/img/HotelImages/hotel4.jpg",rating:5},
        {id: '32', name:"Max Bet", type: "entertainement",subtype: "casino",date:new Date, picture: "assets/img/casino.jpg",rating:4},
        {id: '33', name:"Green park", type: "entertainement",subtype: "park",date:new Date, picture: "assets/img/park.jpg",rating:4},
        {id: '34', name:"Big park", type: "entertainement",subtype: "park",date:new Date, picture: "assets/img/park.jpg",rating:3},
        {id: '35', name:"kids park", type: "entertainement",subtype: "park",date:new Date, picture: "assets/img/park.jpg",rating:4},
        {id: '36', name:"Small park", type: "entertainement",subtype: "park",date:new Date, picture: "assets/img/park.jpg",rating:5},
        {id: '37', name:"Open Gym park", type: "entertainement",subtype: "park",date:new Date, picture: "assets/img/park.jpg",rating:5},
        {id: '38', name:"Coffee caffe ", type: "entertainement",subtype: "coffe shop",date:new Date, picture: "assets/img/coffe-shop.jpg",rating:5},
        {id: '39', name:"Radio caffee ", type: "entertainement",subtype: "coffe shop",date:new Date, picture: "assets/img/coffe-shop.jpg",rating:2},
        {id: '40', name:"Big Bean ", type: "entertainement",subtype: "coffe shop",date:new Date, picture: "assets/img/coffe-shop.jpg",rating:5},
        {id: '41', name:"Coffee cup ", type: "entertainement",subtype: "coffe shop",date:new Date, picture: "assets/img/coffe-shop.jpg",rating:4},
        {id: '42', name:"Random caffe", type: "entertainement",subtype: "coffe shop",date:new Date, picture: "assets/img/coffe-shop.jpg",rating:1},
        {id: '43', name:"Small caffe ", type: "entertainement",subtype: "coffe shop",date:new Date, picture: "assets/img/coffe-shop.jpg",rating:2},
        {id: '44', name:"Beer pub ", type: "entertainement",subtype: "pubs",date:new Date, picture: "assets/img/pub.jpg",rating:4},
        {id: '45', name:"Captains glass ", type: "entertainement",subtype: "pubs",date:new Date, picture: "assets/img/pub.jpg",rating:3},
        {id: '46', name:"Jolly Roger ", type: "entertainement",subtype: "pubs",date:new Date, picture: "assets/img/pub.jpg",rating:5},
        {id: '47', name:"Random pub ", type: "entertainement",subtype: "pubs",date:new Date, picture: "assets/img/pub.jpg",rating:2},
        {id: '48', name:"Big pub ", type: "entertainement",subtype: "pubs",date:new Date, picture: "assets/img/pub.jpg",rating:1},
        {id: '49', name:"Fancy Restaurant ", type: "entertainement",subtype: "restaurant",date:new Date, picture: "assets/img/restaurant.jpg",rating:5},
        {id: '50', name:"Mc Donalds ", type: "entertainement",subtype: "restaurant",date:new Date, picture: "assets/img/restaurant.jpg",rating:4},
        {id: '51', name:"KFC", type: "entertainement",subtype: "restaurant",date:new Date, picture: "assets/img/restaurant.jpg",rating:5},
        {id: '52', name:"Some Restaurant ", type: "entertainement",subtype: "restaurant",date:new Date, picture: "assets/img/restaurant.jpg",rating:2},
        {id: '53', name:"Random Restaurant ", type: "entertainement",subtype: "restaurant",date:new Date, picture: "assets/img/restaurant.jpg",rating:1},
        {id: '54', name:"Big Restaurant", type: "entertainement",subtype: "restaurant",date:new Date, picture: "assets/img/restaurant.jpg",rating:5},
        {id: '55', name:"Big Zoo", type: "entertainement",subtype: "zoo",date:new Date, picture: "assets/img/zoo.jpg",rating:5},
        {id: '56', name:"Random Zoo", type: "entertainement",subtype: "zoo",date:new Date, picture: "assets/img/zoo.jpg",rating:4},

       
      



    ];

    public getAllPosts(){
        return this.posts;
    }
    public getAllPostsByTypeAndSubtype(t1, t2){
        
        const result = this.posts.filter(post => post.type == t1 && post.subtype == t2);
        return result;
    }
    public getAllPostBySubType(subtype){
        const result = this.posts.filter(post =>post.subtype == subtype);
        return result;
    }
    public getPostsByName(name : string){
        if(name  == undefined){
            return this.posts;
        }else{
            const result = this.posts.filter(post => post.name.includes(name));
            return result;
        }
       
    }

    public getPostById(id){
        return this.posts.find(post => post.id == id);
    }



}
