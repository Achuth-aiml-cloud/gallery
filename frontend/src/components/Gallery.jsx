import React from "react"
import "./Gallery.css"
import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import images from "../constants/images";

const GalleryData = [
    {
        id:1,
        titile:"Sherwani",
        image:"./images/a1.jpg"
    },
    {
        id:2,
        titile:"Sherwani",
        image:"./images/a2.jpg"
    },
    {
        id:3,
        titile:"Sherwani",
        image:"./images/a3.jpg"
    },
    {
        id:4,
        titile:"Sherwani",
        image:"./images/a4.jpg"
    },
    {
        id:5,
        titile:"3 Piece Suit",
        image:"./images/b1.jpg"
    },
    {
        id:6,
        titile:"3 Piece Suit",
        image:"./images/b2.jpg"
    },
    {
        id:7,
        titile:"Indo Westren",
        image:"./images/c1.jpg"
    },
    {
        id:8,
        titile:"Indo Westren",
        image:"https://5.imimg.com/data5/QX/LR/GLADMIN-11688399/eternal-black-indo-western-outfit.png"
    },
    {
        id:9,
        titile:"2 Piece Suit",
        image:"./images/c2.jpg"
    },
    // {
    //     id:10,
    //     titile:"Fabrics",
    //     image:"./images/c2.jpg"
    // },
    // {
    //     id:11,
    //     titile:"Lucky Draw",
    //     image:"./images/c2.jpg"
    // },
]

function Gallery(){
    const [data,setData] = useState([]);
  const [collection,setCollection] = useState([]);

  useEffect(()=>{
    setData(GalleryData);
    setCollection([... new Set(GalleryData.map((item)=> item.titile))])
  },[]) 

  const gallery_filter = (itemData) =>{
    const filterData = GalleryData.filter((item)=> item.titile == itemData);
    setData(filterData);
  }
    return(
        <div className="main-gallery" style = {{
            background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.2)), url(${images.imgimg}) center/cover no-repeat`, height:'120px'
        }}>
            <Navbar />
            <div className="galleryWrapper">
        <div className="filterItem">
          <ul>
            <li><button onClick={()=> setData(GalleryData)}>All</button></li>
            {
              collection.map((item)=> <li><button onClick={()=>{gallery_filter(item)}}>{item}</button></li>)
            }
          </ul>
        </div>
        <div className="galleryContainer">
          {
            data.map((item)=> <div  key={item.id} className="galleryItem"><img src={item.image  } /></div> )
          }
        </div>
      </div>
        </div>
    )
}

export default Gallery;