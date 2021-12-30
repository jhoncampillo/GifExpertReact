import React from "react";
//recibo las propiedades del componente GigGrid = id, title, url
//export const GifGridItem = (props) => {
export const GifGridItem = ({ id, title, url }) => {
  //console.log(props); remplazo las propuiedades por id,title,url
  // console.log({ id, title, url });
  return (
    <div className="card animate__animated animate__backInRight">
      {/* {img.title} 
        descargo las imagenes en el DOM
      */}
      <img src={url} alt={title} />
      <p className="title">{title}</p>
    </div>
  );
};
