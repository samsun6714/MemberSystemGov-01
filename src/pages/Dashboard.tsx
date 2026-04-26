import React from 'react';
import { motion } from 'motion/react';
import { 
  Users, 
  ArrowUpRight, 
  Settings2, 
  ShieldCheck, 
  CreditCard, 
  ChevronRight,
  LogIn,
  UserPlus,
  FileText
} from 'lucide-react';
import { cn } from '../lib/utils';

export default function Dashboard() {
  const stats = {
    totalMembers: 1240,
    growth: 12
  };

  const activities = [
    { id: 1, type: 'login', title: 'เข้าสู่ระบบสำเร็จ', time: 'เมื่อ 5 นาทีที่แล้ว', ip: '192.168.1.1', icon: LogIn, color: 'text-blue-600', bg: 'bg-blue-100' },
    { id: 2, type: 'approval', title: 'อนุมัติสมาชิกใหม่', time: 'เมื่อ 2 ชั่วโมงที่แล้ว', sub: 'รหัสสมาชิก 4492', icon: UserPlus, color: 'text-emerald-600', bg: 'bg-emerald-100' },
    { id: 3, type: 'edit', title: 'แก้ไขข้อมูลพื้นฐาน', time: 'เมื่อวานนี้', sub: 'โดย เจ้าหน้าที่ รัชดา', icon: FileText, color: 'text-amber-600', bg: 'bg-amber-100' },
  ];

  return (
    <div className="space-y-8">
      {/* Hero Welcome Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:col-span-8 bg-gradient-to-br from-primary to-primary-light rounded-3xl p-8 text-white relative overflow-hidden shadow-xl"
        >
          <div className="relative z-10">
            <h1 className="text-3xl font-semibold mb-2">ยินดีต้อนรับ, คุณสมชาย ใจดี</h1>
            <div className="flex flex-wrap gap-4 mt-6">
              <div className="glass rounded-2xl px-4 py-3">
                <p className="text-white/70 text-xs font-medium">สถานะสมาชิก</p>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-400" />
                  <p className="font-bold">ปกติ</p>
                </div>
              </div>
              <div className="glass rounded-2xl px-4 py-3">
                <p className="text-white/70 text-xs font-medium">วันที่สมัคร</p>
                <p className="font-bold">01/01/2567</p>
              </div>
            </div>
          </div>
          <div className="absolute right-[-20px] bottom-[-20px] opacity-10">
            <ShieldCheck size={200} />
          </div>
        </motion.div>

        {/* Admin Stat Card */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          className="lg:col-span-4 bg-white rounded-3xl p-8 border border-slate-200 flex flex-col justify-between shadow-sm"
        >
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-blue-50 rounded-2xl text-primary-light">
                <Users size={24} />
              </div>
              <span className="text-emerald-500 font-bold text-sm flex items-center gap-1">
                <ArrowUpRight size={16} /> +{stats.growth}% เดือนนี้
              </span>
            </div>
            <p className="text-slate-500 font-medium">จำนวนสมาชิกทั้งหมด</p>
            <h3 className="text-4xl font-semibold text-primary">{stats.totalMembers.toLocaleString()} <span className="text-lg font-normal text-slate-400">คน</span></h3>
          </div>
          <button className="mt-6 w-full py-3 bg-slate-100 text-primary font-bold rounded-xl hover:bg-slate-200 transition-all active:scale-95">
            ดูรายละเอียดทั้งหมด
          </button>
        </motion.div>
      </div>

      {/* Section Header */}
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold text-primary">การจัดการข้อมูลและสิทธิ์</h3>
        <button className="text-primary-light font-bold flex items-center gap-1 hover:underline">
          ดูทั้งหมด
          <ChevronRight size={18} />
        </button>
      </div>

      {/* Quick Link Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { title: 'จัดการข้อมูลส่วนตัว', desc: 'แก้ไขประวัติ ที่อยู่ และข้อมูลการติดต่อเบื้องต้นของคุณ', icon: Settings2 },
          { title: 'ความปลอดภัย', desc: 'เปลี่ยนรหัสผ่าน การยืนยันตัวตน 2 ชั้น และประวัติการเข้าใช้งาน', icon: ShieldCheck },
          { title: 'สิทธิประโยชน์', desc: 'ตรวจสอบสิทธิ์ และบริการพิเศษสำหรับสมาชิกตามระดับของคุณ', icon: CreditCard },
        ].map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * (idx + 2) }}
            className="group bg-white p-6 rounded-3xl border border-slate-200 hover:shadow-md transition-all cursor-pointer"
          >
            <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center text-primary-light mb-4 group-hover:scale-110 transition-transform">
              <item.icon size={28} />
            </div>
            <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
            <p className="text-slate-500 text-sm mb-4 leading-relaxed">{item.desc}</p>
            <span className="inline-flex items-center text-primary-light font-bold text-sm">
              เข้าใช้งาน <ChevronRight size={16} className="ml-1" />
            </span>
          </motion.div>
        ))}
      </div>

      {/* Recent Activity */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm"
      >
        <div className="px-8 py-6 border-b border-slate-100 flex justify-between items-center">
          <h4 className="font-semibold text-lg">ความเคลื่อนไหวล่าสุด</h4>
          <div className="flex gap-2">
            <button className="px-4 py-2 rounded-xl bg-slate-50 text-slate-600 text-sm font-medium">วันนี้</button>
            <button className="px-4 py-2 rounded-xl text-slate-400 text-sm font-medium hover:bg-slate-50">7 วันที่ผ่านมา</button>
          </div>
        </div>
        <div className="divide-y divide-slate-50">
          {activities.map((act) => (
            <div key={act.id} className="px-8 py-4 flex items-center justify-between hover:bg-slate-50/50 transition-colors">
              <div className="flex items-center gap-4">
                <div className={cn("w-10 h-10 rounded-full flex items-center justify-center", act.bg, act.color)}>
                  <act.icon size={20} />
                </div>
                <div>
                  <p className="font-bold text-slate-800">{act.title}</p>
                  <p className="text-xs text-slate-400">{act.time} • {act.sub || act.ip}</p>
                </div>
              </div>
              <span className="text-xs font-medium text-slate-400">เสร็จสิ้น</span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
