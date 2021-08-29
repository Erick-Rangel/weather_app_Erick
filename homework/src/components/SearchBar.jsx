import React from "react";
import styles from "./SearchBar.module.css";
import { IoAdd } from "react-icons/io5";

export default function SearchBar({ onSearch }) {
  // acá va tu código
  const [search, setSearch] = React.useState("");
  const handleOnSearch = () => {
    onSearch(search);
    setSearch("");
  };

  return (
    <div className={styles.searchBar}>
      <input
        className={styles.input}
        id="searchInput"
        placeholder="Agregar una cuidad..."
        autoComplete="off"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyPress={(e) => {
          if (e.key === "Enter") handleOnSearch();
        }}
      />
      <button className={styles.button} onClick={handleOnSearch}>
        <IoAdd />
      </button>
    </div>
  );
}
