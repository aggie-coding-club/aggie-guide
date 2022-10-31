import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";
  
const Footer = () => {
  return (
    <Box>
      <Container>
        <Row>
          <Column>
            <FooterLink href="#">About Us</FooterLink>
          </Column>
          <Column>
            <FooterLink href="#">Why Aggie Guide?</FooterLink>
          </Column>
          <Column>
            <FooterLink href="#">Need Help?</FooterLink>
          </Column>
          <Column>
            <FooterLink href="#">Bug Forum</FooterLink>
          </Column>
          <Column>
            <FooterLink href="#">Contact Us</FooterLink>
          </Column>
        </Row>
      </Container>
    </Box>
  );
};
export default Footer;