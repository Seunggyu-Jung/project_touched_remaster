import React from 'react'
import { Link } from 'react-router-dom';
import * as S from './Button.styled'


interface ButtonProps {
  previousLink: string;
  nextLink: string;
}

const Button: React.FC<ButtonProps> = (props) => {
  return (
    <div>
      <S.btnSection>
        <Link to={props.previousLink}>
          <button>이전</button>
        </Link>

        <Link to={props.nextLink}>
          <button>다음</button>
        </Link>
      </S.btnSection>
    </div>
  );
};

export default Button;
