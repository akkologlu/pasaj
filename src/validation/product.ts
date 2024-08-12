import { z } from "zod";

export const productSchema = z.object({
  title: z.string().min(1, "Başlık zorunludur"),
  rating: z.number().min(0).max(5, "Değerlendirme 0 ile 5 arasında olmalıdır"),
  stock: z.number().min(0, "Stok pozitif bir sayı olmalıdır"),
  nofSales: z.number().min(0, "Satış sayısı pozitif bir sayı olmalıdır"),
  brand: z.string().min(1, "Marka zorunludur"),
  seller: z.string().min(1, "Satıcı zorunludur"),
  configration: z
    .array(
      z.object({
        title: z.string(),
        options: z.array(z.string()),
      })
    )
    .optional(),
  price: z.number().min(0, "Fiyat pozitif bir sayı olmalıdır"),
  creditCard: z.boolean().optional(),
  installmentCount: z
    .number()
    .min(0, "Taksit sayısı pozitif bir sayı olmalıdır"),
  installmentPrice: z
    .number()
    .min(0, "Taksit fiyatı pozitif bir sayı olmalıdır"),
  limit: z.number().min(0, "Limit pozitif bir sayı olmalıdır"),
  endOfDiscount: z.string().optional(),
  discountPrice: z
    .number()
    .min(0, "İndirimli fiyat pozitif bir sayı olmalıdır"),
  category: z.string().min(1, "Kategori zorunludur"),
  categoryUrl: z.string().min(1, "Kategori URL'si zorunludur"),
  subcategory: z.string().min(1, "Alt kategori zorunludur"),
  subcategoryUrl: z.string().min(1, "Alt kategori URL'si zorunludur"),
  images: z.array(z.string().min(1, "Resim URL'si zorunludur")).optional(),
  freeShipping: z.boolean().optional(),
  guarantee: z.boolean().optional(),
  colors: z.array(z.string()).optional(),
  otherSellers: z
    .array(
      z.object({
        seller: z.string(),
        price: z.number().min(0, "Fiyat pozitif bir sayı olmalıdır"),
        rating: z
          .number()
          .min(0)
          .max(10, "Değerlendirme 0 ile 10 arasında olmalıdır"),
        endOfDiscount: z.string().optional(),
        stock: z.number().min(0, "Stok pozitif bir sayı olmalıdır"),
      })
    )
    .optional(),
  description: z.string().optional(),
  specifications: z
    .array(
      z.object({
        title: z.string(),
        value: z.string(),
      })
    )
    .optional(),
  comments: z
    .array(
      z.object({
        id: z.string().uuid(),
        date: z.string(),
        comment: z.string(),
        rating: z
          .number()
          .min(0)
          .max(5, "Değerlendirme 0 ile 5 arasında olmalıdır"),
      })
    )
    .optional(),
  qa: z
    .array(
      z.object({
        id: z.number(),
        question: z.object({
          content: z.string(),
          date: z.string(),
        }),
        answer: z.object({
          content: z.string(),
          date: z.string(),
          seller: z.string(),
        }),
      })
    )
    .optional(),
  badges: z.array(z.string()).optional(),
  fibabanka: z.boolean().optional(),
  specialForYou: z.boolean().optional(),
  newProduct: z.boolean().optional(),
  bestOffers: z.boolean().optional(),
});
