# Nhà xe Út Chí — Knowledge base (RAG / FAQ)

> **Nguồn dữ liệu cấu trúc (đồng bộ web):** `examples/nhaxe/src/lib/bus-routes.ts` — khi sửa tuyến/giá, cập nhật file đó rồi đồng bộ lại tài liệu này.  
> **Miễn trừ:** Giá và thời gian mang tính **tham khảo**; thị trường khu vực có thể tham chiếu [Hoàng Yến Logistics](https://hoangyenlogistics.vn). Luôn xác nhận với điều hành qua hotline trước khi coi là cam kết.

---

## 0. Triển khai website (Vercel, GitHub, CI/CD)

**Hiện trạng trong repo OpenCalf:** không có tài khoản Vercel hay pipeline nào được “agent” tự kết nối. Chỉ có **cấu hình build** để khi bạn deploy lên Vercel thì dự án build đúng (Nitro khi biến môi trường `VERCEL` được Vercel set sẵn). Chi tiết: `examples/nhaxe/DEPLOY_VERCEL.md`.

| Câu hỏi | Trả lời ngắn |
|---------|----------------|
| Có dùng GitHub không? | **Bạn** kết nối repo GitHub (hoặc GitLab/Bitbucket) với Vercel khi bấm Import project — không bắt buộc GitHub, nhưng GitHub là lựa chọn phổ biến. |
| Có CI/CD không? | **Có, kiểu Vercel:** mỗi lần push lên nhánh đã liên kết, Vercel tự build và tạo **Preview**; nhánh production tạo bản **Production**. Đây là CI/CD do nền tảng Vercel cung cấp, **không** cần file `.github/workflows/*.yml` trừ khi bạn muốn thêm kiểm tra riêng (lint/test trước khi merge). |
| Có file GitHub Actions trong repo cho nhaxe không? | **Hiện không** — chỉ có hướng dẫn deploy. |

**Tóm tắt bước deploy (Vercel + GitHub):** đẩy code lên GitHub → Vercel “Import” repo → **Root Directory** = `examples/nhaxe` → Build `npm run build` → để trống ô Output (Nitro ghi `.vercel/output`).

---

## 1. Nhận diện thương hiệu

| Trường | Giá trị |
|--------|---------|
| Tên | Nhà xe Út Chí |
| Hành lang trọng tâm | Bình Phước ↔ TP.HCM |
| Đặc thù | Limousine / xe khách; ưu tiên **đưa đón bệnh nhân**, trả **tận cổng bệnh viện** |
| Hotline trên web | Chỉ hiển thị ở **cuối trang / khối liên hệ** (theo thiết kế UX demo) |

---

## 2. Liên hệ (chuẩn RAG)

| Kênh | Giá trị |
|------|---------|
| Hotline | **036 908 8090** (`tel:0369088090`) |
| Văn phòng (placeholder) | Bình Phước, Việt Nam — thay bằng địa chỉ phòng vé thật khi vận hành |
| Ngôn ngữ giao diện | Tiếng Việt / English (toggle) |

---

## 3. Điểm đón trong tỉnh (đủ 10 đơn vị hành chính cấp huyện)

Đón tận nhà / điểm hẹn tại: **Đồng Xoài, Bình Long, Phước Long, Chơn Thành, Đồng Phú, Hớn Quản, Bù Đăng, Bù Gia Mập, Lộc Ninh, Bù Đốp**.

---

## 4. Bệnh viện trả khách tại TP.HCM (tiêu biểu)

Chợ Rẫy, Ung Bướu, 115, ĐH Y Dược, Nhi Đồng 1 & 2, Từ Dũ, Bình Dân, Mắt TP.HCM — và các điểm trung chuyển/bến theo hợp đồng.

---

## 5. Giờ khởi hành (tham khảo)

- **Bình Phước → TP.HCM:** 04:00, 06:00, 08:00, 11:00, 14:00  
- **TP.HCM → Bình Phước:** 09:00, 12:00, 15:00, 17:00, 19:00  

Thực tế phụ thuộc kẹt xe, lịch ghép khách và thời tiết.

---

## 6. Danh sách đầy đủ tuyến xe (35 tuyến)

*Tổng cộng **35** bản ghi trong `allBusRoutes` (`bus-routes.ts`). Ký hiệu ⇄ nghĩa là có **hai chiều** trừ khi ghi chú khác.*

### 6.1. Nhóm: Bình Phước ⇄ TP.HCM

| STT | Tuyến | Giá tham khảo | Khoảng cách | Thời gian | Loại xe |
|-----|--------|----------------|-------------|-----------|---------|
| 1 | Đồng Xoài ⇄ TP.HCM (Miền Đông / trung tâm / bệnh viện) | 140.000đ – 180.000đ/người* | ~110 km | ~2h30 | Limousine 9–11 chỗ / 16 chỗ |
| 2 | Hớn Quản ⇄ TP.HCM | 120.000đ – 160.000đ/người* | ~95 km | ~2h | 16 chỗ / Limousine |
| 3 | Đồng Phú ⇄ TP.HCM | 130.000đ – 170.000đ/người* | ~105 km | ~2h15 | 16 chỗ / Limousine |
| 4 | Chơn Thành ⇄ TP.HCM | 130.000đ – 170.000đ/người* | ~110 km | ~2h | 16 chỗ / Limousine |
| 5 | Bình Long ⇄ TP.HCM | 140.000đ – 180.000đ/người* | ~115 km | ~2h30 | Limousine / 16 chỗ |
| 6 | Phước Long (Thác Mơ) ⇄ TP.HCM | 130.000đ – 165.000đ/người* | ~100 km | ~2h | 16 chỗ / Limousine |
| 7 | Bù Đăng ⇄ TP.HCM | 150.000đ – 190.000đ/người* | ~130 km | ~2h45 | 16 chỗ / Limousine |
| 8 | Bù Gia Mập ⇄ TP.HCM | 170.000đ – 220.000đ/người* | ~165 km | ~3h15 | Limousine / 16 chỗ |
| 9 | Lộc Ninh ⇄ TP.HCM | 140.000đ – 210.000đ/người* | ~140 km | ~3h | 16 chỗ / Limousine |
| 10 | Bù Đốp ⇄ TP.HCM | 180.000đ – 250.000đ/người* | ~200 km | ~3h30 – 5h | Limousine / 16 chỗ |
| 11 | Đồng Xoài ⇄ Tân Sơn Nhất (sân bay) | 145.000đ – 190.000đ/người* | ~115 km | ~2h30 – 3h | Limousine (hành lý cồng kềnh báo trước) |

### 6.2. Nhóm: Liên tỉnh

| STT | Tuyến | Giá tham khảo | Khoảng cách | Thời gian | Loại xe |
|-----|--------|----------------|-------------|-----------|---------|
| 12 | Bù Đốp ⇄ Bà Rịa – Vũng Tàu | 280.000đ – 320.000đ/người* | ~250 km | ~5h – 5h30 | Limousine |
| 13 | Đồng Xoài ⇄ Biên Hòa (Đồng Nai) | 150.000đ – 190.000đ/người* | ~135 km | ~2h45 | 16 chỗ / Limousine |
| 14 | Đồng Xoài ⇄ Thủ Dầu Một (Bình Dương) | 110.000đ – 150.000đ/người* | ~95 km | ~2h | 16 chỗ / Limousine |
| 15 | Lộc Ninh ⇄ Tây Ninh | 90.000đ – 120.000đ/người* | ~75 km | ~1h45 | 16 chỗ |
| 16 | Đồng Xoài ⇄ Tây Ninh | 120.000đ – 160.000đ/người* | ~120 km | ~2h30 | 16 chỗ / Limousine |
| 17 | Chơn Thành ⇄ Bà Rịa – Vũng Tàu | 250.000đ – 300.000đ/người* | ~220 km | ~4h30 – 5h | Limousine / 16 chỗ |
| 18 | Phước Long ⇄ Dĩ An (Bình Dương) | 125.000đ – 160.000đ/người* | ~100 km | ~2h15 | 16 chỗ / Limousine |
| 19 | Lộc Ninh ⇄ Thủ Dầu Một | 100.000đ – 140.000đ/người* | ~85 km | ~2h | 16 chỗ |
| 20 | Bù Đốp ⇄ Dĩ An – Thuận An | 200.000đ – 260.000đ/người* | ~185 km | ~4h | Limousine / 16 chỗ |

### 6.3. Nhóm: Nội tỉnh Bình Phước

| STT | Tuyến | Giá tham khảo | Khoảng cách | Thời gian | Loại xe |
|-----|--------|----------------|-------------|-----------|---------|
| 21 | Đồng Xoài ⇄ Lộc Ninh | 70.000đ – 95.000đ/người* | ~80 km | ~1h45 | Xe ghép / 16 chỗ |
| 22 | Đồng Xoài ⇄ Bù Đốp | 90.000đ – 120.000đ/người* | ~115 km | ~2h30 | Xe ghép / 16 chỗ |
| 23 | Đồng Xoài ⇄ Chơn Thành | 40.000đ – 60.000đ/người* | ~45 km | ~50 phút – 1h | Xe ghép / taxi tuyến |
| 24 | Đồng Xoài ⇄ Bình Long | 65.000đ – 85.000đ/người* | ~75 km | ~1h30 | Xe ghép / 16 chỗ |
| 25 | Đồng Xoài ⇄ Phước Long (Thác Mơ) | 35.000đ – 50.000đ/người* | ~35 km | ~40 phút | Xe ghép |
| 26 | Lộc Ninh ⇄ Bù Đốp | 80.000đ – 110.000đ/người* | ~95 km | ~2h | Xe ghép / 16 chỗ |
| 27 | Chơn Thành ⇄ Bù Đốp | 110.000đ – 145.000đ/người* | ~130 km | ~2h45 | 16 chỗ / Limousine |
| 28 | Hớn Quản ⇄ Đồng Xoài | 35.000đ – 50.000đ/người* | ~35 km | ~45 phút | Xe ghép |
| 29 | Đồng Phú ⇄ Đồng Xoài | 30.000đ – 45.000đ/người* | ~25 km | ~35 – 45 phút | Xe ghép |
| 30 | Bù Gia Mập ⇄ Đồng Xoài | 80.000đ – 110.000đ/người* | ~95 km | ~2h | Xe ghép / 16 chỗ |
| 31 | Bù Đăng ⇄ Chơn Thành | 60.000đ – 85.000đ/người* | ~70 km | ~1h30 | Xe ghép / 16 chỗ |
| 32 | Phước Long ⇄ Lộc Ninh | 75.000đ – 100.000đ/người* | ~95 km | ~2h | Xe ghép / 16 chỗ |
| 33 | Bình Long ⇄ Chơn Thành | 50.000đ – 70.000đ/người* | ~55 km | ~1h15 | Xe ghép |
| 34 | Hớn Quản ⇄ Chơn Thành | 55.000đ – 75.000đ/người* | ~65 km | ~1h20 | Xe ghép |
| 35 | Bù Đăng ⇄ Phước Long | 70.000đ – 95.000đ/người* | ~85 km | ~1h50 | Xe ghép / 16 chỗ |

---

## 7. Ghi chú RAG

- Trả lời câu hỏi “có bao nhiêu tuyến?” → dùng `allBusRoutes.length` / `busRouteCount` (hiện **35**).  
- Trả lời “tuyến nào đi Vũng Tàu?” → lọc `routeEn`/`routeVi` chứa “Vũng Tàu” / “Vung Tau”.  
- Luôn nhắc gọi **036 908 8090** để xác nhận giờ và giá.

---

*Cập nhật: đồng bộ cấu trúc tuyến với web `examples/nhaxe`; bổ sung mục triển khai Vercel/GitHub/CI/CD.*
