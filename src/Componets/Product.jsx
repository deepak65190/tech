import React, { useState, useEffect } from "react";
import SingleProductCard from "./SingleProductCard";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../Redux/action";
import styles from "../styles/PagesStyles/Home.module.css";
import { Input, Spinner } from "@chakra-ui/react";
import Pagination from "./Pagination";
import { useSearchParams } from "react-router-dom";
function Product() {
  const product = useSelector((state) => state.reducer.data);
  const loading = useSelector((state) => state.reducer.isloading);

  const [query, setQuery] = useState("");
  const [querUrl, setQuerUrl] = useSearchParams("");
  const [gender, setGender] = useState("");
  const [domain, setDomain] = useState("");
  const [available, setAvailabe] = useState("");
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();

  // console.log(product)
  //handlePrevious btn
  const handlePrev = () => {
    setPage(page - 1);
  };

  //handleNext btn
  const handleNext = () => {
    setPage(page + 1);
  };
  //hanlde gender
  const handleGender = (e) => {
    setGender(e.target.value);
  };
  const handleDomain = (e) => {
    setDomain(e.target.value);
  };
  const handleAvail = (e) => {
    setAvailabe(e.target.value);
  };

  useEffect(() => {
    dispatch(
      getProducts({
        page: page,
        gender: gender,
        domain: domain,
        present: available,
        q: query,
      })
    );
    const params = {};
    params.query = query;
    params.domain = domain;
    params.gender = gender;
    params.available = available;

    params._page = page;
    params._limit = 20;

    setQuerUrl(params);
  }, [page, gender, domain, available, query]);
  if (loading) {
    <Spinner color="red.500" size="xl" />;
  }
  return (
    <div>
      <div>
        <Input
          className={styles.input}
          style={{ marginTop: "10px" }}
          type="text"
          autoFocus
          
          margin={"auto"}
          backgroundColor={"#617aad"}
          placeholder="Search..."
          color={"white"} 
         
          focusBorderColor={"white"}
          _placeholder={{ color: "white" }}
          onChange={(e) => setQuery(e.target.value)}
        />
        {/* //<button onChange={hanldeSearch}>search</button> */}
        <h1>Filters</h1>
        <div className={styles.filters}>
          <div>
            <select onChange={(e) => handleDomain(e)} name="" id="">
              <option value="">select by Domain</option>
              <option value="Marketing">Marketing</option>
              <option value="Finance">Finance</option>
              <option value="Management">Management</option>
              <option value="Sales">Sales</option>
              <option value="UI Designing">UI Designing</option>
              <option value="Business Development">Business Development</option>
              <option value="IT">IT</option>
            </select>
          </div>
          <div>
            <select onChange={(e) => handleGender(e)} name="" id="">
              <option value="">select by Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Genderfluid">Genderfluid</option>
            </select>
          </div>
          <div>
            <select onChange={(e) => handleAvail(e)} name="" id="">
              <option value="">select by Availability</option>
              <option value="false">false</option>
              <option value="true">true</option>
            </select>
          </div>
        </div>
      </div>
      <h1>Products</h1>
      <div className={styles.card}>
        {product.length > 0 ? (
          product.map((ele) => <SingleProductCard key={ele.id} data={ele} />)
        ) : (
          <h1>No data available</h1>
        )}
      </div>
      <Pagination page={page} next={handleNext} pre={handlePrev} />
    </div>
  );
}

export default Product;
