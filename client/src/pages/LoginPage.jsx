import {
  Box,
  Button,
  Input,
  InputWrapper,
  PasswordInput,
  Title,
} from "@mantine/core";
import { useForm } from "@mantine/hooks";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { SessionContext } from "../contexts/SessionContext";
import { login } from "../utils/helper";

const LoginPage = () => {
  const navigate = useNavigate();
  const { authenticateUser } = useContext(SessionContext);
  const form = useForm({
    initialValues: {
      username: "",
      password: "",
    },
  });

  const logUser = async (credentials) => {
    try {
      const response = await login(credentials);
      console.log(response);
      if (response.status === "KO") {
        throw new Error(response.message);
      } else {
        authenticateUser(response.token);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (values) => {
    logUser(values);
  };

  return (
    <Box>
      <Title>Login</Title>
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <InputWrapper
          required
          label="Username"
          description="Your unique username"
          {...form.getInputProps("username")}
        >
          <Input {...form.getInputProps("username")} />
        </InputWrapper>
        <InputWrapper required label="Password" description="Your password">
          <PasswordInput {...form.getInputProps("password")} />
        </InputWrapper>
        <Button type="submit">Login</Button>
      </form>
    </Box>
  );
};

export default LoginPage;
