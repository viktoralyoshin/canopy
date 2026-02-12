import { Home, FolderGit2, GitPullRequest, Users, Settings, HelpCircle, LogOut } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();

  const navItems = [
    { icon: Home, label: 'Home', path: '/' },
    { icon: FolderGit2, label: 'Projects', path: '/projects' },
    { icon: GitPullRequest, label: 'Pull Requests', path: '/pull-requests' },
    { icon: Users, label: 'Team', path: '/team' },
    { icon: Settings, label: 'Settings', path: '/settings' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="w-64 bg-white border-r border-gray-200 flex flex-col h-full">
      {/* Logo */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">C</span>
          </div>
          <span className="font-bold text-xl">Canopy</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                    isActive(item.path)
                      ? 'bg-indigo-50 text-indigo-600'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <Icon size={20} />
                  <span className="font-medium">{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Upgrade CTA */}
      <div className="p-4">
        <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-lg p-4 border border-indigo-100">
          <h3 className="font-semibold text-sm mb-2">Upgrade to Pro</h3>
          <p className="text-xs text-gray-600 mb-3">
            Get 1 month free and unlock Pro features
          </p>
          <button className="w-full bg-indigo-600 text-white text-sm py-2 rounded-lg hover:bg-indigo-700 transition-colors">
            Upgrade
          </button>
        </div>
      </div>

      {/* Bottom Actions */}
      <div className="p-4 border-t border-gray-200">
        <button className="flex items-center gap-3 px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg w-full transition-colors">
          <HelpCircle size={20} />
          <span className="font-medium">Help & Information</span>
        </button>
        <button className="flex items-center gap-3 px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg w-full transition-colors mt-1">
          <LogOut size={20} />
          <span className="font-medium">Log out</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
