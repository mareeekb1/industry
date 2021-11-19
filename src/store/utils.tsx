export function dotDateFormat(date: string): string {
    let array = date.split("-");
    return `${array[2]}.${array[1]}.${array[0]}`;
}
export function resolveSum(input: number | null): string {
    if (input) return input + " eur";
    return "";
}
