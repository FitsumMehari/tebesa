import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "@nativescript/angular";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { SignUpComponent } from "./signup/sign-up.component";
import { SignUpOneComponent } from "./signup-one/sign-up-one.component";
import { SignUpTwoComponent } from "./signup-two/sign-up-two.component";
import { SignUpThreeComponent } from "./signup-three/sign-up-three.component";
import { RadioButtonModule } from "nativescript-radiobutton/angular";

@NgModule({
  bootstrap: [AppComponent],
  imports: [NativeScriptModule, AppRoutingModule, RadioButtonModule],
  declarations: [
    AppComponent,
    SignUpComponent,
    SignUpOneComponent,
    SignUpTwoComponent,
    SignUpThreeComponent
  ],
  providers: [],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}
