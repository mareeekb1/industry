export interface Orders{
    orders:{
        id:number,
        date_of_order: string,
        sum_of_order:number,
        number_of_products: number
    }[]
}
export interface Customers{
    customers:{
        id:number,
        name:string,
        birth_date:string,
        is_vip:boolean,
        orders:Orders["orders"]
    }[]
}
export interface Customer{
    id:number,
    name:string,
    birth_date:string,
    is_vip:boolean,
    orders:Orders["orders"] | []
}
export interface Product{
    name:string,
    cost:number,
}