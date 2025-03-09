import Link from "next/link";
import Coindata from "./components/Coindata";

export default function Home() {
  return (
    <div className="">
      <Link href="coin/shiba-inu">shiba-inu page</Link>
      <Link href="coin/bitcoin"> Bitcoin page</Link>
    </div>
  );
}
