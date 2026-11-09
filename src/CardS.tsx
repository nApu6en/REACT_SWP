import React from "react";

type Props = {
    title: string,
    text: string,
    image: string
};

export default function CardS({ title, text, image }: Props) {
    return (
       <div className='card'>
        <h2>{title}</h2>
        <img src={image} alt="Hero" />
        <p>{text}</p>
      </div>
    )
}