import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { IonicModule } from "@ionic/angular";
import { ExploreContainerComponentModule } from "src/app/explore-container/explore-container.module";
import { TmsRoutingModule } from "./tms-routing.module";
import { TrackingComponent } from "./tracking/tracking.component";

@NgModule({
    imports: [
      IonicModule,
      CommonModule,
      FormsModule,
      ExploreContainerComponentModule,
      FontAwesomeModule,
      TmsRoutingModule
    ],
    declarations: [TrackingComponent]
  })
  export class TmsModule {}