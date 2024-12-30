import Link from "next/link";

interface Props {
  largeSize: string;
  mediumSize: string;
  smallsize: string;
  classes?: string;
}

export default function Logo({
  smallsize,
  mediumSize,
  largeSize,
  classes,
}: Props) {
  return (
    <Link
      href="/"
      className={`rounded-md text-[#8e4bb2] font-bold ${classes}`}
      style={{
        fontSize: `${largeSize}rem`,
        [`@media (minWidth: 520px)` as unknown as string]: {
          fontSize: `${smallsize}rem`,
        },
        [`@media (minWidth: 760px)` as unknown as string]: {
          fontSize: `${mediumSize}rem`,
        },
      }}
    >
      QuizHub
    </Link>
  );
}
