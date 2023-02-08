import { globalStyles } from "@/styles/global";
import * as S from "@/styles/pages/app";
import AppProps from "next/app";
import Image from "next/image";
import logoImg from "../assets/logo.svg";

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <S.Container>
      <S.Header>
        <Image src={logoImg} alt="" />
      </S.Header>
      <Component {...pageProps} />
    </S.Container>
  );
}
