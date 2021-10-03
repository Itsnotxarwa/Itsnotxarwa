import { Component, OnInit, Input } from '@angular/core';
import { supplier } from 'src/app/shared/supplier.model';
import { suppliersService } from '../../suppliers.service';

@Component({
  selector: 'app-suppliers-item',
  templateUrl: './suppliers-item.component.html',
  styleUrls: ['./suppliers-item.component.css']
})
export class SuppliersItemComponent implements OnInit {
@Input() supplier: supplier;
 
  constructor(private suppliersService: suppliersService) { }

  ngOnInit(): void {
  }
onDisplay(){
 this.suppliersService.detailsDisplayed.emit(this.supplier);
}
}
