const users = [
  { name: "An", age: 25 },
  { name: "Bình", age: 17 },
  { name: "Chi", age: 30 },
  { name: "Dũng", age: 20 }
];

const finalSortedNames = users
  .filter(user => user.age >= 18)        // Lọc
  .sort((a, b) => a.age - b.age)         // Sắp xếp
  .map(user => user.name);              // Lấy tên

console.log("Kết quả (Tối ưu):", finalSortedNames);
// Kết quả: [ "Dũng", "An", "Chi" ]