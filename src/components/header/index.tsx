import { StyledContainer, StyledHeaderComp } from "@/styles/styled";
import Banner from "./Banner";
import Navbar from "./Navbar";
import NavBottom from "./NavBottom";
import LoginModal from "./LoginModal";
import { useState } from "react";

const Header: React.FC = () => {
  const [loginModal, setloginModal] = useState(false);
  return (
    <StyledHeaderComp>
      <StyledContainer>
        <Banner />
        <Navbar loginModal={loginModal} setLoginModal={setloginModal} />
        <NavBottom />
        {loginModal && <LoginModal />}
      </StyledContainer>
    </StyledHeaderComp>
  );
};

export default Header;
