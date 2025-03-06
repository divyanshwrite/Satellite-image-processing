import { Link } from 'react-router-dom';

const Features = () => {
  return (
    <div id="features" className="max-w-7xl mx-auto px-4 py-16">
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        
        {/* Land Cover Classification */}
        <div className="shadow-lg rounded-2xl p-6 flex flex-col justify-between hover:shadow-2xl transition">
          <h2 className="text-xl font-semibold mb-4">Land Cover Classification</h2>
          <p className="text-gray-600 flex-1">
            Land cover classification categorizes Earth's surface into distinct types like water, forest, or urban areas. This process, often aided by satellite imagery and machine learning, helps us understand and monitor land use patterns, analyze environmental changes, and make informed decisions about resource management.
          </p>
          <div className="mt-6">
            <Link to="/land-cover-classification">
              <button className="w-full bg-[#00ffff] text-white py-2 px-4 rounded-lg transition">
                Try Land Cover Classification
              </button>
            </Link>
          </div>
        </div>

        {/* Change Detection */}
        <div className="shadow-lg rounded-2xl p-6 flex flex-col justify-between hover:shadow-2xl transition">
          <h2 className="text-xl font-semibold mb-4">Change Detection</h2>
          <p className="text-gray-600 flex-1">
            Change detection in satellite imagery analyzes differences between images of the same area captured at different times. It helps us identify modifications like deforestation, urban expansion, or natural disasters. This valuable information supports various fields, including environmental monitoring, urban planning, and disaster management, allowing us to track changes over time and make informed decisions for a sustainable future.
          </p>
          <div className="mt-6">
            <Link to="/change-detection">
              <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition">
                Try Change Detection
              </button>
            </Link>
          </div>
        </div>

        {/* Vegetation Monitoring */}
        <div className=" shadow-lg rounded-2xl p-6 flex flex-col justify-between hover:shadow-2xl transition">
          <h2 className="text-xl font-semibold mb-4">Vegetation Monitoring</h2>
          <p className="text-gray-600 flex-1">
            Satellites act as our watchful eyes, monitoring the health of Earth's vegetation. From vast forests to local farms, they reveal subtle changes in health, like drought stress or deforestation. This information empowers us to protect and manage this vital resource.
          </p>
          <div className="mt-6">
            <Link to="/vegetation-monitoring">
              <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition">
                Try Vegetation Monitoring
              </button>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Features;
