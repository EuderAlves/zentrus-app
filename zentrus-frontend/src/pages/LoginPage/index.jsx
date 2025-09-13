import { LoginForm } from "../../components/organisms/LoginForm";

export const LogingPage = () => {
  const handleLogin = (credentials) => {
    // Aqui, no futuro, faremos a chamada para a nossa API de back-end
    console.log("Dados de login:", credentials);
    alert("Login realizado! (em breve, será integrado com a API)");
  };

  return (
    <div className="login-page-container">
      <LoginForm onLogin={handleLogin}></LoginForm>
    </div>
  );
};
