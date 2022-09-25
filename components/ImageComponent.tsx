import Image from "next/image";
import styled from "styled-components";

const ImageWrap = styled.span`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: fit-content;
  height: 100%;
  box-shadow: 0 0 0 6px ${({ theme }) => theme.colors.backgroundPrimary};

  & > span {
  }

  &:after {
    transition: 0.2s;
    position: absolute;
    content: "";
    bottom: -3%;
    right: -3%;
    background: ${({ theme }) => theme.colors.greenHighlight};
    width: 80%;
    height: 80%;
    z-index: -1;
  }

  &:before {
    transition: 0.2s;
    position: absolute;
    content: "";
    top: -3%;
    left: -3%;
    background: ${({ theme }) => theme.colors.greenHighlight};
    width: 80%;
    height: 80%;
    z-index: -1;
  }
  &:hover {
    box-shadow: 0 0 0 6px ${({ theme }) => theme.colors.backgroundSecondary};
    &:after {
      width: 106%;
      height: 106%;
    }
    &:before {
      width: 106%;
      height: 106%;
    }
  }
`;

const StyledImg = styled(Image)``;

const ImageComponent = ({ alt, src, height, width }) => {
  return (
    <ImageWrap>
      <StyledImg
        alt={alt}
        src={src}
        quality={70}
        height={height}
        width={width}
      />
    </ImageWrap>
  );
};

export default ImageComponent;
