import React from "react";

const MyWorks = () => {
  return (
    <div
      id="myWorks"
      style={{
        height: "100vh",
        marginLeft: "100px",
      }}
    >
      <h1 style={{ paddingTop: "5%" }}>My Works</h1>
      <h3 style={{ marginTop: "100px" }}>ToDO</h3>
      <iframe
        title="toDo"
        style={{ width: "150vh", height: "250px" }}
        src={"https://krishna0723.github.io/ToDo/"}
      />
      <div
        style={{
          marginTop: "10%",
          width: "95%",
          textAlign: "end",
        }}
      >
        <button
          onClick={(e) => {
            window.location.href = "#nv";
          }}
          style={{
            width: "40px",
            height: "40px",
            color: "black",
            fontSize: "large",
          }}
        >
          &uarr;
        </button>
      </div>
    </div>
  );
};
export default MyWorks;
