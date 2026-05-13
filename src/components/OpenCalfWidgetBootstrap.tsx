import { useEffect, useRef } from "react";
import {
  OPEN_CALF_WIDGET_CONFIG,
  OPEN_CALF_WIDGET_SCRIPT_SRC,
} from "../lib/opencalf-widget-config";

type OpenCalfApi = {
  init?: (config: typeof OPEN_CALF_WIDGET_CONFIG) => unknown;
  destroy?: () => void;
};

declare global {
  interface Window {
    OpenCalfConfig?: typeof OPEN_CALF_WIDGET_CONFIG;
    OpenCalf?: OpenCalfApi;
  }
}

/**
 * Loads OpenCalf after React hydration so the widget host is not removed when
 * TanStack Start reconciles the document (head scripts ran before hydration and
 * the launcher was attached outside React’s tree).
 */
export function OpenCalfWidgetBootstrap() {
  const ran = useRef(false);

  useEffect(() => {
    if (ran.current) return;
    ran.current = true;

    const cfg = { ...OPEN_CALF_WIDGET_CONFIG };
    window.OpenCalfConfig = cfg;

    const reinitIfReady = () => {
      if (typeof window.OpenCalf?.init === "function") {
        window.OpenCalf.init(cfg);
      }
    };

    const existing = document.querySelector<HTMLScriptElement>(
      `script[src="${OPEN_CALF_WIDGET_SCRIPT_SRC}"]`,
    );

    if (existing) {
      if (window.OpenCalf?.init) reinitIfReady();
      else existing.addEventListener("load", reinitIfReady, { once: true });
      return;
    }

    const s = document.createElement("script");
    s.src = OPEN_CALF_WIDGET_SCRIPT_SRC;
    s.async = true;
    document.body.appendChild(s);
  }, []);

  return null;
}
