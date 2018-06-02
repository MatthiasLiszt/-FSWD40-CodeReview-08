
import {Injectable} from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import 'rxjs/add/operator/map';
@Injectable()
export class FirebaseService{
  
  profiles: FirebaseListObservable<Profiles[]>;
  constructor(private af: AngularFireDatabase) {
    
  }

  getProfiles(){
    this.profiles=this.af.list('/profiles') as FirebaseListObservable<Profiles[]>;
    return this.profiles;

  }

  addProfile(newProfile) {
      return this.profiles.push(newProfile);
  }

/*
  getFoodApps(category: string = null) {
      if (category != null) {
          this.foodapp = this.af.list('/foodapp', {
              query: {
                  orderByChild: 'category',
                  equalTo: category
              }
          }) as FirebaseListObservable<Foodapp[]>;
      } else {
          this.foodapp= this.af.list('/foodapp') as FirebaseListObservable<Foodapp[]>;
      }
      return this.foodapp;
  }
*/

}



export interface Profiles {
 $key?: string;
 name: string; 
 surname: string;
 age: number;
 gender: string;
 image: string;
 inRelation: string;
 likes: number; 
}
