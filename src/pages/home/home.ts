import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TextToSpeech } from '@ionic-native/text-to-speech';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  textdata:string;
  constructor(public navCtrl: NavController, private tts :TextToSpeech) {

  }

 async sayHello():Promise<any>{
   try{
      this.tts.speak(this.textdata)
          .then(() => console.log('Success'))
          .catch((reason: any) => console.log(reason));
   }catch(e){
      
   }
     
  }

}
