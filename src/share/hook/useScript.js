import { useState, useEffect } from "react";

const useScript = (url, { id, async, type } = {}) => {
  const [status, setStatus] = useState(false);

  useEffect(() => {
    if (!url) return () => {};

    const foundScript = document.head.querySelector(`script[id=${id}]`);
    if (id && foundScript) {
      if (foundScript.getAttribute("data-ready")) {
        setStatus(true);
      } else {
        const functionOnLoad = foundScript.onload;
        foundScript.onload = () => {
          foundScript.setAttribute("data-ready", true);
          if (functionOnLoad) functionOnLoad();
          setStatus(true);
        };
      }
      return () => {};
    }

    const script = document.createElement("script");
    script.src = url;

    if (id) script.id = id;

    if (type) script.type = type;

    if (async) script.async = true;

    script.onload = () => setStatus(true);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, [url]);

  return status;
};

export default useScript;
