# Danh sách tuyến xe — Nhà xe Út Chí

**Nguồn dữ liệu chuẩn (cấu trúc):** [`../src/lib/bus-routes.ts`](../src/lib/bus-routes.ts) — export `allBusRoutes`, `busRouteCount`, `routesByCategory()`.

**Cách dùng tài liệu này:** bảng dưới đây phản ánh cùng thứ tự và nội dung như `allBusRoutes`. Khi đổi giá, km, thời gian hoặc thêm/bớt tuyến, sửa **`bus-routes.ts`** trước, rồi cập nhật lại file này (và [`nha-xe-ut-chi.md`](./nha-xe-ut-chi.md) nếu bạn dùng cho RAG).

\* Giá và thời gian mang tính tham khảo; xác nhận với điều hành / hotline trước khi coi là cam kết.

---

## Tổng quan

| Phân loại (`category`) | Mô tả ngắn |
|------------------------|------------|
| `bp-hcm` | Bình Phước ⇄ TP.HCM |
| `lien-tinh` | Liên tỉnh (ngoài trục Bình Phước – HCM) |
| `noi-tinh` | Nội tỉnh Bình Phước |

**Tổng số tuyến:** **35** (`busRouteCount`).

---

## 1. Nhóm `bp-hcm` — Bình Phước ⇄ TP.HCM

| STT | `id` | Tuyến (VI) | Route (EN) | Khoảng cách | Thời gian | Giá (tham khảo) | Loại xe |
|-----|------|------------|------------|-------------|-----------|------------------|---------|
| 1 | `dx-sg` | Đồng Xoài ⇄ TP.HCM (Miền Đông / trung tâm / bệnh viện) | Dong Xoai ⇄ HCMC (Mien Dong / central / hospitals) | ~110 km | ~2h30 | 140.000đ – 180.000đ/người* | Limousine 9–11 chỗ / 16 chỗ |
| 2 | `hq-sg` | Hớn Quản ⇄ TP.HCM | Hon Quan ⇄ HCMC | ~95 km | ~2h | 120.000đ – 160.000đ/người* | 16 chỗ / Limousine |
| 3 | `dp-sg` | Đồng Phú ⇄ TP.HCM | Dong Phu ⇄ HCMC | ~105 km | ~2h15 | 130.000đ – 170.000đ/người* | 16 chỗ / Limousine |
| 4 | `ct-sg` | Chơn Thành ⇄ TP.HCM | Chon Thanh ⇄ HCMC | ~110 km | ~2h | 130.000đ – 170.000đ/người* | 16 chỗ / Limousine |
| 5 | `bl-sg` | Bình Long ⇄ TP.HCM | Binh Long ⇄ HCMC | ~115 km | ~2h30 | 140.000đ – 180.000đ/người* | Limousine / 16 chỗ |
| 6 | `pl-sg` | Phước Long (Thác Mơ) ⇄ TP.HCM | Phuoc Long (Thac Mo) ⇄ HCMC | ~100 km | ~2h | 130.000đ – 165.000đ/người* | 16 chỗ / Limousine |
| 7 | `bdang-sg` | Bù Đăng ⇄ TP.HCM | Bu Dang ⇄ HCMC | ~130 km | ~2h45 | 150.000đ – 190.000đ/người* | 16 chỗ / Limousine |
| 8 | `bgm-sg` | Bù Gia Mập ⇄ TP.HCM | Bu Gia Map ⇄ HCMC | ~165 km | ~3h15 | 170.000đ – 220.000đ/người* | Limousine / 16 chỗ |
| 9 | `ln-sg` | Lộc Ninh ⇄ TP.HCM | Loc Ninh ⇄ HCMC | ~140 km | ~3h | 140.000đ – 210.000đ/người* | 16 chỗ / Limousine |
| 10 | `bdop-sg` | Bù Đốp ⇄ TP.HCM | Bu Dop ⇄ HCMC | ~200 km | ~3h30 – 5h | 180.000đ – 250.000đ/người* | Limousine / 16 chỗ |
| 11 | `dx-tsn` | Đồng Xoài ⇄ Tân Sơn Nhất (sân bay) | Dong Xoai ⇄ Tan Son Nhat (airport) | ~115 km | ~2h30 – 3h | 145.000đ – 190.000đ/người* | Limousine (hành lý cồng kềnh báo trước) |

---

## 2. Nhóm `lien-tinh` — Liên tỉnh

| STT | `id` | Tuyến (VI) | Route (EN) | Khoảng cách | Thời gian | Giá (tham khảo) | Loại xe |
|-----|------|------------|------------|-------------|-----------|------------------|---------|
| 12 | `bdop-vt` | Bù Đốp ⇄ Bà Rịa – Vũng Tàu | Bu Dop ⇄ Ba Ria – Vung Tau | ~250 km | ~5h – 5h30 | 280.000đ – 320.000đ/người* | Limousine |
| 13 | `dx-bh` | Đồng Xoài ⇄ Biên Hòa (Đồng Nai) | Dong Xoai ⇄ Bien Hoa (Dong Nai) | ~135 km | ~2h45 | 150.000đ – 190.000đ/người* | 16 chỗ / Limousine |
| 14 | `dx-tdm` | Đồng Xoài ⇄ Thủ Dầu Một (Bình Dương) | Dong Xoai ⇄ Thu Dau Mot (Binh Duong) | ~95 km | ~2h | 110.000đ – 150.000đ/người* | 16 chỗ / Limousine |
| 15 | `ln-tn` | Lộc Ninh ⇄ Tây Ninh | Loc Ninh ⇄ Tay Ninh | ~75 km | ~1h45 | 90.000đ – 120.000đ/người* | 16 chỗ |
| 16 | `dx-tn` | Đồng Xoài ⇄ Tây Ninh | Dong Xoai ⇄ Tay Ninh | ~120 km | ~2h30 | 120.000đ – 160.000đ/người* | 16 chỗ / Limousine |
| 17 | `ct-vt` | Chơn Thành ⇄ Bà Rịa – Vũng Tàu | Chon Thanh ⇄ Ba Ria – Vung Tau | ~220 km | ~4h30 – 5h | 250.000đ – 300.000đ/người* | Limousine / 16 chỗ |
| 18 | `pl-di-an` | Phước Long ⇄ Dĩ An (Bình Dương) | Phuoc Long ⇄ Di An (Binh Duong) | ~100 km | ~2h15 | 125.000đ – 160.000đ/người* | 16 chỗ / Limousine |
| 19 | `ln-tdm` | Lộc Ninh ⇄ Thủ Dầu Một | Loc Ninh ⇄ Thu Dau Mot | ~85 km | ~2h | 100.000đ – 140.000đ/người* | 16 chỗ |
| 20 | `bdop-di-an` | Bù Đốp ⇄ Dĩ An – Thuận An | Bu Dop ⇄ Di An – Thuan An | ~185 km | ~4h | 200.000đ – 260.000đ/người* | Limousine / 16 chỗ |

---

## 3. Nhóm `noi-tinh` — Nội tỉnh Bình Phước

| STT | `id` | Tuyến (VI) | Route (EN) | Khoảng cách | Thời gian | Giá (tham khảo) | Loại xe |
|-----|------|------------|------------|-------------|-----------|------------------|---------|
| 21 | `dx-ln` | Đồng Xoài ⇄ Lộc Ninh | Dong Xoai ⇄ Loc Ninh | ~80 km | ~1h45 | 70.000đ – 95.000đ/người* | Xe ghép / 16 chỗ |
| 22 | `dx-bdop` | Đồng Xoài ⇄ Bù Đốp | Dong Xoai ⇄ Bu Dop | ~115 km | ~2h30 | 90.000đ – 120.000đ/người* | Xe ghép / 16 chỗ |
| 23 | `dx-ct` | Đồng Xoài ⇄ Chơn Thành | Dong Xoai ⇄ Chon Thanh | ~45 km | ~50 phút – 1h | 40.000đ – 60.000đ/người* | Xe ghép / taxi tuyến |
| 24 | `dx-bl` | Đồng Xoài ⇄ Bình Long | Dong Xoai ⇄ Binh Long | ~75 km | ~1h30 | 65.000đ – 85.000đ/người* | Xe ghép / 16 chỗ |
| 25 | `dx-pl` | Đồng Xoài ⇄ Phước Long (Thác Mơ) | Dong Xoai ⇄ Phuoc Long (Thac Mo) | ~35 km | ~40 phút | 35.000đ – 50.000đ/người* | Xe ghép |
| 26 | `ln-bdop` | Lộc Ninh ⇄ Bù Đốp | Loc Ninh ⇄ Bu Dop | ~95 km | ~2h | 80.000đ – 110.000đ/người* | Xe ghép / 16 chỗ |
| 27 | `ct-bdop` | Chơn Thành ⇄ Bù Đốp | Chon Thanh ⇄ Bu Dop | ~130 km | ~2h45 | 110.000đ – 145.000đ/người* | 16 chỗ / Limousine |
| 28 | `hq-dx` | Hớn Quản ⇄ Đồng Xoài | Hon Quan ⇄ Dong Xoai | ~35 km | ~45 phút | 35.000đ – 50.000đ/người* | Xe ghép |
| 29 | `dp-dx` | Đồng Phú ⇄ Đồng Xoài | Dong Phu ⇄ Dong Xoai | ~25 km | ~35 – 45 phút | 30.000đ – 45.000đ/người* | Xe ghép |
| 30 | `bgm-dx` | Bù Gia Mập ⇄ Đồng Xoài | Bu Gia Map ⇄ Dong Xoai | ~95 km | ~2h | 80.000đ – 110.000đ/người* | Xe ghép / 16 chỗ |
| 31 | `bdang-ct` | Bù Đăng ⇄ Chơn Thành | Bu Dang ⇄ Chon Thanh | ~70 km | ~1h30 | 60.000đ – 85.000đ/người* | Xe ghép / 16 chỗ |
| 32 | `pl-ln` | Phước Long ⇄ Lộc Ninh | Phuoc Long ⇄ Loc Ninh | ~95 km | ~2h | 75.000đ – 100.000đ/người* | Xe ghép / 16 chỗ |
| 33 | `bl-ct` | Bình Long ⇄ Chơn Thành | Binh Long ⇄ Chon Thanh | ~55 km | ~1h15 | 50.000đ – 70.000đ/người* | Xe ghép |
| 34 | `hq-ct` | Hớn Quản ⇄ Chơn Thành | Hon Quan ⇄ Chon Thanh | ~65 km | ~1h20 | 55.000đ – 75.000đ/người* | Xe ghép |
| 35 | `bdang-pl` | Bù Đăng ⇄ Phước Long | Bu Dang ⇄ Phuoc Long | ~85 km | ~1h50 | 70.000đ – 95.000đ/người* | Xe ghép / 16 chỗ |

---

## English prices (mirror)

Giá bằng tiếng Anh (VND/pax) nằm trong từng bản ghi `priceEn` ở `bus-routes.ts`; không nhân đôi bảng ở đây để tránh lệch khi chỉnh sửa. Import trực tiếp từ code hoặc mở file TypeScript khi cần bản EN đầy đủ.
