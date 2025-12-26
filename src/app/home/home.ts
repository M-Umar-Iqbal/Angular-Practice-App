import { Component, signal } from '@angular/core';
import { Greeting } from '../components/greeting/greeting';

@Component({
  selector: 'app-home',
  imports: [Greeting],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  messageTitleFromHome = signal("Message Title From Home");
  keyUpHandler(event: KeyboardEvent) {
    console.log("Key up event triggered");
    console.log("Key pressed:", event.key);
  }
}


