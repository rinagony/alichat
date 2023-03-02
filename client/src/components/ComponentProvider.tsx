import styled from "styled-components"
import Header from "./Header";
import Sidebar from "./Sidebar";
import Container from '@mui/material/Container';

interface ComponentProviderInterface {
    children: React.ReactNode;
}

function ComponentProvider({ children }: ComponentProviderInterface) {
    return (
        <>
            <Header />
            <Container maxWidth="lg">
                <Sidebar>
                    {children}
                </Sidebar>
            </Container>
        </>
    );
}

export default ComponentProvider;
