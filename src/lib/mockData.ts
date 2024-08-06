import { MdPayments } from "react-icons/md";
import { RiRefund2Fill } from "react-icons/ri";
import { TbTruckDelivery } from "react-icons/tb";

export const bannerLinks = [
  "Favorilerim",
  "Kampanyalar",
  "Yardım",
  "Neden Pasaj",
  "Pasaj Blog",
  "Sipariş Sorgulama",
];
export const opps = [
  {
    id: 1,
    title: "Fırsat 1",
    image: "/opp1.webp",
  },
  {
    id: 2,
    title: "Fırsat 2",
    image: "/opp2.webp",
  },
  {
    id: 3,
    title: "Fırsat 3",
    image: "/opp3.webp",
  },
  {
    id: 4,
    title: "Fırsat 4",
    image: "/opp4.webp",
  },
  {
    id: 5,
    title: "Fırsat 5",
    image: "/opp5.webp",
  },
  {
    id: 6,
    title: "Fırsat 6",
    image: "/opp6.webp",
  },
  {
    id: 7,
    title: "Fırsat 7",
    image: "/opp7.webp",
  },
];

export const popularSearches = [
  {
    id: 1,
    title: "Telefonlar",
  },
  {
    id: 2,
    title: "Hoparlörler",
  },
  {
    id: 3,
    title: "Çantalar",
  },
  {
    id: 4,
    title: "Bilgisayarlar",
  },
  {
    id: 5,
    title: "Termos",
  },
  {
    id: 6,
    title: "Spor Paketleri",
  },
];

export const landing = [
  "/landing1.jpeg",
  "/landing2.jpeg",
  "/landing3.jpeg",
  "/landing4.jpeg",
  "/landing5.jpeg",
  "/landing6.jpeg",
  "/landing7.jpeg",
  "/landing8.jpeg",
  "/landing9.jpeg",
  "/landing10.jpeg",
  "/landing11.jpeg",
  "/landing12.jpeg",
  "/landing13.jpeg",
];

export const priceRanges: { label: string; range: [number, number] | null }[] =
  [
    { label: "0 - 500 TL", range: [0, 500] },
    { label: "500 - 1500 TL", range: [500, 1500] },
    { label: "1500 - 3000 TL", range: [1500, 3000] },
    { label: "3000 TL ve üzeri", range: [3000, Infinity] },
  ];

export const sortOptions = [
  { label: "En Popüler", value: "initial" },
  { label: "En Düşük Fiyat", value: "lowest_price" },
  { label: "En Yüksek Fiyat", value: "highest_price" },
  { label: "Puan Yüksek Puan", value: "highest_rating" },
  { label: "Puan Düşük Puan", value: "lowest_rating" },
];
export const tabOptions = [
  {
    id: 1,
    title: "Ürün Açıklamaları",
    url: "aciklamalar",
  },
  {
    id: 2,
    title: "Değerlendirmeler",
    url: "degerlendirmeler",
  },
  {
    id: 4,
    title: "Ürün Soru&Cevapları",
    url: "sorular",
  },
  {
    id: 5,
    title: "Ürün Özellikleri",
    url: "urun-ozellikleri",
  },
];
export const whyPasaj = [
  {
    title: "Hızlı ve Kolay Teslimat",
    description:
      "Siparişiniz isterseniz gün içinde gelsin, isterseniz bir tıkla gelin ve mağazadan teslim alın.",
    icon: TbTruckDelivery,
  },
  {
    title: "Esnek Ödeme Seçenekleri",
    description:
      "Alışverişlerinizi ister kredi kartınıza taksitlendirin ister Turkcell faturanıza ek, 36 aya varan vade imkanından faydalanın.",
    icon: MdPayments,
  },
  {
    title: "Ücretsiz İptal ve İade",
    description:
      "Ürünlerinizi kolayca ve hiçbir ücret ödemeden iptal ve iade edebilirsiniz.",
    icon: RiRefund2Fill,
  },
];
