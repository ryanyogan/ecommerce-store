"use client";

import PreviewModal from "@/components/ui/modal/preview-modal";
import { useEffect, useState } from "react";

export default function ModalProvider() {
  const [iseMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!iseMounted) {
    return null;
  }

  return (
    <>
      <PreviewModal />
    </>
  );
}
