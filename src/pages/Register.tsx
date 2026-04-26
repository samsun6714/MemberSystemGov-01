import React from 'react';
import { motion } from 'motion/react';
import { User, Smartphone, Lock, ShieldCheck, UserPlus, LogIn, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Register() {
  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2 bg-surface">
      {/* Left Info Side */}
      <div className="hidden lg:flex flex-col justify-center p-16 bg-primary-light relative overflow-hidden text-white">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          className="relative z-10"
        >
          <div className="mb-12">
             <ShieldCheck size={48} className="text-white/80 mb-6" />
             <h1 className="text-4xl font-bold mb-4">ระบบจัดการสมาชิก</h1>
             <p className="text-lg text-white/70 max-w-sm">ยินดีต้อนรับเข้าสู่ส่วนงานทะเบียนอิเล็กทรอนิกส์ เพื่อการบริหารจัดการข้อมูลสมาชิกอย่างมีประสิทธิภาพ</p>
          </div>
          
          <div className="space-y-6">
            {[
              { title: 'ความปลอดภัยสูง', desc: 'ข้อมูลส่วนบุคคลของคุณจะถูกเข้ารหัสตามมาตรฐานสากล', icon: ShieldCheck },
              { title: 'บริการที่รวดเร็ว', desc: 'ลงทะเบียนและตรวจสอบสิทธิ์ได้ทันทีภายใน 5 นาที', icon: CheckCircle },
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <div className="bg-white/10 p-2 rounded-lg">
                  <item.icon size={24} />
                </div>
                <div>
                  <h3 className="font-bold">{item.title}</h3>
                  <p className="text-sm text-white/60">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
        
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mt-20 -mr-20" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full -mb-40 -ml-40" />
      </div>

      {/* Right Form Side */}
      <div className="flex items-center justify-center p-8 md:p-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-lg w-full bg-white p-10 rounded-[32px] shadow-sm border border-slate-100"
        >
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-slate-900 mb-2">สร้างบัญชีผู้ใช้ใหม่</h2>
            <p className="text-slate-500">กรุณากรอกข้อมูลส่วนตัวของคุณเพื่อเริ่มต้นใช้งานระบบ</p>
          </div>

          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700 block">ชื่อ-นามสกุล</label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                <input 
                  className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-primary-light/10 focus:border-primary-light outline-none transition-all" 
                  placeholder="ระบุชื่อและนามสกุลจริง" 
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700 block">เบอร์โทรศัพท์</label>
              <div className="relative">
                <Smartphone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                <input 
                  className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-primary-light/10 focus:border-primary-light outline-none transition-all" 
                  placeholder="08X-XXX-XXXX" 
                  type="tel"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700 block">รหัสผ่าน</label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                  <input 
                    className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-primary-light/10 focus:border-primary-light outline-none transition-all" 
                    placeholder="8 ตัวอักษรขึ้นไป" 
                    type="password"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700 block">ยืนยันรหัสผ่าน</label>
                <div className="relative">
                  <ShieldCheck className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                  <input 
                    className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-primary-light/10 focus:border-primary-light outline-none transition-all" 
                    placeholder="กรอกรหัสผ่านอีกครั้ง" 
                    type="password"
                  />
                </div>
              </div>
            </div>

            <div className="flex items-start gap-3 py-2">
              <input 
                id="terms" 
                type="checkbox" 
                className="mt-1 w-5 h-5 rounded border-slate-300 text-primary-light focus:ring-primary-light" 
              />
              <label htmlFor="terms" className="text-sm text-slate-500 leading-relaxed cursor-pointer">
                ฉันยอมรับ <a href="#" className="font-bold text-primary-light hover:underline">ข้อกำหนดและเงื่อนไขการใช้งาน</a> และนโยบายความเป็นส่วนตัว
              </label>
            </div>

            <button 
              className="w-full py-4 bg-primary text-white font-bold text-lg rounded-2xl hover:bg-primary-light transition-all shadow-lg hover:shadow-primary-light/10 active:scale-[0.98] flex items-center justify-center gap-2 mt-4"
            >
              <UserPlus size={20} />
              ลงทะเบียนเข้าสู่ระบบ
            </button>
          </form>

          <div className="pt-6 text-center border-t border-slate-100 mt-8">
            <p className="text-slate-500 font-medium">
              มีบัญชีผู้ใช้อยู่แล้ว? 
              <Link to="/login" className="font-bold text-primary-light hover:underline ml-1 inline-flex items-center gap-1">
                กลับไปหน้าเข้าสู่ระบบ <LogIn size={16} />
              </Link>
            </p>
          </div>
        </motion.div>
      </div>
      
      <div className="fixed bottom-6 left-0 w-full text-center hidden lg:block">
        <p className="text-slate-400 text-xs">© 2024 กรมการปกครอง. สงวนลิขสิทธิ์ตามกฎหมาย.</p>
      </div>
    </div>
  );
}
