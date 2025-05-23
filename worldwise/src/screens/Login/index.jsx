import { useEffect, useState } from "react";
import styles from "./Login.module.css";
import PageNav from "@components/Header";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@contexts/FakeAuthContext";
import Button from "@components/Button";

export default function Login() {
  // PRE-FILL FOR DEV PURPOSES
  const [email, setEmail] = useState("jack@example.com");
  const [password, setPassword] = useState("qwerty");
  const [submitCount, setSubmitCount] = useState(0);
  const navigate = useNavigate();
  const { login, isAuthenticated, error } = useAuth();

  function handleSubmit(e) {
    e.preventDefault();
    if (email && password) {
      login(email, password);
      setSubmitCount((prev) => prev + 1);
    }
  }

  useEffect(() => {
    if (isAuthenticated) navigate("/app", { replace: true });
    if (error) alert(error);
  }, [isAuthenticated, navigate, error, submitCount]);

  return (
    <main className={styles.login}>
      <PageNav />
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.row}>
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>

        <div className={styles.row}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>

        <div>
          <Button type="primary">Login</Button>
        </div>
      </form>
    </main>
  );
}
