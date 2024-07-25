import { StyledCol, StyledNavBottom } from "@/styles/styled";
import Link from "next/link";

const NavBottom: React.FC = () => {
  const options = [
    "Cep Telefonu - Aksesuar",
    "Bilgisayar - Tablet",
    "Elektrikli Ev Aletleri",
    "Beyaz Eşya",
    "Sağlık - Kişisel Bakım",
    "Hobi - Oyun",
    "TV - Ses Sistemleri",
    "Ev - Yaşam",
    "Anne - Bebek - Oyuncak",
  ];
  return (
    <StyledNavBottom>
      {options.map((option) => (
        <StyledCol $sizemd={1} key={option}>
          <Link href="#">{option}</Link>
        </StyledCol>
      ))}
    </StyledNavBottom>
  );
};

export default NavBottom;
