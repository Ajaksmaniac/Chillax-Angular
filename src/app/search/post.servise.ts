import {Post} from './post.model';




export class PostsService {
    public posts : Post [] = [
        {id: '1',swimingPool:true,parking:true,pets:false,restaurant:true, name:"Hotel Srbija", type: "stay",subtype: "hotel", status:"available",date:new Date, price:140, picture: "assets/img/HotelImages/hotel1.jpg",rating:4,location:"location1"},
        {id: '2',swimingPool:false,parking:true,pets:false,restaurant:false, name:"Hotel Beograd", type: "stay",subtype: "hotel", status:"available",date:new Date, price:140, picture: "assets/img/HotelImages/hotel2.jpg",rating:4,location:"location1"},
        {id: '3',swimingPool:false,parking:false,pets:true,restaurant:true, name:"Villa Jelena", type: "stay",subtype: "villa", status:"reserved",date:new Date, price:140, picture: "assets/img/hotel.jpg",rating:4,location:"location2"},
        {id: '4',swimingPool:false,parking:false,pets:false,restaurant:false, name:"Villa Raviojla", type: "stay",subtype: "villa", status:"available",date:new Date, price:140, picture: "assets/img/hotel.jpg",rating:4,location:"location5"},
        {id: '5',swimingPool:true,parking:true,pets:false,restaurant:true, name:"Hotel Moskva", type: "stay",subtype: "hotel", status:"available",date:new Date, price:140, picture: "assets/img/HotelImages/hotel3.jpg",rating:4,location:"location7"},
        {id: '6',swimingPool:true,parking:true,pets:false,restaurant:true, name:"Hostel 1", type: "stay",subtype: "hostel", status:"available",date:new Date, price:140, picture: "assets/img/hotel.jpg",rating:3,location:"location2"},
        {id: '7',swimingPool:true,parking:true,pets:false,restaurant:true, name:"Hostel 2", type: "stay",subtype: "hostel", status:"available",date:new Date, price:140, picture: "assets/img/hotel.jpg",rating:2,location:"location6"},
        {id: '8',swimingPool:false,parking:false,pets:false,restaurant:false, name:"Hotel Random", type: "stay",subtype: "hotel", status:"reserved",date:new Date, price:140, picture: "assets/img/HotelImages/hotel4.jpg",rating:5,location:"location1"},
        {id: '9',swimingPool:false,parking:false,pets:false,restaurant:false, name: "Belgrade Apartments",  type: "stay",subtype: "apartment", status:"available",date:new Date, price:140, picture: "assets/img/HotelImages/hotel4.jpg",rating:5,location:"location1"},
        {id: '10',swimingPool:false,parking:false,pets:false,restaurant:false, name:"Some Apartments", type: "stay",subtype: "apartment", status:"available",date:new Date, price:140, picture: "assets/img/HotelImages/hotel4.jpg",rating:3,location:"location10"},
        {id: '11',swimingPool:false,parking:false,pets:true,restaurant:true, name:"Nice Apartments", type: "stay",subtype: "apartment", status:"reserved",date:new Date, price:140, picture: "assets/img/HotelImages/hotel4.jpg",rating:5,location:"location7"},
        {id: '12',swimingPool:true,parking:false,pets:false,restaurant:false, name:"White Hotel", type: "stay",subtype: "hotel", status:"reserved",date:new Date, price:140, picture: "assets/img/HotelImages/hotel4.jpg",rating:3,location:"location3"},
        {id: '13',swimingPool:true,parking:false,pets:false,restaurant:false,  name:"Hotel Dunav", type: "stay",subtype: "hotel", status:"reserved",date:new Date, price:140, picture: "assets/img/HotelImages/hotel2.jpg",rating:2,location:"location3"},
        {id: '14',swimingPool:true,parking:false,pets:false,restaurant:false,  name:"Blue Cabins", type: "stay",subtype: "cabin", status:"available",date:new Date, price:140, picture: "assets/img/HotelImages/hotel4.jpg",rating:1,location:"location3"},
        {id: '15',swimingPool:true,parking:false,pets:false,restaurant:false,  name:"Water Resort", type: "stay",subtype: "resort", status:"available",date:new Date, price:140, picture: "assets/img/HotelImages/hotel4.jpg",rating:1,location:"location3"},
        {id: '16',swimingPool:true,parking:true,pets:false,restaurant:true, name:"Blue Lagoon", type: "stay",subtype: "resort", status:"available",date:new Date, price:140, picture: "assets/img/HotelImages/hotel4.jpg",rating:3,location:"location3"},
        {id: '17',swimingPool:true,parking:true,pets:false,restaurant:true, name:"Villa Random", type: "stay",subtype: "villa", status:"available",date:new Date, price:140, picture: "assets/img/HotelImages/hotel4.jpg",rating:2,location:"location10"},
        {id: '18',swimingPool:true,parking:true,pets:false,restaurant:true, name:"Hotel Random", type: "stay",subtype: "hotel", status:"reserved",date:new Date, price:140, picture: "assets/img/HotelImages/hotel4.jpg",rating:5,location:"location10"},
        {id: '19',swimingPool:false,parking:false,pets:false,restaurant:false, name:"Hotel Random", type: "stay",subtype: "hotel", status:"reserved",date:new Date, price:140, picture: "assets/img/HotelImages/hotel4.jpg",rating:2,location:"location7"},
        {id: '20',swimingPool:false,parking:false,pets:false,restaurant:false, name:"White Apartments", type: "stay",subtype: "apartment", status:"available",date:new Date, price:140, picture: "assets/img/HotelImages/hotel4.jpg",rating:1,location:"location10"},
        {id: '21',swimingPool:false,parking:false,pets:false,restaurant:false, name:"Random Cabins", type: "stay",subtype: "cabin", status:"reserved",date:new Date, price:140, picture: "assets/img/HotelImages/hotel4.jpg",rating:3,location:"location4"},
        {id: '22',swimingPool:false,parking:false,pets:false,restaurant:false, name:"Big Cabins", type: "stay",subtype: "cabin", status:"available",date:new Date, price:140, picture: "assets/img/HotelImages/hotel4.jpg",rating:4,location:"location4"},
        {id: '23',swimingPool:false,parking:false,pets:true,restaurant:true, name:"Wooden Cabins", type: "stay",subtype: "cabin", status:"reserved",date:new Date, price:140, picture: "assets/img/HotelImages/hotel4.jpg",rating:2,location:"location4"},
        {id: '24',swimingPool:false,parking:false,pets:true,restaurant:true, name:"Resort Random", type: "stay",subtype: "resort", status:"available",date:new Date, price:140, picture: "assets/img/HotelImages/hotel4.jpg",rating:5,location:"location6"},
        {id: '25',swimingPool:false,parking:false,pets:true,restaurant:true, name:"Nice resort", type: "stay",subtype: "resort", status:"reserved",date:new Date, price:140, picture: "assets/img/HotelImages/hotel4.jpg",rating:4,location:"location6"},
        {id: '26',swimingPool:false,parking:false,pets:true,restaurant:true, name:"Big resort", type: "stay",subtype: "resort", status:"available",date:new Date, price:140, picture: "assets/img/HotelImages/hotel4.jpg",rating:5,location:"location6"},
        {id: '27',parking:false,pets:true, name:"Golden Casino", type: "entertainement",subtype: "casino",date:new Date, picture: "assets/img/HotelImages/hotel4.jpg",rating:3,location:"location6"},
        {id: '28',parking:true,pets:true, name:"Mozzart", type: "entertainement",subtype: "casino",date:new Date, picture: "assets/img/HotelImages/hotel4.jpg",rating:5,location:"location6"},
        {id: '29',parking:true,pets:false, name:"Lucky Bet", type: "entertainement",subtype: "casino",date:new Date, picture: "assets/img/HotelImages/hotel4.jpg",rating:2,location:"location6"},
        {id: '30',parking:true,pets:true, name:"Royale", type: "entertainement",subtype: "casino",date:new Date, picture: "assets/img/HotelImages/hotel4.jpg",rating:4,location:"location9"},
        {id: '31',parking:true,pets:true, name:"Meridian", type: "entertainement",subtype: "casino",date:new Date, picture: "assets/img/HotelImages/hotel4.jpg",rating:5,location:"location9"},
        {id: '32',parking:true,pets:true, name:"Max Bet", type: "entertainement",subtype: "casino",date:new Date, picture: "assets/img/casino.jpg",rating:4,location:"location9"},
        {id: '33',parking:true,pets:true, name:"Green park", type: "entertainement",subtype: "park",date:new Date, picture: "assets/img/park.jpg",rating:4,location:"location9"},
        {id: '34',parking:true,pets:true, name:"Big park", type: "entertainement",subtype: "park",date:new Date, picture: "assets/img/park.jpg",rating:3,location:"location9"},
        {id: '35',parking:true,pets:true, name:"kids park", type: "entertainement",subtype: "park",date:new Date, picture: "assets/img/park.jpg",rating:4,location:"location9"},
        {id: '36',parking:true,pets:true, name:"Small park", type: "entertainement",subtype: "park",date:new Date, picture: "assets/img/park.jpg",rating:5,location:"location8"},
        {id: '37',parking:true,pets:true, name:"Open Gym park", type: "entertainement",subtype: "park",date:new Date, picture: "assets/img/park.jpg",rating:5,location:"location8"},
        {id: '38',parking:true,pets:true, name:"Coffee caffe ", type: "entertainement",subtype: "coffe shop",date:new Date, picture: "assets/img/coffe-shop.jpg",rating:5,location:"location8"},
        {id: '39',parking:true,pets:true, name:"Radio caffee ", type: "entertainement",subtype: "coffe shop",date:new Date, picture: "assets/img/coffe-shop.jpg",rating:2,location:"location8"},
        {id: '40',parking:true,pets:true, name:"Big Bean ", type: "entertainement",subtype: "coffe shop",date:new Date, picture: "assets/img/coffe-shop.jpg",rating:5,location:"location8"},
        {id: '41',parking:false,pets:true, name:"Coffee cup ", type: "entertainement",subtype: "coffe shop",date:new Date, picture: "assets/img/coffe-shop.jpg",rating:4,location:"location8"},
        {id: '42',parking:false,pets:true, name:"Random caffe", type: "entertainement",subtype: "coffe shop",date:new Date, picture: "assets/img/coffe-shop.jpg",rating:1,location:"location8"},
        {id: '43',parking:false,pets:true, name:"Small caffe ", type: "entertainement",subtype: "coffe shop",date:new Date, picture: "assets/img/coffe-shop.jpg",rating:2,location:"location8"},
        {id: '44',parking:false,pets:true, name:"Beer pub ", type: "entertainement",subtype: "pubs",date:new Date, picture: "assets/img/pub.jpg",rating:4,location:"location1"},
        {id: '45',parking:false,pets:true, name:"Captains glass ", type: "entertainement",subtype: "pubs",date:new Date, picture: "assets/img/pub.jpg",rating:3,location:"location1"},
        {id: '46',parking:false,pets:true, name:"Jolly Roger ", type: "entertainement",subtype: "pubs",date:new Date, picture: "assets/img/pub.jpg",rating:5,location:"location1"},
        {id: '47',parking:false,pets:true, name:"Random pub ", type: "entertainement",subtype: "pubs",date:new Date, picture: "assets/img/pub.jpg",rating:2,location:"location1"},
        {id: '48',parking:false,pets:true, name:"Big pub ", type: "entertainement",subtype: "pubs",date:new Date, picture: "assets/img/pub.jpg",rating:1,location:"location1"},
        {id: '49',parking:false,pets:true, name:"Fancy Restaurant ", type: "entertainement",subtype: "restaurant",date:new Date, picture: "assets/img/restaurant.jpg",rating:5,location:"location2"},
        {id: '50',parking:true,pets:false, name:"Mc Donalds ", type: "entertainement",subtype: "restaurant",date:new Date, picture: "assets/img/restaurant.jpg",rating:4,location:"location2"},
        {id: '51',parking:true,pets:false, name:"KFC", type: "entertainement",subtype: "restaurant",date:new Date, picture: "assets/img/restaurant.jpg",rating:5,location:"location2"},
        {id: '52',parking:true,pets:false, name:"Some Restaurant ", type: "entertainement",subtype: "restaurant",date:new Date, picture: "assets/img/restaurant.jpg",rating:2,location:"location2"},
        {id: '53',parking:true,pets:false, name:"Random Restaurant ", type: "entertainement",subtype: "restaurant",date:new Date, picture: "assets/img/restaurant.jpg",rating:1,location:"location2"},
        {id: '54',parking:true,pets:false, name:"Big Restaurant", type: "entertainement",subtype: "restaurant",date:new Date, picture: "assets/img/restaurant.jpg",rating:5,location:"location2"},
        {id: '55',parking:true,pets:false, name:"Big Zoo", type: "entertainement",subtype: "zoo",date:new Date, picture: "assets/img/zoo.jpg",rating:5,location:"location2"},
        {id: '56',parking:true,pets:false, name:"Random Zoo", type: "entertainement",subtype: "zoo",date:new Date, picture: "assets/img/zoo.jpg",rating:4,location:"location2"},

       
      



    ];
    public getAllPostByInterestsAndLocation(interests:any,location:any){
        const result: Post[] = [];
       this.posts.forEach(element => {
            if(element.location == location || interests.includes(element.subtype)){
              result.push(element);
            }
        });
        return result;
        
    }
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
