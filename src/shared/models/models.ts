 export interface ProductItem {
    _id : string ;
    title: string;
    desc: string;
    imageUrl: string;
    price: number;
    category:string;
    quantity: number;
    added?:boolean;
 }

 export interface ListOptionsItem {
     id: string;
     label: string;
     filterOption: string;
 }
 export interface ListOptions {
     listItems: ListOptionsItem[];
 }
