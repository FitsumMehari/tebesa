import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-sign-up-five",
  templateUrl: "./sign-up-five.component.html",
  styleUrls: ["./sign-up-five.component.css"],
})
export class SignUpFiveComponent {
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
    this.router.navigate(["/signup-six"]);
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
