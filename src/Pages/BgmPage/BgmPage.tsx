import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useRecoilState, useRecoilValue } from 'recoil'
import { userState, nameState, textState, bgmState } from '../recoil'
import Modal from '../../Common/Modal/Modal'
import Button from '../../Common/Button/Button'
import Header from '../../Common/Header/Header'
import Footer from '../../Common/Footer/Footer'
import Wrapper from '../../Common/Wrapper/Wrapper'
import { guide2 } from '../../img/img'
import { guide3 } from '../../img/img'
import * as S from './BgmPage.styled'
import * as M from '../../Common/Modal/ModalBox.styled';
import YouTube from 'react-youtube'


export default function BgmPage() {
  const [videoId, setVideoId] = useRecoilState(bgmState)
  const [inputValue, setInputValue] = useState('');
  const user = useRecoilValue(userState);
  const name = useRecoilValue(nameState);
  const text = useRecoilValue(textState);
  const [modalText, setModalText] = useState("");
  const [modalLink, setModalLink] = useState("");
  const [modalBackground, setModalBackground] = useState(guide3);
  const [modalState, setModalState] = useState("잠깐!")
  const [isModalOpen, setIsModalOpen] = useState(false);


  const closeModal = () => setIsModalOpen(false);

  const handleEmty = () => {
    if (user.toString().trim().length === 0) {
      setModalText("당신의 성함을 입력해주세요!");
      setModalLink("/info")
      setIsModalOpen(true);
    } else if (name.toString().trim().length === 0) {
      setModalText("편지를 받을 분의 성함을 입력해주세요!");
      setModalLink("/info")
      setIsModalOpen(true);
    } else if (text.toString().trim().length === 0) {
      setModalText("편지내용을 작성해주세요!");
      setModalLink("/write")
      setIsModalOpen(true);
    } else {
      setModalBackground(guide2)
      setModalText("완성된 페이지를 보러갑시다!");
      setModalLink("/check");
      setModalState("페이지가 완성되었어요!")
      setIsModalOpen(true);
    }
  }

  const extractVideoId = (url: string): string | null => {
    const shortUrlMatch = url.match(/youtu\.be\/([^?]+)/)
    if (shortUrlMatch) {
      return shortUrlMatch[1];
    }

    const longUrlMatch = url.match(/[?&]v=([^&]+)/);
    if (longUrlMatch) {
      return longUrlMatch[1];
    }

    return null;
  }


  const handleVideoId = () => {
    const videoID = extractVideoId(inputValue)
    if (videoID !== null) {
      setVideoId(videoID);
    } else {
      setVideoId('BDY7VAxGb24');
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  }


  return (
    <>
      <Header title='BGM_Page' />
      <Wrapper>
        <h1>BGM을 등록하는 페이지 입니다.</h1>
        <S.bgmGuide>
          <S.pcGuide>
            <S.guideTitle>1. PC버전으로 BGM ID 입력하는 방법</S.guideTitle>
            <p> - 페이지 상단에 있는 페이지 주소(URL)을 복사해서 입력란에 붙여주세요.</p>
          </S.pcGuide>
          <S.mobileGuide>
            <S.guideTitle>2. 모바일 버전으로 BGM ID입력하는 방법</S.guideTitle>
            <p> - 영상 하단의 공유 버튼을 클릭한 후, 링크복사를 한 뒤, 입력란에 붙여주세요.</p>
          </S.mobileGuide>
        </S.bgmGuide>
        <S.bgmSection>
          <YouTube videoId={videoId}
            opts={{
              width: '300',
              height: '200',
              playerVars: {
                autoplay: 1,
                rel: 0,
                modestbranding: 1,
              }
            }}
          />
          <form onSubmit={e => e.preventDefault()}>
            <input type="text" value={inputValue} onChange={handleInputChange} placeholder='url을 붙여주세요!' />
            <button onClick={handleVideoId}>업로드</button>
          </form>

        </S.bgmSection>


        <Button previousLink='/image' nextLink={handleEmty} />
      </Wrapper>
      {isModalOpen &&
        <Modal closeModal={closeModal}>
          <M.modalContainer style={{ backgroundImage: modalBackground, backgroundSize: 'cover', backgroundPosition: 'center center' }}>
            <h2>{modalState}</h2>
            <p>{modalText}</p>
            <Link to={modalLink}>해당페이지로 가기</Link>
            <p>닫기 : 빈 화면 클릭 or ESC</p>
          </M.modalContainer>
        </Modal>
      }
      <Footer />
    </>

  )
}
