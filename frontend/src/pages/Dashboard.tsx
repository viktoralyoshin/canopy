const Dashboard = () => {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Hello, Developer</h1>
        <p className="text-gray-600">Track team progress here. You almost reach a goal!</p>
      </div>

      {/* Placeholder for widgets */}
      <div className="grid grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="text-3xl font-bold mb-2">0</div>
          <div className="text-sm text-gray-600">Repositories</div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="text-3xl font-bold mb-2">0</div>
          <div className="text-sm text-gray-600">Open Pull Requests</div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="text-3xl font-bold mb-2">0%</div>
          <div className="text-sm text-gray-600">CI Success Rate</div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h2 className="text-xl font-semibold mb-4">Getting Started</h2>
        <p className="text-gray-600">
          Configure your GitHub token in Settings to start tracking your repositories.
        </p>
      </div>
    </div>
  );
};

export default Dashboard;
