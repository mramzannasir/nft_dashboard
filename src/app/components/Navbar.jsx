/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React, { useState, useEffect } from "react";
import { CiSearch } from "react-icons/ci";
import { BsMoon, BsSun } from "react-icons/bs";
import {IoIosNotificationsOutline } from "react-icons/io"
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

	return (
		<main className="w-full">
			<div className="w-full flex items-center justify-between">
				<div>
					<div className="w-[192px] md:w-[382px] h-[45px] rounded-xl bg-white dark:bg-dark flex justify-center items-center">
						<div className="w-[35px] h-full flex justify-center items-center">
							<CiSearch size={20} color="gray" />
						</div>
						<div className="w-full">
							<input
								type="text"
								className="w-full h-full rounded-xl border-none bg-inherit outline-none px-1 text-gray placeholder:text-gray text-base"
								placeholder="Search Here"
							/>
						</div>
					</div>
				</div>
				<div>
					<div className="flex gap-3 md:gap-5 items-center ">
						<div>
							{darkMode ? (
								<div className="text-gray cursor-pointer " onClick={toggleDarkMode}>
									<BsSun size={20} />
								</div>
							) : (
								<div className="text-gray cursor-pointer " onClick={toggleDarkMode}>
									<BsMoon size={20} />
								</div>
							)}
						</div>
						<div className="text-gray">
							<IoIosNotificationsOutline size={24}/>
						</div>
						<div>
							<img src="Avatar-3.png" className="w-[40px] h-[40px]" alt="" />
						</div>
					</div>
				</div>
			
			</div>
		</main>
	);
};

export default Navbar;
