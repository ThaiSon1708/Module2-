// ---- Phần 1: Setup mảng ----

const numbers = [3, 5, 7];

// 1. Dùng SPREAD (...) để "rải" các phần tử của 'numbers' vào mảng mới
const moreNumbers = [1, 2, ...numbers, 8, 9];

// Kết quả: moreNumbers = [1, 2, 3, 5, 7, 8, 9]
console.log("Mảng moreNumbers:", moreNumbers);


// ---- Phần 2: Destructuring ----

// 2. Dùng DESTRUCTURING.
// 'first' lấy phần tử đầu tiên (1)
// 'second' lấy phần tử thứ hai (2)
// '...others' dùng cú pháp REST để "gom" tất cả phần tử còn lại vào 1 mảng mới
const [first, second, ...others] = moreNumbers;

console.log("Phần tử first:", first);         // Kết quả: 1
console.log("Phần tử second:", second);       // Kết quả: 2
console.log("Phần tử others:", others);       // Kết quả: [3, 5, 7, 8, 9]


// ---- Phần 3: Hàm Sum ----

// 3. Dùng REST parameter '...args'
// '...args' sẽ "gom" tất cả các tham số truyền vào thành một mảng tên là 'args'
function sum(...args) {
  // Dùng reduce (từ Bài 1) để tính tổng mảng 'args'
  return args.reduce((total, current) => total + current, 0);
}


// ---- Phần 4: Gọi hàm ----

// 4. Gọi hàm sum với SPREAD operator
// ...moreNumbers sẽ "rải" mảng [1, 2, 3, 5, 7, 8, 9]
// thành các tham số riêng lẻ: sum(1, 2, 3, 5, 7, 8, 9)
const totalSum = sum(...moreNumbers);

console.log("Tổng (sum):", totalSum);        // Kết quả: 35