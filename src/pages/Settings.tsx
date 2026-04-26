import React from 'react';
import { motion } from 'motion/react';
import { Lock, Bell, Shield, LogOut, Mail, Smartphone } from 'lucide-react';

export default function Settings() {
  const [notifications, setNotifications] = React.useState({
    email: true,
    system: true,
    security: false
  });

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <header>
        <h2 className="text-3xl font-semibold text-primary">การตั้งค่าระบบ</h2>
        <p className="text-slate-500 mt-1">จัดการข้อมูลส่วนตัว ความปลอดภัย และการแจ้งเตือนของคุณ</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8 space-y-8">
          {/* Change Password Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden"
          >
            <div className="p-6 border-b border-slate-100 flex items-center gap-3">
              <Lock className="text-primary-light" size={24} />
              <h3 className="text-xl font-semibold">เปลี่ยนรหัสผ่าน</h3>
            </div>
            <div className="p-8 space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700 block">รหัสผ่านปัจจุบัน</label>
                <input 
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary-light/10 outline-none" 
                  type="password" 
                  placeholder="••••••••"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700 block">รหัสผ่านใหม่</label>
                  <input 
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary-light/10 outline-none" 
                    type="password" 
                    placeholder="••••••••"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700 block">ยืนยันรหัสผ่านใหม่</label>
                  <input 
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary-light/10 outline-none" 
                    type="password" 
                    placeholder="••••••••"
                  />
                </div>
              </div>
              <div className="pt-2 flex justify-end">
                <button className="bg-primary text-white font-medium px-6 py-3 rounded-xl hover:opacity-90 transition-all active:scale-95">
                  อัปเดตรหัสผ่าน
                </button>
              </div>
            </div>
          </motion.div>

          {/* Notifications Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden"
          >
            <div className="p-6 border-b border-slate-100 flex items-center gap-3">
              <Bell className="text-primary-light" size={24} />
              <h3 className="text-xl font-semibold">การแจ้งเตือน</h3>
            </div>
            <div className="divide-y divide-slate-100">
              {[
                { id: 'email', title: 'การแจ้งเตือนผ่านอีเมล', desc: 'รับข้อมูลข่าวสารและรายงานสรุปผ่านทางอีเมล', icon: Mail },
                { id: 'system', title: 'การแจ้งเตือนภายในระบบ', desc: 'รับการแจ้งเตือนเมื่อมีการสมัครสมาชิกใหม่', icon: Bell },
                { id: 'security', title: 'การแจ้งเตือนด้านความปลอดภัย', desc: 'แจ้งเตือนเมื่อมีการเข้าสู่ระบบจากอุปกรณ์ใหม่', icon: Shield },
              ].map((item) => (
                <div key={item.id} className="p-6 flex items-center justify-between hover:bg-slate-50 transition-colors">
                  <div className="flex gap-4">
                    <div className="p-2 bg-slate-100 rounded-lg text-slate-500">
                      <item.icon size={20} />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900">{item.title}</p>
                      <p className="text-sm text-slate-500">{item.desc}</p>
                    </div>
                  </div>
                  <button 
                    onClick={() => setNotifications(prev => ({ ...prev, [item.id]: !prev[item.id as keyof typeof prev] }))}
                    className={`w-12 h-6 rounded-full relative transition-colors duration-200 ${notifications[item.id as keyof typeof notifications] ? 'bg-primary-light' : 'bg-slate-200'}`}
                  >
                    <div className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-all duration-200 ${notifications[item.id as keyof typeof notifications] ? 'left-7' : 'left-1'}`} />
                  </button>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="lg:col-span-4 space-y-6">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-3xl border border-slate-200 shadow-sm p-8 text-center"
          >
            <div className="w-24 h-24 mx-auto rounded-full p-1 border-2 border-primary-light/20 mb-4 overflow-hidden">
               <img 
                className="w-full h-full object-cover rounded-full" 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=256" 
                alt="Admin" 
              />
            </div>
            <h4 className="text-xl font-semibold text-primary">เจ้าหน้าที่ดูแลระบบ</h4>
            <p className="text-sm text-slate-500">ฝ่ายเทคโนโลยีสารสนเทศ</p>
            <div className="mt-6 pt-6 border-t border-slate-100 text-left space-y-3">
              <div className="flex items-center gap-3 text-sm text-slate-600">
                <Mail size={16} /> <span>admin@dopa.go.th</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-600">
                <Smartphone size={16} /> <span>02-XXX-XXXX</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-red-50 rounded-3xl border border-red-100 p-8"
          >
            <h4 className="font-bold text-red-600 mb-2">โซนอันตราย</h4>
            <p className="text-sm text-red-600/70 mb-6">การออกจากระบบจะยุติเซสชันปัจจุบันของคุณบนอุปกรณ์นี้</p>
            <button className="w-full flex items-center justify-center gap-2 bg-white border-2 border-red-200 text-red-600 font-bold py-3 rounded-xl hover:bg-red-600 hover:text-white transition-all active:scale-95">
              <LogOut size={20} />
              ออกจากระบบ
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
