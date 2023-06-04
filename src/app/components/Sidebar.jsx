"use client";
import React from "react";
import { BiLogOut, BiLogIn } from "react-icons/bi";
import { sidebarWidth } from "../context/context";
import { useContext } from "react";
import { FaSignOutAlt } from "react-icons/fa";
import Link from 'next/link'
import {MdDashboard} from "react-icons/md"
import { usePathname } from 'next/navigation';
import {HiOutlineClipboardList} from "react-icons/hi"
import {AiOutlineHeart, AiOutlineStar} from "react-icons/ai"
import {CgProfile} from "react-icons/cg"
import {IoSettingsOutline} from "react-icons/io5"

const Sidebar = () => {
	const pathname = usePathname();
	return (
		<main className="w-full bg-white dark:bg-dark shadow relative h-full">
			<div className="flex flex-col w-full ">
				<div className="w-full ">
					<img src="/Logo.png" className="mx-auto mt-[30px] w-[35px] h-[35px] mb-[58px]" alt="" />
				</div>
				<div className="w-full flex flex-col justify-center items-center gap-[50px]">
					<div>
						<Link href={`/`} className={`${pathname === "/" ? "text-blue" : "text-[#65646A]"} duration-300 `}>
							<MdDashboard size={23} />
						</Link>
					</div>
					<div>
						<Link href={`/bid`} className={`${pathname === "/bid" ? "text-blue" : "text-[#65646A]"} duration-300 `}>
							<HiOutlineClipboardList size={23} />
						</Link>
					</div>
					<div>
						<Link href={`/saved`} className={`${pathname === "/saved" ? "text-blue" : "text-[#65646A]"} duration-300 `}>
							<AiOutlineHeart size={23} />
						</Link>
					</div>
					<div>
						<Link href={`/collection`} className={`${pathname === "/collection" ? "text-blue" : "text-[#65646A]"} duration-300 `}>
							<AiOutlineStar size={23} />
						</Link>
					</div>
					<div>
						<Link href={`/profile`} className={`${pathname === "/profile" ? "text-blue" : "text-[#65646A]"} duration-300 `}>
							<CgProfile size={23} />
						</Link>
					</div>
					<div>
						<Link href={`/setting`} className={`${pathname === "/setting" ? "text-blue" : "text-[#65646A]"} duration-300 `}>
							<IoSettingsOutline size={23} />
						</Link>
					</div>
				</div>
				<div className="absolute left-[50%] translate-x-[-50%] bottom-5">
					<FaSignOutAlt color="65646A" />
				</div>
			</div>
		</main>
	);
};

export default Sidebar;
