import React from "react";
import styles from "./Form.module.css";
import { useState } from "react";
import validation from "./validation";

export default function Form({ login }) {
  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });

  const handleInputChange = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });
    setErrors(
      validation({
        ...userData,
        [event.target.name]: event.target.value,
      })
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    login(userData);
  };

  const [errors, setErrors] = useState({
    username: "",
    password: "",
  });

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.container}>
        <div className={styles.imagen}>
          <img
            src="https://media.ambito.com/p/db05139c21da8aae9d5fcba8f66010b1/adjuntos/239/imagenes/038/786/0038786610/rick-and-mortyjpg.jpg"
            alt=""
          />
        </div>
        <div className={styles.texto}>
          <label htmlFor="username" className={styles.div}>
            Username:
          </label>
          <input
            type="text"
            name="username"
            value={userData.username}
            onChange={handleInputChange}
          />
          {errors.username && (
            <p style={{ color: "red", fontSize: "11px", fontWeight: "bold" }}>
              {errors.username}
            </p>
          )}
          <label htmlFor="username" className={styles.div}>
            Password:
          </label>
          <input
            type="password"
            name="password"
            value={userData.password}
            onChange={handleInputChange}
          />
          {errors.password && (
            <p style={{ color: "red", fontSize: "11px", fontWeight: "bold" }}>
              {errors.password}
            </p>
          )}
          <button>LOGIN</button>
        </div>
      </div>
    </form>
  );
}
