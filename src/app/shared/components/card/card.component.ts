import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: false,
  
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

  
  @Input()
  title: string | null = null;

  @Input()
  content: string | null = null;

  @Output()
  massageEvent = new EventEmitter<string>();

  showmassage(): void{
    alert(this.title);
  }

  sendOutputMassage(): void{
    this.massageEvent.emit(`${this.title}: this is my internal massage`)
  }
}
