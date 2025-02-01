import styled from 'styled-components';
import { SVGProps } from 'react';

export const StyledSVG = styled.svg<SVGProps<SVGSVGElement>>`
  width: 24px;
  height: 24px;
  fill: ${(props) => props.theme.colors.backgroundDark};
`;
