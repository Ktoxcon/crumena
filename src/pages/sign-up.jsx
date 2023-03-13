import { useState } from "react";

export function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState({
    value: "",
    confirmation: "",
  });

  const handleEmailChange = (event) => {
    const { value } = event.target;
    setEmail(value);
  };

  const handlePasswordChange = (event) => {
    const { value, name: inputName } = event.target;

    setPassword((prevPasswordData) => {
      return {
        ...prevPasswordData,
        [inputName]: value,
      };
    });
  };

  return <></>;
}
