import { EventEmitter } from '@angular/core';
import { supplier } from 'src/app/shared/supplier.model';

export class suppliersService {
    public detailsDisplayed = new EventEmitter<supplier>();
    private suppliers:supplier[] = [
        {
            id: "60ac04d2683bf6255e76286e",
            email: "118056563772191",
            fullName: "Supplier 1",
            
            isActivated: true,
            isVerified: true,
            
            businessInformations: {
             businessType: "FOOD PRODUCTS",
             telephone: "00213699645619",
             mobilePhone: "/",
             address: "???? ?????",
             wilaya: "19",
             commune: "715"
            },
            
            usedCategories: [
            "PASTA",
            "NUTS"
            ],
  
            avatar: "public/uploaded_images/profile_pics/4f4de342-1362-4556-b935-2139889baaed.jpeg",
            coverPicture: "public/uploaded_images/profile_pics/b5a6b4fc-6cd3-46ed-8d81-dbb96a99517e.jpeg",
            updatedAt: "2021-08-21T17:35:42.529Z"
  },
     
        {
    
            id: "60ac1071683bf6255e762878",
            email: "109258534599999",
            fullName: "Supplier 2",
            
            
            isActivated: true,
            isVerified: false,
            
            businessInformations: {
                businessType: "PHONES AND ACCESSORIES",
                telephone: "01328",
                mobilePhone: "0875",
                address: "????",
                wilaya: "04",
                commune: "107"
            },
            
            usedCategories: [
            "PASTA",
            "NUTS"
            ]
            
        },
    
        {
            id: "60acc971683bf6255e762882",
            email: "475095120380012",
            fullName: "Supplier 3",
            
            isActivated: true,
            isVerified: true,
            
            businessInformations: {
                businessType: "FOOD PRODUCTS",
                telephone: "0783053194",
                mobilePhone: "0783053194",
                address: "?? ???? ???? ????? ?????? ????? ???? ",
                wilaya: "14",
                commune: "480"
            },
            
            usedCategories: [
            "CONFECTIONERY",
            "DRINKS"
            ]
               
        }
    ];

    getSuppliers(){
        return this.suppliers.slice();
    }

    getId(id: number){
        return this.suppliers[id];
    }
}