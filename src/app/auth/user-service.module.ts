import { Injectable } from '@angular/core';
import { Post } from '../search/post.model';
import { PostsService } from '../search/post.servise';
import { Observable, Subject, BehaviorSubject } from 'rxjs';






export interface User{
  id:number;
  email:string;
  firstName: string;
  lastName: string;
  password:string;
  date: Date;
  location : "location1" | "location2" | "location3" | "location4" | "location5" | "location6" |
             "location7" | "location8" | "location9" | "location10" ;
  favorites?: Array<number>;//IDs of favorite posts
  bookings? : Array<number>;
  likes?: Array<string>;
}

export interface booking{
  id:number;
  placeId: number; // booking id
  place ?: Post;
  fromDate : Date;
  toDate: Date;
  price?:number;
  active? : "Not Active" | "Active";
}
@Injectable()
export class UserServiceModule {
  public ps = new  PostsService;


  //sets the boolean value to be observed by other components
  private loggedSource = new BehaviorSubject<boolean>(false);
  private loggedUserSourse = new BehaviorSubject<User>(null);

  logged = this.loggedSource.asObservable();
  currentUser = this.loggedUserSourse.asObservable();

  constructor() { 
    
   
  }

  setLoggedTrue(){
    this.loggedSource.next(true);
  }
  logout(){
   this.loggedSource.next(false);
   this.loggedUserSourse.next(null);
  }


  isUserLogged(){
    return this.logged;
  } 
  getCurrentUser(){
    return this.currentUser;
  }
  setCurrentUser(user){
    this.loggedUserSourse.next(user);
  }
  removeUser(id:number){
   
  UserServiceModule.dummyUserList.splice(UserServiceModule.dummyUserList.findIndex(item => item.id === id), 1);
  
  }
   public static dummyUserList: Array<User> = [
    {

      id:1,
      firstName: "test",
      lastName: "test",
      email: "test@test.com",
      password: "test123456",
      date: new Date("2020-05-29 10:03"),
      favorites : [1,3,5],
      bookings: [1,2],
      location: "location3" ,
      likes: ["casino","park","pubs","cabin"]
    },
    {
      id:2,
      firstName: "test1",
      lastName: "test1",
      email: "test1@test.com",
      password: "test123456",
      date: new Date("2020-05-29 10:03"),
      favorites : [1,4,55,45,3,5],
      bookings: [3],
      location: "location10",
      likes:["cabin", "hotel", "resort"]
    },
    {
      id:3,
      firstName: "admin",
      lastName: "admin",
      email: "admin@admin.com",
      password: "admin1234",
      date: new Date("2019-12-25 10:03"),
      favorites : [1,4,55,45,3,5],
      bookings: [4,5,6,7],
      location: "location5",
      likes: ["coffe shop", "villa"]
    }

  ]
  


  public getAllFavoritePostsForUser(userId : number){
     var user = UserServiceModule.dummyUserList.find(userToFind => userToFind.id == userId);
     console.log(user);
    const arr1 = user.favorites;
    const result = Array<Post>();
    for(let i of arr1){
      result.push(this.ps.getPostById(i.toString()));
    }
      console.log(result);
     return result;
  }
  public getAllBookingForUser(userId : number){
    var user = UserServiceModule.dummyUserList.find(userToFind => userToFind.id == userId);
    console.log(user);
   const arr1  = user.bookings;
   const result = Array<booking>();
  arr1.forEach(book => {
   // var book : booking = {element.id,element.placeId,this.ps.getPostById(element.placeId),element.fromDate,element.toDate};
   const booking = this.getBookingById(book);
   if(booking.place == null){
    booking.place = this.ps.getPostById(booking.placeId.toString());
   }
  
   

  var diff1 = Math.abs(booking.fromDate.getTime() - booking.toDate.getTime());
  var diffDays1 = Math.ceil(diff1 / (1000 * 3600 * 24)); 
  booking.price =(diffDays1 *  Number(booking.place.price)) ;

  if(booking.toDate > new Date()){
    booking.active = "Active";
  }else{
    booking.active = "Not Active";
  }
   result.push(booking);
   
  });
    console.log(result);
    return result;
 }
 
 public getBookingById(id : number){
  var foundBooking : booking; 
  UserServiceModule.dummyBookingsist.forEach(booking => {
    if(booking.id == id){
      foundBooking = booking;
    }

  });
  return foundBooking;
 }
  //dohvatamo korisnicko ime iz objekta interejsa korisnika
  getUserName(user: User) :string {
    return user.email;
  }
  //nalazimo korisnika na osnovu id polja iz nija objekata korisnika
  getUserById(id:number) : User {
    var foundUser : User; 
    UserServiceModule.dummyUserList.forEach(user => {
      if(user.id == id){
        foundUser = user;
      }

    });
    return foundUser;
  }


  getUser(userEmail: string) : User{
    return UserServiceModule.dummyUserList.find(userToFind => userToFind.email == userEmail);
  }

  isPasswordCorrect(userEmail : string, password:string) : boolean{
    return UserServiceModule.dummyUserList.find(userToFind => (userToFind.email == userEmail && userToFind.password == password)) != undefined;
  }

  registerUser(email:string,password:string, date:Date, firstName:string, lastName:string, location:any, likes:any) : User{
    var maxId = 0;
    UserServiceModule.dummyUserList.forEach(user => {
      if(maxId < user.id){
        maxId = user.id;
      }
    });
    var id = ++maxId;
    var favorites = Array<number>();
    var bookings = Array<number>();
    var user : User = {id,email,password,date,firstName,lastName,favorites, bookings,location, likes};
    UserServiceModule.dummyUserList.push(user);

    console.log(user);
    return user;
  }

  //Bookking list
  static dummyBookingsist: Array<booking> = [
    {

      id:1,
      placeId: 1 ,
      fromDate: new Date("2020-04-15 10:03"),
      toDate: new Date("2020-04-25 10:03")
     
    },
    {
      id:2,
      placeId: 15 ,
      fromDate: new Date("2020-03-16 10:03"),
      toDate: new Date("2020-03-20 10:03")
    },
    {
      id:3,
      placeId: 6 ,
      fromDate: new Date("2020-05-9 10:03"),
      toDate: new Date("2020-05-13 10:03")
    },
    {
      id:4,
      placeId: 5 ,
      fromDate: new Date("2020-05-9 10:03"),
      toDate: new Date("2020-05-13 10:03")
    },
    {
      id:5,
      placeId: 17 ,
      fromDate: new Date("2020-05-9 10:03"),
      toDate: new Date("2020-05-13 10:03")
    },
    {
      id:6,
      placeId: 18 ,
      fromDate: new Date("2020-05-9 10:03"),
      toDate: new Date("2020-05-13 10:03")
    },
    {
      id:7,
      placeId: 20,
      fromDate: new Date("2020-05-9 10:03"),
      toDate: new Date("2020-05-13 10:03")
    },

  ]

  addBooking(placeId : number, fromDate:Date, toDate:Date, place: Post, userId: number){
    var maxId = 0;
    UserServiceModule.dummyBookingsist.forEach(book => {
      if(maxId < book.id){
        maxId = book.id;
      }
    });
    var id = ++maxId;
    var book : booking = {id,placeId,fromDate,toDate,place};
    UserServiceModule.dummyBookingsist.push(book);
   const user: User = this.getUserById(userId);
   user.bookings.push(id);

    //console.log(book);
   
  }
  getAllBookingsByUser(user : User){
    
      return user.bookings;
    
  }
  
}
