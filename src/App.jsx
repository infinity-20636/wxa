import { Route, Routes } from "react-router-dom";
import  Header  from "./components/Header/Header";
import { Suspense, useState, useEffect } from "react";
import Content from "./pages/Content/Content";
import { Home } from "./pages/Home/Home";
import { getAllPhotos } from "./api/api.img";

export const App = () => {
 
   const [photos, setPhotos] = useState([]); 

   const getAllPhotosAndSplitOnePages = async () => {
     try {
       const { data } = await getAllPhotos();
       setPhotos(data);
     } catch (err) {
       console.error("Error fetching photos:", err);
     }
   };
   useEffect(() => {
    getAllPhotosAndSplitOnePages();
  }, []);

 
  console.log(photos);
  return (
    <>
    <Header/>
      <Suspense fallback={<span>Loading...</span>}>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/content" element={<Content />}></Route>
        </Routes>
      </Suspense>
    </>
  );
};

