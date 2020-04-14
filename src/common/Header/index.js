import React from "react";
import SoundWidget from "../SoundWidget";
import logoUrl from "../../assets/images/logo.png";
import { Container, Logo, LogoWrapper, SoundWidgetWrapper } from "./style";

export default function Header() {
  return (
    <Container>
      <LogoWrapper>
        <Logo src={logoUrl} alt="logo" />
      </LogoWrapper>
      <SoundWidgetWrapper>
        <SoundWidget />
      </SoundWidgetWrapper>
    </Container>
  );
}
