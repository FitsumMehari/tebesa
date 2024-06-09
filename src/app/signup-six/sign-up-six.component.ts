import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-sign-up-six",
  templateUrl: "./sign-up-six.component.html",
  styleUrls: ["./sign-up-six.component.css"],
})
export class SignUpSixComponent {
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
    alert("Account created!")
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
