import { Footer, FooterCopyright, FooterLink, FooterLinkGroup } from "flowbite-react";

export const TourFooter = () => {
  const currentYear = new Date().getFullYear();
  return (
      <Footer container>
        <FooterCopyright href="/" by="YouTour™" year={currentYear} />
        <FooterLinkGroup>
          <FooterLink href="#">About</FooterLink>
          <FooterLink href="#">Privacy Policy</FooterLink>
          <FooterLink href="#">Licensing</FooterLink>
          <FooterLink href="#">Contact</FooterLink>
        </FooterLinkGroup>
      </Footer>
  );
}
