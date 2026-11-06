import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ShopComponent } from './shop/shop';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ShopComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('sheet-angular-feature');
}
