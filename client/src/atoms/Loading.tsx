import { CircularProgress } from "@mui/material";
import styled from "styled-components";

const WrapperLoading = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

function Loading() {
    return (
        <WrapperLoading>
        <CircularProgress color="secondary" />
        </WrapperLoading>
    );
}

export default Loading;
