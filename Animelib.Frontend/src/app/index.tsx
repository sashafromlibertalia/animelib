import { RouterProvider } from "@app/providers";
import { FluentProvider, makeStyles, Spinner, teamsDarkTheme, Theme } from "@fluentui/react-components";
import "./styles.css";
import { useStaticStyles } from "@app/styles.css";
import { vars } from "@shared/ui/styles";
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
        <RouterProvider />
      </FluentProvider>
    </Suspense>
  );
};
