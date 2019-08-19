import React from 'react';
import styled from 'styled-components';

import STYLE from '@src/STYLE';

const S = Object.freeze({
  OrLine2: styled.div`
    width: 164px;
    height: 2px;
    background-color: ${STYLE.color.darkPrimary};
    border-radius: 99px;
  `,
});

export const OrLine2 = () => <S.OrLine2 />;
