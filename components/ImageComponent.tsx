import Image from "next/image";
import styled from "styled-components";

const ImageWrap = styled.span`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: fit-content;
  height: fit-content;
  margin: 0 0.75rem;
  box-shadow: 0 0 0 8px ${({ theme }) => theme.colors.backgroundPrimary};
  background: ${({ theme }) => theme.colors.backgroundPrimary};

  & > span {
  }

  &:after {
    transition: 0.2s;
    position: absolute;
    content: "";
    bottom: -4%;
    right: -4%;
    background: ${({ theme }) => theme.colors.greenHighlight};
    width: 80%;
    height: 80%;
    z-index: -1;
  }

  &:before {
    transition: 0.2s;
    position: absolute;
    content: "";
    top: -4%;
    left: -4%;
    background: ${({ theme }) => theme.colors.greenHighlight};
    width: 80%;
    height: 80%;
    z-index: -1;
  }
  &:hover {
    box-shadow: 0 0 0 8px ${({ theme }) => theme.colors.backgroundPrimary};
    &:after {
      width: 108%;
      height: 108%;
    }
    &:before {
      width: 108%;
      height: 108%;
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
