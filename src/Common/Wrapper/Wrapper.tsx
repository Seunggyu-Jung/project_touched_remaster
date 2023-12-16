import React, { ReactNode } from 'react'
import * as S from './Wrapper.styled'

interface GlobalLayoutProps {
  children: ReactNode;
}

export default function Wrapper({ children }: GlobalLayoutProps) {

  return (
    <S.commonDiv>
      {children}
    </S.commonDiv>
  )
}
