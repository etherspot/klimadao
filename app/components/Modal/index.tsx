import { FC } from "react";
import Close from "@mui/icons-material/Close";
import { cx } from "@emotion/css";
import { Text } from "@klimadao/lib/components";

import * as styles from "./styles";

interface Props {
  title: React.ReactNode;
  onToggleModal?: () => void;
  className?: string;
}

export const Modal: FC<Props> = (props) => {
  const showCloseButton = !!props.onToggleModal;
  return (
    <>
      <div
        className={cx(styles.modalBackground, {
          showCloseButton,
        })}
        onClick={props.onToggleModal}
      />
      <div className={styles.modalContainer}>
        <div className={cx(styles.modalContent, props.className)}>
          <div className={styles.title}>
            <Text>{props.title}</Text>
            {showCloseButton && (
              <button
                className={styles.closeButton}
                onClick={props.onToggleModal}
              >
                <Close />
              </button>
            )}
          </div>
          {props.children}
        </div>
      </div>
    </>
  );
};