import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Smartphone, Lock, Eye, EyeOff, LogIn, CheckCircle2, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Login() {
  const [showPassword, setShowPassword] = React.useState(false);

  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2 bg-surface">
      {/* Left Decoration Side */}
      <div className="hidden lg:flex flex-col justify-between p-16 bg-primary relative overflow-hidden text-white">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_white_1px,_transparent_1px)] bg-[size:32px_32px]" />
        </div>
        
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          className="relative z-10"
        >
          <div className="flex items-center gap-4 mb-16">
            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center p-3 shadow-lg">
              <ShieldCheck className="text-primary-light" size={40} />
            </div>
            <div>
              <h2 className="text-2xl font-bold tracking-tight">ระบบจัดการสมาชิก</h2>
              <p className="text-white/60 text-sm font-medium">Digital Identity Hub</p>
            </div>
          </div>

          <div className="space-y-8">
            <h1 className="text-5xl font-bold leading-tight">
              เข้าสู่ระบบเพื่อใช้บริการ<br />ภาครัฐแบบเบ็ดเสร็จ
            </h1>
            <p className="text-lg text-white/70 max-w-md leading-relaxed">
              เข้าถึงฐานข้อมูลและบริการสมาชิกอย่างเป็นทางการ ด้วยระบบรักษาความปลอดภัยมาตรฐานสากล
            </p>
          </div>
        </motion.div>

        <div className="relative z-10 flex gap-8 text-white/60 font-medium">
          <span className="flex items-center gap-2">
            <CheckCircle2 size={18} className="text-emerald-400" />
            ความปลอดภัยสูงสุด
          </span>
          <span className="flex items-center gap-2">
            <Zap size={18} className="text-amber-400" />
            ทำงานรวดเร็ว
          </span>
        </div>
      </div>

      {/* Right Login Form Side */}
      <div className="flex items-center justify-center p-8 md:p-16">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md w-full bg-white p-10 rounded-[32px] shadow-sm border border-slate-100"
        >
          <div className="lg:hidden flex justify-center mb-10">
            <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center text-white">
              <ShieldCheck size={40} />
            </div>
          </div>

          <div className="mb-10 text-center lg:text-left">
            <h2 className="text-3xl font-bold text-slate-900 mb-2">ยินดีต้อนรับ</h2>
            <p className="text-slate-500">กรุณากรอกข้อมูลเพื่อเข้าสู่ระบบบริหารจัดการ</p>
          </div>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700 block">เบอร์โทรศัพท์</label>
              <div className="relative">
                <Smartphone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                <input 
                  className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-primary-light/10 focus:border-primary-light outline-none transition-all font-medium" 
                  placeholder="08X-XXX-XXXX" 
                  maxLength={10}
                  type="tel" 
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="text-sm font-semibold text-slate-700">รหัสผ่าน</label>
                <a href="#" className="text-sm font-bold text-primary-light hover:underline">ลืมรหัสผ่าน?</a>
              </div>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                <input 
                  className="w-full pl-12 pr-12 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-primary-light/10 focus:border-primary-light outline-none transition-all font-medium" 
                  placeholder="••••••••" 
                  type={showPassword ? 'text' : 'password'} 
                />
                <button 
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            <div className="flex items-center gap-3 py-2">
              <input 
                id="remember" 
                type="checkbox" 
                className="w-5 h-5 rounded border-slate-300 text-primary-light focus:ring-primary-light" 
              />
              <label htmlFor="remember" className="text-sm font-medium text-slate-600 cursor-pointer">จดจำการใช้งาน</label>
            </div>

            <button 
              className="w-full py-4 bg-primary text-white font-bold text-lg rounded-2xl hover:bg-primary-light transition-all shadow-lg hover:shadow-primary-light/20 active:scale-[0.98] flex items-center justify-center gap-2"
            >
              เข้าสู่ระบบ
              <LogIn size={20} />
            </button>
          </form>

          <div className="mt-10 pt-8 border-t border-slate-100 text-center">
            <p className="text-slate-500 font-medium">
              ยังไม่มีบัญชีสมาชิก? 
              <Link to="/register" className="font-bold text-primary-light hover:underline ml-1">สมัครสมาชิก</Link>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
