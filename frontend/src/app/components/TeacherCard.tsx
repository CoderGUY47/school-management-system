"use client";

import Image from 'next/image';
import { LuBookOpen, LuUsers, LuStar, LuMail } from 'react-icons/lu';
import React from 'react';

export type Teacher = {
  id: number;
  name: string;
  email: string;
  subject: string;
  students: number;
  rating: number;
  experience: string;
  avatar: string;
};

type Props = {
  teacher: Teacher;
  onViewProfile?: (teacher: Teacher) => void;
  onMessage?: (teacher: Teacher) => void;
};

export default function TeacherCard({ teacher, onViewProfile, onMessage }: Props) {
  return (
    <div className="group relative rounded-lg p-4 flex items-center gap-3 backdrop-blur-xl transition-all duration-300 group/stat hover:scale-[1.02]">
      {/* Glassmorphism container */}
      <div className="relative overflow-hidden rounded-lg bg-white/10 dark:bg-black/20 backdrop-blur-xl p-6 shadow-2xl">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/5 rounded-lg" />
        
        {/* Teacher info section */}
        <div className="relative z-10 flex items-center gap-4">
          {/* Avatar with glassmorphism border */}
          <div className="relative">
            <div className="w-20 h-20 rounded-full overflow-hidden bg-gradient-to-br from-indigo-600 to-purple-400 p-[2px] backdrop-blur-sm">
              <div className="w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-indigo-400 to-purple-400 backdrop-blur-sm">
                <Image
                  src={teacher.avatar}
                  alt={teacher.name}
                  width={80}
                  height={80}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            {/* Glowing effect around avatar */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-400/20 to-purple-400/20 blur-xl opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
          </div>
          
          <div className="flex-1">
            <div className="text-2xl font-bold text-white/90 drop-shadow-sm">{teacher.name}</div>
            <div className="text-sm font-medium mt-1 inline-flex items-center gap-2 text-white/70">
              <LuBookOpen className="h-4 w-4 text-indigo-300" />
              <p className="text-white/80 font-semibold">{teacher.subject}</p>
            </div>
          </div>
        </div>

        {/* Stats grid with glassmorphism */}
        <div className="relative z-10 mt-6 grid grid-cols-2 gap-3 text-sm">
          <div className="rounded-xl bg-white/10 p-4 flex items-center gap-3 backdrop-blur-lg hover:bg-white/20 transition-all duration-300 group/stat">
            <div className="p-2 rounded-lg bg-indigo-500/20 backdrop-blur-sm group-hover/stat:bg-indigo-500/30 transition-colors">
              <LuMail className="h-4 w-4 text-indigo-300" />
            </div>
            <span className="truncate text-white/80 font-medium" title={teacher.email}>
              {teacher.email}
            </span>
          </div>
          
          <div className="rounded-lg bg-white/10 p-4 flex items-center gap-3 backdrop-blur-md hover:bg-white/20 transition-all duration-300 group/stat">
            <div className="p-2 rounded-lg bg-purple-500/20 backdrop-blur-sm group-hover/stat:bg-purple-500/30 transition-colors">
              <LuUsers className="h-4 w-4 text-purple-300" />
            </div>
            <span className="text-white/80 font-medium">{teacher.students} students</span>
          </div>
          
          <div className="rounded-lg bg-white/10 p-4 flex items-center gap-3 backdrop-blur-md hover:bg-white/20 transition-all duration-300 group/stat">
            <div className="p-2 rounded-lg bg-amber-500/20 backdrop-blur-sm group-hover/stat:bg-amber-500/30 transition-colors">
              <LuStar className="h-4 w-4 text-amber-300" />
            </div>
            <span className="text-white/80 font-medium">{teacher.rating}</span>
          </div>
          
          <div className="rounded-lg bg-white/10 p-4 flex items-center gap-3 backdrop-blur-md hover:bg-white/20 transition-all duration-300 group/stat">
            <div className="p-2 rounded-lg bg-cyan-500/20 backdrop-blur-sm group-hover/stat:bg-cyan-500/30 transition-colors">
              <span className="text-cyan-300 text-xs font-semibold">EXP</span>
            </div>
            <span className="text-white/80 font-medium">{teacher.experience}</span>
          </div>
        </div>

        {/* Action buttons with glassmorphism */}
        <div className="relative z-10 mt-6 flex items-center justify-between gap-3">
          <button
            className="flex-1 px-4 py-3 text-sm font-medium rounded-xl bg-white/20 text-white/90 hover:bg-white/30 backdrop-blur-md transition-all duration-300 hover:shadow-lg hover:shadow-white/10 active:scale-95"
            onClick={() => onViewProfile?.(teacher)}
            type="button"
          >
            View Profile
          </button>
          <button
            className="flex-1 px-4 py-3 text-sm font-medium rounded-lg bg-gradient-to-r from-indigo-700 to-purple-500 text-white/90 hover:from-indigo-500/40 hover:to-purple-500/40 backdrop-blur-md transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/20 active:scale-95"
            onClick={() => onMessage?.(teacher)}
            type="button"
          >
            Message
          </button>
        </div>

        {/* Enhanced glassmorphism overlay */}
        <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-60" />
        
        {/* Subtle inner glow */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-indigo-400/5 via-transparent to-cyan-400/5 opacity-40" />
      </div>
    </div>
  );
}


