import { AdaptivityProvider, AppRoot, ConfigProvider } from "@vkontakte/vkui";
import { RouterProvider } from "@app/providers";
import { Suspense } from "react";
import "@vkontakte/vkui/dist/vkui.css";
import "./app.css";

export const App = () => {
  return (
    <ConfigProvider platform={"vkcom"} appearance={"dark"}>
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
