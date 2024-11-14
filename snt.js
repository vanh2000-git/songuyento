let numbers = parseInt(prompt("Nhập số lượng số nguyên tố cần in ra:"));

// Bước 2: Khai báo biến count và gán cho nó giá trị 0
let count = 0;

// Bước 3: Khai báo biến N và gán cho giá trị 2
let N = 2;

// Hàm kiểm tra số nguyên tố
function isPrime(num) {
    if (num < 2) return false; // Các số nhỏ hơn 2 không phải là số nguyên tố
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false; // Nếu num chia hết cho i, không phải là số nguyên tố
    }
    return true;
}

// Bước 4: Trong khi count < numbers thì:
while (count < numbers) {
    if (isPrime(N)) {
        console.log(N); // In ra số nguyên tố
        count++; // Tăng count lên 1
    }
    N++; // Tăng N lên 1 để kiểm tra số tiếp theo
}