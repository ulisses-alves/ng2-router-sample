import { RouterModule, ModuleWidthProviders } from '@angular/router'
import { WidgetComponent } from './widget.component'

export const routing: ModuleWithProviders = RouterModule.forChild([
  { path: '', component: WidgetComponent }
]);
