"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { CiLink } from "react-icons/ci";
import { FiCopy } from "react-icons/fi";
import PriceChange from "../PriceChange";
import { LuLayers3 } from "react-icons/lu";
import { MdArrowDropUp } from "react-icons/md";
import { MdArrowDropDown } from "react-icons/md";
import { IoAddCircleSharp } from "react-icons/io5";
import DetailLine from "../DetailLine";
import LinkDiv from "../LinkDiv";
import { CoinPage } from "../CoinPageInterface";
import formatDate from "../getFormattedDate/getFormattedDate";

export default function CoinData({coinId}:{coinId:string}) {
  const [coinData, setData] = useState<CoinPage>(Object);
//   const [priceChange, setChange] = useState(0);
    const price24Change: number = coinData? .market_data ? .price_change_percentage_24h;
    const imageLink: string = coinData ? .image ? .thumb;
    console.log(price24Change);


  //   const totalVolume: number = coinData.market_data.total_volume.usd;
  //   const marketCap: number = coinData.market_data.market_cap.usd;

  useEffect(() => {
    fetchMoreData();
  }, []);

  const fetchMoreData = async () => {
    try{
        const response = await fetch(
            `https://api.coingecko.com/api/v3/coins/${coinId}?localization=false&tickers=false&market_data=true&community_data=true&developer_data=false&sparkline=false`
          );
          const data = await response.json();
          setData(data);
          console.log(data);

    }
    catch(error){
        alert("error loading data");

    }
   
  };

  return (
    <div className=" w-[1440px] h-[1200px]  bg-[#13121A] relative text-white">
      <div className=" absolute h-[420px] w-[1296px] top-[248px] left-[72px] flex justify-between">
        <div className=" w-[692px] h-[333px] flex gap-[32px] ">
          <div className="w-[305px] h-[333px] flex flex-col gap-[16px]">
            <div className="h-[265px] w-[305px] rounded-[12px] pt-[40px] pr-[56px] pb-[40px] pl-[56px] flex flex-col gap-[24px] bg-[#1E1932]">
              <div className="w-[64px] h-[64px] rounded-[8px] p-[16px] bg-[#2C2C4A]">
              <Image src={imageLink} width={32} height={32} alt="coin-logo"/>
              </div>
              <div className="w-[178px] h-[28px] font-[Space_Grotesk] text-[28px] font-[700] leading-[28px] text-white">
                {coinData.name}
               <span> ({coinData.symbol})</span> 
              </div>
            </div>
            <div className="w-[305px] h-[52px] rounded-[12px] pt-[16px] pr-[18px] pb-[16px] pl-[18px] flex gap-[16px] justify-around items-center bg-[#1E1932]">
              <CiLink className="w-[20px] h-[20px] fill-white"><a href={coinData? .links? .homepage}></a></CiLink>
              <div className="w-[150px]  font-[Space Grotesk] font-[500] text-[16px] leading-[24px] text-[white]">
               {coinData? .links? .homepage}
              </div>
              <FiCopy className="w-[20px] h-[20px]"></FiCopy>
            </div>
          </div>
          <div className="w-[355px] h-[333px] rounded-[12px] pt-[40px] pr-[56px] pb-[40px] pl-[56px] flex flex-col gap-[24px] bg-[#1E1932]">
            <div className="w-[243px] h-[69px]">
              <div className="flex justify-between items-center gap-[16px] w-[236px] h-[25px] ">
                <div className="w-[150px] h-[25px] text-white font-[700] text-[36px] leading-[28px] font-[Space_Grotesk] ">
                 {coinData ? .market_data ? .current_price.usd}
                </div>
                <div className="w-[82px] h-[20px]">
                    <div> <PriceChange value={price24Change} /></div>
                 
                </div>
              </div>
            </div>

            <div className="w-[243px] flex justify-center items-center">
              <LuLayers3 className="w-[24px] h-[24px]" />
            </div>

            <div className=" w-[243px] h-[112px] flex flex-col gap-[24px]">
              <div className="w-[240px] h-[44px] flex  justify-between gap-[16px]">
                <div className="h-[12px] w-[16px] top-[2px]">
                  <MdArrowDropUp className="fill-[#01F1E3] h-[30px] w-[30px]" />
                </div>
                <div className="w-[208px] h-[44px] flex flex-col gap-[12px]">
                  <div className="w-[196px] h-[14px] font-[Space_Grotesk] font-[400] text-[16px] leading-[28px]  ">
                    All time high:{" "}
                    <span className="font-[500] text-[20px] leading-[24px]">
                     {coinData ? .market_data ? .ath.usd}
                    </span>
                  </div>
                  <div className="w-[208px] h-[18px] font-[Space_Grotesk] text-[14px] leading-[17.86px]">
                    {formatDate(coinData ? .market_data ? .ath_date.usd)}
                  </div>
                </div>
              </div>
              <div className="w-[240px] h-[44px] flex gap-[16px] justify-between ">
                <div className="h-[12px] w-[16px] top-[2px]">
                  <MdArrowDropDown className="fill-[#FE2264] h-[30px] w-[30px]" />
                </div>
                <div className="w-[208px] h-[44px] flex flex-col gap-[12px]">
                  <div className="w-[196px] h-[14px] font-[Space_Grotesk] font-[400] text-[16px] leading-[28px]  ">
                    All time Low:{" "}
                    <span className="font-[500] text-[20px] leading-[24px]">
                      {coinData? .market_data? .atl.usd}
                    </span>
                  </div>
                  <div className="w-[208px] h-[18px] font-[Space_Grotesk] text-[14px] leading-[17.86px]">
                    {formatDate(coinData? .market_data? .atl_date.usd)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[544px] h-[420px] rounded-[12px] pt-[40px] pr-[56px] pb-[40px] pl-[56px] flex flex-col gap-[16px] font-[Space_Grotesk] text-white bg-[#1E1932]">
          <div className="w-[409px] h-[144px] flex flex-col gap-[16px] ">
            <DetailLine
              text={"Market Cap"}
              value={coinData ? .market_data ? .market_cap.usd}
            />
            <DetailLine
              text={"Fully Diluted Valuation"}
              value={coinData ? .market_data? .fully_diluted_valuation.usd}
            />
            {/* <DetailLine text={"Volume 24h"} value={47714337481} /> */}
            <DetailLine
              text={"Volume/Market"}
              value={Number(
                (
                  (coinData? .market_data ? .total_volume.usd )/
                 ( coinData ? .market_data ? .market_cap.usd)
                ).toFixed(2)
              )}
            />
          </div>
          <div className="w-[383px] h-[104px] flex flex-col gap-[16px]">
            <DetailLine
              text={"Total Volume"}
              value={coinData ? .market_data ? .total_volume.usd}
            />
            <DetailLine
              text={"Circulating Supply"}
              value={coinData ? .market_data ? .circulating_supply}
            />
            <DetailLine text={"Max Supply"} value={21000000} />
          </div>
        </div>
      </div>
      <div className="w-[1296px] absolute  top-[747px] left-[72px] flex justify-between font-[Space_Grotesk] text-white">
        <div className="w-[692px] flex flex-col gap-[12px]">
          <div className="font-[500] text-[20px] leading-[24px]">
            Description
          </div>
          <div className="h-[202px] font-[400] text-[14px] leading-[21px]">
            {coinData ? .description ? .en}
          </div>
        </div>
        <div className="w-[544px] h-[52px] flex  flex-col gap-[24px] text-white font-[Space_Grotesk]">
          <LinkDiv link={coinData ? .links ? .homepage[0]} />
          <LinkDiv link={coinData ? .links ? .blockchain_site[0]} />
          <LinkDiv link={coinData ? .links ? .blockchain_site[1]} />
        </div>
      </div>
    </div>
  )
}
