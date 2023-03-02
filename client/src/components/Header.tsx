import styled from "styled-components"
import ButtonComponent from "./Button";
import Container from '@mui/material/Container';

const WrapperHeader = styled.div`
    height: 4rem;
    background-color: var(--color-primary);
    color:  var(--color-secondary);
`

const WrapperContent = styled.div`
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Logo = styled.p`
    font-size: 2rem;
    font-weight: 600;
    margin: 0;
    color: var(--color-additional)
`

interface HeaderProps {
    fromUnauth?: boolean
}

function Header({fromUnauth}: HeaderProps) {
    const handleOnClick = () => {
        console.log('click button')
    }
    return (
        <WrapperHeader>
            <Container style={{height: '100%'}}>
                <WrapperContent>
                    <Logo>aliChat</Logo>
                    {!fromUnauth && <ButtonComponent color="light" text="Log Out" onClick={handleOnClick} />}
                </WrapperContent>
            </Container>
        </WrapperHeader>
    );
}

export default Header;
