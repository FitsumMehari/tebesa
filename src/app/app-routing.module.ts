import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "@nativescript/angular";

import { SignUpComponent } from "./signup/sign-up.component";
import { SignUpOneComponent } from "./signup-one/sign-up-one.component";
import { SignUpTwoComponent } from "./signup-two/sign-up-two.component";
import {SignUpThreeComponent } from "./signup-three/sign-up-three.component"

const routes: Routes = [
  { path: "", redirectTo: "/signup-three", pathMatch: "full" },
  { path: "signup", component: SignUpComponent },
  { path: "signup-one", component: SignUpOneComponent },
  { path: "signup-two", component: SignUpTwoComponent },
  { path: "signup-three", component: SignUpThreeComponent },
];

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule],
})
export class AppRoutingModule {}
