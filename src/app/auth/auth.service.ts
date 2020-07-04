import { Injectable } from '@angular/core';

import * as firebase from 'firebase/app';
//import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import {AngularFirestore, AngularFirestoreDocument} from "@angular/fire/firestore";
import { Router } from '@angular/router';

import { switchMap, subscribeOn } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { error } from 'protractor';
import { Post } from '../search/post.model';
import { PostServiceService } from '../search/post-service.service';
import { AngularFireList } from '@angular/fire/database';
import { getMatIconFailedToSanitizeUrlError } from '@angular/material/icon';

export interface booking{
 
  placeId: number; // booking id
  place ?: Post;
  fromDate : Date;
  toDate: Date;
  price?:number;
  active? : "Not Active" | "Active";
  placeName?: String
}
export interface User{
  uid:string;
  email:string;
  firstName: string;
  lastName: string;
  password:string;
  date: Date;
  location : "location1" | "location2" | "location3" | "location4" | "location5" | "location6" |
             "location7" | "location8" | "location9" | "location10" ;
  favorites?: Array<any>;//IDs of favorite posts
  bookings? : Array<any>;
  likes?: Array<string>;
  admin : boolean;
}

@Injectable()

export class AuthService {
  user: Observable<User>;
  logged : Observable<Boolean>;
 
  constructor(private afAuth: AngularFireAuth,private afs: AngularFirestore,private router : Router,
    private ps : PostServiceService) {

    this.user = this.afAuth.authState.pipe(
      switchMap(user =>{
        if(user){
         
          return this.afs.doc<User>(`users/${user.uid}`).valueChanges()
        }else{
          return null;
        }
      })
    )
    
   }


   async login(email: string, password: string) {
    var result = await this.afAuth.signInWithEmailAndPassword(email, password)
    this.router.navigate(['/']);
}

// SignOut method for logging out from the Angular/Firebase app
logout(){
  
  this.afAuth.signOut().catch(error => this.handleError(error));
}
   private handleError(error){
      console.log(error);
      
    }

  
    emailSignUp(email:string, password:string,data){
        return this.afAuth.createUserWithEmailAndPassword(email,password)
        .then(user => {
         
       
        
            return this.setUserDoc(user,data);
        }).catch(error => this.handleError(error));
    }


   updateUser(uid, data: any){
      console.log();
      return this.afs.doc(`users/${uid}`).update(data);

    }

    /*getUserId(){
     var id :string = null;
     this.user.subscribe(data=> {
      console.log(data.uid);
      id = data.uid;
    })
    console.log(id);
    }*/

    public addBooking(placeId : String,fromDate : Date, toDate : Date, userId ){
      const booking ={
        placeId : placeId,
        fromDate : fromDate,
        toDate : toDate

      }


      this.afs.collection(`bookings/`).add(booking).then((docRef)=>{
       
        console.log( docRef.id)
        console.log(userId)
       // this.afs.collection(`users/${userId}`).doc('bookings').set
       this.getAllBookingsByUser(userId).then((data) =>{
        const bookings : any[] =[];
        data.forEach(element => {
          bookings.push(element);
        });
       
        bookings.push(docRef.id);
          data = {
            bookings : bookings
  
          } 
  
          this.updateUser(userId, data)
      })
       
      
      })
      
     
    }

    private setUserDoc(user,d){
      console.log(d);
      const userRef : AngularFirestoreDocument<User> = this.afs.doc(`users/${user.user.uid}`);

      const data : User = {
        uid:user.user.uid,
        email: user.user.email,
        firstName:d.firstName,
        lastName: d.lastName,
        password:  d.password,
        date: d.date,
        location : d.location ,
        favorites: [],//IDs of favorite posts
        bookings :[],
        likes: d.likes,
        admin: false
      }
      return userRef.set(data);
    }



/*public putPostToUserFavorites(uid, id){
  this.afs.collection("users").doc(uid).collection('favorites').ref.se.then(
    (doc)=>{
      console.log(doc.metadata);
    }
  )
  
  
   
 
 
}*/

public getUserLikes(uid){
// var favoritesRef = this.afs.doc(`users/${uid}/favorites`);
return this.afs.collection("users").doc(uid).ref.get()
      
.then((doc)=>{
  if(doc.data().likes){
    

    return doc.data().likes
  }else{
    console.log("No such document")
  }
}).catch(function(error){
  console.log("Error" , error);
})
}
    public getAllFavoritePostsForUser(uid)  {
   
      return this.afs.collection("users").doc(uid).ref.get()
      
      .then((doc)=>{
        if(doc.data().favorites){
        
      
          return doc.data().favorites
        }else{
          console.log("No such document")
        }
      }).catch(function(error){
        console.log("Error" , error);
      })

   }

   public getAllBookingsByUser(uid){
    return this.afs.collection("users").doc(uid).ref.get()
      
    .then((doc)=>{
      if(doc.data().bookings){
        //console.log(doc.data().bookings)
    
        return doc.data().bookings
      }else{
        console.log("No such document")
      }
    }).catch(function(error){
      console.log("Error" , error);
    })

  }



  public getAllBookingsFromList(data) : booking[]{
     const result : booking[] =[];
    data.forEach(element => {
      
      this.afs.collection(`bookings`).doc(element).ref.get()
      .then((doc)=>{
       
        this.ps.getPostById(doc.data().placeId).valueChanges().pipe().subscribe(data=>{
          var diff1 = Math.abs( doc.data().fromDate.toDate().getTime()  -  doc.data().toDate.toDate().getTime() );
          var diffDays1 = Math.ceil(diff1 / (1000 * 3600 * 24)); 
        //  console.log(doc.data().fromDate.toDate())
          let booking: booking =  {
            place: data,
            placeId: doc.data().placeId,
            fromDate : doc.data().fromDate.toDate(),
            toDate :   doc.data().toDate.toDate(),
            price : (diffDays1 *  Number(data.price)),
            active : "Active",
            placeName : data.name
          }
          result.push(booking)
          //console.log(data.name);
        })
        return result;
       
       /* let booking = {
          placeId : doc.placeId

        }*/
        //result.push(doc)
       
      })
    });
    return result;

  }
   static dummyBookingsist: Array<booking> = [
    {

      
      placeId: 1 ,
      fromDate: new Date("2020-04-15 10:03"),
      toDate: new Date("2020-04-25 10:03")
     
    },
    {
     
      placeId: 15 ,
      fromDate: new Date("2020-03-16 10:03"),
      toDate: new Date("2020-03-20 10:03")
    },
    {
      
      placeId: 6 ,
      fromDate: new Date("2020-05-9 10:03"),
      toDate: new Date("2020-05-13 10:03")
    },
    {
    
      placeId: 5 ,
      fromDate: new Date("2020-05-9 10:03"),
      toDate: new Date("2020-05-13 10:03")
    },
    {
   
      placeId: 17 ,
      fromDate: new Date("2020-05-9 10:03"),
      toDate: new Date("2020-05-13 10:03")
    },
    {
  
      placeId: 18 ,
      fromDate: new Date("2020-05-9 10:03"),
      toDate: new Date("2020-05-13 10:03")
    },
    {
  
      placeId: 20,
      fromDate: new Date("2020-05-9 10:03"),
      toDate: new Date("2020-05-13 10:03")
    },

  ]


  /*public addBooking(){
    console.log("Bookins")
     AuthService.dummyBookingsist.forEach(element => {
    this.afs.collection(`bookings/`).add(element)
      

    });
  }*/
}

