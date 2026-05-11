export type Lang = "vi" | "en";

export type HomeCopy = {
  metaTitle: string;
  metaDescription: string;
  brandSubtitle: string;
  navHome: string;
  navServices: string;
  navRoutes: string;
  navPopular: string;
  navSchedule: string;
  navContact: string;
  langVi: string;
  langEn: string;
  heroBadge: string;
  heroTitle1: string;
  heroTitle2: string;
  heroLead: string;
  heroCtaPrimary: string;
  heroCtaSecondary: string;
  servicesIntro: string;
  highlights: { title: string; desc: string }[];
  routesTitle: string;
  routesLead: string;
  pickupTitle: string;
  pickupItem: string;
  hospitalTitle: string;
  scheduleTitle: string;
  scheduleLead: string;
  scheduleBpHcm: string;
  scheduleBpNote: string;
  scheduleHcmBp: string;
  scheduleHcmNote: string;
  popularTitle: string;
  popularLead: string;
  popularFootnote: string;
  tableHeadNo: string;
  ctaTitle: string;
  ctaLead: string;
  ctaButton: string;
  footerCopyright: string;
  footerContactLabel: string;
  footerAddressLabel: string;
  footerAddress: string;
  tableHeadRoute: string;
  tableHeadPrice: string;
  tableHeadDist: string;
  tableHeadTime: string;
  tableHeadVehicle: string;
};

const hospitalsVi = [
  "BV Chợ Rẫy",
  "BV Ung Bướu",
  "BV 115",
  "BV ĐH Y Dược",
  "BV Nhi Đồng 1, 2",
  "BV Từ Dũ",
  "BV Bình Dân",
  "BV Mắt TP.HCM",
];

const hospitalsEn = [
  "Cho Ray Hospital",
  "Oncology Hospital",
  "115 Emergency Hospital",
  "University Medical Center",
  "Children's Hospital 1 & 2",
  "Tu Du Hospital",
  "Binh Dan Hospital",
  "Eye Hospital HCMC",
];

export const homeCopy: Record<Lang, HomeCopy> = {
  vi: {
    metaTitle: "Nhà xe Út Chí | Bình Phước – TP.HCM | Đưa đón bệnh nhân tận bệnh viện",
    metaDescription:
      "Nhà xe Út Chí – limousine tuyến Bình Phước ↔ TP.HCM. Đưa đón bệnh nhân tận cổng bệnh viện. Hotline xem mục Liên hệ cuối trang.",
    brandSubtitle: "Bình Phước ↔ TP.HCM",
    navHome: "Trang chủ",
    navServices: "Dịch vụ",
    navRoutes: "Lộ trình",
    navPopular: "Giá tuyến",
    navSchedule: "Giờ chạy",
    navContact: "Liên hệ",
    langVi: "Tiếng Việt",
    langEn: "English",
    heroBadge: "Chuyên đưa đón bệnh nhân",
    heroTitle1: "Bình Phước → TP.HCM",
    heroTitle2: "Tận nhà – Tận bệnh viện",
    heroLead:
      "Xe limousine đời mới, tài xế kinh nghiệm, hỗ trợ bệnh nhân và người nhà đi khám chữa bệnh tại các bệnh viện lớn ở TP.HCM.",
    heroCtaPrimary: "Đặt vé & liên hệ",
    heroCtaSecondary: "Xem lộ trình",
    servicesIntro:
      "Ưu tiên khách đi khám: đón tận nhà, trả tận cổng bệnh viện, hỗ trợ người cao tuổi và bệnh nhân.",
    highlights: [
      { title: "Đưa tận bệnh viện", desc: "Chợ Rẫy, Ung Bướu, 115, ĐH Y Dược, Nhi Đồng…" },
      { title: "Hỗ trợ bệnh nhân", desc: "Tài xế phụ giúp lên xuống, mang vác hành lý." },
      { title: "An toàn – Đúng giờ", desc: "Xe đời mới, bảo dưỡng định kỳ, chạy đúng tuyến." },
      { title: "Nhiều chuyến/ngày", desc: "Khởi hành liên tục, linh hoạt theo lịch khám." },
    ],
    routesTitle: "Lộ trình & điểm đón – điểm trả",
    routesLead: "Đón tận nhà tại Bình Phước, trả khách tận cổng các bệnh viện lớn ở TP.HCM.",
    pickupTitle: "Điểm đón – Bình Phước",
    pickupItem: "– đón tận nhà",
    hospitalTitle: "Điểm trả – Bệnh viện tại TP.HCM",
    scheduleTitle: "Giờ khởi hành",
    scheduleLead: "Chạy liên tục trong ngày – linh hoạt theo lịch khám của khách.",
    scheduleBpHcm: "Bình Phước → TP.HCM",
    scheduleBpNote: "Phù hợp lịch khám sáng & chiều.",
    scheduleHcmBp: "TP.HCM → Bình Phước",
    scheduleHcmNote: "Đón tại cổng bệnh viện sau khi khám xong.",
    popularTitle: "Danh sách đầy đủ tuyến xe & giá tham khảo",
    popularLead:
      "Tổng hợp các tuyến Út Chí khai thác (Bình Phước ⇄ TP.HCM, liên tỉnh, nội tỉnh). Khoảng cách và giá mang tính tham khảo theo thị trường khu vực (ví dụ hoangyenlogistics.vn); giờ chạy và giá cuối cùng do điều hành xác nhận khi đặt vé.",
    popularFootnote:
      "Dấu *: giá/người ghép chuyến hoặc ghế thường; limousine và ngày lễ có thể cao hơn. Mọi tuyến đều có thể đặt hai chiều trừ khi ghi chú khác.",
    tableHeadNo: "STT",
    ctaTitle: "Đặt chỗ & tư vấn lộ trình",
    ctaLead: "Thông tin liên hệ và hotline nằm ở cuối trang để bạn gọi một lần, đúng chỗ.",
    ctaButton: "Xuống phần liên hệ",
    footerCopyright: "Nhà xe Út Chí – Bình Phước ↔ TP.HCM",
    footerContactLabel: "Hotline đặt vé",
    footerAddressLabel: "Trụ sở / văn phòng",
    footerAddress: "Bình Phước, Việt Nam (cập nhật địa chỉ cụ thể khi triển khai)",
    tableHeadRoute: "Tuyến",
    tableHeadPrice: "Giá tham khảo",
    tableHeadDist: "Quãng đường",
    tableHeadTime: "Thời gian",
    tableHeadVehicle: "Loại xe",
  },
  en: {
    metaTitle: "Ut Chi Bus | Binh Phuoc – Ho Chi Minh City | Hospital door-to-door",
    metaDescription:
      "Ut Chi Bus – Binh Phuoc ↔ HCMC limousine service. Patient drop-off at major hospital gates. Hotline is listed in the Contact section at the bottom.",
    brandSubtitle: "Binh Phuoc ↔ HCMC",
    navHome: "Home",
    navServices: "Services",
    navRoutes: "Routes",
    navPopular: "Fares",
    navSchedule: "Schedule",
    navContact: "Contact",
    langVi: "Vietnamese",
    langEn: "English",
    heroBadge: "Patient-friendly transfers",
    heroTitle1: "Binh Phuoc → Ho Chi Minh City",
    heroTitle2: "Door-to-door & hospital drop-off",
    heroLead:
      "Modern limousines, experienced drivers, and attentive help for patients and families visiting major hospitals in HCMC.",
    heroCtaPrimary: "Book & contact",
    heroCtaSecondary: "View routes",
    servicesIntro:
      "Focused on clinic travel: home pickup, hospital-gate drop-off, and help for elderly passengers and patients.",
    highlights: [
      {
        title: "Hospital drop-off",
        desc: "Cho Ray, Oncology, 115, University Medical, Children's hospitals…",
      },
      {
        title: "Patient assistance",
        desc: "Drivers help boarding, alighting, and light luggage handling.",
      },
      { title: "Safe & punctual", desc: "Well-maintained fleet and fixed corridor service." },
      { title: "Multiple daily trips", desc: "Flexible timing around clinic schedules." },
    ],
    routesTitle: "Corridors, pickup & drop-off",
    routesLead: "Home pickup in Binh Phuoc province, drop-off at major hospital entrances in HCMC.",
    pickupTitle: "Pickup – Binh Phuoc",
    pickupItem: "– door pickup",
    hospitalTitle: "Drop-off – HCMC hospitals",
    scheduleTitle: "Departure windows",
    scheduleLead: "Continuous daily departures – flexible around your clinic time.",
    scheduleBpHcm: "Binh Phuoc → HCMC",
    scheduleBpNote: "Suited for morning & afternoon appointments.",
    scheduleHcmBp: "HCMC → Binh Phuoc",
    scheduleHcmNote: "Pickup at hospital gates after consultations.",
    popularTitle: "Full route list & reference fares",
    popularLead:
      "All Ut Chi corridors (Binh Phuoc ⇄ HCMC, inter-provincial, intra-provincial). Distances and fares are indicative for the regional market (e.g. hoangyenlogistics.vn); final times and prices are confirmed when you book.",
    popularFootnote:
      "*: per-seat shared or standard coach; limousine and holidays may cost more. Routes are bidirectional unless noted.",
    tableHeadNo: "No.",
    ctaTitle: "Book a seat & route advice",
    ctaLead: "Phone and office details are at the bottom so you call once, in the right place.",
    ctaButton: "Go to contact",
    footerCopyright: "Ut Chi Bus – Binh Phuoc ↔ HCMC",
    footerContactLabel: "Booking hotline",
    footerAddressLabel: "Office",
    footerAddress: "Binh Phuoc, Vietnam (replace with exact address for production)",
    tableHeadRoute: "Route",
    tableHeadPrice: "Ref. fare",
    tableHeadDist: "Distance",
    tableHeadTime: "Duration",
    tableHeadVehicle: "Vehicle",
  },
};

export function hospitalsFor(lang: Lang): string[] {
  return lang === "vi" ? hospitalsVi : hospitalsEn;
}
