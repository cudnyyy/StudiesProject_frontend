import { Component } from '@angular/core';
import { HttpService } from './http.service';
import { isUndefined } from 'util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private httpService: HttpService) { }

  title = 'myproject';

  myFixes: Fix[];
  getFixes() {
    this.httpService.getFixes().subscribe(fixes => {
      this.myFixes = fixes;
    });


  }

  myFix: Fix;
  getFix(add_id: number) {
    this.httpService.getFix(add_id).subscribe(fix => {
      this.myFix = fix;
    });

    if (add_id === undefined) {
      console.log("bad id");
    }
    else {
      document.getElementById('ashow').style.display = "block";
    }
  }

  addFix(fix_name: string, fix_date: Date, fix_price: number) {
    const f: Fix = ({
      id: null,
      thing: fix_name,
      stringDate: fix_date,
      price: fix_price
    })
    this.httpService.addFix(f).subscribe(fix => {
      console.log(fix);
    });
  }

  rmFix(rm_id: number) {
    this.httpService.rmFix(rm_id).subscribe(fix => {
      this.myFix = fix;
    });
  }

  ngOnInit() { }

}

export interface Fix {
  id?: number;
  thing?: string;
  stringDate?: Date;
  price?: number;
}
