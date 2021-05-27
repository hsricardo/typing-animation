import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-typing',
  templateUrl: './typing.component.html',
  styleUrls: ['./typing.component.scss']
})
export class TypingComponent implements OnInit {
  @Input() text: string[] = [];
  @Input() delay: number = 0;

  display: string = '';

  constructor() { }

  ngOnInit(): void {
    this.display = '';

    let word = 0;
    let char: string[] = this.text[word].split('');
    let count = 0;
    let complete = false;

    const write = setInterval(() => {
      if (complete === false) {
        if (count < char.length + this.delay) {
          if (char[count]) {
            this.display = this.display + char[count];
          }
          count++;
        }
        else {
          complete = true;
          count = char.length;
        }
      }
      if (complete === true) {
        if (count > 0) {
          this.display = this.display.slice(0, -1);
          count--;
        }
        else {
          complete = false;
          word = word < this.text.length - 1 ? word + 1 : 0;
          char = this.text[word].split('');
        }
      }
    }, 150);
  }
}