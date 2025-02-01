import Link from "next/link";

export default function RegisterPage() {
  return (
    <div className="">
      <h1>Register Page</h1>
      Sudah punya akun? <Link href={"/auth/login"}>Login</Link>
    </div>
  );
}
