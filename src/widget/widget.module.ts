import { NgModule } from '@angular/core'
import { routing } from './widget.routing'
import { WidgetComponent } from './widget.component'

@NgModule({
  imports: [
    routing
  ],
  declarations: [
    WidgetComponent
  ],
})
export class WidgetModule {
}
