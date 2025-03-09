import React, { useEffect, useMemo, useRef, useState } from "react";
import useScript from "@share/hook/useScript";
import sourceMap, { loadSettingSchema } from "@preview/source-map";
import ComponentTree from "@preview/ComponentTree";

const dfUrl = import.meta.env.VITE_DF_HOST;

const PreviewPage = () => {
  const ready = useScript(`${dfUrl}/web-dynamic-form.js`, {
    id: "an-df",
    async: true,
  });
  const df = useRef(null);
  const [component, setComponent] = useState("button");
  const [settingSchema, setSettingSchema] = useState("button");
  const [componentProps, setComponentProps] = useState({});

  useEffect(() => {
    previewComponent(component);
  }, []);

  const selectedComponent = useMemo(() => sourceMap[component], [component]);

  const Component = useMemo(
    () => selectedComponent?.component,
    [selectedComponent]
  );

  const previewComponent = (id) => {
    const sourceComponent = sourceMap[id];
    setComponent(id);
    loadSettingSchema(sourceComponent).then(setSettingSchema);
    setComponentProps({});
  };

  const saveSetting = ({ detail }) => {
    setComponentProps(detail);
  };

  return (
    <div className="max-w-7xl mx-auto md:p-4 pb-20 grid md:grid-cols-[180px_1fr] lg:grid-cols-[240px_1fr] gap-4">
      <div className="p-4 h-fit rounded border border-gray-200">
        <ComponentTree
          value={component}
          datasource={Object.entries(sourceMap)}
          onSelect={previewComponent}
        />
      </div>
      <section>
        <h2 className="font-bold text-2xl mb-2 px-4">
          {selectedComponent?.label}
        </h2>
        <div className="grid gap-8">
          {settingSchema && (
            <div className="rounded border border-gray-200 py-4">
              <h3 className="font-semibold text-lg px-4">Setting</h3>
              {ready && (
                <web-dynamic-form
                  ref={df}
                  schema={settingSchema}
                  onsave={saveSetting}
                />
              )}
            </div>
          )}

          {Component && (
            <div className="rounded p-4 border border-gray-200">
              <h3 className="font-semibold text-lg mb-4">Design</h3>
              <Component {...componentProps} />
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default PreviewPage;
