import { StyledContainer, StyledDiv } from "@/styles/styled";
import Banner from "./Banner";
import Navbar from "./Navbar";
import NavBottom from "./NavBottom";
import LoginModal from "./LoginModal";
import { useState } from "react";
import { useSession } from "next-auth/react";

const Header: React.FC = () => {
  const { data: session } = useSession();

  const [loginModal, setloginModal] = useState(false);
  return (
    <StyledDiv as="header" $bgcolor="header" $pos="relative">
      <StyledContainer>
        <Banner />
        <Navbar loginModal={loginModal} setloginModal={setloginModal} />
        <NavBottom />
        {loginModal && !session && <LoginModal setloginModal={setloginModal} />}
      </StyledContainer>
    </StyledDiv>
  );
};

export default Header;
