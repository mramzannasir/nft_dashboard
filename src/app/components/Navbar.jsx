/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React, { useState, useEffect } from "react";
import { CiSearch } from "react-icons/ci";
import { BsMoon, BsSun } from "react-icons/bs";
import { IoIosNotificationsOutline } from "react-icons/io";
import { HiMenuAlt3, HiMenuAlt2 } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";
import { FaSignOutAlt, FaCircleChevronLeft } from "react-icons/fa";
import Link from "next/link";
import { MdDashboard } from "react-icons/md";
import { usePathname } from "next/navigation";
import { HiOutlineClipboardList } from "react-icons/hi";
import { AiOutlineHeart, AiOutlineStar } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { IoSettingsOutline } from "react-icons/io5";
import { GrClose } from "react-icons/gr";
import { BiBarChart } from "react-icons/bi";

const canAccessLocalStorage = () => {
	try {
		localStorage.setItem("test", "test");
		localStorage.removeItem("test");
		return true;
	} catch (error) {
		return false;
	}
};

const Navbar = () => {
	const [darkMode, setDarkMode] = useState(() => {
		const storedTheme =
			canAccessLocalStorage() && localStorage.getItem("theme");
		return storedTheme ? storedTheme === "dark" : false;
	});

	useEffect(() => {
		if (canAccessLocalStorage()) {
			const root = window.document.documentElement;
			if (darkMode) {
				root.classList.add("dark");
				localStorage.setItem("theme", "dark");
			} else {
				root.classList.remove("dark");
				localStorage.setItem("theme", "light");
			}
		}
	}, [darkMode]);

	const toggleDarkMode = () => {
		setDarkMode(!darkMode);
	};
	const [menuShow, setMenuShow] = useState(false);
	const pathname = usePathname();
	return (
		<main className="w-full">
			<div className="flex w-full items-center justify-between">
				<div className="flex items-center gap-2">
					<div>
						<img src="/Logo.png" className="h-[43px] hidden sm:block" alt="" />
					</div>
					<div className="flex h-[45px] w-[192px] items-center justify-center rounded-xl bg-white dark:bg-dark md:w-[382px]">
						<div className="flex h-full w-[35px] items-center justify-center">
							<CiSearch size={20} color="gray" />
						</div>
						<div className="w-full">
							<input
								type="text"
								className="h-full w-full rounded-xl border-none bg-inherit px-1 text-base text-gray outline-none placeholder:text-gray"
								placeholder="Search Here"
							/>
						</div>
					</div>
				</div>
				<div>
					<div className="flex items-center gap-3 md:gap-5 ">
						<div className="text-gray transition-all lg:hidden duration-500">
							{menuShow === true ? (
								<HiMenuAlt3 onClick={() => setMenuShow(!menuShow)} size={25} />
							) : (
								<HiMenuAlt2 onClick={() => setMenuShow(!menuShow)} size={25} />
							)}
						</div>
						<div>
							{darkMode ? (
								<div
									className="cursor-pointer text-gray "
									onClick={toggleDarkMode}>
									<BsSun size={20} />
								</div>
							) : (
								<div
									className="cursor-pointer text-gray "
									onClick={toggleDarkMode}>
									<BsMoon size={20} />
								</div>
							)}
						</div>
						<div className="text-gray">
							<IoIosNotificationsOutline size={24} />
						</div>
						<div>
							<img src="Avatar-3.png" className="h-[40px] w-[40px]" alt="" />
						</div>
					</div>
				</div>
			</div>
			<AnimatePresence>
				{menuShow && (
					<motion.div
						key="overlay"
						onClick={() => setMenuShow(!menuShow)}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0, duration: 1 }}
						transition={{ duration: 0.3 }}
						className="absolute left-0 top-0 z-40 h-full w-full bg-[#0000006b]"></motion.div>
				)}
			</AnimatePresence>
			<AnimatePresence>
				{menuShow && (
					<motion.div
						key="sidebar"
						initial={{ opacity: 0, x: -500 }}
						animate={{ opacity: 1, x: 0 }}
						exit={{ opacity: 0, x: -500 }}
						transition={{ duration: 0.8 }}
						className="fixed left-0 top-0 z-50 h-full w-[50%] bg-white shadow-xl shadow-[#000000b4]">
						<div className="flex w-full flex-col pl-3">
							<div className="flex w-full items-center gap-2">
								<div>
									<img
										src="/Logo.png"
										className="mb-[58px] mt-[60px] h-[35px] w-[35px]"
										alt=""
									/>
								</div>
								{/* <div>
								<h1 className="text-lg font-medium text-black opacity-70">Discover</h1>
									<p className="text-xs font-medium text-black opacity-50 -mt-2">Lorem ipsum dits</p> 
								</div>  */}
							</div>
							<div className="flex w-full flex-col items-center justify-center gap-[20px]">
								<div className="w-full">
									<Link
										onClick={() => setMenuShow(false)}
										href={`/`}
										className={`${
											pathname === "/"
												? "bg-light text-blue "
												: "text-[#65646A]"
										} flex h-[45px] w-[100%] items-center gap-2 rounded-l-lg pl-2 duration-300`}>
										<MdDashboard size={23} />
										<div>
											<p className="text-base font-normal">Dashboard</p>
										</div>
									</Link>
								</div>
								<div className="w-full">
									<Link
										onClick={() => setMenuShow(false)}
										href={`/statistics`}
										className={`${
											pathname === "/statistics"
												? "bg-light text-blue "
												: "text-[#65646A]"
										} flex h-[45px] w-[100%] items-center gap-2 rounded-l-lg pl-2 duration-300`}>
										<BiBarChart size={23} />
										<div>
											<p className="text-base font-normal">Statistics</p>
										</div>
									</Link>
								</div>
								<div className="w-full">
									<Link
										onClick={() => setMenuShow(false)}
										href={`/bid`}
										className={`${
											pathname === "/bid"
												? "bg-light text-blue  "
												: "text-[#65646A]"
										} flex h-[45px] w-[100%] items-center gap-2 rounded-md pl-2 duration-300`}>
										<HiOutlineClipboardList size={23} />
										<div>
											<p className="text-base font-normal">Bid</p>
										</div>
									</Link>
								</div>
								<div className="w-full">
									<Link
										onClick={() => setMenuShow(false)}
										href={`/saved`}
										className={`${
											pathname === "/saved"
												? "bg-light text-blue "
												: "text-[#65646A]"
										} flex h-[45px] w-[100%] items-center gap-2 rounded-md pl-2 duration-300`}>
										<AiOutlineHeart size={23} />
										<div>
											<p className="text-base font-normal">Saved</p>
										</div>
									</Link>
								</div>
								<div className="w-full">
									<Link
										onClick={() => setMenuShow(false)}
										href={`/collection`}
										className={`${
											pathname === "/collection"
												? "bg-light text-blue "
												: "text-[#65646A]"
										} flex h-[45px] w-[100%] items-center gap-2 rounded-md pl-2 duration-300`}>
										<AiOutlineStar size={23} />
										<div>
											<p className="text-base font-normal">Collection</p>
										</div>
									</Link>
								</div>
								<div className="w-full">
									<Link
										onClick={() => setMenuShow(false)}
										href={`/profile`}
										className={`${
											pathname === "/profile"
												? "bg-light text-blue "
												: "text-[#65646A]"
										} flex h-[45px] w-[100%] items-center gap-2 rounded-md pl-2 duration-300`}>
										<CgProfile size={23} />
										<div>
											<p className="text-base font-normal">Profile</p>
										</div>
									</Link>
								</div>
								<div className="w-full">
									<Link
										onClick={() => setMenuShow(false)}
										href={`/setting`}
										className={`${
											pathname === "/setting"
												? "bg-light text-blue "
												: "text-[#65646A]"
										} flex h-[45px] w-[100%] items-center gap-2 rounded-md pl-2 duration-300`}>
										<IoSettingsOutline size={23} />
										<div>
											<p className="text-base font-normal">Setting</p>
										</div>
									</Link>
								</div>
							</div>
							<div className="absolute bottom-5 items-center gap-3 pl-3  flex w-full ">
								<div className="">
									<FaSignOutAlt size={20} color="65646A" />
								</div>
								<div className="text-[#65646A] font-normal text-base">
									Signout
								</div>
							</div>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</main>
	);
};

export default Navbar;
