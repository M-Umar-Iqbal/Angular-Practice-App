import { Component, signal } from '@angular/core';
import { Greeting } from '../components/greeting/greeting';
import { Counter } from '../components/counter/counter';

@Component({
  selector: 'app-home',
  imports: [Greeting, Counter],
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


