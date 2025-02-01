import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./Login.module.scss";

export default function LoginViews() {
  const { push } = useRouter();

  function handleLogin() {
    push("/product");
  }
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className="text-2xl font-bold text-blue-700">Login Page</h1>
        <div className={styles.formGroup}>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" />
        </div>
        <div className={styles.formGroup}>
          <button onClick={handleLogin}>Login</button>
        </div>
        Belum punya akun? <Link href={"/auth/register"}>Registrasi Akun</Link>
      </div>
    </div>
  );
}
