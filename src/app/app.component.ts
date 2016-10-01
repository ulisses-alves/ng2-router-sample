import { Component } from '@angular/core'
import { Http } from '@angular/http'
import 'rxjs/add/operator/map'

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  styleUrls: [ 'app/app.component.css' ]
})
export class AppComponent {
  constructor(http: Http) {
    http.get('manifest.json')
      .map(res => res.json())
      .subscribe(data => {
        console.log(data)
      })
  }
}
