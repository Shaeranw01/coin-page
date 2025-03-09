import Image from "next/image";
import { CiLink } from "react-icons/ci";
import { FiCopy } from "react-icons/fi";
import PriceChange from "@/app/components/PriceChange";
import { LuLayers3 } from "react-icons/lu";
import { MdArrowDropUp } from "react-icons/md";
import { MdArrowDropDown } from "react-icons/md";
import { IoAddCircleSharp } from "react-icons/io5";
import DetailLine from "@/app/components/DetailLine";
import LinkDiv from "@/app/components/LinkDiv";
import { CoinPage } from "@/app/components/CoinPageInterface";
import formatDate from "@/app/components/getFormattedDate/getFormattedDate";
import CoinData from "@/app/components/Coindata";

export default async function Coin({
  params,
}: {
  params: Promise<{ coinId: string }>;
}) {
  const { coinId } = await params;

  return (
    <div>
      <CoinData coinId={coinId} />
    </div>
  );
}
