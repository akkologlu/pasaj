import { StyledContainer, StyledHeader } from "@/styles/styled";
import Banner from "./Banner";
import Navbar from "./Navbar";

const Header: React.FC = () => {
  return (
    <StyledHeader>
      <StyledContainer>
        <Banner />
        <Navbar />
      </StyledContainer>
    </StyledHeader>
  );
};

export default Header;
