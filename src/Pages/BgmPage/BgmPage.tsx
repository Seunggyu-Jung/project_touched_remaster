import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import { bgmState } from '../recoil'
import Button from '../../Common/Button/Button'
import * as S from './BgmPage.styled'
import YouTube from 'react-youtube'


export default function BgmPage() {
  const [videoId, setVideoId] = useRecoilState(bgmState)
  const [inputValue, setInputValue] = useState('');

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
    <S.bgmDiv>
      <h1>원하는 유튜브 bgm ID를 입력하는 페이지 입니다.</h1>
      <S.bgmGuide>
        <S.pcGuide>
          <h2>1. PC버전으로 bgmID 입력하는 방법</h2>
          <p>페이지 상단에 있는 페이지 주소(URL)을 복사해서 입력란에 붙여주세요.</p>
        </S.pcGuide>
        <S.mobileGuide>
          <h2>2. 모바일 버전으로 bgmID입력하는 방법</h2>
          <p>영상 하단의 공유 버튼을 클릭한 후, 링크복사를 한 뒤, 입력란에 붙여주세요.</p>
        </S.mobileGuide>
      </S.bgmGuide>
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
        <input type="text" value={inputValue} onChange={handleInputChange} />
        <button onClick={handleVideoId}>업로드</button>
      </form>

      <Button previousLink='/image' nextLink='/check' />

    </S.bgmDiv>
  )
}
