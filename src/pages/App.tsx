import react from 'react';
import { Template } from '../components/templates/Template';
import { css } from '@emotion/react';

const sampleStyle = css`
  width: 100%;
  color: red;
`;

export const App = () => {
  return (
    <div>
      <div css={sampleStyle}>App</div>
      <Template />
    </div>
  );
};
