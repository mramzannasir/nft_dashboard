import React from "react";
// import { GrClose } from "react-icons/gr";
import { IoMdClose } from "react-icons/io";
const Table = () => {
	return (
		<main className="box-border w-full flex-col items-center justify-center overflow-x-scroll xl:overflow-hidden">
			<div className="w-full ">
				<div className="mt-10 grid w-[1500px] grid-cols-7  place-content-between gap-4 pl-3 text-black dark:text-white xl:w-full">
					<div className="font-semibold">
						<div className="flex items-center">
							<input
								id="checkbox-all-search"
								type="checkbox"
								className="h-4  w-4 rounded bg-dark text-blue   dark:bg-gray"
							/>
							<label htmlFor="checkbox-all-search" className="sr-only">
								checkbox
							</label>
						</div>
					</div>
					<div className="text-sm font-medium">Item List</div>
					<div className="text-center text-sm font-medium">Open Price</div>
					<div className="text-center text-sm font-medium">Your Offer</div>
					<div className="text-center text-sm font-medium">Recent Offer</div>
					<div className="text-center text-sm font-medium">Time Left</div>
					<div className="pl-10 text-center text-sm font-medium">Action</div>
				</div>
				<div className="mt-2  h-[1px] w-full bg-light-blue opacity-40"></div>{" "}
				{/* Data */}
				<div className="place-item-center mt-[30px] mb-4 grid w-[1500px] grid-cols-7  place-content-between gap-4 rounded-[18px] bg-white py-[10px] pl-3 text-black dark:bg-dark dark:text-white xl:w-full">
					<div className="flex items-center justify-start">
						<div className="mt-1 flex items-center">
							<input
								id="checkbox-all-search"
								type="checkbox"
								className="h-4  w-4 rounded bg-dark text-blue   dark:bg-gray"
							/>
							<label htmlFor="checkbox-all-search" className="sr-only">
								checkbox
							</label>
						</div>
					</div>
					<div className=" flex items-center justify-start gap-2">
						<div>
							<img src="/active-bid-1.png" className="h-[44px]" alt="" />
						</div>
						<div>
							<h1 className="text-sm font-semibold">Cute Cube Cool</h1>
							<p className="-mt-1 hidden text-sm font-normal 2xl:block">
								John Abraham
							</p>
						</div>
					</div>
					<div className="flex items-center justify-center text-center text-sm font-normal">
						0.0025ETH
					</div>
					<div className="flex items-center justify-center text-center text-sm font-normal">
						0.0025ETH
					</div>
					<div className="flex items-center justify-center gap-1">
						<div>
							<img src="/Avatar-2.png" alt="" />
						</div>
						<div className="text-center text-sm font-normal">0.0025ETH</div>
					</div>
					<div className="flex items-center justify-center text-center text-sm font-normal">
						2Hours 1m 30s
					</div>
					<div className="flex  items-center justify-center pl-10 text-center text-black dark:text-white">
						<IoMdClose size={20} className="cursor-pointer" />
					</div>
				</div>
                <div className="place-item-center mb-4 grid w-[1500px] grid-cols-7  place-content-between gap-4 rounded-[18px] bg-white py-[10px] pl-3 text-black dark:bg-dark dark:text-white xl:w-full">
					<div className="flex items-center justify-start">
						<div className="mt-1 flex items-center">
							<input
								id="checkbox-all-search"
								type="checkbox"
								className="h-4  w-4 rounded bg-dark text-blue   dark:bg-gray"
							/>
							<label htmlFor="checkbox-all-search" className="sr-only">
								checkbox
							</label>
						</div>
					</div>
					<div className=" flex items-center justify-start gap-2">
						<div>
							<img src="/active-bid-5.png" className="h-[44px]" alt="" />
						</div>
						<div>
							<h1 className="text-sm font-semibold">Liquid Wave</h1>
							<p className="-mt-1 hidden text-sm font-normal 2xl:block">
								John Abraham
							</p>
						</div>
					</div>
					<div className="flex items-center justify-center text-center text-sm font-normal">
						0.0025ETH
					</div>
					<div className="flex items-center justify-center text-center text-sm font-normal">
						0.0025ETH
					</div>
					<div className="flex items-center justify-center gap-1">
						<div>
							<img src="/Avatar-2.png" alt="" />
						</div>
						<div className="text-center text-sm font-normal">0.0025ETH</div>
					</div>
					<div className="flex items-center justify-center text-center text-sm font-normal">
						1Hours 6m 3s
					</div>
					<div className="flex  items-center justify-center pl-10 text-center text-black dark:text-white">
						<IoMdClose size={20} className="cursor-pointer" />
					</div>
				</div>
                <div className="place-item-center mb-4 grid w-[1500px] grid-cols-7  place-content-between gap-4 rounded-[18px] bg-white py-[10px] pl-3 text-black dark:bg-dark dark:text-white xl:w-full">
					<div className="flex items-center justify-start">
						<div className="mt-1 flex items-center">
							<input
								id="checkbox-all-search"
								type="checkbox"
								className="h-4  w-4 rounded bg-dark text-blue   dark:bg-gray"
							/>
							<label htmlFor="checkbox-all-search" className="sr-only">
								checkbox
							</label>
						</div>
					</div>
					<div className=" flex items-center justify-start gap-2">
						<div>
							<img src="/active-bid-2.png" className="h-[44px]" alt="" />
						</div>
						<div>
							<h1 className="text-sm font-semibold">Liquid Wave</h1>
							<p className="-mt-1 hidden text-sm font-normal 2xl:block">
								John Abraham
							</p>
						</div>
					</div>
					<div className="flex items-center justify-center text-center text-sm font-normal">
						0.0025ETH
					</div>
					<div className="flex items-center justify-center text-center text-sm font-normal">
						0.0025ETH
					</div>
					<div className="flex items-center justify-center gap-1">
						<div>
							<img src="/Avatar-2.png" alt="" />
						</div>
						<div className="text-center text-sm font-normal">0.0025ETH</div>
					</div>
					<div className="flex items-center justify-center text-center text-sm font-normal">
						7Hours 1m 0s
					</div>
					<div className="flex  items-center justify-center pl-10 text-center text-black dark:text-white">
						<IoMdClose size={20} className="cursor-pointer" />
					</div>
				</div>
                <div className="place-item-center mb-4 grid w-[1500px] grid-cols-7  place-content-between gap-4 rounded-[18px] bg-white py-[10px] pl-3 text-black dark:bg-dark dark:text-white xl:w-full">
					<div className="flex items-center justify-start">
						<div className="mt-1 flex items-center">
							<input
								id="checkbox-all-search"
								type="checkbox"
								className="h-4  w-4 rounded bg-dark text-blue   dark:bg-gray"
							/>
							<label htmlFor="checkbox-all-search" className="sr-only">
								checkbox
							</label>
						</div>
					</div>
					<div className=" flex items-center justify-start gap-2">
						<div>
							<img src="/active-bid-1.png" className="h-[44px]" alt="" />
						</div>
						<div>
							<h1 className="text-sm font-semibold">Liquid Wave</h1>
							<p className="-mt-1 hidden text-sm font-normal 2xl:block">
								John Abraham
							</p>
						</div>
					</div>
					<div className="flex items-center justify-center text-center text-sm font-normal">
						0.0025ETH
					</div>
					<div className="flex items-center justify-center text-center text-sm font-normal">
						0.0025ETH
					</div>
					<div className="flex items-center justify-center gap-1">
						<div>
							<img src="/Avatar-2.png" alt="" />
						</div>
						<div className="text-center text-sm font-normal">0.0025ETH</div>
					</div>
					<div className="flex items-center justify-center text-center text-sm font-normal">
						7Hours 1m 0s
					</div>
					<div className="flex  items-center justify-center pl-10 text-center text-black dark:text-white">
						<IoMdClose size={20} className="cursor-pointer" />
					</div>
				</div>
                <div className="place-item-center mb-4 grid w-[1500px] grid-cols-7  place-content-between gap-4 rounded-[18px] bg-white py-[10px] pl-3 text-black dark:bg-dark dark:text-white xl:w-full">
					<div className="flex items-center justify-start">
						<div className="mt-1 flex items-center">
							<input
								id="checkbox-all-search"
								type="checkbox"
								className="h-4  w-4 rounded bg-dark text-blue   dark:bg-gray"
							/>
							<label htmlFor="checkbox-all-search" className="sr-only">
								checkbox
							</label>
						</div>
					</div>
					<div className=" flex items-center justify-start gap-2">
						<div>
							<img src="/active-bid-2.png" className="h-[44px]" alt="" />
						</div>
						<div>
							<h1 className="text-sm font-semibold">Liquid Wave</h1>
							<p className="-mt-1 hidden text-sm font-normal 2xl:block">
								John Abraham
							</p>
						</div>
					</div>
					<div className="flex items-center justify-center text-center text-sm font-normal">
						0.0025ETH
					</div>
					<div className="flex items-center justify-center text-center text-sm font-normal">
						0.0025ETH
					</div>
					<div className="flex items-center justify-center gap-1">
						<div>
							<img src="/Avatar-2.png" alt="" />
						</div>
						<div className="text-center text-sm font-normal">0.0025ETH</div>
					</div>
					<div className="flex items-center justify-center text-center text-sm font-normal">
						7Hours 1m 0s
					</div>
					<div className="flex  items-center justify-center pl-10 text-center text-black dark:text-white">
						<IoMdClose size={20} className="cursor-pointer" />
					</div>
				</div>
                <div className="place-item-center mb-4 grid w-[1500px] grid-cols-7  place-content-between gap-4 rounded-[18px] bg-white py-[10px] pl-3 text-black dark:bg-dark dark:text-white xl:w-full">
					<div className="flex items-center justify-start">
						<div className="mt-1 flex items-center">
							<input
								id="checkbox-all-search"
								type="checkbox"
								className="h-4  w-4 rounded bg-dark text-blue   dark:bg-gray"
							/>
							<label htmlFor="checkbox-all-search" className="sr-only">
								checkbox
							</label>
						</div>
					</div>
					<div className=" flex items-center justify-start gap-2">
						<div>
							<img src="/active-bid-4.png" className="h-[44px]" alt="" />
						</div>
						<div>
							<h1 className="text-sm font-semibold">Liquid Wave</h1>
							<p className="-mt-1 hidden text-sm font-normal 2xl:block">
								John Abraham
							</p>
						</div>
					</div>
					<div className="flex items-center justify-center text-center text-sm font-normal">
						0.0025ETH
					</div>
					<div className="flex items-center justify-center text-center text-sm font-normal">
						0.0025ETH
					</div>
					<div className="flex items-center justify-center gap-1">
						<div>
							<img src="/Avatar-2.png" alt="" />
						</div>
						<div className="text-center text-sm font-normal">0.0025ETH</div>
					</div>
					<div className="flex items-center justify-center text-center text-sm font-normal">
						7Hours 1m 0s
					</div>
					<div className="flex  items-center justify-center pl-10 text-center text-black dark:text-white">
						<IoMdClose size={20} className="cursor-pointer" />
					</div>
				</div>
			</div>
		</main>
	);
};

export default Table;
