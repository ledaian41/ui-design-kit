import React, { useRef, useState } from "react";
import useScript from "../hook/useScript";
import buttonConfig from "./buttonConfig.json";
import ButtonSample from "./Button.jsx";

const dfUrl = import.meta.env.VITE_DF_HOST;

const PreviewPage = () => {
  const ready = useScript(`${dfUrl}/web-dynamic-form.js`, {
    id: "df",
    async: true,
  });
  const df = useRef(null);
  const [component, setComponent] = useState(null);
  const [componentProps, setComponentProps] = useState({});

  const saveSetting = ({ detail }) => {
    setComponentProps(detail);
  };

  return (
    <div className="max-w-7xl mx-auto md:p-4 pb-20 grid md:grid-cols-[240px_1fr] gap-4">
      <div className="shadow rounded p-4 h-fit">Button</div>
      <section>
        <h2 className="font-bold text-2xl mb-2 px-4">Button</h2>
        <div className="grid gap-8">
          <div className="shadow rounded">
            <h3 className="font-semibold text-lg px-4 pt-4">Setting</h3>
            {ready && (
              <web-dynamic-form
                ref={df}
                schema={buttonConfig}
                onsave={saveSetting}
              />
            )}
          </div>

          <div className="shadow rounded p-4">
            <h3 className="font-semibold text-lg mb-4">Design</h3>
            <ButtonSample {...componentProps} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default PreviewPage;
