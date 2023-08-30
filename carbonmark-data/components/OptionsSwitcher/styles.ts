import { css } from "@emotion/css";

export const list = css`
  border: 1px solid var(--text-color-01);
  border-radius: 4px;
  display: flex;
  list-style-type: none;
  padding: 0;
  font-weight: 500;
  font-size: 12px;
  li {
    padding: 4px 8px 4px 8px;
    color: var(--text-color-01);
    cursor: pointer;
  }
  li[data-selected="true"] {
    color: var(--surface-01);
    background-color: var(--text-color-01);
    cursor: default;
  }
`;