/**
 * HOẠT ĐỘNG 3: "REFACTORING CHALLENGE"
 * Môn: Thiết kế Web
 */

// ============================================================================
// 1. ĐOẠN CODE BAN ĐẦU KHI CHƯA REFACTOR (BỊ LẶP LẠI NHIỀU LẦN)
// ============================================================================
console.log("=== TRƯỚC KHI REFACTOR (CODE BỊ TRÙNG LẶP) ===");

// Tính thuế cho nhân viên 1: Lương 10 triệu
let luong1 = 10000000;
let thue1 = 0;
if (luong1 > 11000000) {
  thue1 = (luong1 - 11000000) * 0.1;
}
console.log("Thuế nhân viên 1:", thue1);

// Tính thuế cho nhân viên 2: Lương 15 triệu (Lặp lại logic code)
let luong2 = 15000000;
let thue2 = 0;
if (luong2 > 11000000) {
  thue2 = (luong2 - 11000000) * 0.1;
}
console.log("Thuế nhân viên 2:", thue2);

// Tính thuế cho nhân viên 3: Lương 30 triệu (Lại tiếp tục lặp code)
let luong3 = 30000000;
let thue3 = 0;
if (luong3 > 11000000) {
  thue3 = (luong3 - 11000000) * 0.1;
}
console.log("Thuế nhân viên 3:", thue3);


// ============================================================================
// 2. CODE SAU KHI DÙNG AI ĐỂ REFACTOR THÀNH HÀM CÓ THỂ TÁI SỬ DỤNG
// ============================================================================
console.log("\n=== SAU KHI REFACTOR (ĐÓNG GÓI THÀNH HÀM TÁI SỬ DỤNG) ===");

/**
 * Hàm tính thuế thu nhập cá nhân
 * @param {number} luong - Mức lương (VNĐ)
 * @param {number} [mucGiamTru=11000000] - Mức giảm trừ gia cảnh (mặc định 11 triệu VNĐ)
 * @param {number} [thueSuat=0.1] - Thuế suất áp dụng (mặc định 10%)
 * @returns {number} Số tiền thuế phải nộp (VNĐ)
 */
function tinhThueThuNhap(luong, mucGiamTru = 11000000, thueSuat = 0.1) {
  if (luong <= mucGiamTru) {
    return 0; // Lương dưới mức giảm trừ thì không phải đóng thuế
  }
  const thuNhapChiuThue = luong - mucGiamTru;
  return thuNhapChiuThue * thueSuat;
}

// Kiểm tra hàm với nhiều mức lương khác nhau:
const danhSachLuong = [8000000, 11000000, 15000000, 25000000, 50000000];

danhSachLuong.forEach((luong, index) => {
  const thue = tinhThueThuNhap(luong);
  console.log(
    `Trường hợp ${index + 1}: Lương ${luong.toLocaleString("vi-VN")} đ ` +
    `=> Thuế phải nộp: ${thue.toLocaleString("vi-VN")} đ`
  );
});

/*
================================================================================
ƯU ĐIỂM CỦA VIỆC REFACTOR THÀNH HÀM:
1. DRY (Don't Repeat Yourself): Loại bỏ hoàn toàn sự trùng lặp code.
2. Dễ bảo trì & nâng cấp: Khi chính sách thuế hoặc mức giảm trừ thay đổi,
   chỉ cần sửa 1 lần duy nhất bên trong thân hàm.
3. Linh hoạt: Có thể nhận các tham số tùy chọn (mức giảm trừ, thuế suất)
   cho các tình huống khác nhau.
================================================================================
*/
