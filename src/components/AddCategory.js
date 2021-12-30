import React from "react";
import { useState } from "react";
import PropTypes from "prop-types";
//Traigo el parametro entre corchetes por el desetructuring
const AddCategory = ({ setCategories }) => {
  //creo el useState Para saber llo que la persona escribe en el input

  const [inputValue, setInputValue] = useState(""); //Seimpre es string Vacio

  //creo la funcion del onChangue
  const handleInputChangue = (e) => {
    setInputValue(e.target.value);
  };

  //CUANDO PULSA ENTER
  const handleSubmit = (e) => {
    //quita el refresh del navegador
    e.preventDefault();
    console.log("Submit OK");

    //valido espacios en blaco con trim
    if (inputValue.trim().length > 2) {
      //ADICIONO EL VALOR DEL INPUT AL LA <li></li>
      //Pondo de primera la ultima categoria solcitada
      setCategories((cats) => [inputValue, ...cats]);
      //reseteo en setinputValue
      setInputValue("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* <h2>Addcategory</h2> */}
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChangue}
        placeholder="Busca tu Personaje"
      />
    </form>
  );
};
//Defino el parametro setCategories como required
AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
};

export default AddCategory;
