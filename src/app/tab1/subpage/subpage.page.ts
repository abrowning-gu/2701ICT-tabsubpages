import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar,IonButtons,IonButton,IonBackButton } from '@ionic/angular/standalone';
import { Router } from '@angular/router';

@Component({
  selector: 'app-subpage',
  templateUrl: './subpage.page.html',
  styleUrls: ['./subpage.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar,IonButtons,IonButton,IonBackButton, CommonModule, FormsModule]
})
export class SubpagePage implements OnInit {

  constructor(private route:Router) { }

  ngOnInit() {
  }
  subpage2(){
    this.route.navigateByUrl('/tabs/tab1/subpage2');
  }
}
