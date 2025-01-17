import { FC, ReactNode } from "react";
import layout from "theme/layout.module.scss";

export const TwoColumnRetirementTrendsTab: FC<{
  leftColumn: Array<ReactNode>;
  rightColumn: Array<ReactNode>;
  className?: string;
}> = ({ leftColumn, rightColumn, className }) => {
  return (
    <div className={`${layout.twoColumns} ${className ? className : ""}`}>
      <div className={layout.cardStackedRows}>
        {leftColumn.map((node, key) => {
          return (
            <div className={layout.cardRow} key={key}>
              {node}
            </div>
          );
        })}
      </div>
      <div className={layout.cardStackedRows}>
        {rightColumn.map((node, key) => {
          return (
            <div className={layout.cardRow} key={key}>
              {node}
            </div>
          );
        })}
      </div>
    </div>
  );
};
