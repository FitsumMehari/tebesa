import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-sign-up",
  templateUrl: "./sign-up.component.html",
  styleUrls: ["./sign-up.component.css"],
})
export class SignUpComponent {

  constructor(private router: Router) {}
  onEmailSignUp() {
    // Handle email sign up logic
    // alert("Email Sign Up clicked!");
    this.router.navigate(['signup-one']);
  }

  onPhoneSignUp() {
    // Handle phone number sign up logic
    alert("Phone Sign Up clicked!");
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
