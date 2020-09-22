import React from 'react';
import { css } from '@emotion/core';
import BeatLoader from 'react-spinners/BeatLoader';

const override = css`
  display: block;
  margin: 0 auto;
  border-color: silver;
`;

function Spinner(props) {
  return (
    <div className="sweet-loading">
      <BeatLoader css={override} color={'#FFFFFF'} loading={props.loading} />
    </div>
  );
}

export default Spinner;
