"use client";

import React, { ReactNode } from "react";

function ReduxWrapper({ children }: { children: ReactNode }) {
  return <div>{children}</div>;
}

export default ReduxWrapper;
