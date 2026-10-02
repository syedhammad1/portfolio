"use client";

import { useEffect, useState } from "react";

export default function PreLoader() {
  const [show, setShow] = useState(true);
  useEffect(() => setShow(false), []);
  if (!show) return null;
  return (
    <div className="bg-kjColorLight w-screen h-screen fixed z-50">
      <div className="absolute spinner-wrapper">
        <div className="spinner" />
      </div>
    </div>
  );
}
