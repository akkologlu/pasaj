import {
  StyledContainer,
  StyledDiv,
  StyledFooter,
  StyledFooterMiddle,
  StyledSwiper,
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
    <StyledFooter as="footer" $bgcolor="#27356f" $padding="5rem 0">
      <StyledContainer>
        <StyledDiv $display="flex" $justify="space-between">
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
        </StyledDiv>
        <StyledFooterMiddle $padding="2rem 0" $margin="1rem 0">
          <StyledDiv $display="flex" $justify="space-between">
            <div>Türkçe English العربية pyccĸий</div>
            <div>Bizi Takip Edin</div>
          </StyledDiv>
          <div>
            <StyledSwiper
              modules={[Navigation]}
              slidesPerView={10}
              breakpoints={{
                0: {
                  slidesPerView: 3,
                },
                768: {
                  slidesPerView: 5,
                },
                1024: {
                  slidesPerView: 7,
                },
              }}
              navigation
            >
              {logos.map((logo, index) => (
                <SwiperSlide style={{ padding: "1rem 2rem" }} key={index}>
                  <CustomImage src={logo} height={50} alt={logo} />
                </SwiperSlide>
              ))}
            </StyledSwiper>
          </div>
        </StyledFooterMiddle>
        <StyledDiv $display="flex" $justify="space-between">
          <div>Gizlilik ve Güvenlik</div>
          <StyledRow>
            <div>
              <CustomImage
                src="/guven-damgasi-icon.webp"
                height={30}
                width="30px"
                alt="damga"
              />
            </div>
            <div>
              <CustomImage
                src="/etbis-qr-code.webp"
                height={30}
                width="30px"
                alt="damga"
              />
            </div>
            <small>
              © 2024 <br /> Turkcell
            </small>
          </StyledRow>
        </StyledDiv>
      </StyledContainer>
    </StyledFooter>
  );
};

export default Footer;
