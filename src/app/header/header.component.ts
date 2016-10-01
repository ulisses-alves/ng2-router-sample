import { Component, OnInit } from '@angular/core'
import { AppContext } from '../app.context'

@Component({
  selector: 'my-header',
  templateUrl: 'app/header/header.component.html',
  styleUrls: [ 'app/header/header.component.css' ]
})
export class HeaderComponent implements OnInit {
  // TODO: use observable instead of exposing the whole context object
  constructor(public context: AppContext) {}

  ngOnInit(): void {
  }
}
