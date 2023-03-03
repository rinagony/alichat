import { Button, Container } from "@mui/material";
import styled from "styled-components";
import { Header } from "../components";
import { useAuth } from "../helpers/auth";
import GoogleIcon from '../assets/images/google.svg'
import { useAppDispatch } from "../redux/hooks";
import checkIfUserLogedInAction from "../redux/actions";

const Wrapper = styled.div`
  height: 80vh;
`

const ContainerComponent = styled(Container)`
  height: 100%;
`

const UnauthWrapper = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const ButtonGoogle = styled.button`
  padding: 0.5rem;
  border-radius: 6px;
  font-size: 1.4rem;
  color: var(--color-primary);
  border: 2px solid var(--color-primary);
  font-weight: 600;
  cursor: pointer;
  background: #fff;

  &:hover {
    transition: 0.4s;
    background: var(--color-secondary);
  }
`

const Description = styled.p`
  font-size: 1.1rem;
  max-width: 60%;
  margin-bottom: 2rem;
  text-align: center;
`

const Icon = styled.img`
  height: 20px;
  margin-left: 10px;
`

function Unauthenticated() {
  const { login } = useAuth();
  const dispatch = useAppDispatch();
  const handleOnClick = () => {
    login().then(() => {
      checkIfUserLogedInAction(dispatch)
    })
  }
  return (
    <Wrapper>
      <Header fromUnauth />
      <ContainerComponent maxWidth="lg">
        <UnauthWrapper>
          <Description>
            AliChat is a messaging tool that allows you to send and receive messages from your friends and connect with people from all over the world!
          </Description>
          <ButtonGoogle color="primary" onClick={handleOnClick} className="login">
            Login with Google
            <Icon src={GoogleIcon} alt="Logo" />
          </ButtonGoogle>
        </UnauthWrapper>
      </ContainerComponent>
    </Wrapper>
  );
}

export default Unauthenticated;