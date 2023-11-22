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
        <S.guideSteps>
          {props.step1}
        </S.guideSteps>
        <S.guideSteps>
          {props.step2}
        </S.guideSteps>
        <S.guideSteps>
          {props.step3}
        </S.guideSteps>
      </S.guideDiv>
    </>
  )
}
