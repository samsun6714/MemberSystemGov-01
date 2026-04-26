import React from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { 
  Menu, 
  LayoutDashboard, 
  Users, 
  PieChart, 
  Settings, 
  UserCircle,
  Bell,
  LogOut,
  ChevronRight
} from 'lucide-react';
import { cn } from '../lib/utils';

export default function Layout() {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);
  const location = useLocation();

  const menuItems = [
    { icon: LayoutDashboard, label: 'หน้าหลัก', path: '/' },
    { icon: Users, label: 'รายชื่อสมาชิก', path: '/members' },
    { icon: PieChart, label: 'รายงาน', path: '/reports' },
    { icon: UserCircle, label: 'โปรไฟล์', path: '/profile' },
    { icon: Settings, label: 'การตั้งค่าระบบ', path: '/settings' },
  ];

  const getPageTitle = () => {
    switch (location.pathname) {
      case '/': return 'แผงควบคุม';
      case '/profile': return 'โปรไฟล์สมาชิก';
      case '/settings': return 'ตั้งค่าระบบ';
      default: return 'ระบจัดการสมาชิก';
    }
  }

  return (
    <div className="min-h-screen bg-surface">
      {/* Navbar */}
      <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-4 md:px-8 h-18 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="flex items-center gap-4">
          <button 
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="p-2 hover:bg-slate-100 rounded-full transition-colors lg:hidden"
          >
            <Menu size={24} className="text-primary" />
          </button>
          <div className="flex items-center gap-3">
            <div className="hidden md:flex w-10 h-10 bg-primary rounded-xl items-center justify-center text-white">
              <PieChart size={20} />
            </div>
            <h1 className="font-semibold text-lg text-primary tracking-tight">ระบจัดการสมาชิก</h1>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button className="p-2.5 text-slate-400 hover:text-primary transition-colors hover:bg-slate-50 rounded-full relative">
            <Bell size={20} />
            <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white" />
          </button>
          <div className="w-10 h-10 rounded-full bg-slate-100 overflow-hidden border-2 border-primary/10 shadow-sm cursor-pointer hover:border-primary/30 transition-all">
            <img 
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=128" 
              alt="User" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </header>

      {/* Sidebar - Desktop */}
      <aside className="hidden lg:flex flex-col fixed left-0 top-0 h-screen z-40 w-72 bg-white border-r border-slate-200 pt-24 pb-8">
        <div className="px-6 mb-8">
          <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100">
            <div className="w-12 h-12 rounded-xl bg-primary-light flex items-center justify-center text-white">
              <UserCircle size={24} />
            </div>
            <div>
              <p className="font-bold text-primary leading-none mb-1">สมชาย ใจดี</p>
              <p className="text-xs text-slate-400 font-medium tracking-wide">เจ้าหน้าที่ดูแลระบบ</p>
            </div>
          </div>
        </div>

        <nav className="flex-1 space-y-1 px-4">
          {menuItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => cn(
                "flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-medium group",
                isActive 
                  ? "bg-blue-50 text-primary-light shadow-sm" 
                  : "text-slate-500 hover:bg-slate-50 hover:text-primary"
              )}
            >
              <item.icon size={22} className={cn("transition-colors")} />
              <span className="flex-1">{item.label}</span>
              <ChevronRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
            </NavLink>
          ))}
        </nav>

        <div className="px-4 mt-auto">
          <button className="flex items-center gap-3 w-full px-4 py-3 text-red-500 font-bold hover:bg-red-50 rounded-xl transition-colors">
            <LogOut size={22} />
            <span>ออกจากระบบ</span>
          </button>
        </div>
      </aside>

      {/* Mobile Bottom Nav */}
      <nav className="lg:hidden fixed bottom-6 left-4 right-4 z-50 h-16 bg-white/90 backdrop-blur-md rounded-2xl border border-slate-200 shadow-xl flex items-center justify-around px-2">
        {menuItems.slice(0, 4).map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) => cn(
              "flex flex-col items-center justify-center gap-1 w-16 h-12 rounded-xl transition-all",
              isActive ? "text-primary-light bg-blue-50" : "text-slate-400"
            )}
          >
            <item.icon size={22} />
            <span className="text-[10px] font-bold">{item.label}</span>
          </NavLink>
        ))}
      </nav>

      {/* Main Content Area */}
      <main className="pt-24 lg:pl-72 min-h-screen">
        <div className="px-4 md:px-8 pb-24 lg:pb-12 max-w-7xl mx-auto">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
