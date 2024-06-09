import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-sign-up-three",
  templateUrl: "./sign-up-three.component.html",
  styleUrls: ["./sign-up-three.component.css"],
})
export class SignUpThreeComponent {
  constructor(private router: Router) {}

  email = "";
  password = "";
  date = "";
  minDate = "";
  maxDate = "";

  onEmailSignUp() {
    // Handle email sign up logic
    alert("Email Sign Up clicked!");
  }

  onContinue() {
    // Handle phone number sign up logic
    this.router.navigate(["/signup-two"]);
  }

  onTermsOfUse() {
    // Handle terms of use link
    alert("Terms of Use clicked!");
  }

  onPrivacyPolicy() {
    // Handle privacy policy link
    alert("Privacy Policy clicked!");
  }
}
