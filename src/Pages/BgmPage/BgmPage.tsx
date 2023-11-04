import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import { bgmState } from '../recoil'
import * as S from './BgmPage.styled'
import YouTube from 'react-youtube'


export default function BgmPage() {
  const [videoId, setVideoId] = useRecoilState(bgmState)
  const [inputValue, setInputValue] = useState('');

  const handleVideoId = () => {
    const url = new URL(inputValue);
    const videoID = url.searchParams.get('v');
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

      <Link to="/image">
        <button>이전</button>
      </Link>
      <Link to="/check">
        <button>다음</button>
      </Link>

    </S.bgmDiv>
  )
}
