import { useParams } from "react-router-dom";
import React, { lazy, Suspense, useMemo } from "react";

const ComponentPage = () => {
  const { componentName } = useParams();

  const DynamicComponent = useMemo(() => {
    return lazy(() =>
      import(`../Components/${componentName.charAt(0).toUpperCase() + componentName.slice(1)}.jsx`)
    );
  }, [componentName]); // re-run when param changes

  const guideItems = [
    "Animated Cart Button",
    "Hover Social Buttons",
    "Toggle Share Button",
    "Animated Confetti Button",
    "Animated Border Buttons",
    "Animated Neon Buttons",
  ];

  return (
    <div className="flex flex-col lg:flex-row p-8 gap-8">
      <div className="flex-1 bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold capitalize mb-4">{componentName}</h1>
        <p className="text-gray-600 mb-6">
          This is the {componentName} component. Below, you can find a live
          preview of the component and its code implementation.
        </p>

        {/* Preview Section */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-4">Preview</h2>
          <div className="p-4 bg-gray-100 rounded-lg">
            <Suspense fallback={<div>Loading...</div>}>
              <DynamicComponent />
            </Suspense>
          </div>
        </div>

        {/* Code Section */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Code</h2>
          <pre className="p-4 bg-gray-100 rounded-lg overflow-x-auto">
            <code>
              {`<${componentName.charAt(0).toUpperCase() + componentName.slice(1)} />`}
            </code>
          </pre>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full lg:w-[25%] bg-gray-50 p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-3">On This Page</h2>
        <ul className="space-y-2">
          {guideItems.map((item, index) => (
            <li key={index} className="text-blue-500 hover:underline cursor-pointer">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ComponentPage;
