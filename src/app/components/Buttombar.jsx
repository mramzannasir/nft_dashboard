'use client'
import React from "react";
import Link from "next/link";
import { MdDashboard } from "react-icons/md";
import { usePathname } from "next/navigation";
import { HiOutlineClipboardList } from "react-icons/hi";
import { AiOutlineHeart, AiOutlineStar } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { IoSettingsOutline } from "react-icons/io5";

const Buttombar = () => {
  const pathname = usePathname();
	return (
		<main className="w-full h-full">
			<div className="w-full px-2 h-full flex justify-between items-center">
				<div>
					<Link
						href={`/`}
						className={`${
							pathname === "/" ? "text-blue" : "text-[#65646A]"
						} duration-300 `}>
						<MdDashboard size={20} />
					</Link>
				</div>
				<div>
					<Link
						href={`/bid`}
						className={`${
							pathname === "/bid" ? "text-blue" : "text-[#65646A]"
						} duration-300 `}>
						<HiOutlineClipboardList size={20} />
					</Link>
				</div>
				<div>
					<Link
						href={`/saved`}
						className={`${
							pathname === "/saved" ? "text-blue" : "text-[#65646A]"
						} duration-300 `}>
						<AiOutlineHeart size={20} />
					</Link>
				</div>
				<div>
					<Link
						href={`/collection`}
						className={`${
							pathname === "/collection" ? "text-blue" : "text-[#65646A]"
						} duration-300 `}>
						<AiOutlineStar size={20} />
					</Link>
				</div>
				<div>
					<Link
						href={`/profile`}
						className={`${
							pathname === "/profile" ? "text-blue" : "text-[#65646A]"
						} duration-300 `}>
						<CgProfile size={20} />
					</Link>
				</div>
				<div>
					<Link
						href={`/setting`}
						className={`${
							pathname === "/setting" ? "text-blue" : "text-[#65646A]"
						} duration-300 `}>
						<IoSettingsOutline size={20} />
					</Link>
				</div>
			</div>
		</main>
	);
};

export default Buttombar;
