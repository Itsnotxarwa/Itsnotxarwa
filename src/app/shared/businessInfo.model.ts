export class businessInfo {
    public businessType: string;
    public telephone: string;
    public mobilePhone: string;
    public address: string;
    public wilaya: string;
    public commune: string;
    constructor
    (businessType: string, telephone: string, mobilePhone: string, address: string, wilaya: string, commune: string)
    {
        this.businessType = businessType;
        this.telephone = telephone;
        this.mobilePhone = mobilePhone;
        this.address = address;
        this.wilaya = wilaya;
        this.commune = commune;
    }
}