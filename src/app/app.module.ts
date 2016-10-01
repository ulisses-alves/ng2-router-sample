import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { HttpModule } from '@angular/http'
import { routing, appRoutingProviders } from './app.routing'
import { AppContext } from './app.context'
import { AppComponent } from './app.component'
import { HeaderComponent } from './header/header.component'
import { HomeComponent } from './home/home.component'

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    routing
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent
  ],
  providers: [
    appRoutingProviders,
    AppContext
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
