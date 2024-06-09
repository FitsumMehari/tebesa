import { Component } from "@angular/core";
import { Location } from '@angular/common';
import { Router } from "@angular/router";

@Component({
  selector: "app-terms-of-use",
  templateUrl: "./terms-of-use.component.html",
  styleUrls: ["./terms-of-use.component.css"],
})
export class TermsOfUseComponent {
  constructor(private router: Router, private location: Location) {}

  email = "";
  password = "";
  date = "";
  minDate = "";
  maxDate = "";



  onEmailSignUp() {
    // Handle email sign up logic
    alert("Email Sign Up clicked!");
  }

  onBack() {
    // Handle phone number sign up logic
    this.location.back();
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
