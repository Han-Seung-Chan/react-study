import { css } from 'styled-components';

const maxWidth = css`
  max-width: 720px;
  width: 100%;
  margin: 0 auto;
`;

const hidden = css`
  display: none;
`;

const flexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const flexBetween = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const textEllipsis = css`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export { maxWidth, hidden, flexCenter, flexBetween, textEllipsis };
