import React from 'react'
import { motion } from "framer-motion";
const Artwork = () => {
  return (
    <motion.main
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.3 }}
    className="grid w-full grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
    
    <div className="h-[433px] w-full rounded-[18px] bg-white p-5 dark:bg-dark">
      <img src="primary.png" className="w-full h-[187px]" alt="" />
      <div className="my-[30px] flex w-full flex-col gap-[0px]">
        <div>
          <h1 className="text-lg font-semibold text-black dark:text-white">
            Liquid Wave
          </h1>
        </div>
        <div className="flex w-full items-center mt-3 justify-between text-black dark:text-white">
          <div>
            <p className="text-sm">Auction time</p>
          </div>
          <div className="text-right">
            <p className="text-sm font-normal">Current Bid</p>
          </div>
        </div>
        <div className="flex items-center justify-between text-light-blue">
          <div></div>
          <div className="text-right">
            <span className="text-sm font-normal text-blue">0.05 ETH</span>{" "}
          </div>
        </div>
        <div className="flex items-center justify-between text-light-blue">
          <div>
            <p className="text-sm">3h 1m 50s</p>
          </div>
          <div className="">
            <span className="text-sm font-normal text-light-blue">0.15 ETH</span>{" "}
          </div>
        </div>
      </div>
      <div className="w-full">
        <button className="font-medium text-white text-sm w-full bg-blue h-[40px] rounded-lg
        ">Place a bid</button>
      </div>
    </div>
    <div className="h-[433px] w-full rounded-[18px] bg-white p-5 dark:bg-dark">
      <img src="primary.png" className="w-full h-[187px]" alt="" />
      <div className="my-[30px] flex w-full flex-col gap-[0px]">
        <div>
          <h1 className="text-lg font-semibold text-black dark:text-white">
            Liquid Wave
          </h1>
        </div>
        <div className="flex w-full items-center mt-3 justify-between text-black dark:text-white">
          <div>
            <p className="text-sm">Auction time</p>
          </div>
          <div className="text-right">
            <p className="text-sm font-normal">Current Bid</p>
          </div>
        </div>
        <div className="flex items-center justify-between text-light-blue">
          <div></div>
          <div className="text-right">
            <span className="text-sm font-normal text-blue">0.05 ETH</span>{" "}
          </div>
        </div>
        <div className="flex items-center justify-between text-light-blue">
          <div>
            <p className="text-sm">3h 1m 50s</p>
          </div>
          <div className="">
            <span className="text-sm font-normal text-light-blue">0.15 ETH</span>{" "}
          </div>
        </div>
      </div>
      <div className="w-full">
        <button className="font-medium text-white text-sm w-full bg-blue h-[40px] rounded-lg
        ">Place a bid</button>
      </div>
    </div>
    <div className="h-[433px] w-full rounded-[18px] bg-white p-5 dark:bg-dark">
      <img src="primary.png" className="w-full h-[187px]" alt="" />
      <div className="my-[30px] flex w-full flex-col gap-[0px]">
        <div>
          <h1 className="text-lg font-semibold text-black dark:text-white">
            Liquid Wave
          </h1>
        </div>
        <div className="flex w-full items-center mt-3 justify-between text-black dark:text-white">
          <div>
            <p className="text-sm">Auction time</p>
          </div>
          <div className="text-right">
            <p className="text-sm font-normal">Current Bid</p>
          </div>
        </div>
        <div className="flex items-center justify-between text-light-blue">
          <div></div>
          <div className="text-right">
            <span className="text-sm font-normal text-blue">0.05 ETH</span>{" "}
          </div>
        </div>
        <div className="flex items-center justify-between text-light-blue">
          <div>
            <p className="text-sm">3h 1m 50s</p>
          </div>
          <div className="">
            <span className="text-sm font-normal text-light-blue">0.15 ETH</span>{" "}
          </div>
        </div>
      </div>
      <div className="w-full">
        <button className="font-medium text-white text-sm w-full bg-blue h-[40px] rounded-lg
        ">Place a bid</button>
      </div>
    </div>
    <div className="h-[433px] w-full rounded-[18px] bg-white p-5 dark:bg-dark">
      <img src="primary.png" className="w-full h-[187px]" alt="" />
      <div className="my-[30px] flex w-full flex-col gap-[0px]">
        <div>
          <h1 className="text-lg font-semibold text-black dark:text-white">
            Liquid Wave
          </h1>
        </div>
        <div className="flex w-full items-center mt-3 justify-between text-black dark:text-white">
          <div>
            <p className="text-sm">Auction time</p>
          </div>
          <div className="text-right">
            <p className="text-sm font-normal">Current Bid</p>
          </div>
        </div>
        <div className="flex items-center justify-between text-light-blue">
          <div></div>
          <div className="text-right">
            <span className="text-sm font-normal text-blue">0.05 ETH</span>{" "}
          </div>
        </div>
        <div className="flex items-center justify-between text-light-blue">
          <div>
            <p className="text-sm">3h 1m 50s</p>
          </div>
          <div className="">
            <span className="text-sm font-normal text-light-blue">0.15 ETH</span>{" "}
          </div>
        </div>
      </div>
      <div className="w-full">
        <button className="font-medium text-white text-sm w-full bg-blue h-[40px] rounded-lg
        ">Place a bid</button>
      </div>
    </div>
    <div className="h-[433px] w-full rounded-[18px] bg-white p-5 dark:bg-dark">
      <img src="primary.png" className="w-full h-[187px]" alt="" />
      <div className="my-[30px] flex w-full flex-col gap-[0px]">
        <div>
          <h1 className="text-lg font-semibold text-black dark:text-white">
            Liquid Wave
          </h1>
        </div>
        <div className="flex w-full items-center mt-3 justify-between text-black dark:text-white">
          <div>
            <p className="text-sm">Auction time</p>
          </div>
          <div className="text-right">
            <p className="text-sm font-normal">Current Bid</p>
          </div>
        </div>
        <div className="flex items-center justify-between text-light-blue">
          <div></div>
          <div className="text-right">
            <span className="text-sm font-normal text-blue">0.05 ETH</span>{" "}
          </div>
        </div>
        <div className="flex items-center justify-between text-light-blue">
          <div>
            <p className="text-sm">3h 1m 50s</p>
          </div>
          <div className="">
            <span className="text-sm font-normal text-light-blue">0.15 ETH</span>{" "}
          </div>
        </div>
      </div>
      <div className="w-full">
        <button className="font-medium text-white text-sm w-full bg-blue h-[40px] rounded-lg
        ">Place a bid</button>
      </div>
    </div>
    <div className="h-[433px] w-full rounded-[18px] bg-white p-5 dark:bg-dark">
      <img src="primary.png" className="w-full h-[187px]" alt="" />
      <div className="my-[30px] flex w-full flex-col gap-[0px]">
        <div>
          <h1 className="text-lg font-semibold text-black dark:text-white">
            Liquid Wave
          </h1>
        </div>
        <div className="flex w-full items-center mt-3 justify-between text-black dark:text-white">
          <div>
            <p className="text-sm">Auction time</p>
          </div>
          <div className="text-right">
            <p className="text-sm font-normal">Current Bid</p>
          </div>
        </div>
        <div className="flex items-center justify-between text-light-blue">
          <div></div>
          <div className="text-right">
            <span className="text-sm font-normal text-blue">0.05 ETH</span>{" "}
          </div>
        </div>
        <div className="flex items-center justify-between text-light-blue">
          <div>
            <p className="text-sm">3h 1m 50s</p>
          </div>
          <div className="">
            <span className="text-sm font-normal text-light-blue">0.15 ETH</span>{" "}
          </div>
        </div>
      </div>
      <div className="w-full">
        <button className="font-medium text-white text-sm w-full bg-blue h-[40px] rounded-lg
        ">Place a bid</button>
      </div>
    </div>
  </motion.main>
  )
}

export default Artwork