import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between p-4 text-white bg-neutral-900">
      <div className="">
        <h1 className="big">Logo</h1>
      </div>
      <ul className="flex space-x-4">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
      <div className="flex items-center gap-x-3">
        <Link href="/auth/login">
          <button className="px-4 py-2 text-sm font-medium rounded-md bg-neutral-100 text-neutral-900">
            Login
          </button>
        </Link>
        <Link href="/auth/register">
          <button className="px-4 py-2 text-sm font-medium text-white rounded-md bg-primary-500">
            Register
          </button>
        </Link>
      </div>
    </nav>
  );
}
