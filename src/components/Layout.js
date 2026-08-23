import React from "react";

export default function Layout({ children, className = "" }) {
  return <main className={`page-shell ${className}`}>{children}</main>;
}
