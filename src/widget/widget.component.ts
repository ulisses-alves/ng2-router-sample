import { Component, OnInit } from '@angular/core'
import { AppContext } from '../app/app.context'

@Component({
  selector: 'my-widget',
  templateUrl: 'widget/widget.component.html',
  styleUrls: [ 'widget/widget.component.css' ]
})
export class WidgetComponent implements OnInit {
  constructor(private context: AppContext) {}

  ngOnInit(): void {
    this.context.title = 'Widget'
  }
}
