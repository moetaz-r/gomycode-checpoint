import React from "react";
import Image from "next/image";

const page = () => {
  return (
    <div className="card">
      <strong className="card-header" style={{ fontSize: "40px" }}>
        About Me 👩🏻‍💼 ✔️ ☺️ 🎓 🧖
      </strong>
      <div className="card-body">
        <h5 className="card-title" style={{ fontSize: "20px" }}>
          "Motivated junior web developer with a strong foundation in HTML, CSS,
          and JavaScript. Eager to apply problem-solving skills and creativity
          to real-world challenges. I have experience building responsive
          websites and dynamic web applications through personal projects, which
          are available in my GitHub profile link here. I am a quick learner and
          thrive in collaborative environments, continuously seeking
          opportunities to learn new technologies and grow as a developer"
        </h5>
      </div>
    </div>
  );
};

export default page;
