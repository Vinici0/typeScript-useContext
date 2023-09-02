import React, { useState } from "react";

export const useForm = <T extends Object>(initialState: T) => {
  const [formulario, setFormulario] = useState(initialState);

  const handleChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = ev.target;
    setFormulario({
      ...formulario,
      [name]: value,
    });
  };

  return {
    formulario,
    handleChange,
    ...formulario,
  };
};