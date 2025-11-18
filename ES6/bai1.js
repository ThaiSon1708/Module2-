const cart = [
  { name: "Laptop", price: 15000000, quantity: 1 },
  { name: "Chuột", price: 300000, quantity: 2 },
  { name: "Bàn phím", price: 800000, quantity: 1 }
];

// Dùng reduce() để tính tổng trực tiếp
const optimizedGrandTotal = cart.reduce((total, item) => {
  // Cộng dồn: tổng cũ + (giá * số lượng của sản phẩm hiện tại)
  return total + (item.price * item.quantity);
}, 0); // Bắt đầu với tổng bằng 0

console.log("Tổng giá trị đơn hàng (Optimized):", optimizedGrandTotal);