import React from 'react';
import { motion } from 'motion/react';
import { Camera, Save, Edit, User } from 'lucide-react';

export default function Profile() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="mb-2">
        <h2 className="text-2xl font-semibold text-primary">ข้อมูลส่วนตัว</h2>
        <p className="text-slate-500">จัดการข้อมูลสมาชิกและบัญชีผู้ใช้งานของคุณ</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Profile Image Section */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="lg:col-span-4 bg-white rounded-3xl shadow-sm border border-slate-200 p-8 flex flex-col items-center"
        >
          <div className="relative group">
            <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-slate-50 shadow-md">
              <img 
                className="w-full h-full object-cover" 
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=256" 
                alt="Profile" 
              />
            </div>
            <label className="absolute bottom-1 right-1 bg-primary-light text-white p-3 rounded-full cursor-pointer shadow-lg hover:scale-110 transition-transform">
              <Camera size={20} />
              <input className="hidden" type="file" />
            </label>
          </div>
          <div className="mt-6 text-center">
            <h3 className="text-xl font-semibold text-slate-900">สมชาย รักชาติ</h3>
            <p className="text-xs text-slate-400 uppercase tracking-widest mt-1">MEMBER ID: TH-99420</p>
          </div>
          <div className="w-full mt-8 pt-6 border-t border-slate-100 flex flex-col gap-4">
            <div className="flex justify-between items-center text-sm">
              <span className="text-slate-500">สถานะสมาชิก</span>
              <span className="px-3 py-1 bg-green-50 text-green-700 rounded-full font-medium">ปกติ</span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span className="text-slate-500">วันที่เข้าร่วม</span>
              <span className="font-medium">12 ม.ค. 2566</span>
            </div>
          </div>
        </motion.div>

        {/* Profile Details Form */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="lg:col-span-8 bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden"
        >
          <div className="px-8 py-6 border-b border-slate-100 bg-slate-50/30 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Edit size={20} className="text-primary-light" />
              <span className="font-semibold text-lg">แก้ไขรายละเอียดข้อมูล</span>
            </div>
          </div>
          <form className="p-8 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-slate-700 mb-2">ชื่อ-นามสกุล</label>
                <div className="relative">
                   <User className="absolute left-4 top-3 text-slate-400" size={18} />
                   <input 
                    className="w-full pl-12 pr-4 py-3 rounded-xl border border-slate-200 focus:border-primary-light focus:ring-1 focus:ring-primary-light transition-all outline-none" 
                    defaultValue="สมชาย รักชาติ" 
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">เบอร์โทรศัพท์</label>
                <input 
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary-light outline-none" 
                  type="tel" 
                  defaultValue="081-234-5678" 
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">อีเมล</label>
                <input 
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary-light outline-none" 
                  type="email" 
                  defaultValue="somchai.r@government.go.th" 
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-slate-700 mb-2">อาชีพ</label>
                <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary-light outline-none bg-white">
                  <option>ข้าราชการ</option>
                  <option>พนักงานรัฐวิสาหกิจ</option>
                  <option>พนักงานบริษัทเอกชน</option>
                  <option>ธุรกิจส่วนตัว</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-slate-700 mb-2">ที่อยู่</label>
                <textarea 
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary-light outline-none min-h-[100px]" 
                  defaultValue="123/45 ถนนราชดำเนิน แขวงพระบรมมหาราชวัง เขตพระนคร กรุงเทพมหานคร 10200"
                />
              </div>
            </div>
            <div className="flex flex-col sm:flex-row justify-end gap-4 pt-6 border-t border-slate-100">
              <button 
                type="button"
                className="px-6 py-3 rounded-xl border border-slate-300 text-slate-600 font-medium hover:bg-slate-50 transition-colors order-2 sm:order-1"
              >
                ยกเลิก
              </button>
              <button 
                type="submit"
                className="px-8 py-3 rounded-xl bg-primary-light text-white font-medium hover:opacity-90 shadow-md transition-all active:scale-95 order-1 sm:order-2 flex items-center justify-center gap-2"
              >
                <Save size={20} />
                บันทึกข้อมูล
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
