import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';


import { MaterialModule } from './material.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/* import { MatIconModule } from '@angular/material/icon'; */
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { SearchComponent } from './search/search.component';
import { EntertainmentComponent } from './search/entertainment/entertainment.component';
import { StayComponent } from './search/stay/stay.component';
import { HotelsComponent } from './search/stay/hotels/hotels.component';
import { ApartmentsComponent } from './search/stay/apartments/apartments.component';
import { CabinsComponent } from './search/stay/cabins/cabins.component';
import { HostelsComponent } from './search/stay/hostels/hostels.component';
import { ResortsComponent } from './search/stay/resorts/resorts.component';
import { VillasComponent } from './search/stay/villas/villas.component';
import { FooterComponent } from './footer/footer.component';
import { PostsService } from './search/post.servise';
import { StarRatingModule } from 'angular-rating-star';
import { MaterialElevationDirective } from './material-elevation.directive';
import { CasinosComponent } from './search/entertainment/casinos/casinos.component';
import { ParksComponent } from './search/entertainment/parks/parks.component';
import { PubsComponent } from './search/entertainment/pubs/pubs.component';
import { RestaurantsComponent } from './search/entertainment/restaurants/restaurants.component';
import { ZoosComponent } from './search/entertainment/zoos/zoos.component';
import { CoffeeShopsComponent } from './search/entertainment/coffee-shops/coffee-shops.component';
import { CustomSearchComponent } from './search/custom-search/custom-search.component';
import { ItemPageComponent } from './search/item-page/item-page.component';
import { UserServiceModule } from './auth/user-service.module';
import { FavoritesComponent } from './user/favorites/favorites.component';
import { BookItemComponent } from './search/book-item/book-item.component';
import { BookingsComponent } from './user/bookings/bookings.component';
import { SettingsComponent } from './user/settings/settings.component';
import { GeneralSettingsComponent } from './user/settings/general-settings/general-settings.component';
import { EmailSettingsComponent } from './user/settings/email-settings/email-settings.component';
import { ChangePasswordSettingsComponent } from './user/settings/change-password-settings/change-password-settings.component';
import { CloseAccountSettingsComponent } from './user/settings/close-account-settings/close-account-settings.component';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';
import { RecommendedComponent } from './search/recommended/recommended.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabase, AngularFireDatabaseModule } from '@angular/fire/database';
import { environment} from '../environments/environment';
import { PostServiceService } from './search/post-service.service';
import {AngularFireAuthModule} from '@angular/fire/auth'
import { AuthService } from './auth/auth.service';
import { AddPlaceComponent } from './add-place/add-place.component';
@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    SearchComponent,
    EntertainmentComponent,
    StayComponent,
    HotelsComponent,
    ApartmentsComponent,
    CabinsComponent,
    HostelsComponent,
    ResortsComponent,
    VillasComponent,
    FooterComponent,
    CasinosComponent,
    ParksComponent,
    PubsComponent,
    RestaurantsComponent,
    ZoosComponent,
    CoffeeShopsComponent,
    MaterialElevationDirective,
    CustomSearchComponent,
    ItemPageComponent,
    FavoritesComponent,
    BookItemComponent,
    BookingsComponent,
    SettingsComponent,
    GeneralSettingsComponent,
    EmailSettingsComponent,
    ChangePasswordSettingsComponent,
    CloseAccountSettingsComponent,
    RecommendedComponent,
    AddPlaceComponent



   
   
  
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    FormsModule,
    StarRatingModule,
    ReactiveFormsModule,
    AngularMultiSelectModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    ReactiveFormsModule
    
    
  ],
  providers: [PostsService, UserServiceModule, PostServiceService,AuthService],
  bootstrap: [AppComponent],
  entryComponents: [BookItemComponent]
})
export class AppModule { }

