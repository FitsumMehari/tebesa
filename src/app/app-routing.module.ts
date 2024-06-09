import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "@nativescript/angular";

import { SignUpComponent } from "./signup/sign-up.component";
import { SignUpOneComponent } from "./signup-one/sign-up-one.component";
import { SignUpTwoComponent } from "./signup-two/sign-up-two.component";
import { SignUpThreeComponent } from "./signup-three/sign-up-three.component";
import { SignUpFourComponent } from "./signup-four/sign-up-four.component";
import { SignUpFiveComponent } from "./signup-five/sign-up-five.component";
import { SignUpSixComponent } from "./signup-six/sign-up-six.component";
import { TermsOfUseComponent } from "./terms-of-use/terms-of-use.component";


const routes: Routes = [
  { path: "", redirectTo: "/signup-two", pathMatch: "full" },
  { path: "signup", component: SignUpComponent },
  { path: "signup-one", component: SignUpOneComponent },
  { path: "signup-two", component: SignUpTwoComponent },
  { path: "signup-three", component: SignUpThreeComponent },
  { path: "signup-four", component: SignUpFourComponent },
  { path: "signup-five", component: SignUpFiveComponent },
  {path: "signup-six", component: SignUpSixComponent},
  {path: "terms-of-use", component: TermsOfUseComponent},
];

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule],
})
export class AppRoutingModule {}
