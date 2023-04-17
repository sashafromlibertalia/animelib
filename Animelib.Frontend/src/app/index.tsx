import "./index.scss";
import { AdaptivityProvider, AppRoot, ConfigProvider } from "@vkontakte/vkui";
import { RouterProvider } from "@app/providers";
import { Suspense } from "react";

export const App = () => {
  return (
    <ConfigProvider appearance={"dark"}>
      <AdaptivityProvider>
        <AppRoot>
          <Suspense>
            <RouterProvider />
          </Suspense>
        </AppRoot>
      </AdaptivityProvider>
    </ConfigProvider>
  );
};
