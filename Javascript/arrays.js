let arr = ["Mango", "Orange", "Apple"];
console.log(arr);

console.log(arr[1]);
console.log(arr[2]);

arr[0] = "Banana";
console.log(arr);
console.log(arr.length);
console.log(arr.indexOf("App"));
console.log(arr.includes("Orange"));
console.log(arr.slice(0, 2));

arr.push("Kiwi");
console.log(arr);

arr.pop();
console.log(arr);

arr.unshift("Kiwi");
console.log(arr);

arr.shift();
console.log(arr);

for (let a of arr) {
    console.log(a);
}

console.log(arr.reverse());