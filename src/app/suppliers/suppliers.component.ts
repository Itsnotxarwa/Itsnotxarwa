import { Component, OnInit } from '@angular/core';
import { supplier } from 'src/app/shared/supplier.model';
import { suppliersService } from './suppliers.service';


@Component({
  selector: 'app-suppliers',
  templateUrl: './suppliers.component.html',
  styleUrls: ['./suppliers.component.css'],
  providers: [suppliersService]
  
})
export class SuppliersComponent implements OnInit {
   displayDetails: supplier;
  
  
  constructor(private suppliersService: suppliersService) { }

  ngOnInit() {
   this.suppliersService.detailsDisplayed.subscribe(
     (supplier: supplier) => {
       this.displayDetails = supplier;
     }
   )
  }

}
