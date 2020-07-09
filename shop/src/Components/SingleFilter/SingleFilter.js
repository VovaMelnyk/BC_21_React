import React from "react";
import styles from "./SingleFilter.module.css";
const SingleFilter = ({ value }) => {
  console.log(styles);
  return (
    <div className={styles["available-size"]}>
      <label className={styles.label}>
        <input type="checkbox" value={value} className={styles.input} />
        <span className={styles.checkmark}>{value}</span>
      </label>
    </div>
  );
};

export default SingleFilter;
