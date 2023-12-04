import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './FirstPage.styled';
import Header from '../../Common/Header/Header';
import Footer from '../../Common/Footer/Footer';

export default function FirstPage() {
  return (
    <S.mainDiv>
      <Header />
      <h1>스타트 페이지</h1>
      <p>감사한 분에게 여러분만의 편지를 만들어 마음을 전달해봐요</p>
      <Link to="/background">
        <button>편지 작성하러 이동</button>
      </Link>
      <Footer />
    </S.mainDiv>
  );
}
