import React from 'react'
import * as S from './GuideSection.styled'

interface GuideProps {
  title: string;
  step1: string;
  step2: string | null
  step3: string | null
}

export default function GuideSection(props: GuideProps) {
  return (
    <>
      <S.guideDiv>
        <S.guideTitle>
          {props.title}
        </S.guideTitle>
        <S.guideSection>
          {props.step1}
        </S.guideSection>
        <S.guideSection>
          {props.step2}
        </S.guideSection>
        <S.guideSection>
          {props.step3}
        </S.guideSection>
      </S.guideDiv>
    </>
  )
}
