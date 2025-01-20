import { Component, OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'belajar_angular_basic';

  dumydata = {
    title: "MyFirst Blog in the world",
    content: "this is my first blog in the earth planet"
  }

  internalMassage: string = "this is my internal massage on app.component"

  ngOnInit(): void {
    initFlowbite();
  }

  receiveMassage($massage: string): void {
    this.internalMassage = $massage;
  }
}
