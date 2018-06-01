import { Component } from '@angular/core';
import { AngularFireModule} from 'angularfire2';
import { AngularFireDatabaseModule} from 'angularfire2/database';
import { FirebaseService } from './services/firebase.services';
import { AngularFireDatabase,FirebaseListObservable} from 'angularfire2/database';
import { AngularFireAuth} from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import { OnInit } from '@angular/core';
//import {Persons} from './sample';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [FirebaseService]
})
export class AppComponent implements OnInit {
  //foodapps: Foodapp[]; 
  //categories: Category[];
  profiles: Profiles[];
  appState: string;
  loaded: boolean;
  activeKey: string;
  triggered: number;
  test: string;
  Profile=[];

  constructor(private _firebaseService: FirebaseService) {
   this.triggered=0;

   this.test=Persons[1].name;
   this.Profile=Persons;
   this.loaded=false;
  }

  incrementLike(id){
   ++this.Profile[id].likes;
  }

  ngOnInit() {
    this.appState='default';
    
    
    this._firebaseService.getProfiles().subscribe(profiles => {
 
      this.profiles = profiles;
      if(!((profiles === undefined)||(profiles===null)))
       {this.Profile = profiles;}
      
      this.loaded=true;
        
    });

    //let profileRendering=new singleProfile;
    //document.getElementById('droppings').innerHTML=profileRendering.render();
  }
/*filterCategory(category) {
  this._firebaseService.getFoodApps(category).subscribe(foodapp=> {
    this.foodapps = foodapp;
  });*/
  /* unnecessary
  var filtered=[],e=this.foodapps;
  //alert(category);
  e.map(function(x){if(x.category==category){filtered.push(x)}});
  //alert(JSON.stringify(filtered));
  this.foodapps=JSON.parse(JSON.stringify(e));
  ++this.triggered;
  */
}
  

  /*addFood(name: string, category: string, vitamin: string) {
   var newFood = {
     name: name,
     category: category,
     vitamin: vitamin
   }
   this._firebaseService.addFood(newFood);
   this.changeState('default');
  }
}*/
interface Profiles {
 $key?: string;
 name: string; 
 surname: string;
 age: number;
 gender: string;
 inRelation: string;
 likes: number; 
}


export class singleProfile {


render(){//var Persons = require('./json/sample.json');
         var code=[];
         Persons.map(function(x){let relation= x.inRelation ? "yes" : "no";
                                 let id=code.length;
                                 
                                 let mask=`<div class='col-lg-6 col-md-12 col-sm-12'>
                                          <div style="margin: 5%;padding: 5%;background-color:plum;border-radius:9%;display:flex;flex-direction:row;">  
                                          <img width="150" height="150" src="${x.image}"/>
                                          <div style="display: inline;margin: 2em;">  
                                          <p>Name: <strong>${x.name}</strong>
                                          <p>Surame: <strong>${x.surname}</strong>
                                          <p> Age: <strong>${x.age}</strong></p>
                                          <p> in Relation: ${relation}</p> 
                                          <button class="like" onclick="incrementLike(${id});">Like</button>&nbsp;${x.likes}<span color="red"> &hearts;</span> 
                                          </div>
                                          </div>
                                          </div>
                                          `;

                                  code.push(mask);
                                });
         return code.join('');
        }
                         

}

 
 
var Persons= [
                       {
      name: 'John',
      surname: 'Doe',
      age: 25,
         image: "../assets/boy1.jpg",  
      likes: 0,    // numeric property used to store likes
      inRelation: false,
      gender: 'male' // proper values male, female not ,specifie
                        },
      {
      name: 'Ann',
      surname: 'Dough',
      age: 26,
         image: "../assets/girl1.jpg",    
      likes: 4,    // numeric property used to store likes
      inRelation: false,
      gender: 'female'
                        },
      {
      name: 'Mary',
      surname: 'Jane',
      age: 24,
         image: "../assets/girl2.jpg",  
      inRelation: false,
      likes: 3,    // numeric property used to store likes
      gender: 'female'
      },
      {
      name: 'Sam',
      surname: 'May',
      age: 23,
         image: "../assets/boy2.jpg",  
      inRelation: false,
      likes: 2,    // numeric property used to store likes
                        gender: 'male'   
      },
                        {
      name: 'Elena',
      surname: 'May',
      age: 23,
         image: "../assets/girl3.jpg",  
      inRelation: false,
      likes: 2,    // numeric property used to store likes
                        gender: 'female'   
      },  
                        {
      name: 'Kate',
      surname: 'Winslet',
      age: 25,
         image: "../assets/girl4.jpg",  
      inRelation: false,
      likes: 4,    // numeric property used to store likes
                        gender: 'female'   
      },
                        {
      name: 'Emma',
      surname: 'Winehouse',
      age: 24,
         image: "../assets/girl5.jpg",  
      inRelation: false,
      likes: 2,    // numeric property used to store likes
                        gender: 'female'   
      },
                        {
      name: 'Sylvia',
      surname: 'Cunnings',
      age: 21,
         image: "../assets/girl6.jpg",  
      inRelation: false,
      likes: 2,    // numeric property used to store likes
                        gender: 'female'   
      },
                        {
      name: 'Brad',
      surname: 'Oldon',
      age: 54,
         image: "../assets/oldm.jpg",  
      inRelation: false,
      likes: 0,    // numeric property used to store likes
                        gender: 'male'   
      },
                        {
      name: 'Harry',
      surname: 'Apeton',
      age: 46,
         image: "../assets/glassmale.jpg",  
      inRelation: false,
      likes: 0,    // numeric property used to store likes
                        gender: 'male'   
      } 
];      

