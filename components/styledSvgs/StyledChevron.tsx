import styled, { css } from "styled-components";

interface SVGProps {
  height?: string;
  width?: string;
}

const SvgContainer = styled.div<SVGProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${(props) => props.height || "100%"};
  width: ${(props) => props.height || "100%"};
  svg {
    height: ${(props) => props.height || "100%"};
    width: ${(props) => props.height || "100%"};
  }
`;

export const StyledChevron: React.FC<SVGProps> = (props) => (
  <SvgContainer {...props}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  </SvgContainer>
);
