/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";

const Homepage = () => {
	const [bidsPage, setBidsPage] = useState('1')
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
				<div className="flex h-[228px] w-full flex-col gap-[20px] rounded-xl bg-white p-[10px] dark:bg-dark md:h-[300px] md:flex-row md:p-[18px] lg:h-[250px] lf:h-[300px] lf:w-[50%] lf:w-[50%] 3xl:h-[265px] 4xl:h-[250px]">
					<div className="w-full md:w-[50%]">
						<img src="/header.png" className=" w-full" alt="" />
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

								<div className="flex items-center justify-center gap-10 md:gap-0 md:justify-between ">
									<button className="h-[40px] w-[131px] rounded-[9px] bg-blue text-[14px] font-semibold text-white">
										Explore Now
									</button>
									<button className="h-[40px] w-[131px] rounded-[9px] bg-red text-[14px] font-semibold text-white">
										Create
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* 2nd section bid */}
			<div className="w-full static">
			<div className="flex w-full items-center justify-between mb-[30px] mt-[70px]">
				<div>
					<p className="text-lg font-semibold text-black dark:text-white">Trending Bids</p>
				</div>
				<div className="flex items-center gap-2 md:gap-3 text-black dark:text-white">
					<button className={`text-sm px-2 py-[1px] bg-blue rounded-[14px]`} >All</button>
					<button className={`text-sm px-2 py-[1px] bg-blue rounded-[14px]`} >Artwork</button>
					<button className={`text-sm px-2 py-[1px] bg-blue rounded-[14px]`} >Bool</button>
				</div>
			</div>
			</div>
		</main>
	);
};

export default Homepage;
