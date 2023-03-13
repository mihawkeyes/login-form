import { useState } from "react";
import Input from "components/Input";
import Button from "components/Button";
import { Login } from "api/user";
import "./LoginForm.scss";

type LoginData = {
  username: string;
  password: string;
};

type RegisterData = {
  username: string;
  email: string;
  password: string;
};

type FormData = {
  login: LoginData;
  register: RegisterData;
};

const defaultState = {
  login: {
    username: "",
    password: "",
  },
  register: {
    username: "",
    email: "",
    password: "",
  },
};

const LoginForm = () => {
  const [formData, setFormData] = useState<FormData>(defaultState);
  const [formToggle, setFormToggle] = useState(true);

  const onChange = (
    changedValue: any,
    key: keyof LoginData & keyof RegisterData
  ) => {
    const { login, register } = formData;
    if (formToggle) {
      const loginData = login;
      loginData[key] = changedValue;
      setFormData({ ...formData, login: loginData });
    } else {
      const registerData = register;
      registerData[key] = changedValue;
      setFormData({ ...formData, register: registerData });
    }
    console.log(formData);
  };

  const submitForm = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setFormData(defaultState);
    if (!formToggle) {
      toggleForm();
    }
    Login(formData.login.username, formData.login.password);
    console.log(formData);
  };
  const toggleForm = () => {
    setFormData(defaultState);
    setFormToggle(!formToggle);
  };

  return (
    <div className="form-container">
      <>
        <h2>{formToggle ? "Login Form" : "Register Form"}</h2>
      </>
      <form onSubmit={submitForm}>
        {formToggle ? (
          <>
            <div>
              <Input
                label={"username"}
                name="username"
                value={formData.login.username}
                type="text"
                onChange={onChange}
              />
            </div>
            <div>
              <Input
                label="password"
                name="password"
                value={formData.login.password}
                type="password"
                onChange={onChange}
              />
            </div>
            <p className="forgot-password">
              <a>Forgot Password?</a>
            </p>
          </>
        ) : (
          <>
            <div>
              <Input
                label={"username"}
                name="username"
                value={formData.register.username}
                type="text"
                onChange={onChange}
              />
            </div>
            <div>
              <Input
                label={"email"}
                name="email"
                value={formData.register.email}
                type="email"
                onChange={onChange}
              />
            </div>
            <div>
              <Input
                label="password"
                name="password"
                value={formData.register.password}
                type="password"
                onChange={onChange}
              />
            </div>
          </>
        )}
        <div>
          <Button label={formToggle ? "Login" : "Register"} />
        </div>
      </form>
      <div className="form-toggel">
        <div onClick={toggleForm}>
          <a>{formToggle ? "Register User" : "Login"}</a>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
