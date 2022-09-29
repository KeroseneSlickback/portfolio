import Image from "next/image";
import styled from "styled-components";

const ImageWrap = styled.div`
  position: relative;
  display: flex;
  width: 60px;
  height: 60px;
  padding: 2px;

  &:after {
    z-index: -1;
    transition: 0.2s;
    position: absolute;
    content: "";
    bottom: -14%;
    right: -14%;
    background-color: ${({ theme }) => theme.colors.greenHighlight};
    width: 10%;
    height: 10%;
  }

  &:before {
    z-index: -1;
    transition: 0.2s;
    position: absolute;
    content: "";
    top: -14%;
    left: -14%;
    background-color: ${({ theme }) => theme.colors.greenHighlight};
    width: 10%;
    height: 10%;
  }
  &:hover {
    &:after {
      width: 128%;
      height: 128%;
    }
    &:before {
      width: 128%;
      height: 128%;
    }
  }
`;

const PsuedoDiv = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.backgroundHighlight};
  box-shadow: 0 0 0 9px ${({ theme }) => theme.colors.backgroundHighlight};
  gap: 0.75rem;
  width: 100%;
  height: 100%;

  p {
    font-size: 0.75rem;
    line-height: 0;
    margin-bottom: 0.5rem;
  }
`;

const StyledImg = styled(Image)``;

const SkillBlock = ({ alt, src }) => {
  return (
    <ImageWrap>
      <PsuedoDiv>
        <StyledImg alt={alt} src={src} />
        <p>{alt}</p>
      </PsuedoDiv>
    </ImageWrap>
  );
};

export default SkillBlock;
