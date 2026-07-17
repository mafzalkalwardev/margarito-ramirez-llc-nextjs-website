'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { Cloud, Database, Headphones, LockKeyhole, MonitorSmartphone, Wifi } from 'lucide-react';

const nodes = [
  { Icon: LockKeyhole, label: 'Security', position: 'left-[8%] top-[16%]', delay: 0 },
  { Icon: Cloud, label: 'Cloud', position: 'right-[6%] top-[20%]', delay: 0.4 },
  { Icon: Wifi, label: 'Networks', position: 'left-[1%] bottom-[18%]', delay: 0.8 },
  { Icon: Database, label: 'Backups', position: 'right-[2%] bottom-[16%]', delay: 1.2 },
];

export function HeroNetwork() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.94 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="relative mx-auto hidden aspect-square w-full max-w-[520px] lg:block"
      aria-hidden="true"
    >
      <div className="absolute inset-[13%] rounded-full border border-teal-200/15" />
      <div className="absolute inset-[25%] rounded-full border border-cyan-200/20" />
      <motion.div
        animate={reduceMotion ? undefined : { rotate: 360 }}
        transition={{ duration: 34, repeat: Infinity, ease: 'linear' }}
        className="absolute inset-[9%] rounded-full border border-dashed border-white/15"
      />
      <motion.div
        animate={reduceMotion ? undefined : { rotate: -360 }}
        transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}
        className="absolute inset-[21%] rounded-full border border-dashed border-teal-200/25"
      />

      <div className="absolute inset-[33%] grid place-items-center rounded-[32px] border border-white/20 bg-white/10 shadow-[0_0_80px_rgba(45,212,191,0.2)] backdrop-blur-xl">
        <div className="text-center">
          <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-teal-300 text-slate-950 shadow-xl shadow-teal-950/30">
            <MonitorSmartphone className="h-7 w-7" />
          </div>
          <p className="mt-3 text-sm font-semibold text-white">Your technology</p>
          <p className="mt-1 text-xs text-teal-100/70">Connected & supported</p>
        </div>
      </div>

      {nodes.map(({ Icon, label, position, delay }) => (
        <motion.div
          key={label}
          animate={reduceMotion ? undefined : { y: [0, -10, 0] }}
          transition={{ duration: 3.4, repeat: Infinity, ease: 'easeInOut', delay }}
          className={`absolute ${position} rounded-2xl border border-white/15 bg-slate-950/55 p-4 text-white shadow-2xl backdrop-blur-xl`}
        >
          <Icon className="h-5 w-5 text-teal-300" />
          <p className="mt-2 text-xs font-semibold">{label}</p>
        </motion.div>
      ))}

      <motion.div
        animate={reduceMotion ? undefined : { y: [0, -7, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-[1%] left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-medium text-teal-50 backdrop-blur-xl"
      >
        <Headphones className="h-4 w-4 text-teal-300" />
        Human support when you need it
      </motion.div>
    </motion.div>
  );
}
