import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-welcome",
  templateUrl: "./welcome.page.html",
  styleUrls: ["./welcome.page.scss"],
})
export class WelcomePage implements OnInit {
  show = true;

  constructor(private router: Router) {
    setTimeout(() => {
      this.show = false;
      this.router.navigate(["home/dashboard"]);
    }, 2000);
  }

  ngOnInit() {}
}
