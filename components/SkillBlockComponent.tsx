import Image from "next/image";
import styled from "styled-components";

const ImageWrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;
  width: 54px;
  height: 54px;
  box-shadow: 0 0 0 8px ${({ theme }) => theme.colors.backgroundPrimary};
  background: ${({ theme }) => theme.colors.backgroundPrimary};

  & > span {
  }

  p {
    font-size: 0.75rem;
    line-height: 0;
    margin-bottom: 0.5rem;
  }

  &:after {
    transition: 0.2s;
    position: absolute;
    content: "";
    bottom: -18%;
    right: -18%;
    background: ${({ theme }) => theme.colors.greenHighlight};
    width: 10%;
    height: 10%;
    z-index: -1;
  }

  &:before {
    transition: 0.2s;
    position: absolute;
    content: "";
    top: -18%;
    left: -18%;
    background: ${({ theme }) => theme.colors.greenHighlight};
    width: 10%;
    height: 10%;
    z-index: -1;
  }
  &:hover {
    box-shadow: 0 0 0 8px ${({ theme }) => theme.colors.backgroundPrimary};
    &:after {
      width: 136%;
      height: 136%;
    }
    &:before {
      width: 136%;
      height: 136%;
    }
  }
`;

const StyledImg = styled(Image)``;

const SkillBlock = ({ alt, src, height, width }) => {
  return (
    <ImageWrap>
      <StyledImg
        alt={alt}
        src={src}
        quality={70}
        height={height}
        width={width}
      />
      <p>{alt}</p>
    </ImageWrap>
  );
};

export default SkillBlock;
