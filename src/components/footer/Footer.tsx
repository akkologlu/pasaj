import {
  StyledContainer,
  StyledFlexBetween,
  StyledFooter,
  StyledFooterMiddle,
  StyledLogoSwiper,
  StyledRow,
} from "@/styles/styled";
import FooterCol from "./FooterCol";
import { SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import CustomImage from "../common/CustomImage";
const Footer: React.FC = () => {
  const logos = [
    "/fizy.webp",
    "/gameplus.webp",
    "/lifebox.webp",
    "/bip.webp",
    "/global-bilgi.webp",
    "/gnc.webp",
    "/tv-plus.webp",
    "/paycell.webp",
    "/platinum.webp",
    "/sol.webp",
    "/suit.webp",
    "/wiyo.webp",
  ];
  return (
    <StyledFooter>
      <StyledContainer>
        <StyledFlexBetween>
          <FooterCol
            title="Hakkımızda"
            list={[
              "Genel Bakış",
              "Haberler & Duyurular",
              "Kurumsal İletişim ve Sürdürülebilirlik",
              "Kariyer",
              "Gizlilik ve Güvenlik",
              "İletişim",
              "Pasaj'da Satış Yap",
            ]}
          />
          <FooterCol
            title="Popüler Kategoriler"
            list={[
              "Android Telefonlar",
              "iPhone Telefonlar",
              "İkinci El Telefonlar",
              "Akıllı Saatler",
              "Bluetooth Kulaklıklar",
              "Telefon Kılıfları",
              "Tabletler",
            ]}
          />
          <FooterCol title="Markalar" list={["Apple", "Samsung", "Dyson"]} />
          <FooterCol
            title="Yardım"
            list={[
              "Yardım Merkezi",
              "İşlem Rehberi",
              "Sipariş Sorgulama",
              "Nasıl İade Edebilirim?",
            ]}
          />
          <FooterCol
            title="Özel Günler & Kampanyalar"
            list={[
              "Ramazan Kampanyası",
              "Ramazan Teklifleri",
              "Düğün ve Çeyiz Paketleri",
              "Telefon Sat",
              "Eskiyi Getir Yeniyi Al",
              "Teknolojik Cihaz Desteği",
              "Vergisiz Telefon",
            ]}
          />
          <FooterCol
            title="Popüler Ürünler"
            list={[
              "iphone 15",
              "iphone 15 Plus",
              "iphone 15 Pro",
              "iphone 15 Pro Max",
              "iphone 14",
              "iphone 14 Plus",
              "iphone 14 Pro",
              "iphone 14 Pro Max",
            ]}
          />
        </StyledFlexBetween>
        <StyledFooterMiddle>
          <StyledFlexBetween>
            <div>Türkçe English العربية pyccĸий</div>
            <div>Bizi Takip Edin</div>
          </StyledFlexBetween>
          <div>
            <StyledLogoSwiper
              modules={[Navigation]}
              slidesPerView={10}
              navigation
            >
              {logos.map((logo, index) => (
                <SwiperSlide style={{ padding: "1rem 2rem" }} key={index}>
                  <CustomImage src={logo} height="50px" alt={logo} />
                </SwiperSlide>
              ))}
            </StyledLogoSwiper>
          </div>
        </StyledFooterMiddle>
        <StyledFlexBetween>
          <div>Gizlilik ve Güvenlik</div>
          <StyledRow>
            <div>
              <CustomImage
                src="/guven-damgasi-icon.webp"
                height="30px"
                width="30px"
                alt="damga"
              />
            </div>
            <div>
              <CustomImage
                src="/etbis-qr-code.webp"
                height="30px"
                width="30px"
                alt="damga"
              />
            </div>
            <small>
              © 2024 <br /> Turkcell
            </small>
          </StyledRow>
        </StyledFlexBetween>
      </StyledContainer>
    </StyledFooter>
  );
};

export default Footer;
