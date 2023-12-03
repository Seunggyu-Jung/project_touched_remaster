import React, { useState } from 'react'
import * as S from './Header.styled'
import { guide2 } from '../../img/img'
import { Link } from 'react-router-dom'


export default function Header() {

  const [menuText, setMenuText] = useState("메뉴 펼치기")
  const [clickMenu, setClickMenu] = useState(false);

  const handleMenu = () => {
    if (clickMenu === false) {
      setClickMenu(true)
      setMenuText("메뉴 접기")
    } else {
      setClickMenu(false)
      setMenuText("메뉴 펼치기")
    }
  }

  return (
    <>
      <S.headerWrapper>
        <S.header>
          <img src={guide2} alt="" />
          <h1>감동 프로젝트</h1>
          <div>
            <S.menuContainer>
              <S.menuButton onClick={handleMenu}>{menuText}</S.menuButton>
              {clickMenu &&
                <S.headerUl>
                  <li> <S.headerLink to="/" >처음</S.headerLink></li>
                  <li><S.headerLink to="/background">배경</S.headerLink></li>
                  <li><S.headerLink to="/info">정보</S.headerLink></li>
                  <li><S.headerLink to="/write">편지작성</S.headerLink></li>
                  <li><S.headerLink to="/image">사진</S.headerLink></li>
                  <li><S.headerLink to="/bgm">배경음악</S.headerLink></li>
                </S.headerUl>
              }
            </S.menuContainer>
          </div>

        </S.header>
      </S.headerWrapper>
    </>
  )
}
