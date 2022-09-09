import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 116px auto;
    grid-template-areas: 
    "header"
    "content";

    .tags {
        display: flex;
        flex-wrap: wrap;
        gap: 24px;
        height: 88px;
        padding: 16px;
        border-radius: 8px;
        margin-bottom: 40px;
        background-color: ${({ theme }) => theme.COLORS.BLACK};
        align-items: flex-start;
    }

    .buttons {
        display: flex;
        gap: 40px;
        margin-bottom: 60px;
    }
`;

export const Form = styled.form`
    max-width: 100%;
    margin: 40px 123px auto;

    > header {
        display: block;
        align-items: center;
        justify-content: space-between;

        margin-bottom: 36px;

        h1 {
            font-size: 36px;
            margin: 24px 0 40px;
        }
    }

    > .title {
        display: flex;
        gap: 40px;
        margin-bottom: 30px;
    }

    .buttons button:first-child {
    background-color: ${({ theme }) => theme.COLORS.BLACK};
    color: ${({ theme }) => theme.COLORS.BLUE};
  }
`;
