import React from "react";

export default function Profile() {
  return (
    <div className="id_card">
      <img
        id="bgimg"
        alt=""
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV00cBPvw_49I03xYynECXL9rDLdxJI-3-sA&usqp=CAU"
      />
      <a href="/">
        <div>
          <img
            id="profile"
            alt="Narindra Modi"
            src="data:image/jpeg;base64,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"
            loading="lazy"
          />
        </div>
        <h4>Narindra Modi</h4>
      </a>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda
        delectus nihil fugiat recusandae numquam consectetur? Labore nesciunt
        blanditiis ipsam eos quos. Ipsam deserunt placeat ratione dolore sit
        aliquam est vitae.
      </p>

      <ul>
        <li>
          Follower<p>354</p>
        </li>
        <li>
          Following<p>300</p>
        </li>
      </ul>

      <a href="/">Manage Profile</a>
    </div>
  );
}