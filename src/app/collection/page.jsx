/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React, { useState } from "react";
import All from "./Bids/All";
import Artwork from "./Bids/Artwork";
import Book from "./Bids/Book";

const page = () => {
	const [bidsPage, setBidsPage] = useState("1");
	return (
		<main className="w-full text-black dark:text-white">
			<h1 className="text-lg font-semibold">Collections</h1>
			<p className="text-xs font-medium">Welcome Collections Page</p>
			<div className="flex items-center gap-2 mt-[40px] mb-[20px] text-black dark:text-white md:gap-3">
				<button
					onClick={() => setBidsPage("1")}
					className={`flex h-[25px] items-center justify-center px-2 text-sm transition-all duration-500 ${
						bidsPage === "1" ? "bg-blue text-white" : ""
					}  rounded-[12px]`}>
					All
				</button>
				<button
					onClick={() => setBidsPage("2")}
					className={`flex h-[25px] items-center justify-center px-2 text-sm transition-all duration-500 ${
						bidsPage === "2" ? "bg-blue text-white" : ""
					}  rounded-[12px]`}>
					Artwork
				</button>
				<button
					onClick={() => setBidsPage("3")}
					className={`flex h-[25px] items-center justify-center px-2 text-sm transition-all duration-500 ${
						bidsPage === "3" ? "bg-blue text-white" : ""
					}  rounded-[12px]`}>
					Book
				</button>
			</div>
			<div className="w-full">
				{bidsPage === "1" && <All />}
				{bidsPage === "2" && <Artwork />}
				{bidsPage === "3" && <Book />}
			</div>
		</main>
	);
};

export default page;
