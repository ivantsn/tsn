import styled from '@emotion/styled';

export const Container = styled.section`
  display: flex;
  flex-flow: column wrap;
  align-items: flex-start;

  & a {
    &:after {
      display: none;
    }
  }
`;

export const Title = styled.h3`
  margin-top: 0;
`;

export const Metadata = styled.small`
  opacity: 0.8;
`;

export const Spoiler = styled.p`
  margin-bottom: 0;
`;
