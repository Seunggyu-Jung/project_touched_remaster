import React, { useState } from 'react'
import * as S from './Footer.styled'
import Modal from '../Modal/Modal';
import { Link } from 'react-router-dom';


export default function Footer() {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const clickContact = () => setIsModalOpen(true);

  const closeModal = () => setIsModalOpen(false);
  return (
    <>
      <S.footer>
        <S.footerSection>
          <div>
            <S.footerTitle>감동 프로젝트</S.footerTitle>
            <p>본 웹페이지는 포트폴리오용 비영리 페이지 입니다.</p>
            <p>프론트엔드 개발자 정승규. ©2023. All Rights Reserved.</p>
          </div>
          <S.contectButton onClick={clickContact}>More About Me</S.contectButton>

        </S.footerSection>

      </S.footer>
      {isModalOpen &&
        <Modal closeModal={closeModal}>
          <S.modalContainer>
            <p>페이지 개발자에 더 알아보기</p>
            <Link to="https://github.com/Seunggyu-Jung">
              <S.modalAnchor>정승규의 GitHub</S.modalAnchor>
            </Link>
            <Link to="https://velog.io/@dainel-q">
              <S.modalAnchor>정승규의 Blog</S.modalAnchor>
            </Link>
            <Link to="https://velog.io/@dainel-q">
              <S.modalAnchor>정승규의 포트폴리오</S.modalAnchor>
            </Link>
          </S.modalContainer>
        </Modal>
      }
    </>
  )
}
