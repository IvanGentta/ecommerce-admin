// Carpetas entre () Son de organizacion y no afectan las routes, dentro de cada una puede ir su propio layout.ts y pagae.ts
"use client";

import { useStoreModal } from "@/hooks/use-store-modal";
import { useEffect } from "react";

const SetUpPage = () => {
  const onOpen = useStoreModal((state) => state.onOpen);
  const isOpen = useStoreModal((state) => state.isOpen);

  useEffect(() => {
    if (!isOpen) {
      onOpen();
    }
  }, [isOpen, onOpen]);

  return (
    <main className="p-4">
      <h1>Admin DashBoard</h1>
      <div>Root page</div>
    </main>
  );
};

export default SetUpPage;
