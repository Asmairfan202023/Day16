// Q48: Combining Arrays with spread operator: Suppose you are comparing prices of two different sets of laptops. use the spread operator to combine these arrays into single array stored in ascending order, then log the result.
let priceArr1: number[] = [10000, 50000,70000];
let priceArr2:number[] = [35000, 45000, 55000];
let combinePrice:number[] = [...priceArr1,...priceArr2].sort(
 (a: number, b: number) => a-b
 );
 console.log(combinePrice);
