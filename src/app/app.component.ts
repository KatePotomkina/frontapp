import { Component } from '@angular/core';
import { OrderService } from './services/order.service';
import { Router } from '@angular/router';
import{CreatedOrder} from './models/createdOrder'
import { Order } from './models/order';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontapp';
  orders:Order[]=[];

  redirectToCreateOrder() {
    this.router.navigate(['/create-order']);
  }
constructor(private orderService:OrderService,private router: Router){}

  ngOnInit():void{
    this.orderService.getOrders().subscribe((result:Order[])=>(this.orders=result));
}
}
