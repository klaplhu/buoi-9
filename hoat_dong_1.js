/**
 * HOẠT ĐỘNG 1: "THE COUNTING MACHINE" - MÁY ĐẾM TỰ ĐỘNG
 * Môn: Thiết kế Web
 */

console.log("=== 1. IN RA DÃY SỐ TỪ 1 ĐẾN 100 ===");
for (let i = 1; i <= 100; i++) {
  console.log(i);
}

console.log("\n=== 2. TÙY CHỈNH CHỈ IN RA CÁC SỐ CHẴN (CÁCH 1: BƯỚC NHẢY i += 2) ===");
// Bắt đầu từ 2, mỗi lần lặp tăng 2 đơn vị
for (let i = 2; i <= 100; i += 2) {
  console.log(i);
}

console.log("\n=== 2. TÙY CHỈNH CHỈ IN RA CÁC SỐ CHẴN (CÁCH 2: DÙNG ĐIỀU KIỆN IF) ===");
for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

/*
================================================================================
VIBE CODING: GIẢI THÍCH 3 THÀNH PHẦN TRONG NGOẶC ĐƠN CỦA VÒNG LẶP FOR
Cú pháp: for (khởi tạo; điều kiện; bước nhảy)
--------------------------------------------------------------------------------
1. Khởi tạo (let i = 1):
   - Được chạy DUY NHẤT 1 LẦN khi vòng lặp vừa bắt đầu.
   - Thường dùng để khai báo biến đếm và gán giá trị xuất phát (ví dụ i = 1 hoặc i = 2).

2. Điều kiện (i <= 100):
   - Được kiểm tra TRƯỚC MỖI VÒNG LẶP.
   - Nếu điều kiện trả về true, khối code trong { } sẽ được thực thi.
   - Nếu điều kiện trả về false, vòng lặp sẽ dừng ngay lập tức.

3. Bước nhảy (i++ hoặc i += 2):
   - Được thực hiện SAU KHI khối code trong { } đã chạy xong của mỗi lượt lặp.
   - Dùng để tăng/giảm giá trị của biến đếm, giúp vòng lặp tiến tới điểm dừng
     (tránh rơi vào vòng lặp vô tận).
================================================================================
*/
