import { RouterProvider } from "@app/providers";
import { FluentProvider, makeStyles, teamsDarkTheme } from "@fluentui/react-components";
import "./styles";
import ErrorBoundary from "@pages/error-boundary";
import { vars } from "@shared/ui/styles";
import { useStaticStyles } from "@app/styles";

export const useProviderStyles = makeStyles({
  provider: {
    fontFamily: vars.font.base,
    backgroundColor: "inherit",
  },
});

export const App = () => {
  const styles = useProviderStyles();
  useStaticStyles();

  return (
    <ErrorBoundary>
      <FluentProvider className={styles.provider} theme={teamsDarkTheme}>
        <RouterProvider />
      </FluentProvider>
    </ErrorBoundary>
  );
};
