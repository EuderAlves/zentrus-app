import React from "react";
import { Text } from "../../atoms/Text";
import { FormField } from "../../molecules/FormField";
import { Button } from "../../atoms/Button";
import { Box } from "../../atoms/Box";

export const LoginForm = ({ onLogin }) => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    // Simula uma requisição de login
    setTimeout(() => {
      onLogin(username, password);
      setIsLoading(false);
    }, 1000);
  };
  return (
    <Box className="login-form-box">
      <form className="login-form" onSubmit={handleSubmit}>
        <Text tag="h2">Bem-vindo(a) à Zentrus</Text>
        <Text tag="p">Faça seu login para gerenciar suas finanças.</Text>
        <div className="form-fields">
          <FormField
            label="Usuário"
            type="text"
            placeholder="Digite seu usuário"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <FormField
            label="Senha"
            type="password"
            placeholder="Digite sua senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <Button variant="submit" disabled={isLoading}>
          {isLoading ? "Entrando..." : "Entrar"}
        </Button>
      </form>
    </Box>
  );
};
