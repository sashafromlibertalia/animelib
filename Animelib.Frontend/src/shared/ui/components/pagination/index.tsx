import React, { forwardRef } from "react";
import { Button, makeStyles, shorthands, tokens } from "@fluentui/react-components";

type PaginationProps = {
  total: number;
  current: number;
  onChange?: (page: number) => void;
};

const usePaginationStyles = makeStyles({
  root: {
    display: "flex",
    ...shorthands.gap("8px"),
    alignItems: "center",
    flexWrap: "wrap",
    marginTop: tokens.spacingVerticalXXL,
  },
  page: {
    minWidth: "unset",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});

export const Pagination = forwardRef<HTMLDivElement, PaginationProps>((props, ref) => {
  const { total, current, onChange } = props;
  const styles = usePaginationStyles();

  return (
    <div ref={ref} className={styles.root}>
      {
        Array.from({ length: total }, (_, i) => i + 1).map((page) => {
          const isActive = page === current;

          return (
            <Button
              size={"large"}
              key={page}
              className={styles.page}
              appearance={isActive ? "primary" : "subtle"}
              onClick={() => onChange && onChange(page)}>
              {page}
            </Button>
          );
        })
      }
    </div>
  );
});

Pagination.displayName = "Pagination";
