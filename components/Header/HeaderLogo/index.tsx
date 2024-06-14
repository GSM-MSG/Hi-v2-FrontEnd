import { HiLogo } from "@/assets";
import Link from "next/link";

export default function HeaderLogo() {
  return (
    <Link href='/'>
      <HiLogo />
    </Link>
  )
}