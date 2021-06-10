import React from "react";
import styles from './SearchBar.module.css'

export default function SearchBar({onSearch}) {
  var referenciaInput= React.createRef();

  return (
    <form className={styles.divSearch} onSubmit={(e) => {
      e.preventDefault();
      onSearch(referenciaInput.current.value);
      referenciaInput.current.value = '';
    }}>
      <input
        type="text"
        ref= {referenciaInput}
        className= {styles.textBox}
        placeholder="Ciudad..."
      />
      <input 
      type="submit" 
      className= {styles.buttonAdd} 
      value="Agregar" />
    </form>
  );
}
