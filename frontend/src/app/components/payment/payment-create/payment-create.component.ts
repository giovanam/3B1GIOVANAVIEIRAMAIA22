import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { PaymentService } from "../payment.service";
import { Payment } from "../payment.model";

@Component({
  selector: "app-payment-create",
  templateUrl: "./payment-create.component.html",
  styleUrls: ["./payment-create.component.css"],
})
export class PaymentCreateComponent implements OnInit {
  payment: Payment = {
    nome: "",
    preco: "",
    marca: "",
    codigo: "",
  };

  constructor(private paymentService: PaymentService, private router: Router) {}

  ngOnInit(): void {}

  createPayment(): void {
    this.paymentService.create(this.payment).subscribe(() => {
      this.paymentService.showMessage("Produtos cadastrado!");
      this.router.navigate(["/produtos"]);
    });
  }

  cancel(): void {
    this.router.navigate(["/produtos"]);
  }
}
