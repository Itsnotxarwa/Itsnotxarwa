import { businessInfo } from './businessInfo.model';

export class supplier  {

   public id: string;
   public email: string;
   public fullName: string;
    
   public isActivated: boolean;
   public isVerified: boolean;
    
   public businessInformations: businessInfo; 

   public  usedCategories: Array<string>;

   public avatar?: string;
   public coverPicture?: string;
   public updatedAt?: string;

constructor(
    id: string,
    email: string,
    fullName: string,
    
    isActivated: boolean,
    isVerified: boolean,
    
    businessInformations: businessInfo,

    usedCategories: Array<string>,

     avatar?: string,
     coverPicture?: string,
     updatedAt?: string

    )
    {
    this.id = id,
    this.email = email,
    this.fullName = fullName,
    
    this.isActivated = isActivated,
    this.isVerified = isVerified,
    
    this.businessInformations = businessInformations, 
 
    this.usedCategories = usedCategories,

    this.avatar = avatar,
     this.coverPicture = coverPicture,
     this.updatedAt = updatedAt

    }

}