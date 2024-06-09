import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-sign-up-three",
  templateUrl: "./sign-up-three.component.html",
  styleUrls: ["./sign-up-three.component.css"],
})
export class SignUpThreeComponent {
  constructor(private router: Router) {}

  genders: Array <String> = ["male", "female"];

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
    this.router.navigate(["/signup-four"]);
  }

  onTermsOfUse() {
    // Handle terms of use link
    this.router.navigate(['terms-of-use']);
  }

  onPrivacyPolicy() {
    // Handle privacy policy link
    alert("Privacy Policy clicked!");
  }
}
