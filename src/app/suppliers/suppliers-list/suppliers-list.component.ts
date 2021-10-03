 
import { Component, OnInit } from '@angular/core';
import { supplier } from 'src/app/shared/supplier.model';
import { suppliersService } from 'src/app/suppliers/suppliers.service';

@Component({
  selector: 'app-suppliers-list',
  templateUrl: './suppliers-list.component.html',
  styleUrls: ['./suppliers-list.component.css'],
  providers:[suppliersService]
})
export class SuppliersListComponent implements OnInit { 
  suppliers: supplier[];
 

  constructor(private suppliersService: suppliersService) { } 

  ngOnInit()  {
    this.suppliers = this.suppliersService.getSuppliers();
  }

 
}