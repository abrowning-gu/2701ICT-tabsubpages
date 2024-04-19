import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar,IonButtons,IonBackButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-subpage2',
  templateUrl: './subpage2.page.html',
  styleUrls: ['./subpage2.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar,IonButtons,IonBackButton, CommonModule, FormsModule]
})
export class Subpage2Page implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
