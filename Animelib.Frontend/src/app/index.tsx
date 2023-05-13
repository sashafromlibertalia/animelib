import { RouterDOMProvider } from "@app/providers";
import { FluentProvider, makeStyles, Spinner, teamsDarkTheme, Theme } from "@fluentui/react-components";
import "./index.css";
import { useStaticStyles } from "@app/index.css";
import { vars } from "@shared";
import { Suspense } from "react";

export const useProviderStyles = makeStyles({
  provider: {
    backgroundColor: "inherit",
  },
});

const customTheme: Theme = {
  ...teamsDarkTheme,
  colorNeutralBackground1: vars.colors.bgStroke.secondary,
};

export const App = () => {
  const styles = useProviderStyles();
  useStaticStyles();

  return (
    <Suspense fallback={<Spinner size={"large"} />}>
      <FluentProvider className={styles.provider} theme={customTheme}>
        <RouterDOMProvider />
      </FluentProvider>
    </Suspense>
  );
};
