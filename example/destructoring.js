// Destructuring object
const inFor = {
    name : 'Viet Anh',
    age : 19,
    address : {
        street:'Thanh Tri- Ha Noi',
        number : 30,

    }
}

const{
    name : myName ,
    age,
    address

} = inFor
console.log(myName)
// Destructuring function
function myInfor ({name,age,address:{street}}){
    console.log(name,age,street)
}
myInfor(inFor);

// Destructuring Array
const arr = [1,2,4,6]

const [x,y,z] = arr;
console.log(x);
// Copy mang
const products = ["Product A", "Product B"];
// products.push("Product C");
const newProducts = [...products, "Product C"];
console.log("products", products);
console.log("new products", newProducts);

// rest parameter -> Chuyển đổi tham số -> 1 mảng

function total(...numbers) {
    console.log(numbers);
    for (let i = 0; i < numbers.length; i++) {
        console.log(numbers[i]);
    }
}
total(1, 2, 3, 4, 5);

