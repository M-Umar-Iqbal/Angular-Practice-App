import { Component, signal } from '@angular/core';
import { Tab1 } from '../tab1/tab1';
import { Tab2 } from '../tab2/tab2';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tabs-master',
  imports: [Tab1, Tab2, CommonModule],
  templateUrl: './tabs-master.html',
  styleUrl: './tabs-master.scss',
})
export class TabsMaster {
  currentTab = signal("tab1");

  setCurrentTab(tab: string): void {
    this.currentTab.set(tab);
  }
}
