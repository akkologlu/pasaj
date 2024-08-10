import { z } from "zod";

export const productSchema = z.object({
  title: z.string().min(1, "Title is required"),
  rating: z.number().min(0).max(5, "Rating must be between 0 and 5"),
  stock: z.number().min(0, "Stock must be a positive number"),
  nofSales: z.number().min(0, "Number of sales must be a positive number"),
  brand: z.string().min(1, "Brand is required"),
  seller: z.string().min(1, "Seller is required"),
  configration: z
    .array(
      z.object({
        title: z.string(),
        options: z.array(z.string()),
      })
    )
    .optional(),
  price: z.number().min(0, "Price must be a positive number"),
  creditCard: z.boolean().optional(),
  installmentCount: z
    .number()
    .min(0, "Installment count must be a positive number"),
  installmentPrice: z
    .number()
    .min(0, "Installment price must be a positive number"),
  limit: z.number().min(0, "Limit must be a positive number"),
  endOfDiscount: z.date().optional(),
  discountPrice: z.number().min(0, "Discount price must be a positive number"),
  category: z.string().min(1, "Category is required"),
  categoryUrl: z.string().min(1, "Category URL is required"),
  subcategory: z.string().min(1, "Subcategory is required"),
  subcategoryUrl: z.string().min(1, "Subcategory URL is required"),
  images: z.array(z.string().min(1, "Image URL is required")).optional(),
  freeShipping: z.boolean().optional(),
  guarantee: z.boolean().optional(),
  colors: z.array(z.string()).optional(),
  otherSellers: z
    .array(
      z.object({
        seller: z.string(),
        price: z.number().min(0, "Price must be a positive number"),
        rating: z.number().min(0).max(10, "Rating must be between 0 and 10"),
        endOfDiscount: z.string().optional(),
        stock: z.number().min(0, "Stock must be a positive number"),
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
        rating: z.number().min(0).max(5, "Rating must be between 0 and 5"),
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
