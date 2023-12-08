import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { userState, nameState } from '../recoil';
import Button from '../../Common/Button/Button'
import Guide from '../../Common/GuideSection/GuideSection';
import Modal from '../../Common/Modal/Modal';
import * as S from './InfoPage.styled';
import * as M from '../../Common/Modal/ModalBox.styled';

export default function InfoPage() {
  const [user, setUser] = useRecoilState(userState);
  const [name, setName] = useRecoilState(nameState);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [warningMsg, setWarningMsg] = useState("");

  const closeModal = () => setIsModalOpen(false);

  const navigate = useNavigate();


  const handleEmty = () => {
    if (user.toString().trim().length === 0) {
      setWarningMsg("당신의 성함을 입력해주세요!");
      setIsModalOpen(true);
    } else if (name.toString().trim().length === 0) {
      setWarningMsg("편지를 받을 분의 성함을 입력해주세요!");
      setIsModalOpen(true);
    } else {
      navigate('/write')
    }
  }

  return (
    <>
      <S.InfoDiv>
        <h1>편지에 작성할 기본 정보들을 입력하는 단계입니다.</h1>
        <Guide title='발신자와 수신자 설정 방법' step1='1. 상단에 있는 칸에는 발신자 분의 성함을 입력해주세요.' step2='2. 수신 하단에 있는 칸에는 수신자 분의 성함을 입력해주세요.'
          step3='*해당 정보는 필수 정보이기에 꼭 입력해주세요!!' ></Guide>

        <form>
          <p>당신의 성함은?</p>
          <input
            type="text"
            value={user}
            onChange={(e) => setUser(e.target.value)}
            placeholder='발신자 성함'
          />
          <p>이 편지를 받고 감동할 분의 성함은?</p>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder='수신자 성함'
          />
        </form>

        <Button previousLink='/background' nextLink={handleEmty} />
      </S.InfoDiv>
      {isModalOpen &&
        <Modal closeModal={closeModal}>
          <M.modalContainer>
            <h2>잠깐!</h2>
            <p>{warningMsg}</p>
            <p>닫기 : 빈 화면 클릭 or ESC</p>
          </M.modalContainer>
        </Modal>
      }
    </>

  );
}
