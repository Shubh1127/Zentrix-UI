import { useParams } from "react-router-dom";

const ComponentPage = () => {
  const { componentName } = useParams();

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold capitalize">{componentName}</h1>
      <p className="mt-4 text-gray-600">
        This is the {componentName} component. Add your component details here.
      </p>
    </div>
  );
};

export default ComponentPage;