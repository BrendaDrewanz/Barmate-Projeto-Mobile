import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-devs',
  templateUrl: './devs.page.html',
  styleUrls: ['./devs.page.scss'],
})
export class DevsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  isFlipped: boolean[] = [false, false, false];

  flipCard(index: number) {
    this.isFlipped[index] = !this.isFlipped[index];
  }

}
