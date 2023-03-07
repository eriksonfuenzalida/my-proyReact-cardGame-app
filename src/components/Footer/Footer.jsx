import { FooterContainer, FooterText } from "./StyledLogo";

const Footer = ({ footerText }) => (
  <div>
    <FooterContainer>
      <FooterText>{footerText}</FooterText>
    </FooterContainer>
  </div>
);
export default Footer;
