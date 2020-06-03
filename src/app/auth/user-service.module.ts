import { Injectable } from '@angular/core';
import { Post } from '../search/post.model';
import { PostsService } from '../search/post.servise';
import { Observable, Subject, BehaviorSubject } from 'rxjs';




export interface User{
  id:number;
  email:string;
  name: string;
  password:string;
  date: Date;
  favorites?: Array<Number>;//IDs of favorite posts
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
  isUserLogged(){
    return this.logged;
  } 
  getCurrentUser(){
    return this.currentUser;
  }
  setCurrentUser(user){
    this.loggedUserSourse.next(user);
  }
  static dummyUserList: Array<User> = [
    {

      id:1,
      name: "test",
      email: "test@test.com",
      password: "test123456",
      date: new Date("2020-05-29 10:03"),
      favorites : [1,3,5]
    },
    {
      id:2,
      name: "test2",
      email: "test1@test.com",
      password: "test123456",
      date: new Date("2020-05-29 10:03"),
      favorites : [1,4,55,45,3,5]
    },
    {
      id:3,
      name: "admin",
      email: "admin@admin.com",
      password: "admin1234",
      date: new Date("2019-12-25 10:03"),
      favorites : [1,4,55,45,3,5]
    }

  ]


  //dohvatamo korisnicko ime iz objketa interejsa korisnika
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

  registerUser(email:string,password:string, date:Date, name:string) : User{
    var maxId = 0;
    UserServiceModule.dummyUserList.forEach(user => {
      if(maxId < user.id){
        maxId = user.id;
      }
    });
    var id = ++maxId;
    var user : User = {id,email,password,date,name};
    UserServiceModule.dummyUserList.push(user);

    console.log(user);
    return user;
  }


  
}
