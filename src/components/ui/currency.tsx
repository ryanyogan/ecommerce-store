"use client";

import { formatter } from "@/lib/utils";
import { useEffect, useState } from "react";

export default function Currency({ value }: { value?: string | number }) {
  const [isMounted, setIsMounted] = useState(false);

  // Do not render this on server
  // hydration errors can occur as the formatter
  // will use the locale of the browser.
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="font-semibold">{formatter().format(Number(value))}</div>
  );
}
