import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent,IonButton } from '@ionic/angular/standalone';
import { RouterLink,Router} from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [ IonHeader, IonToolbar, IonTitle, IonContent,IonButton,RouterLink],
})
export class Tab1Page {
  constructor(private route:Router) {}

  subpage(){
    this.route.navigateByUrl('/tabs/tab1/subpage');
  }
  subpage2(){
    this.route.navigateByUrl('/tabs/tab1/subpage2');
  }
}
