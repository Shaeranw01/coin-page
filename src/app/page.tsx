import Link from "next/link";
import Coindata from "./components/Coindata";

export default function Home() {
  return (
    <div className="">
      <h1>let see all the links here</h1>
      <Link href="coin/shiba-inu">shiba-inu page</Link>
      <Link href="coin/bitcoin"> Bitcoin page</Link>
    </div>
  );
}
