"use client";
import React from "react";
import { BiLogOut, BiLogIn } from "react-icons/bi";
import { sidebarWidth } from "../context/context";
import { useContext } from "react";
import { FaSignOutAlt } from "react-icons/fa";
import Link from "next/link";
import { MdDashboard } from "react-icons/md";
import { usePathname } from "next/navigation";
import { HiOutlineClipboardList } from "react-icons/hi";
import { AiOutlineHeart, AiOutlineStar } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { IoSettingsOutline } from "react-icons/io5";
import { BiBarChart } from "react-icons/bi";

const Sidebar = () => {
	const pathname = usePathname();
	return (
		<main className="relative h-full w-full bg-white shadow dark:bg-dark">
			<div className="flex w-full flex-col ">
				<div className="w-full ">
					<img
						src="/Logo.png"
						className="mx-auto mb-[58px] mt-[30px] h-[35px] w-[35px]"
						alt=""
					/>
				</div>
				<div className="flex w-full flex-col items-center justify-center gap-[50px]">
					<div>
						<Link
							href={`/`}
							className={`${
								pathname === "/" ? "text-blue" : "text-[#65646A]"
							} duration-300 `}>
							<MdDashboard size={23} />
						</Link>
					</div>
					<div>
						<Link
							href={`/statistics`}
							className={`${
								pathname === "/statistics" ? "text-blue" : "text-[#65646A]"
							} duration-300 `}>
							<div>
								{" "}
								<BiBarChart size={25} /> 
							</div>
						</Link>
					</div>
					<div>
						<Link
							href={`/bid`}
							className={`${
								pathname === "/bid" ? "text-blue" : "text-[#65646A]"
							} duration-300 `}>
							<HiOutlineClipboardList size={23} />
						</Link>
					</div>
					<div>
						<Link
							href={`/saved`}
							className={`${
								pathname === "/saved" ? "text-blue" : "text-[#65646A]"
							} duration-300 `}>
							<AiOutlineHeart size={23} />
						</Link>
					</div>
					<div>
						<Link
							href={`/collection`}
							className={`${
								pathname === "/collection" ? "text-blue" : "text-[#65646A]"
							} duration-300 `}>
							<AiOutlineStar size={23} />
						</Link>
					</div>
					<div>
						<Link
							href={`/profile`}
							className={`${
								pathname === "/profile" ? "text-blue" : "text-[#65646A]"
							} duration-300 `}>
							<CgProfile size={23} />
						</Link>
					</div>
					<div>
						<Link
							href={`/setting`}
							className={`${
								pathname === "/setting" ? "text-blue" : "text-[#65646A]"
							} duration-300 `}>
							<IoSettingsOutline size={23} />
						</Link>
					</div>
					
				</div>
				<div className="absolute bottom-5 left-[50%] translate-x-[-50%]">
					<FaSignOutAlt color="65646A" />
				</div>
			</div>
		</main>
	);
};

export default Sidebar;
