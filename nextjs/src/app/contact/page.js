import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="card mb-3 ">
      <strong className="card-header" style={{ fontSize: "40px" }}>
        Contact Information ☎️ ✉ 🕧 👩🏻‍💼 📬 ✔️
      </strong>
      <div className="card-body">
        <h5 className="card-title">📞 Phone: : (555) 123-4567 </h5>
        <h5 className="card-title">📧 Email: maria.doe@example.com </h5>
        <h5 className="card-title">
          🕒Business Hours : Mon-Fri, 9:00 AM - 5:00 PM{" "}
        </h5>
        <h5 className="card-title">
          📍 Address : 123 Main Street, City, State, Zip Code
        </h5>
      </div>
    </div>
  );
};

export default page;
