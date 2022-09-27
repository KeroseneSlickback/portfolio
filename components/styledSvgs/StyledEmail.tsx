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
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        xmlns="http://www.w3.org/2000/svg"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M16 20.064A9 9 0 1121 12v1.5a2.5 2.5 0 01-5 0V8m0 4a4 4 0 11-8 0 4 4 0 018 0z"
      />
    </svg>
  </SvgContainer>
);
