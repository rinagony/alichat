import styled from "styled-components";
interface ButtonProps {
    onClick: () => void;
    text: string;
    color: string;
}

const ButtonStyledComponent = styled.button<{color: string}>`
background-color: ${props => props.color === 'light' ? 'var(--color-secondary)' : 'var(--color-additional)'};
border: none;
cursor: pointer;
border-radius: 5px;
font-weight: 600;
padding: 10px 15px;

`;

function ButtonComponent({ text, onClick, color }: ButtonProps) {
    return (
        <ButtonStyledComponent color={color} onClick={onClick}>{text}</ButtonStyledComponent>
    );
}

export default ButtonComponent;
