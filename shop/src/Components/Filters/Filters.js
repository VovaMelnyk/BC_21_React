import React from "react";
import sizes from "../../db/sizes.json";
import styles from "./Filters.module.css";
import SingleFilter from "../SingleFilter/SingleFilter";
const Filters = () => {
  return (
    <div className={styles.filters}>
      <h4 className={styles.title}>Sizes:</h4>
      {sizes.map((size) => (
        <SingleFilter key={size} value={size} />
      ))}
    </div>
  );
};

export default Filters;
