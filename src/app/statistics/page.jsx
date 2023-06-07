import React from "react";
import Linechart from "./Charts/Linechart";
import { FaWallet } from "react-icons/fa";
import { AiFillFileImage } from "react-icons/ai";

const page = () => {
	return (
		<main className="w-full">
			{/* 1st Sections */}
			<div className="flex w-full flex-col gap-[50px] xl:flex-row xl:gap-[30px]">
				<div className=" w-full  xl:w-[20%]">
					<h1 className="mb-[30px] text-lg font-semibold text-black  dark:text-white ">
						Trending Bids
					</h1>
					<div className="h-[348px] rounded-[18px] md:h-auto xl:h-[348px] ">
						{/* Trending bids */}
						<div className="flex flex-col gap-[30px] md:flex-row md:justify-between xl:flex-col">
							<div className="flex h-[96px] w-full items-center justify-between rounded-[18px] bg-white px-5 dark:bg-dark dark:text-white">
								<div className="flex items-center gap-2">
									<div className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-blue">
										<FaWallet size={20} color="white" />
									</div>
									<div>
										<h1 className="mb-4 text-xl font-semibold ">24K</h1>
										<p className="-mt-5 text-xs font-normal text-light-blue">
											Artwork
										</p>
									</div>
								</div>
								<div>
									<p className="-mt-1 text-sm font-normal text-green">
										+168.001%
									</p>
								</div>
							</div>
							<div className="flex h-[96px] w-full items-center justify-between rounded-[18px] bg-white px-5 dark:bg-dark dark:text-white">
								<div className="flex items-center gap-2">
									<div className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-red">
										<AiFillFileImage size={20} color="white" />
									</div>
									<div>
										<h1 className="mb-4 text-xl font-semibold ">89</h1>
										<p className="-mt-5 text-xs font-normal text-light-blue">
											Auction
										</p>
									</div>
								</div>
								<div>
									<p className="-mt-1 text-sm font-normal text-red">
										-168.001%
									</p>
								</div>
							</div>
							<div className="flex h-[96px] w-full items-center justify-between rounded-[18px] bg-white px-5 dark:bg-dark dark:text-white">
								<div className="flex items-center gap-2">
									<div className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-blue">
										<FaWallet size={20} color="white" />
									</div>
									<div>
										<h1 className="mb-4 text-xl font-semibold ">82K</h1>
										<p className="-mt-5 text-xs font-normal text-light-blue">
											Creators
										</p>
									</div>
								</div>
								<div>
									<p className="-mt-1 text-sm font-normal text-green">
										+168.001%
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="flex w-full flex-col gap-[50px] md:flex-row xl:w-[80%] xl:gap-[30px]">
					<div className="w-full md:w-[60%] ">
						<h1 className="mb-[30px] text-lg font-semibold text-black dark:text-white ">
							ETH Price
						</h1>
						<div className="flex h-[348px] items-center justify-center rounded-[18px] bg-white p-3 dark:bg-dark ">
							<Linechart />
						</div>
					</div>
					<div className=" w-full md:w-[40%]">
						<h1 className="mb-[30px] text-lg font-semibold text-black dark:text-white  ">
							Statistics
						</h1>
						<div className="box-border flex h-[348px] flex-col items-center  justify-center rounded-[18px] bg-white p-3 dark:bg-dark ">
							<div className="relative flex h-[280px] w-[280px] overflow-hidden rounded-full">
								<div className="h-full w-[50%] bg-[#6f4ff217]"></div>
								<div className="h-full w-[50%] bg-blue"></div>
								<div className="absolute left-[50%] top-[50%]  h-[90%] w-[90%] translate-x-[-50%] translate-y-[-50%] rounded-full bg-white dark:bg-dark "></div>
							</div>
							<div className="mt-4 flex w-full items-center justify-center gap-6">
								<div className="flex items-center gap-1">
									<div className="h-4 w-4 rounded-full bg-blue"></div>
									<div className="text-sm dark:text-white">Artwork Solid</div>
								</div>
								<div className="flex items-center gap-1">
									<div className="h-4 w-4 rounded-full bg-[#6f4ff217]"></div>
									<div className="text-sm dark:text-white">Artwork Cancel</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* 2nd and last sections */}

			<section className="my-[50px] flex w-full flex-col gap-7 lf:flex-row">
				<div className="w-full lf:w-[50%]">
					<div className="mb-[30px] flex items-center justify-between text-lg font-semibold text-black  dark:text-white ">
						<div>Recent Activity</div>
						<div className="cursor-pointer text-sm font-normal text-blue">
							See more
						</div>
					</div>
					<div className="flex  h-[510px] w-full flex-col gap-[10px] rounded-[18px] bg-white py-5 dark:bg-dark md:h-[392px]">
						<div className="flex w-full items-center justify-between border-b-[1px] border-[#D6DBDE] px-6 pb-2 dark:border-[#3d3d3d]">
							<div className="flex w-full items-center gap-2">
								<div>
									<img
										src="/Avatar-1.png"
										className="h-[43px] w-[43px]"
										alt=""
									/>
								</div>
								<div>
									<h1 className="text-base font-medium text-black dark:text-white">
										Papaya
									</h1>
									<p className="-mt-1 text-sm font-normal text-light-blue">
										Purchase by you <br className="md:hidden" /> for 0.05 ETH
									</p>
								</div>
							</div>
							<div className="w-[100px] text-right">
								<p className="-mt-1 text-sm font-normal text-[#68676E]">
									12m ago
								</p>
							</div>
						</div>
						<div className="flex w-full items-center justify-between border-b-[1px] border-[#D6DBDE] px-6 pb-2 dark:border-[#3d3d3d]">
							<div className="flex w-full items-center gap-2">
								<div>
									<img
										src="/Avatar-1.png"
										className="h-[43px] w-[43px]"
										alt=""
									/>
								</div>
								<div>
									<h1 className="text-base font-medium text-black dark:text-white">
										Papaya
									</h1>
									<p className="-mt-1 text-sm font-normal text-light-blue">
										Purchase by you <br className="md:hidden" /> for 0.05 ETH
									</p>
								</div>
							</div>
							<div className="w-[100px] text-right">
								<p className="-mt-1 text-sm font-normal text-[#68676E]">
									12m ago
								</p>
							</div>
						</div>
						<div className="flex w-full items-center justify-between border-b-[1px] border-[#D6DBDE] px-6 pb-2 dark:border-[#3d3d3d]">
							<div className="flex w-full items-center gap-2">
								<div>
									<img
										src="/Avatar-1.png"
										className="h-[43px] w-[43px]"
										alt=""
									/>
								</div>
								<div>
									<h1 className="text-base font-medium text-black dark:text-white">
										Papaya
									</h1>
									<p className="-mt-1 text-sm font-normal text-light-blue">
										Purchase by you <br className="md:hidden" /> for 0.05 ETH
									</p>
								</div>
							</div>
							<div className="w-[100px] text-right">
								<p className="-mt-1 text-sm font-normal text-[#68676E]">
									12m ago
								</p>
							</div>
						</div>
						<div className="flex w-full items-center justify-between border-b-[1px] border-[#D6DBDE] px-6 pb-2 dark:border-[#3d3d3d]">
							<div className="flex w-full items-center gap-2">
								<div>
									<img
										src="/Avatar-1.png"
										className="h-[43px] w-[43px]"
										alt=""
									/>
								</div>
								<div>
									<h1 className="text-base font-medium text-black dark:text-white">
										Papaya
									</h1>
									<p className="-mt-1 text-sm font-normal text-light-blue">
										Purchase by you <br className="md:hidden" /> for 0.05 ETH
									</p>
								</div>
							</div>
							<div className="w-[100px] text-right">
								<p className="-mt-1 text-sm font-normal text-[#68676E]">
									12m ago
								</p>
							</div>
						</div>
						<div className="flex w-full items-center justify-between border-b-[1px] border-[#D6DBDE] px-6 pb-2 dark:border-[#3d3d3d]">
							<div className="flex w-full items-center gap-2">
								<div>
									<img
										src="/Avatar-1.png"
										className="h-[43px] w-[43px]"
										alt=""
									/>
								</div>
								<div>
									<h1 className="text-base font-medium text-black dark:text-white">
										Papaya
									</h1>
									<p className="-mt-1 text-sm font-normal text-light-blue">
										Purchase by you <br className="md:hidden" /> for 0.05 ETH
									</p>
								</div>
							</div>
							<div className="w-[100px] text-right">
								<p className="-mt-1 text-sm font-normal text-[#68676E]">
									12m ago
								</p>
							</div>
						</div>
						<div className="flex  w-full items-center justify-between px-6">
							<div className="flex w-full items-center gap-2">
								<div>
									<img
										src="/Avatar-1.png"
										className="h-[43px] w-[43px]"
										alt=""
									/>
								</div>
								<div>
									<h1 className="text-base font-medium text-black dark:text-white">
										Papaya
									</h1>
									<p className="-mt-1 text-sm font-normal text-light-blue">
										Purchase by you <br className="md:hidden" /> for 0.05 ETH
									</p>
								</div>
							</div>
							<div className="w-[100px] text-right">
								<p className="-mt-1 text-sm font-normal text-[#68676E]">
									12m ago
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className="flex w-full flex-col gap-7 md:flex-row lf:w-[50%]">
					<div className="w-full md:w-[50%] ">
						<div className="mb-[30px] flex items-center justify-between text-lg font-semibold text-black  dark:text-white ">
							<div>Top Creators</div>
							<div className="text-sm font-normal text-blue"></div>
						</div>
						<div className="h-[392px] w-full flex flex-col gap-5 rounded-[18px] ">
							<div className="h-[82px] px-5 w-full rounded-[18px] bg-white dark:bg-dark flex justify-between items-center">
								<div className="flex w-full items-center gap-2">
									<div>
										<img
											src="/Avatar-1.png"
											className="h-[43px] w-[43px]"
											alt=""
										/>
									</div>
									<div>
										<h1 className="text-base font-semibold text-black dark:text-white">
											Papaya
										</h1>
										<p className="-mt-1 text-sm font-normal text-black dark:text-white">
											60 items
										</p>
									</div>
								</div>
								<div className="">
									<button className="h-[28px] w-[83px] rounded-[9px] border-blue border-[1px] flex justify-center items-center text-black  dark:text-white text-xs font-semibold">FOLLOW</button>
								</div>
							</div>
							<div className="h-[82px] px-5 w-full rounded-[18px] bg-white dark:bg-dark flex justify-between items-center">
								<div className="flex w-full items-center gap-2">
									<div>
										<img
											src="/Avatar-1.png"
											className="h-[43px] w-[43px]"
											alt=""
										/>
									</div>
									<div>
										<h1 className="text-base font-semibold text-black dark:text-white">
											Papaya
										</h1>
										<p className="-mt-1 text-sm font-normal text-black dark:text-white">
											60 items
										</p>
									</div>
								</div>
								<div className="">
									<button className="h-[28px] w-[83px] rounded-[9px] border-blue border-[1px] flex justify-center items-center text-black  dark:text-white text-xs font-semibold">FOLLOW</button>
								</div>
							</div>
							<div className="h-[82px] px-5 w-full rounded-[18px] bg-white dark:bg-dark flex justify-between items-center">
								<div className="flex w-full items-center gap-2">
									<div>
										<img
											src="/Avatar-1.png"
											className="h-[43px] w-[43px]"
											alt=""
										/>
									</div>
									<div>
										<h1 className="text-base font-semibold text-black dark:text-white">
											Papaya
										</h1>
										<p className="-mt-1 text-sm font-normal text-black dark:text-white">
											60 items
										</p>
									</div>
								</div>
								<div className="">
									<button className="h-[28px] w-[83px] rounded-[9px] border-blue border-[1px] flex justify-center items-center text-black  dark:text-white text-xs font-semibold">FOLLOW</button>
								</div>
							</div>
							<div className="h-[82px] px-5 w-full rounded-[18px] bg-white dark:bg-dark flex justify-between items-center">
								<div className="flex w-full items-center gap-2">
									<div>
										<img
											src="/Avatar-1.png"
											className="h-[43px] w-[43px]"
											alt=""
										/>
									</div>
									<div>
										<h1 className="text-base font-semibold text-black dark:text-white">
											Papaya
										</h1>
										<p className="-mt-1 text-sm font-normal text-black dark:text-white">
											60 items
										</p>
									</div>
								</div>
								<div className="">
									<button className="h-[28px] w-[83px] rounded-[9px] border-blue border-[1px] flex justify-center items-center text-black  dark:text-white text-xs font-semibold">FOLLOW</button>
								</div>
							</div>
						</div>
					</div>
					<div className="w-full md:w-[50%] ">
						<div className="md:mb-[30px]  hidden md:block flex items-center justify-between text-lg font-semibold text-black  dark:text-white ">
							<div className="opacity-0">Recent Activity</div>
							<div className="text-sm font-normal text-blue"></div>
						</div>
						<div className="h-[392px] w-full flex flex-col gap-5 rounded-[18px] ">
						<div className="h-[82px] px-5 w-full rounded-[18px] bg-white dark:bg-dark flex justify-between items-center">
								<div className="flex w-full items-center gap-2">
									<div>
										<img
											src="/Avatar-1.png"
											className="h-[43px] w-[43px]"
											alt=""
										/>
									</div>
									<div>
										<h1 className="text-base font-semibold text-black dark:text-white">
											Papaya
										</h1>
										<p className="-mt-1 text-sm font-normal text-black dark:text-white">
											60 items
										</p>
									</div>
								</div>
								<div className="">
									<button className="h-[28px] w-[83px] rounded-[9px] border-blue border-[1px] flex justify-center items-center text-black  dark:text-white text-xs font-semibold">FOLLOW</button>
								</div>
							</div>
							<div className="h-[82px] px-5 w-full rounded-[18px] bg-white dark:bg-dark flex justify-between items-center">
								<div className="flex w-full items-center gap-2">
									<div>
										<img
											src="/Avatar-1.png"
											className="h-[43px] w-[43px]"
											alt=""
										/>
									</div>
									<div>
										<h1 className="text-base font-semibold text-black dark:text-white">
											Papaya
										</h1>
										<p className="-mt-1 text-sm font-normal text-black dark:text-white">
											60 items
										</p>
									</div>
								</div>
								<div className="">
									<button className="h-[28px] w-[83px] rounded-[9px] border-blue border-[1px] flex justify-center items-center text-black  dark:text-white text-xs font-semibold">FOLLOW</button>
								</div>
							</div>
							<div className="h-[82px] px-5 w-full rounded-[18px] bg-white dark:bg-dark flex justify-between items-center">
								<div className="flex w-full items-center gap-2">
									<div>
										<img
											src="/Avatar-1.png"
											className="h-[43px] w-[43px]"
											alt=""
										/>
									</div>
									<div>
										<h1 className="text-base font-semibold text-black dark:text-white">
											Papaya
										</h1>
										<p className="-mt-1 text-sm font-normal text-black dark:text-white">
											60 items
										</p>
									</div>
								</div>
								<div className="">
									<button className="h-[28px] w-[83px] rounded-[9px] border-blue border-[1px] flex justify-center items-center text-black  dark:text-white text-xs font-semibold">FOLLOW</button>
								</div>
							</div>
							<div className="h-[82px] px-5 w-full rounded-[18px] bg-white dark:bg-dark flex justify-between items-center">
								<div className="flex w-full items-center gap-2">
									<div>
										<img
											src="/Avatar-1.png"
											className="h-[43px] w-[43px]"
											alt=""
										/>
									</div>
									<div>
										<h1 className="text-base font-semibold text-black dark:text-white">
											Papaya
										</h1>
										<p className="-mt-1 text-sm font-normal text-black dark:text-white">
											60 items
										</p>
									</div>
								</div>
								<div className="">
									<button className="h-[28px] w-[83px] rounded-[9px] border-blue border-[1px] flex justify-center items-center text-black  dark:text-white text-xs font-semibold">FOLLOW</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
};

export default page;
