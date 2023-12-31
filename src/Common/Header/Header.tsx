import React, { useState } from 'react';
import * as S from './Header.styled';

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  const [clickMenu, setClickMenu] = useState(false);
  const [menuDefault, setMenuDefault] = useState(false);

  const handleMenu = () => {
    if (clickMenu === false) {
      setClickMenu(true);
    } else {
      setClickMenu(false);
    }
    setMenuDefault(true);
  };


  return (
    <>
      <S.headerWrapper>
        <S.header>
          <S.homeBtn to="/">
            <S.hoveredText>Welcome 페이지로 이동하기</S.hoveredText></S.homeBtn>
          <h1>{title}</h1>
          <S.menuContainer>
            <S.menuButton onClick={handleMenu}>
              <div className={`menu-trigger ${clickMenu ? 'active-1' : ''}`}>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </S.menuButton>
            {menuDefault && (
              <S.headerUl menuVisible={clickMenu}>
                <li>
                  <S.headerLink to="/">Welcom</S.headerLink>
                </li>
                <li>
                  <S.headerLink to="/background">배경</S.headerLink>
                </li>
                <li>
                  <S.headerLink to="/info">정보</S.headerLink>
                </li>
                <li>
                  <S.headerLink to="/write">편지작성</S.headerLink>
                </li>
                <li>
                  <S.headerLink to="/image">사진</S.headerLink>
                </li>
                <li>
                  <S.headerLink to="/bgm">배경음악</S.headerLink>
                </li>
              </S.headerUl>
            )}
          </S.menuContainer>
        </S.header>
      </S.headerWrapper>
    </>
  );
};

export default Header;
