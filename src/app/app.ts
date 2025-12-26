import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';

// Component decorator
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header],
  template: `
    <app-header />
    <main>
    </main>
    <router-outlet />
  `,
  styles: [
    `
    main {
      padding-inline: 16px;
    }`
  ],
})
export class App {
  protected readonly title = signal('first-ng-app');
}
