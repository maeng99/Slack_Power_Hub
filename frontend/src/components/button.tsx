import React from 'react';
import { useState } from 'react';
import styled, { css } from 'styled-components';

type ButtonType = 'primary' | 'secondary' | 'destructive' | 'logout';
type Size = 'small' | 'medium' | 'large';

type ButtonProps = {
    onClick?: () => void;
    type?: ButtonType;
    size?: Size;
    title: string;
};

const ButtonContainer = styled.div<{
    type: 'primary' | 'secondary' | 'destructive' | 'logout';
    size: 'small' | 'medium' | 'large';
}>`
    border: 1px rgba(0, 0, 0, 0.3) solid;
    border-radius: 8px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    display: flex;
    background-color: ${(props) =>
        props.type === 'primary'
            ? '#FFC8C8'
            : props.type === 'secondary'
            ? '#CBD1D9'
            : props.type === 'destructive'
            ? '#FFF6F6'
            : '#FFF'};
    color: ${(props) =>
        props.type === 'primary'
            ? 'white'
            : props.type === 'secondary'
            ? '##EEF1F3'
            : props.type === 'destructive'
            ? '#FF3E3E'
            : '#000'};
    cursor: pointer;

    ${(props) =>
        props.size === 'large' &&
        css`
            height: 50px;
            font-size: 1.25rem;
            width: 250px;
            text-align: center;
        `}
    ${(props) =>
        props.size === 'medium' &&
        css`
            height: 40px;
            font-size: 1rem;
            width: 150px;
            text-align: center;
        `}
  ${(props) =>
        props.size === 'small' &&
        css`
            height: 18px;
            font-size: 0.75rem;
            width: 60px;
            text-align: center;
        `}
  &:hover {
        background-color: ${(props) =>
            props.type === 'primary'
                ? '#1065ED'
                : props.type === 'secondary'
                ? '#FFB8B8'
                : props.type === 'secondary'
                ? '#FFDFDF'
                : '#FFF'};
    }
`;

const ButtonTitle = styled.p`
    font-weight: 500;

    &:hover {
        font-weight: 600;
    }
`;

export default function Button(props: ButtonProps) {
    const { type, size, title, onClick = () => {} } = props;
    const [hover, setHover] = useState(false);
    return (
        <ButtonContainer
            type={type}
            size={size}
            onClick={onClick}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            <ButtonTitle>{title}</ButtonTitle>
        </ButtonContainer>
    );
}
