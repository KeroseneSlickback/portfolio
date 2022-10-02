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

export const StyledEmail: React.FC<SVGProps> = (props) => (
  <SvgContainer {...props}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      stroke-width="2"
      stroke="currentColor"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <rect x="3" y="5" width="18" height="14" rx="2"></rect>
      <polyline points="3 7 12 13 21 7"></polyline>
    </svg>
  </SvgContainer>
);
