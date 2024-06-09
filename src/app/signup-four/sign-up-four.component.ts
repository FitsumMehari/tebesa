import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-sign-up-four",
  templateUrl: "./sign-up-four.component.html",
  styleUrls: ["./sign-up-four.component.css"],
})
export class SignUpFourComponent {
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
    this.router.navigate(["/signup-five"]);
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
