export interface IProduct {
    productId: number;
    productName: string;
    productCode: string;
    releaseDate: string;
    price: number;
    description: string;
    imageUrl: string;
  }

  export class product {
    constructor(
      public productId:number, 
      public productName : String,
      public added : boolean, 
      public productCode : String,
      public price : number, 
      public releaseDate : String, 
      public imageUrl : String,
       public description : String,
  ) {}
   }
   