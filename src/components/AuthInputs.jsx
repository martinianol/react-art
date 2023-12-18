import { useState } from "react";

export default function AuthInputs() {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleInputChange(identifier, value) {
    if (identifier === "email") {
      setEnteredEmail(value);
    } else {
      setEnteredPassword(value);
    }
  }

  function handleLogin() {
    setSubmitted(true);
  }

  const emailNotValid = submitted && !enteredEmail.includes("@");
  const passwordNotValid = submitted && enteredPassword.trim().length < 6;

  return (
    <div className="w-full max-w-sm p-8 mx-auto rounded shadow-md bg-gradient-to-b from-stone-700 to-stone-800">
      <div className="flex flex-col gap-2 mb-6">
        <Input
          type="email"
          label="Email"
          invalid={emailNotValid}
          onChange={(event) => handleInputChange("email", event.target.value)}
        />
        <Input
          label="Password"
          type="password"
          invalid={passwordNotValid}
          onChange={(event) =>
            handleInputChange("password", event.target.value)
          }
        />
      </div>
      <div className="flex justify-end gap-4">
        <button type="button" className="text-amber-400 hover:text-amber-500">Create a new account</button>
        <Button onClick={handleLogin}>Sign In</Button>
      </div>
    </div>
  );
}

const Button = ({ children, ...props }) => {
  return (
    <button
      className="px-4 py-2 font-semibold uppercase rounded text-stone-900 bg-amber-400 hover:bg-amber-500"
      {...props}
    >
      {children}
    </button>
  );
};

const Input = ({ label, invalid, ...props }) => {
  let labelDynamicStyle = invalid ? "text-red-400" : "text-stone-300";
  let inputDynamicStyle = invalid
    ? "text-red-500 bg-red-100 border-red-300"
    : "text-gray-700  bg-stone-300";
  let labelClasses = `block mb-2 text-xs font-bold tracking-wide uppercase ${labelDynamicStyle}`;
  let inputClasses = `w-full px-3 py-2 leading-tight border rounded shadow ${inputDynamicStyle}`;

  return (
    <p>
      <label className={labelClasses}>{label}</label>
      <input className={inputClasses} {...props} />
    </p>
  );
};
