import { Link } from "react-router-dom";
import styled from "styled-components";
import { ComponentProvider } from "../components";

const WrapperNotFound = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    height: 80vh;
`

const NotFoundText = styled.div`
    font-size: 4rem;
    font-weight: 600;
    color: var(--color-primary);
`

export default function NotFound() {
    return (
        <ComponentProvider>
            <WrapperNotFound>
            <NotFoundText>404 Not Found</NotFoundText>
            </WrapperNotFound>
        </ComponentProvider>
    )
}