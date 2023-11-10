import React, { useState, useEffect } from 'react'
import { userState, nameState } from '../recoil'
import { useRecoilValue } from 'recoil'
import { guide1, guide2, guide3 } from '../../img/img'
import { Link } from 'react-router-dom'
import * as S from './CheckPage.styled'


export default function CheckPage() {
  const user = useRecoilValue(userState);
  const name = useRecoilValue(nameState);
  const [defaultImg, setDefaultImg] = useState(guide1);
  const [defaultText, setDefaultText] = useState(true);
  const [trueText, setTrueText] = useState(false);
  const [falseText, setFalseText] = useState(false);
  const [btnAble, setBtnAble] = useState<'auto' | 'none' | 'visiblePainted' | 'visibleFill' | undefined>('none')


  const handleTrue = () => {
    setDefaultImg(guide2)
    setDefaultText(false)
    setFalseText(false)
    setTrueText(true)
    setBtnAble('auto')
  }

  const handleFalse = () => {
    setDefaultImg(guide3)
    setDefaultText(false)
    setFalseText(true)
  }


  return (
    <S.checkDiv>
      {defaultText &&
        <S.textSection>
          <p>안녕하세요, {name}! {user}님으로 부터 편지가 도착했습니다.</p>
          <p>{name}님 본인이 맞으실까요??</p>
        </S.textSection>
      }
      {trueText &&
        <S.textSection>
          <p>제가 잘 찾아왔네요, 만나서 반가워요 {name}님!</p>
          <p>저를 클릭하셔서 편지를 읽어주세요!!</p>
        </S.textSection>
      }
      {falseText &&
        <S.textSection>
          <p>어... 그래요?! 죄송합니다;;</p>
          <p>전 이만 가볼게용...ㅎㅎ;;</p>
        </S.textSection>
      }
      <Link to='/test' style={{ pointerEvents: btnAble }}>
        <S.guideImg src={defaultImg} alt="" />
      </Link>

      {falseText &&
        <S.falseText>
          <S.answerAgian onClick={handleTrue}>생각해보니 맞는 것 같아!</S.answerAgian>
        </S.falseText>
      }

      {defaultText &&
        <S.BtnSection>
          <button onClick={handleTrue}>맞아</button>
          <button onClick={handleFalse}>...아닌데?</button>
        </S.BtnSection>
      }

    </S.checkDiv>
  )
}
