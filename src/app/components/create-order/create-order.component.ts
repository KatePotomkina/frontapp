import { Component,OnInit  } from '@angular/core';
import { Router } from '@angular/router';
import { CreatedOrder } from 'src/app/models/createdOrder';
import { OrderService } from 'src/app/services/order.service';
import { DatePipe } from '@angular/common';



@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.css'],
  providers: [DatePipe],

})
export class CreateOrderComponent implements OnInit  {
  
  createOrderRequest:CreatedOrder={
    createdAt: '',
    totalCost: 0,
    comment: '',
    currentStatus: '',
    customerId: 0
  };
  constructor(private orderService:OrderService, private router:Router){}


ngOnInit(): void {}
  addOrder(): void {
  
    this.orderService.addOrder(this.createOrderRequest).subscribe({
      next: (createdOrder) => {
  this.router.navigate(['orders']) ; },
  
      error: (err) => {
        console.error(err.message); // <-- Add the 'message' property
      }
    });
}
cancel(): void {
  this.router.navigate(['orders']);
}


}

