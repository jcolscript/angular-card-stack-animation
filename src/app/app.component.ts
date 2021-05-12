import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  @ViewChild('stack', { static: true })
  stack!: ElementRef;
  public advantages = [1, 2, 3, 4];
  public cardSelected = 1;

  ngAfterViewInit() {
    [...this.stack.nativeElement.children]
      .reverse()
      .forEach((i) => this.stack.nativeElement.append(i));
  }

  next() {
    let card = this.stack.nativeElement.children[this.advantages.length - 1];
    card.style.animation = 'changeExit 700ms forwards';

    setTimeout(() => {
      card.style.animation = '';
      this.stack.nativeElement.prepend(card);
    }, 700);
  }

  prev() {
    let card = this.stack.nativeElement.children[0];
    card.style.animation = 'changeEntry 700ms forwards';

    setTimeout(() => {
      card.style.animation = '';
      this.stack.nativeElement.append(card);
    }, 800);
  }

  selectCard(index: number) {
    this.cardSelected = index;
    let card = this.stack.nativeElement.querySelector(`.pos${index}`);
    card.style.animation = 'changeEntry 700ms forwards';

    setTimeout(() => {
      card.style.animation = '';
      this.stack.nativeElement.append(card);
    }, 800);
  }
}
