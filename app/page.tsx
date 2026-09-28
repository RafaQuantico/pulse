"use client";

import { useEffect, useState } from "react";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function PulsePage() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const onMessage = (event: MessageEvent) => {
      if (event.data === "titania-pulse-ready") setLoaded(true);
    };
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, []);

  return (
    <main className="shell">
      {!loaded && (
        <div className="loading" role="status" aria-live="polite">
          <div className="brand">Titan<span>IA</span></div>
          <div className="pulse">PULSE</div>
          <div className="signal" aria-hidden="true"><i /><i /><i /><i /></div>
          <p>Preparando el estudio</p>
        </div>
      )}
      <iframe
        className={loaded ? "simulator ready" : "simulator"}
        src={`${basePath}/simulator/index.html`}
        title="Simulador TITANIA Pulse"
        onLoad={() => setLoaded(true)}
        allow="clipboard-write"
      />
      <noscript>
        <p className="noscript">
          Esta experiencia requiere JavaScript. Abre directamente el{" "}
          <a href={`${basePath}/simulator/index.html`}>explorador Pulse</a>.
        </p>
      </noscript>
    </main>
  );
}
