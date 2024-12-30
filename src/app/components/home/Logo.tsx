import Link from "next/link";

interface Props {
  largeSize: string;
  smallsize: string;
}

export default function Logo({ smallsize, largeSize }: Props) {
  return (
    <Link
      href="/"
      className="rounded-md text-[#8e4bb2] font-bold"
      style={{
        fontSize: `${largeSize}rem`,
        [`@media (maxWidth: 520px)` as unknown as string]: {
          fontSize: `${smallsize}rem`,
        },
      }}
    >
      QuizHub
    </Link>
  );
}
