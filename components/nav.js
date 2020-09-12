import Link from "next/link";

export default function Nav() {
  return (
    <>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/contact">
        <a>Contact</a>
      </Link>
      <style jsx>{`
        a {
          margin: 20px;
        }
      `}</style>
    </>
  );
}
