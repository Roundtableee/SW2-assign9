import React from 'react';
import Link from 'next/link';

interface TopMenuItemProps {
  label: string;  // ชื่อเมนู
  href: string;   // ลิงก์ปลายทาง
}

const TopMenuItem: React.FC<TopMenuItemProps> = ({ label, href }) => {
  return (
    <li>
      <Link 
        href={href} 
        className="text-gray-700 hover:text-gray-900 px-3 py-2 block"
      >
        {label}
      </Link>
    </li>
  );
};

export default TopMenuItem;
