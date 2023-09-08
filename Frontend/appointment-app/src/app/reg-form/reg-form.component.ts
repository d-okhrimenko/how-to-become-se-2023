import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-reg-form',
  templateUrl: './reg-form.component.html',
  styleUrls: ['./reg-form.component.css']
})
export class RegFormComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  onClick(nameInput: string, emailInput: string, dateInput: string) {
    if (nameInput != "") {
      let data = new FormData();
      data.append("name", nameInput);
      data.append("email", emailInput);
      data.append("date", dateInput);

      this.http.post("/api/appointments", data)
        .subscribe({
          next: () => alert("success"),
          error: () => alert("fail")
        });
    }
    else {
      alert("Error");
    }
  }

}
