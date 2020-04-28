import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent {
  public items: any[]

  constructor(private http: HttpClient) {
    this.http.get('https://angular-smelly-code.stackblitz.io:3000/products/index/1')
      .subscribe((res: any) => {
        this.items = res
      })
  }
  
  name = 'Angular';
}
