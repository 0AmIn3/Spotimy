<<<<<<< HEAD
import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Layout from "./Layout/Layout";
import Doc from "./pages/doc";
import Library from "./pages/Library";


function App() {
  let location = useLocation();
  useEffect(() => {
    let body = document.body;
    if (location.pathname === "/") {
      body.style.backgroundImage =
        "linear-gradient(180deg, #3333A3 5.09%, #121212 33.4%)";
      body.style.backgroundRepeat = "no-repeat";
    }
  }, []);

  return (
    <Routes>

      <Route path="/" element={<Layout />}>
        <Route index path="/" element={<Doc />} />
		   <Route path="/library" element={<Library/>} />

      </Route>
    </Routes>
=======
import React from "react";
import ItemBlog from "./.childs/ItemBlog";


function App() {
  return (
    <div className="w-[100%]">
      <div className="gap-[20px] grid  grid-cols-4 p-[20px]  bg-[#121212] ">
        <ItemBlog />
        <ItemBlog />
        <ItemBlog />
        <ItemBlog />
        <ItemBlog />
        <ItemBlog />
        <ItemBlog />
        <ItemBlog />
        <ItemBlog />
        <ItemBlog />
        <ItemBlog />
        <ItemBlog />
        <ItemBlog />
        <ItemBlog />
        <ItemBlog />
        <ItemBlog />
        <ItemBlog />
        <ItemBlog />
        <ItemBlog />
        <ItemBlog />
      </div>
    </div>
>>>>>>> 82df2876a7cacf898596d19842a97bed06c5a685
  );
}

export default App;
