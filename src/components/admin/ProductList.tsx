import { Product } from "@/types/productType";
import Link from "next/link";

type ProductListProps = {
  products: Product[];
  onDelete: (id: number | string) => void;
};
const ProductList: React.FC<ProductListProps> = ({ products, onDelete }) => (
  <ul>
    {products.map((product) => (
      <li key={product.id}>
        <h4>{product.title}</h4>
        <p>{product.price} TL</p>
        <Link href={`/admin/products/edit/${product.id}`}>Edit</Link>
        <button onClick={() => onDelete(product.id)}>Delete</button>
      </li>
    ))}
  </ul>
);

export default ProductList;
