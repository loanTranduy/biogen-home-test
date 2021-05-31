import { FC } from "react";
import styled from "styled-components";

export const Wrapper = styled.div<WProps>`
  p, h1, h2, h3, h4, h5, h6{
    display: -webkit-box;
    -webkit-line-clamp: ${(props: Props) => props.maxLine};
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

type WProps = {
    maxLine: number
}

type Props = {
    maxLine: number
}

const MultilineEllipsis:FC<Props> = ({children, maxLine}) => {
    return (
        <Wrapper maxLine={maxLine}>
            {children}
        </Wrapper>
    )
}

export default MultilineEllipsis
