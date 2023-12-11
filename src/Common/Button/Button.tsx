import React from 'react'
import { Link } from 'react-router-dom';
import * as S from './Button.styled'


interface ButtonProps {
  previousLink: string;
  nextLink: string | boolean | (() => void);
}

const Button: React.FC<ButtonProps> = (props) => {
  return (
    <div>
      <S.btnSection>
        <Link to={props.previousLink}>
          <S.btnButton>이전</S.btnButton>
        </Link>

        {typeof props.nextLink === 'string' ? (
          <Link to={props.nextLink}>
            <S.btnButton>다음</S.btnButton>
          </Link>
        ) : typeof props.nextLink === 'boolean' ? (
          props.nextLink ? (
            <S.btnButton>다음</S.btnButton>
          ) : null
        ) : typeof props.nextLink === 'function' ? (
          <S.btnButton onClick={props.nextLink}>다음</S.btnButton>
        ) : null}
      </S.btnSection>
    </div>
  );
};

export default Button;
