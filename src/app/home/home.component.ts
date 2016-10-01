import { Component, OnInit } from '@angular/core'
import { AppContext } from '../app.context'

@Component({
  selector: 'my-home',
  template: '<h1>Home</h1>'
})
export class HomeComponent implements OnInit {
  constructor(private context: AppContext) {
  }

  ngOnInit(): void {
    this.context.title = 'Home'
  }
}
