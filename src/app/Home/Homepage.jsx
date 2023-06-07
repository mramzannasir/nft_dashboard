/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import All from "./Bids/All";
import Artwork from "./Bids/Artwork";
import Book from "./Bids/Book";

const Homepage = () => {
	const [bidsPage, setBidsPage] = useState("1");
	return (
		<main className="w-full">
			{/* Top Banner */}
			<div className="flex w-full flex-col items-center justify-between gap-[30px] lf:flex-row">
				<div className="imgbg relative h-[228px] w-full rounded-[12px] p-4 md:h-[300px] md:p-7 lg:h-[250px] lf:h-[300px] lf:w-[50%] 3xl:h-[265px] 4xl:h-[250px]">
					<div className="w-full md:w-[60%] lg:w-[80%] xl:w-[60%]">
						<h1 className="text-2xl font-semibold text-white md:text-4xl">
							Discover, Collect, Sell and Create your NFT
						</h1>
						<p className="mb-[29px] mt-[10px] text-sm font-normal text-white opacity-70">
							Digital marketplace for crypto collectibles and non fungable
							tokens
						</p>
						<div className="flex items-center gap-3">
							<button className="h-[40px] w-[131px] rounded-[9px] bg-blue text-[14px] font-semibold text-white">
								Explore Now
							</button>
							<button className="h-[40px] w-[131px] rounded-[9px] bg-red text-[14px] font-semibold text-white">
								Create
							</button>
						</div>
					</div>
				</div>
				<div className="flex h-auto w-full flex-col gap-[20px] rounded-xl bg-white p-[15px]  dark:bg-dark md:h-[300px] md:flex-row md:p-[18px] lg:h-[250px] lf:h-[300px] lf:w-[50%]  3xl:h-[265px] 4xl:h-[250px]">
					<div className="w-full md:w-[50%]">
						<img
							src="/header.png"
							className=" h-[229px] w-full md:h-full"
							alt=""
						/>
					</div>
					<div className="w-full md:w-[50%]">
						<div className="flex w-full flex-col gap-3">
							<div className="flex items-center gap-1">
								<div>
									<img
										src="/Avatar-1.png"
										className="h-[35px] w-[35px]"
										alt=""
									/>
								</div>
								<div className="flex items-center gap-1">
									<h1 className="text-sm font-semibold text-black dark:text-white">
										John Abraham
									</h1>
									<div className="h-1 w-1 rounded-full bg-green"></div>
								</div>
							</div>
							<div>
								<h1 className="text-lg font-semibold text-black dark:text-white">
									Birghten LQ
								</h1>
								<div className=" my-4 w-full">
									<div className="flex items-center justify-between text-black dark:text-white">
										<div>
											<p className="text-sm">Auction time</p>
										</div>
										<div className="">
											<p className="text-sm font-normal">
												Current Bid &nbsp;&nbsp;&nbsp;{" "}
												<span className="text-sm font-normal text-blue">
													0.05ETH
												</span>{" "}
											</p>
										</div>
									</div>
									<div className="mt-3 flex items-center justify-between text-light-blue">
										<div>
											<p className="text-sm">3h 1m 50s</p>
										</div>
										<div className="">
											<p className="text-sm font-normal">
												&nbsp;&nbsp;&nbsp;{" "}
												<span className="text-sm font-normal text-blue">
													0.15 ETH
												</span>{" "}
											</p>
										</div>
									</div>
								</div>

								<div className="flex items-center justify-center gap-6 md:justify-between md:gap-0 ">
									<button className="h-[40px] w-[145px] rounded-[9px] bg-blue text-[14px] font-semibold text-white">
										Explore Now
									</button>
									<button className="h-[40px] w-[145px] rounded-[9px] bg-red text-[14px] font-semibold text-white">
										Create
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* 2nd section bid */}
			<div className="w-full">
				<div className="mb-[30px] mt-[70px] flex w-full items-center justify-between">
					<div>
						<p className="text-lg font-semibold text-black dark:text-white">
							Trending Bids
						</p>
					</div>
					<div className="flex items-center gap-2 text-black dark:text-white md:gap-3">
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
				</div>
				{bidsPage === "1" && <All />}
				{bidsPage === "2" && <Artwork />}
				{bidsPage === "3" && <Book />}
			</div>
		</main>
	);
};

export default Homepage;
