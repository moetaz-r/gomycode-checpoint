import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="row">
      <div className="card" style={{ width: "23rem" }}>
        <Image
          className="card-img-top"
          src="/html.jpg"
          alt="html Logo"
          width={150}
          height={150}
          priority
        />
        <div className="card-body">
          <p className="card-text">
            A static, single-page website showcasing personal information,
            skills, projects, and contact details. This project focuses on
            fundamental HTML structure, including headings, paragraphs, lists,
            images, and links, to create a professional online presence..
          </p>
        </div>
      </div>
      <div className="card" style={{ width: "23rem" }}>
        <Image
          className="card-img-top"
          src="/css.jpg"
          alt="CSS Logo"
          width={150}
          height={150}
          priority
        />
        <div className="card-body">
          <p className="card-text">
            "This project involved creating a responsive portfolio website using
            HTML and CSS. The primary goal was to design a visually appealing
            and functional site that adapts seamlessly to various screen sizes,
            from desktop to mobile. Key CSS concepts implemented include Flexbox
            and Grid for layout, media queries for responsiveness, custom fonts,
            and interactive elements like hover effects and transitions for an
            enhanced user experience.
          </p>
        </div>
      </div>

      <div className="card" style={{ width: "23rem" }}>
        <Image
          className="card-img-top"
          src="/javaScript.avif"
          alt="javaScript Logo"
          width={150}
          height={150}
          priority
        />
        <div className="card-body">
          <ul className="card-text">
            <li>
              To-do list app: Allows users to add, delete, and mark tasks as
              complete, teaching concepts like DOM manipulation, event handling,
              and local storage
            </li>
            <li>
              Quiz app: A game-like application where users answer questions,
              which can track scores and provide feedback.
            </li>
            <li>
              Calculator: Build a functional calculator that performs basic
              arithmetic operations
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default page;
