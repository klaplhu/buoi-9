/**
 * HOẠT ĐỘNG 2: "FUNCTION FACTORY" - NHÀ MÁY XỬ LÝ DỮ LIỆU
 * Môn: Thiết kế Web
 */

// ============================================================================
// PHẦN 1: HÀM TÍNH DIỆN TÍCH HÌNH CHỮ NHẬT
// ============================================================================

/**
 * Hàm tính diện tích hình chữ nhật
 * @param {number} dai - Chiều dài của hình chữ nhật
 * @param {number} rong - Chiều rộng của hình chữ nhật
 * @returns {number} Diện tích hình chữ nhật
 */
function tinhDienTich(dai, rong) {
  return dai * rong;
}

console.log("=== KẾT QUẢ GỌI HÀM tinhDienTich 3 LẦN ===");

// Lần gọi 1
let dt1 = tinhDienTich(5, 3);
console.log(`Lần 1: Dài = 5, Rộng = 3 => Diện tích = ${dt1}`);

// Lần gọi 2
let dt2 = tinhDienTich(10, 4.5);
console.log(`Lần 2: Dài = 10, Rộng = 4.5 => Diện tích = ${dt2}`);

// Lần gọi 3
let dt3 = tinhDienTich(20, 8);
console.log(`Lần 3: Dài = 20, Rộng = 8 => Diện tích = ${dt3}`);


// ============================================================================
// PHẦN 2: THEO PROMPT MẪU - TÍNH TUỔI VÀ TRẢ VỀ LỜI CHÀO
// Prompt: "Viết một hàm JavaScript nhận vào tên người dùng và năm sinh,
// hàm này sẽ trả về chuỗi: 'Chào [Tên], bạn hiện tại [Số tuổi] tuổi'.
// Hãy hướng dẫn tôi cách gọi hàm và in kết quả ra console."
// ============================================================================

/**
 * Hàm chào hỏi và tự động tính số tuổi hiện tại
 * @param {string} ten - Tên người dùng
 * @param {number} namSinh - Năm sinh của người dùng
 * @returns {string} Lời chào cùng số tuổi
 */
function chaoVaTinhTuoi(ten, namSinh) {
  // Lấy năm hiện tại tự động từ hệ thống
  const namHienTai = new Date().getFullYear();
  const soTuoi = namHienTai - namSinh;
  
  return `Chào ${ten}, bạn hiện tại ${soTuoi} tuổi.`;
}

console.log("\n=== KẾT QUẢ PROMPT MẪU (CHÀO HỎI & TÍNH TUỔI) ===");

// Hướng dẫn cách gọi hàm và in ra console:
// Cách 1: Gán kết quả trả về vào một biến rồi in ra
let ketQua1 = chaoVaTinhTuoi("Minh An", 2004);
console.log(ketQua1);

// Cách 2: Gọi trực tiếp bên trong console.log
console.log(chaoVaTinhTuoi("Khánh Linh", 2002));
console.log(chaoVaTinhTuoi("Thành Nam", 1999));
