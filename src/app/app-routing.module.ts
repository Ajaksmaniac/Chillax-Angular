import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { SearchComponent } from './search/search.component';
import { HotelsComponent } from './search/stay/hotels/hotels.component';
import { ApartmentsComponent } from './search/stay/apartments/apartments.component';
import { CabinsComponent } from './search/stay/cabins/cabins.component';
import { HostelsComponent } from './search/stay/hostels/hostels.component';
import { ResortsComponent } from './search/stay/resorts/resorts.component';
import { VillasComponent } from './search/stay/villas/villas.component';
import { CasinosComponent } from './search/entertainment/casinos/casinos.component';
import { ParksComponent } from './search/entertainment/parks/parks.component';
import { PubsComponent } from './search/entertainment/pubs/pubs.component';
import { RestaurantsComponent } from './search/entertainment/restaurants/restaurants.component';
import { ZoosComponent } from './search/entertainment/zoos/zoos.component';
import { CoffeeShopsComponent } from './search/entertainment/coffee-shops/coffee-shops.component';
import { CustomSearchComponent } from './search/custom-search/custom-search.component';
import { ItemPageComponent } from './search/item-page/item-page.component';
import { FavoritesComponent } from './user/favorites/favorites.component';
import { BookItemComponent } from './search/book-item/book-item.component';
import { BookingsComponent } from './user/bookings/bookings.component';
import { SettingsComponent } from './user/settings/settings.component';
import { GeneralSettingsComponent } from './user/settings/general-settings/general-settings.component';
import { EmailSettingsComponent } from './user/settings/email-settings/email-settings.component';
import { ChangePasswordSettingsComponent } from './user/settings/change-password-settings/change-password-settings.component';
import { CloseAccountSettingsComponent } from './user/settings/close-account-settings/close-account-settings.component';
import { AddPlaceComponent } from './add-place/add-place.component';
const routes: Routes = [

  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'search', component: SearchComponent },
  { path: 'search/hotels', component: HotelsComponent },
  { path: 'search/apartments', component: ApartmentsComponent },
  { path: 'search/cabins', component: CabinsComponent },
  { path: 'search/hostels', component: HostelsComponent },
  { path: 'search/resorts', component: ResortsComponent },
  { path: 'search/villas', component: VillasComponent },
  { path: 'search/casinos', component: CasinosComponent },
  { path: 'search/parks', component: ParksComponent },
  { path: 'search/pubs', component: PubsComponent },
  { path: 'search/restaurants', component: RestaurantsComponent },
  { path: 'search/zoos', component: ZoosComponent },
  { path: 'search/coffee-shops', component: CoffeeShopsComponent },
  { path: 'search/:name', component: CustomSearchComponent },
  { path: 'search/page/:id', component: ItemPageComponent },
  { path: 'favorites', component: FavoritesComponent },
  { path: 'bookings', component: BookingsComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'add-place', component: AddPlaceComponent }
 



  
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
