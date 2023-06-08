"use client";
import React from "react";
import { AiFillFileImage } from "react-icons/ai";
import Table from "./Table/Table";

const page = () => {
	return (
		<main className="w-full box-border">
			{/* Banner */}
			<div className=" w-full ">
				<div className="mb-[30px]">
					<h1 className=" text-xl font-semibold text-black  dark:text-white ">
						Trending Bids
					</h1>
					<p className="text-sm text-[#969595] ">Welcome Bids Page</p>
				</div>
				<div className=" rounded-[18px]  ">
					{/* Trending bids */}
					<div className="grid w-full grid-cols-1 gap-[30px] md:grid-cols-3 xl:grid-cols-4">
						<div className="flex h-[96px] w-full items-center justify-between rounded-[18px] bg-white px-5 dark:bg-dark dark:text-white">
							<div className="flex items-center gap-2">
								<div className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-blue">
									<AiFillFileImage size={20} color="white" />
								</div>
								<div>
									<h1 className="mb-4 text-xl font-semibold ">24K</h1>
									<p className="-mt-5 text-xs font-normal text-light-blue">
										Artworks
									</p>
								</div>
							</div>
						</div>
						<div className="flex h-[96px] w-full items-center justify-between rounded-[18px] bg-white px-5 dark:bg-dark dark:text-white">
							<div className="flex items-center gap-2">
								<div className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-green">
									<AiFillFileImage size={20} color="white" />
								</div>
								<div>
									<h1 className="mb-4 text-xl font-semibold ">82K</h1>
									<p className="-mt-5 text-xs font-normal text-light-blue">
										Auction
									</p>
								</div>
							</div>
						</div>
						<div className="flex h-[96px] w-full items-center justify-between rounded-[18px] bg-white px-5 dark:bg-dark dark:text-white">
							<div className="flex items-center gap-2">
								<div className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-yellow-400">
									<AiFillFileImage size={20} color="white" />
								</div>
								<div>
									<h1 className="mb-4 text-xl font-semibold ">200</h1>
									<p className="-mt-5 text-xs font-normal text-light-blue">
										Creators
									</p>
								</div>
							</div>
							<div></div>
						</div>
						<div className="flex h-[96px] w-full items-center justify-between rounded-[18px] bg-white px-5 dark:bg-dark dark:text-white">
							<div className="flex items-center gap-2">
								<div className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-red">
									<AiFillFileImage size={20} color="white" />
								</div>
								<div>
									<h1 className="mb-4 text-xl font-semibold ">89</h1>
									<p className="-mt-5 text-xs font-normal text-light-blue">
										Cancelled
									</p>
								</div>
							</div>
							<div></div>
						</div>
					</div>
				</div>
			</div>
			<section className="w-full">
				<div className="my-[60px] flex items-center justify-between">
					<div>
						<h1 className=" text-xl font-semibold text-black  dark:text-white ">
							Active bids
						</h1>
					</div>
					<div>
						<button className="flex h-[35px]  w-[130px] items-center justify-center rounded border-none bg-blue text-sm font-normal text-white outline-none">
							Place a bid
						</button>
					</div>
				</div>
				{/* Table Start from here */}
				<Table />
			</section>
		</main>
	);
};

export default page;
