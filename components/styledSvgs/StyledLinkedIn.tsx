import styled, { css } from "styled-components";

interface SVGProps {
  blue?: boolean;
}

const SvgContainer = styled.div<SVGProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  svg {
    height: 100%;
    width: 100%;
  }

  ${(props) =>
    props.blue &&
    css`
      svg {
        stroke: ${({ theme }) => theme.colors.blueHighlight};
      }
    `}
`;

export const StyledLinkedIn: React.FC<SVGProps> = (props) => (
  <SvgContainer {...props}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <title>LinkedIn</title>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
      <rect x="2" y="9" width="4" height="12"></rect>
      <circle cx="4" cy="4" r="2"></circle>
    </svg>
  </SvgContainer>
);
