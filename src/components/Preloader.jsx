import React from "react";
import Loader from "react-loader-spinner";
import { useSelector } from "react-redux";

const Preloader = () => {
  const loading = useSelector((state) => state.loading);
//   console.log(loading.load);
  return (
    <>
      {loading.load ? (
        <div
          style={{
            width: "100%",
            height: "100vh",
            position: "absolute",
            zIndex: 1000,
            backgroundColor: "white",
          }}
        >
          <Loader
            type="TailSpin"
            color="#00BFFF"
            height={"30%"}
            width={"20%"}
            style={{ marginLeft: "40%", marginTop: "35vh" }}
            //   timeout={3000}
            visible={loading.load}
            //   radius={30}
          />
        </div>
      ) : null}
    </>
  );
};

export default Preloader;
