import styled from "styled-components";

export const Container = styled.header`
    grid-area: header;

    height: 116px;
    width: 100%;

    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

    display: flex;
    justify-content: space-between;

    padding: 0 123px;
`;

export const Profile = styled.div`
    display: flex;
    align-items: center;
    text-align: end;
    margin-left: 64px;

    > img {
        width: 64px;
        height: 64px;
        border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.COLORS.BLUE};
    }

    > div {
        display: flex;
        flex-direction: column;
        margin-right: 16px;
        line-height: 24px;

        span {
            font-size: 14px;
            color: ${({ theme }) => theme.COLORS.GRAY_100};
        }

        strong {
            font-size: 18px;
            overflow: hidden;
            white-space: nowrap;
            color: ${({ theme }) => theme.COLORS.WHITE};
        }
    }
`;

export const Logo = styled.div`
    display: flex;
    align-items: center;
    margin-right: 64px;
    color: ${({ theme }) => theme.COLORS.BLUE};

    h1 {
        font-size: 24px;
    }
`;

export const Search = styled.div`
    grid-area: content;
    display: flex;
    align-items: center;
    width: 100%;
`;
