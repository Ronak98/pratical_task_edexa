import React, { Suspense } from "react";
import { Detector } from "react-detect-offline";
import { Spin } from "antd";
import { BrowserRouter } from "react-router-dom";
import "./App.css";

const LazyAppRouterComponent = React.lazy(() => import("./utils/AppRouter"));

function App() {
  return (
    <BrowserRouter>
      <Detector
        render={({ online }) => (
          <>
            {!online && (
              <span className="red">
                You're offline right now. <button class="button">RETRY</button>
              </span>
            )}
            <Suspense
              fallback={
                <div className="common__wrapper">
                  <Spin />
                </div>
              }
            >
              <LazyAppRouterComponent />
            </Suspense>
          </>
        )}
      />
    </BrowserRouter>
  );
}

export default App;
