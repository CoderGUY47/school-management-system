"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MdSchool } from 'react-icons/md';
import { BiSolidNotification } from 'react-icons/bi';
import { RiSettings2Fill } from 'react-icons/ri';
import { FaUser } from 'react-icons/fa';

interface UserProfile {
  fullName: string;
  role: string;
  profilePicture?: string | null;
}

interface HeaderProps {
  // Styling props
  className?: string;
  headerClassName?: string;
  logoClassName?: string;
  navClassName?: string;
  profileClassName?: string;
  
  // Content props
  schoolName?: string;
  subtitle?: string;
  logoIcon?: React.ReactNode;
  logoSize?: string;
  
  // Navigation props
  showCourses?: boolean;
  showStudents?: boolean;
  showTeachers?: boolean;
  showAttendance?: boolean;
  showProfile?: boolean;
  
  // User profile props
  userProfile: UserProfile;
  showNotifications?: boolean;
  showSettings?: boolean;
  showSignOut?: boolean;
  
  // Event handlers
  onSettingsClick?: () => void;
  onSignOut?: () => void;
  onNotificationClick?: () => void;
  
  // Dark mode support
  darkMode?: boolean;
}

const Header: React.FC<HeaderProps> = ({
  // Styling props
  className = "",
  headerClassName = "backdrop-blur-xl shadow-lg transition-all duration-500",
  logoClassName = "w-14 h-14 bg-gradient-to-br from-purple-700 to-purple-400 rounded-full flex items-center justify-center",
  navClassName = "text-gray-400 hover:text-white text-base font-poppins transition-colors",
  profileClassName = "w-14 h-14 bg-gradient-to-br from-gray-600 to-gray-400 rounded-full flex items-center justify-center text-white font-semibold shadow-lg font-poppins cursor-pointer hover:bg-gray-500 transition-colors overflow-hidden",
  
  // Content props
  schoolName = "Blend Learning Center",
  subtitle = "Administrative Dashboard",
  logoIcon,
  logoSize = "text-3xl",
  
  // Navigation props
  showCourses = true,
  showStudents = true,
  showTeachers = true,
  showAttendance = true,
  showProfile = true,
  
  // User profile props
  userProfile,
  showNotifications = true,
  showSettings = true,
  showSignOut = true,
  
  // Event handlers
  onSettingsClick,
  onSignOut,
  onNotificationClick,
  
  // Dark mode support
  darkMode = false
}) => {
  const [profileImageError, setProfileImageError] = useState(false);

  const handleSettingsClick = () => {
    if (onSettingsClick) {
      onSettingsClick();
    } else {
      console.log('Settings clicked');
    }
  };

  const handleSignOut = () => {
    if (onSignOut) {
      onSignOut();
    } else {
      console.log('Sign out clicked');
    }
  };

  const handleNotificationClick = () => {
    if (onNotificationClick) {
      onNotificationClick();
    } else {
      console.log('Notification clicked');
    }
  };

  const bgColor = darkMode ? 'bg-black/20' : 'bg-white/10';

  return (
    <header className={`${headerClassName} ${bgColor} fixed top-0 left-0 right-0 z-50 py-2 ${className}`}>
      <div className="container mx-auto px-6 py-6">
        <div className="flex items-center justify-between h-full">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-3">
              <div className={logoClassName}>
                {logoIcon || <MdSchool className={`text-white ${logoSize}`} />}
              </div>
              <div>
                <div className="text-2xl font-bold text-white font-poppins">{schoolName}</div>
                <div className="text-gray-300 text-sm font-poppins">{subtitle}</div>
              </div>
            </div>
          </div>
          
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-4">
              {showCourses && (
                <div className="text-gray-400 text-base font-poppins">Courses</div>
              )}
              {showStudents && (
                <div className="text-gray-400 text-base font-poppins">Students</div>
              )}
              {showTeachers && (
                <Link href="/teachers" className={navClassName}>Teachers</Link>
              )}
              {showAttendance && (
                <Link href="/teacher/attendance" className={navClassName}>
                  Attendance
                </Link>
              )}
              {showProfile && (
                <Link href="/profile" className={navClassName}>
                  Profile
                </Link>
              )}
            </div>

            <div className="flex items-center space-x-4">
              {showNotifications && (
                <button 
                  onClick={handleNotificationClick}
                  className="relative p-3 text-gray-300 hover:text-white transition-colors rounded-full hover:bg-white/10"
                >
                  <BiSolidNotification size={26} />
                  <span className="absolute -top-1 right-1 w-3 h-3 bg-orange-600 rounded-full"></span>
                </button>
              )}
              
              {showSettings && (
                <button 
                  onClick={handleSettingsClick}
                  className="p-3 text-gray-300 hover:text-white transition-colors rounded-full hover:bg-white/10"
                >
                  <RiSettings2Fill size={26} />
                </button>
              )}
              
              <div className="flex items-center space-x-3">
                <div className="text-right mr-3">
                  <div className="text-white font-semibold text-sm font-poppins">{userProfile.fullName}</div>
                  <div className="text-gray-300 text-xs font-poppins">{userProfile.role}</div>
                </div>
                
                <Link href="/profile" className={profileClassName}>
                  {userProfile.profilePicture && !profileImageError ? (
                    <Image
                      src={userProfile.profilePicture}
                      alt="Profile Picture"
                      width={56}
                      height={56}
                      className="w-full h-full object-cover"
                      unoptimized
                      onError={() => {
                        setProfileImageError(true);
                        console.log('Profile image failed to load, showing default icon');
                      }}
                    />
                  ) : (
                    <FaUser className="text-white text-3xl" />
                  )}
                </Link>

                {showSignOut && (
                  <button 
                    onClick={handleSignOut}
                    className="px-4 py-2 bg-red-500/20 hover:bg-red-500/30 text-red-400 hover:text-red-300 rounded-lg transition-all duration-300 font-poppins text-sm"
                  >
                    Sign Out
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;