"use client";

import { useEffect } from "react";

export function AxeDev() {
  useEffect(() => {
    if (process.env.NODE_ENV !== "development") return;
    Promise.all([import("@axe-core/react"), import("react"), import("react-dom")])
      .then(([axe, React, ReactDOM]) => {
        const reactCompat = { ...React };
        const reactDomCompat = { ...ReactDOM };
        axe.default(reactCompat, reactDomCompat, 1000);
      })
      .catch((error) => {
        console.warn("axe-core/react dev audit disabled:", error);
      });
  }, []);

  return null;
}
