import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "@nativescript/angular";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { SignUpComponent } from "./signup/sign-up.component";
import { SignUpOneComponent } from "./signup-one/sign-up-one.component";
import { SignUpTwoComponent } from "./signup-two/sign-up-two.component";
import { SignUpThreeComponent } from "./signup-three/sign-up-three.component";
import { SignUpFourComponent } from "./signup-four/sign-up-four.component";
import { SignUpFiveComponent } from "./signup-five/sign-up-five.component";
import { SignUpSixComponent } from "./signup-six/sign-up-six.component";
import {TermsOfUseComponent} from "./terms-of-use/terms-of-use.component";

@NgModule({
  bootstrap: [AppComponent],
  imports: [NativeScriptModule, AppRoutingModule],
  declarations: [
    AppComponent,
    SignUpComponent,
    SignUpOneComponent,
    SignUpTwoComponent,
    SignUpThreeComponent,
    SignUpFourComponent,
    SignUpFiveComponent,
    SignUpSixComponent,
    TermsOfUseComponent,
  ],
  providers: [],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}
