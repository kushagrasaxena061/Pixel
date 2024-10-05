"use client";

import RenameModal from "@/components/modal/rename-modal";
import React, { useEffect, useState } from "react";

const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Only render after component has mounted to prevent SSR mismatch
  if (!isMounted) {
    return null;
  }

  return <RenameModal />;
};

export default ModalProvider;
