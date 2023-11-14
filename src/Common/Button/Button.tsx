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
          <button>이전</button>
        </Link>

        {typeof props.nextLink === 'string' ? (
          <Link to={props.nextLink}>
            <button>다음</button>
          </Link>
        ) : typeof props.nextLink === 'boolean' ? (
          props.nextLink ? (
            <button>다음</button>
          ) : null
        ) : typeof props.nextLink === 'function' ? (
          <button onClick={props.nextLink}>다음</button>
        ) : null}
      </S.btnSection>
    </div>
  );
};

export default Button;
