"use client";
import React from "react";
import { CiUser } from "react-icons/ci";

const page = () => {
	return (
		<main className="w-full text-black dark:text-white mb-4">
			<h1 className="text-lg font-semibold">Setting</h1>
			<p className="text-xs font-medium text-gray">Secure your self</p>
			<div className="mt-[60px] flex flex-col gap-[20px] md:flex-row xl:gap-[50px]">
				<div className=" w-full md:w-[50%]">
					<h1 className="mb-[20px] text-lg font-semibold ">User Profile</h1>
					<div className=" rounded-[18px] bg-white p-5 dark:bg-dark">
						<label htmlFor="name " className="text-sm font-semibold">
							Full Name
						</label>
						<input
							type="text"
							placeholder=""
							className="mb-5 mt-[10px] h-[40px] w-full rounded-lg border-none bg-light px-2 outline-none dark:bg-modeDark"
						/>
						<div className="flex items-center gap-2">
							<div className="flex h-[55px] w-[55px] items-center justify-center rounded-full bg-[#302CD7]">
								<CiUser size={25} color="white" />
							</div>
							<div>
								<h1 className="text-sm font-medium">John Smith</h1>
							</div>
						</div>
						<button className="mt-5 flex h-[40px] w-[93px] items-center justify-center rounded-lg bg-blue text-white">
							Save
						</button>
					</div>
				</div>
				<div className=" w-full md:w-[50%]">
					<h1 className="mb-[20px] text-lg font-semibold ">Update Profile</h1>
					<div className=" rounded-[18px] bg-white p-5 dark:bg-dark">
						<label htmlFor="name " className="text-sm font-semibold">
							Email
						</label>
						<input
							type="text"
							placeholder=""
							className="mb-[10px] mt-[10px] h-[40px] w-full rounded-lg border-none bg-light px-2 outline-none dark:bg-modeDark"
						/>
						<label htmlFor="name " className="text-sm font-semibold">
						Password
						</label>
						<input
							type="text"
							placeholder=""
							className="mt-[5px] h-[40px] w-full rounded-lg border-none bg-light px-2 outline-none dark:bg-modeDark"
						/>
						<button className="mt-[15px] flex h-[40px] w-[93px] items-center justify-center rounded-lg bg-blue text-white">
							Save
						</button>
					</div>
				</div>
			</div>
			<div className="mt-[50px] flex flex-col gap-[50px] md:flex-row">
				<div className=" w-full ">
					<h1 className="mb-[20px] text-lg font-semibold ">
						Personal Information
					</h1>
					<div className="w-full rounded-[18px] bg-white p-5 dark:bg-dark">
						<div className="flex flex-col md:flex-row gap-4 md:gap-7 xl:gap-[50px]">
							<div className="w-full md:w-[50%] flex flex-col gap-5">
								<div className="w-full">
									<label htmlFor="name " className="text-sm font-semibold">
										First Name
									</label>
									<input
										type="text"
										placeholder=""
										className="mt-[10px] h-[40px] w-full rounded-lg border-none bg-light px-2 outline-none dark:bg-modeDark"
									/>
								</div>
								<div className="w-full">
									<label htmlFor="name " className="text-sm font-semibold">
										Last Name
									</label>
									<input
										type="text"
										placeholder=""
										className="mt-[10px] h-[40px] w-full rounded-lg border-none bg-light px-2 outline-none dark:bg-modeDark"
									/>
								</div>
								<div className="w-full">
									<label htmlFor="name " className="text-sm font-semibold">
										Email
									</label>
									<input
										type="text"
										placeholder=""
										className="mt-[10px] h-[40px] w-full rounded-lg border-none bg-light px-2 outline-none dark:bg-modeDark"
									/>
								</div>
							</div>
							<div className="w-full md:w-[50%] flex flex-col gap-5">
								<div className="w-full">
									<label htmlFor="name " className="text-sm font-semibold">
								Phone
									</label>
									<input
										type="text"
										placeholder=""
										className="mt-[10px] h-[40px] w-full rounded-lg border-none bg-light px-2 outline-none dark:bg-modeDark"
									/>
								</div>
								<div className="w-full">
									<label htmlFor="name " className="text-sm font-semibold">
									City
									</label>
									<input
										type="text"
										placeholder=""
										className="mt-[10px] h-[40px] w-full rounded-lg border-none bg-light px-2 outline-none dark:bg-modeDark"
									/>
								</div>
								<div className="w-full">
									<label htmlFor="name " className="text-sm font-semibold">
										Country
									</label>
									<input
										type="text"
										placeholder=""
										className="mt-[10px] h-[40px] w-full rounded-lg border-none bg-light px-2 outline-none dark:bg-modeDark"
									/>
								</div>
							</div>
						</div>
						<button className="mt-5 flex h-[40px] w-[93px] items-center justify-center rounded-lg bg-blue text-white">
							Save
						</button>
					</div>
				</div>
			</div>
		</main>
	);
};

export default page;
