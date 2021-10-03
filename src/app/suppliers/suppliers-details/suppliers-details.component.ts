import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { supplier } from 'src/app/shared/supplier.model';
import { suppliersService } from '../suppliers.service';

@Component({
  selector: 'app-suppliers-details',
  templateUrl: './suppliers-details.component.html',
  styleUrls: ['./suppliers-details.component.css']
})
export class SuppliersDetailsComponent implements OnInit {
 @Input() supplier: supplier;
 id: number;
  constructor(private suppliersService: suppliersService,
              private route: ActivatedRoute) { }

  ngOnInit()  {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.supplier = this.suppliersService.getId(this.id);
      } 
    )
  }

}
