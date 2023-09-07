import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { IonicModule } from "@ionic/angular";
import { HomeComponent } from "./home.component";
import { HomeRoutingModule } from "./home-routing.module";

@NgModule({
    imports: [
      IonicModule,
      CommonModule,
      FormsModule,
      HomeRoutingModule,
      FontAwesomeModule,
    ],
    declarations: [HomeComponent],
    exports:[HomeComponent]
  })
  export class HomeModule {}