import { HeaderContainer, HeaderLogoImg, HeaderTitle } from "./StyledLogo";

const Header = ({ title, image }) => (
  <div>
    <HeaderContainer>
      <HeaderLogoImg src={image} alt="logo" />
      <HeaderTitle>{title}</HeaderTitle>
    </HeaderContainer>
  </div>
);

export default Header;
