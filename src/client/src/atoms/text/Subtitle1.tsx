import styled from 'styled-components';

import { Text } from '@atoms/helpers/Text';
import STYLES from '@src/STYLE';

export const Subtitle1 = styled(Text)`
  font-family: ${STYLES.text.subtitle1.fontFamily};
  font-weight: ${STYLES.text.subtitle1.fontWeight};
  font-size: ${STYLES.text.subtitle1.fontSize};
  line-height: ${STYLES.text.subtitle1.lineHeight};
  letter-spacing: ${STYLES.text.subtitle1.letterSpacing};
  color: ${STYLES.color.darkPrimary};
`;
