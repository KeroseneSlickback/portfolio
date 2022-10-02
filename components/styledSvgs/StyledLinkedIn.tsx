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
      viewBox="2 2 20 20"
      stroke-width="1.5"
      stroke="currentColor"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <rect x="4" y="4" width="16" height="16" rx="2"></rect>
      <line x1="8" y1="11" x2="8" y2="16"></line>
      <line x1="8" y1="8" x2="8" y2="8.01"></line>
      <line x1="12" y1="16" x2="12" y2="11"></line>
      <path d="M16 16v-3a2 2 0 0 0 -4 0"></path>
    </svg>
  </SvgContainer>
);
