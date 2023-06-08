"use client";
import React from "react";
import { MdDone } from "react-icons/md";
import { HiLockClosed } from "react-icons/hi2";

const page = () => {
	return (
		<main className="w-full text-black dark:text-white">
			<h1 className="text-lg font-semibold">Profile</h1>
			<div className="mt-[20px] flex w-full flex-col gap-7 lf:flex-row">
				<div className="w-full lf:w-[46%]">
					<div className="w-full rounded-[18px] bg-white p-5 dark:bg-dark md:h-[294px]">
						<div>
							<img src="/Avatar-1.png" alt="" />
							<h2 className="my-1 text-base font-semibold">Welcome, Nasir</h2>
							<p className="text-sm font-normal">
								Look like you are not verified yet. Verify yourself to use full
								potential of Xtraider.
							</p>
						</div>
						<div className="mt-[60px]">
							<div className="flex items-center gap-2">
								<div className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-green">
									<MdDone color="white" size={25} />
								</div>
								<div>
									<p className="text-sm font-normal text-blue">
										Verify Account
									</p>
								</div>
							</div>
							<div className="my-[15px] h-[1px] w-full bg-gray opacity-30"></div>
							<div className="flex items-center gap-2">
								<div className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-blue">
									<HiLockClosed color="white" size={18} />
								</div>
								<div>
									<p className="text-sm font-normal text-blue">
										Two-foctor Authentication (2FA)
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="flex w-full flex-col items-end justify-end lf:w-[54%] xl:h-[294px]">
					<div className="w-full">
						{" "}
						<h1 className="text-lg font-semibold">Following</h1>
					</div>
					<div className="mt-[20px] grid w-full grid-cols-1 place-content-end place-items-end gap-6 lf:grid-cols-2">
						<div className="flex w-full items-center justify-between rounded-[18px] bg-white p-5 dark:bg-dark">
							<div className="flex justify-center gap-2">
								<div>
									<img src="/Avatar-2.png" alt="" />
								</div>
								<div>
									<h1 className="text-base font-medium">Abdullah</h1>
									<p className="-mt-1 text-sm font-normal">60 Items</p>
								</div>
							</div>
							<div>
								<button className="rounded-lg bg-red px-[14px] py-1 text-sm font-medium text-white">
									Unfollow
								</button>
							</div>
						</div>
						<div className="flex w-full items-center justify-between rounded-[18px] bg-white p-5 dark:bg-dark">
							<div className="flex justify-center gap-2">
								<div>
									<img src="/Avatar-2.png" alt="" />
								</div>
								<div>
									<h1 className="text-base font-medium">Abdullah</h1>
									<p className="-mt-1 text-sm font-normal">60 Items</p>
								</div>
							</div>
							<div>
								<button className="rounded-lg bg-red px-[14px] py-1 text-sm font-medium text-white">
									Unfollow
								</button>
							</div>
						</div>
						<div className="flex w-full items-center justify-between rounded-[18px] bg-white p-5 dark:bg-dark">
							<div className="flex justify-center gap-2">
								<div>
									<img src="/Avatar-2.png" alt="" />
								</div>
								<div>
									<h1 className="text-base font-medium">Abdullah</h1>
									<p className="-mt-1 text-sm font-normal">60 Items</p>
								</div>
							</div>
							<div>
								<button className="rounded-lg bg-red px-[14px] py-1 text-sm font-medium text-white">
									Unfollow
								</button>
							</div>
						</div>
						<div className="flex w-full items-center justify-between rounded-[18px] bg-white p-5 dark:bg-dark">
							<div className="flex justify-center gap-2">
								<div>
									<img src="/Avatar-2.png" alt="" />
								</div>
								<div>
									<h1 className="text-base font-medium">Abdullah</h1>
									<p className="-mt-1 text-sm font-normal">60 Items</p>
								</div>
							</div>
							<div>
								<button className="rounded-lg bg-red px-[14px] py-1 text-sm font-medium text-white">
									Unfollow
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="my-[60px] w-full">
				<h1 className="text-lg font-semibold">My Bought</h1>
        <div className="grid mt-[20px] grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-3 xl:grid-cols-5">
          <div className="relative p-3 bg-white rounded-[18px] dark:bg-black">
            <img src="/primary.png" className="w-full" alt="" />
            <h1 className="text-lg font-semibold mt-2">Liquid Wave</h1>
            <img src="/Avatar-1.png" className="absolute right-[50px] bottom-[30px]" alt="" />
          </div>
          <div className="relative p-3 bg-white rounded-[18px] dark:bg-black">
            <img src="/primary.png" className="w-full" alt="" />
            <h1 className="text-lg font-semibold mt-2">Liquid Wave</h1>
            <img src="/Avatar-1.png" className="absolute right-[50px] bottom-[30px]" alt="" />
          </div>
          <div className="relative p-3 bg-white rounded-[18px] dark:bg-black">
            <img src="/primary.png" className="w-full" alt="" />
            <h1 className="text-lg font-semibold mt-2">Liquid Wave</h1>
            <img src="/Avatar-1.png" className="absolute right-[50px] bottom-[30px]" alt="" />
          </div>
          <div className="relative p-3 bg-white rounded-[18px] dark:bg-black">
            <img src="/primary.png" className="w-full" alt="" />
            <h1 className="text-lg font-semibold mt-2">Liquid Wave</h1>
            <img src="/Avatar-1.png" className="absolute right-[50px] bottom-[30px]" alt="" />
          </div>
          <div className="relative p-3 bg-white rounded-[18px] dark:bg-black">
            <img src="/primary.png" className="w-full" alt="" />
            <h1 className="text-lg font-semibold mt-2">Liquid Wave</h1>
            <img src="/Avatar-1.png" className="absolute right-[50px] bottom-[30px]" alt="" />
          </div>
        </div>
			</div>
      <div className="w-full">
				<h1 className="text-lg font-semibold">My Collection</h1>
        <div className="grid mt-[20px] grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-3 xl:grid-cols-5">
          <div className="relative p-3 bg-white rounded-[18px] dark:bg-black">
            <img src="/primary.png" className="w-full" alt="" />
            <h1 className="text-lg font-semibold mt-2">Liquid Wave</h1>
            <img src="/Avatar-1.png" className="absolute right-[50px] bottom-[30px]" alt="" />
          </div>
          <div className="relative p-3 bg-white rounded-[18px] dark:bg-black">
            <img src="/primary.png" className="w-full" alt="" />
            <h1 className="text-lg font-semibold mt-2">Liquid Wave</h1>
            <img src="/Avatar-1.png" className="absolute right-[50px] bottom-[30px]" alt="" />
          </div>
          <div className="relative p-3 bg-white rounded-[18px] dark:bg-black">
            <img src="/primary.png" className="w-full" alt="" />
            <h1 className="text-lg font-semibold mt-2">Liquid Wave</h1>
            <img src="/Avatar-1.png" className="absolute right-[50px] bottom-[30px]" alt="" />
          </div>
          <div className="relative p-3 bg-white rounded-[18px] dark:bg-black">
            <img src="/primary.png" className="w-full" alt="" />
            <h1 className="text-lg font-semibold mt-2">Liquid Wave</h1>
            <img src="/Avatar-1.png" className="absolute right-[50px] bottom-[30px]" alt="" />
          </div>
          <div className="relative p-3 bg-white rounded-[18px] dark:bg-black">
            <img src="/primary.png" className="w-full" alt="" />
            <h1 className="text-lg font-semibold mt-2">Liquid Wave</h1>
            <img src="/Avatar-1.png" className="absolute right-[50px] bottom-[30px]" alt="" />
          </div>
        </div>
			</div>
		</main>
	);
};

export default page;
