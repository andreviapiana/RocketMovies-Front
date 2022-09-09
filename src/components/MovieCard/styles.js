import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 222px;
    margin-bottom: 24px;

    display: grid;
    grid-template-rows: 116px auto;
    grid-template-areas:
    "header"
    "content";

    > .movies {
        background: ${({ theme }) => theme.COLORS.BACKGROUND_700};
        height: 222px;
        padding: 30px;
        border-radius: 16px;
    }

    > .movies p {
        color: ${({ theme }) => theme.COLORS.GRAY_300};
        height: 45px;
        overflow: auto;
        overflow: overlay;
        text-align: justify;
        margin: 15px 0 15px;
    }

    .tags {
        display: flex;
        gap: 15px;
        margin-top: 15px;
    }
`;