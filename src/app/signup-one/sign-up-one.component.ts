import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-sign-up-one",
  templateUrl: "./sign-up-one.component.html",
  styleUrls: ["./sign-up-one.component.css"],
})
export class SignUpOneComponent {

  constructor(private router: Router) {}

  email = ""
  password =""
  onEmailSignUp() {
    // Handle email sign up logic
    alert("Email Sign Up clicked!");
  }

  onContinue() {
    // Handle phone number sign up logic
    this.router.navigate(["/signup-two"])
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
