import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireDatabase, AngularFireObject } from '@angular/fire/database';
import { Post } from './post.model';
import{ map } from 'rxjs/operators';

   
    import * as firebase from 'firebase';
    import DataSnapshot = firebase.database.DataSnapshot;
import { Observable } from 'rxjs';
import { publicDecrypt, createPublicKey } from 'crypto';
import { R3FactoryTarget } from '@angular/compiler/src/compiler_facade_interface';
import { parseSelectorToR3Selector } from '@angular/compiler/src/core';
import { booking } from '../auth/user-service.module';
import { BuiltinVar } from '@angular/compiler';
 

@Injectable({
  providedIn: 'root'
})


export class PostServiceService {
  
  private dbPath = '/posts';

  postsRef: AngularFireList <any> = null;
  bookingsRef: AngularFireList <any> = null;
  constructor(private db: AngularFireDatabase) {
    this.postsRef = db.list(this.dbPath);
    this.bookingsRef = db.list('bookings');
   }


   createPost(post : Post):void {
      const key = this.postsRef.push(post).key;
      this.updatePost(key,{id:key});
   }

   /*addBookkings(){
      PostServiceService.dummyBookingsist.forEach(element => {
     this.bookingsRef.push(element);
      });
   }*/

   updatePost(key: string, value: any) : Promise <void> {
        return this.postsRef.update(key, value);
   }


   deletePost(key: string): Promise<void>{
      return this.postsRef.remove(key);
   }

   getPostList() : AngularFireList<any>{
      return this.postsRef;
   }

   deleteAll() : Promise<void> {
      return this.postsRef.remove();
   }
   public getAllPostBySubType(subtype) : AngularFireList<any>{
      return this.db.list('/posts',ref=> ref.orderByChild('subtype').equalTo(subtype) );
   }
  
   private merge_array(array1, array2) {
      var result_array = [];
      var arr = array1.concat(array2);
      var len = arr.length;
      var assoc = {};
  
      while(len--) {
          var item = arr[len];
  
          if(!assoc[item]) 
          { 
              result_array.unshift(item);
              assoc[item] = true;
          }
      }
  
      return result_array;
  }
  public getAllPostByInterestsAndLocation(likes,location) : Post[]{
   console.log(likes)
   console.log(location)
   const result_list :string[] =[];
   this.db.list('/posts',ref=> ref.orderByChild('id') ).valueChanges().pipe().subscribe(data =>{
      data.forEach((data : Post) =>{
         if(data.location == location){
            result_list.push(data.id)
         }
       
      })
     // 
   
   });
   
   return this.getAllPostsFromList(result_list);
  
  }


 


   public getAllPostsFromList(list) : Post[]  {
     const result : Post[] = [];

      this.db.list('/posts',ref=> ref.orderByChild('id') ).valueChanges().pipe().subscribe(data =>{
         data.forEach((data : Post) =>{
         
            list.forEach(element => {
               if(element == data.id ){
                
                  result.push(data);
               }
            });
         })
        // console.log(data)
      
      });
      console.log(result)
      return result;
      
   }

   postObject : AngularFireObject<Post>;
   public  getPostById(id) {
    
      this.postObject = this.db.object('posts/'+id);

     // console.log(this.postObject);
      return this.postObject;
   }
    public getPostsByName(name)  : AngularFireList<any> {
      return this.db.list('/posts',ref=> ref.orderByChild('subtype').equalTo(name));
    }
   
  

}
