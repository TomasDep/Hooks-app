import { useEffect, useState } from "react";
import { Message } from "./Message";
export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    username: "john",
    email: "johnDoe@email.com",
  });
  const { username, email } = formState;
  const onInputChange = ({ target }: { target: any }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };
  useEffect(() => {
    /* console.log("formState change"); */
  }, [formState]);
  useEffect(() => {
    /* console.log("email change"); */
  }, [email]);
  return (
    <>
      <section className="mb-3">
        <h1>Simple Form</h1>
        <hr />
        <input
          type="text"
          className="form-control"
          placeholder="Username"
          name="username"
          value={username}
          onChange={onInputChange}
        />
        {username === "johnDoe" && <Message />}
        <input
          type="email"
          className="form-control my-2"
          placeholder="Email"
          name="email"
          value={email}
          onChange={onInputChange}
        />
      </section>
    </>
  );
};
