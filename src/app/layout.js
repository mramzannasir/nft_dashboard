"use client";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import "./globals.css";
import { sidebarWidth } from "./context/context";
import React, { useContext, useState } from "react";
import Buttombar from "./components/Buttombar";

export default function RootLayout({ children }) {
	const [newWidth, setNewWidth] = useState(false);
	return (
		<html lang="en">
			<body className="bg-light dark:bg-modeDark w-full  duration-100 transition-all overflow-x-hidden box-border">
				<sidebarWidth.Provider value={{ newWidth, setNewWidth }}>
					<main className="wrapper relative">
						{/* Body */}
						<div className="w-full flex">
							<div className="hidden lg:block">
								{/* Side bar */}
								<div className="h-full w-[80px] fixed flex">
									<Sidebar />
								</div>
							</div>
							<div className="wrapper h-full  lg:ml-[80px]">
								{/* Navbar */}
								<div className="contain mt-[20px] mb-[40px] xl:mt-[30px] xl:mb-[50px]">
									<Navbar />
								</div>
								<div className="contain h-full">{children}</div>
							</div>
						</div>
						{/* Bottom bar */}
						{/* <div className="fixed lg:hidden w-full h-[45px] bg-white dark:bg-dark left-0 bottom-0">
							<Buttombar />
						</div> */}
					</main>
				</sidebarWidth.Provider>
			</body>
		</html>
	);
}
