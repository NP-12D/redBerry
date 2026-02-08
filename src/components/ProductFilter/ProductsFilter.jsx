import { useRef, useState } from "react";
import filtericon from "../../assets/adjustments-horizontal.svg";
import downicon from "../../assets/downicon.svg";
import x from "../../assets/x.svg";
import styles from "./ProductFilter.module.css";
import ButtonWithFunction from "../ButtonWithFunction/ButtonWithFunction";

export default function ProductsFilter({ number, onFilterChange }) {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [price, setPrice] = useState("");
  const sortRef = useRef(null);
  const filterRef = useRef(null);
  function onButtonClick() {
    filterRef.current.style.display =
      filterRef.current.style.display == "none" ? "flex" : "none";
  }
  function onSortClick() {
    sortRef.current.style.display =
      sortRef.current.style.display == "none" ? "flex" : "none";
  }
  function onHandleChange() {
    onFilterChange({ from, to, price });
  }

  return (
    <>
      <div className={styles.filter_line}>
        <h1 className={styles.h1}>Products</h1>
        <div  className={styles.filter_line_div}>
          <div onClick={onButtonClick}>
            <p className={styles.res}>Showing 1–{number * 10} of 100 results</p>
            <span></span>
            <div>
              <img src={filtericon} />
              <p>Filter</p>
            </div>
          </div>
          <div className={styles.filter }  ref={filterRef}>
            <p>Select price</p>
            <div>
              <div>
                <div className={styles.input_div}>
                  <label htmlFor="from" className={styles.label}>
                    From
                  </label>
                  <input
                    id="from"
                    type="number"
                    placeholder="*"
                    value={from}
                    onChange={(e) => {
                      setFrom(e.target.value);
                    }}
                  />
                </div>

                <div className={styles.input_div}>
                  <label htmlFor="to" className={styles.label}>
                    To
                  </label>
                  <input
                    id="to"
                    type="number"
                    placeholder="*"
                    value={to}
                    onChange={(e) => {
                      setTo(e.target.value);
                    }}
                  />
                </div>
              </div>
              <ButtonWithFunction
                name="Apply"
                onclick={() => {
                  onHandleChange();

                  onButtonClick();
                }}
              />
            </div>
          </div>

          <div className={styles.sortBy} ref={sortRef}>
            <p>Sort by</p>
            <ul>
              <li
                onClick={() => {
                  setPrice("-created_at");
                  onHandleChange();
                  onSortClick();
                }}
              >
                New products first
              </li>
              <li
                onClick={() => {
                  setPrice("price");
                  onHandleChange();
                  onSortClick();
                }}
              >
                Price, low to high
              </li>
              <li
                onClick={() => {
                  setPrice("-price");
                  onHandleChange();
                  onSortClick();
                }}
              >
                Price, high to low
              </li>
            </ul>
          </div>

          <div onClick={onSortClick}>
            <p>Sort By</p>
            <img src={downicon} />
          </div>
        </div>
      </div>
      <div>
        {from == "" && to == "" ? (
          ""
        ) : (
          <div className={styles.filterdes}>
            <p>{to == "" ? `Price: ${from}` : `Price: ${from} - ${to}`}</p>
            <img
              src={x}
              onClick={() => {
                setFrom("");
                setTo("");
                onFilterChange({ from: "", to: "", price });
              }}
            ></img>
          </div>
        )}

      </div>
    </>
  );
}
