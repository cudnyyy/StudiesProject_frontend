import { Component } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private httpService: HttpService) {}

  title = 'myproject';

  myFixes: Fix[];
  getFixes() {
    this.httpService.getFixes().subscribe(fixes => {
      this.myFixes = fixes;
    });

    
  }

  getFix(id: number) {
    this.httpService.getFix(0).subscribe(fix => {
      console.log(fix);
    });
  }

  addFix() {
    const f: Fix = ({
      id: null,
      thing: "string",
      stringDate: "string",
      price: 12
    })
    this.httpService.addFix(f).subscribe(fix => {
      console.log(fix);
    });
  }

  rmFix() {
    
  }

  ngOnInit() {}

}

export interface Fix {
  id?: number;
  thing?: string;
  stringDate?: string;
  price?: number;
}
