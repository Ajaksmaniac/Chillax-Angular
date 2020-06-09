import { Component, OnInit, Inject, Optional } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { NgForm } from '@angular/forms';
import { PostsService } from '../post.servise';
import { UserServiceModule, User } from 'src/app/auth/user-service.module';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemPageComponent } from '../item-page/item-page.component';



@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.css']
})
export class BookItemComponent {
   //if theres an users logged
   logged : boolean = false;;
   //current logged user
   currentUser : User = null;
  
  local_data;
   constructor(  public dialogRef: MatDialogRef<ItemPageComponent>,
    @Inject(MAT_DIALOG_DATA) public recievedData: any) {
     
    
     }
 
    
  
  closeDialog(): void {
    this.dialogRef.close();
  }
}
