import { Orders } from "./interfaces";

export function getSumOfOrders(orders: Orders["orders"]): string {
    if (orders.length === 0) return "no orders";
    let result = 0;
    for (const { sum_of_order } of orders) {
        result += sum_of_order;
    }
    return result + " eur";
}

export function dotDateFormat(date: string): string {
    let array = date.split("-");
    return `${array[2]}.${array[1]}.${array[0]}`;
}
