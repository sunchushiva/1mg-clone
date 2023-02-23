import React from "react";
import "../Styles/UserSide/FullBody.scss";

function FullBody({ name, desc, rating, price, O_price, img, discount }) {
  return (
    <div className="xyz">
      <div className="mono">
        <h3>{name}</h3>
        <div className="plus">
          <svg width="12" height="14" xmlns="http://www.w3.org/2000/svg">
            <g fill="none" fill-rule="evenodd">
              <path d="M-3-2h18v18H-3z" />
              <path
                d="M12 5.215V5.32l-.02 1.908v.021c0 .23 0 .42-.021.629-.042.943-.372 1.845-1.034 2.746-.744 1.028-1.757 1.866-3.101 2.6-.414.21-.827.399-1.24.587-.104.042-.207.084-.29.126a.82.82 0 0 1-.31.063c-.083 0-.165-.021-.248-.042-1.675-.629-2.977-1.468-4.032-2.537-.827-.838-1.323-1.74-1.55-2.704A5.175 5.175 0 0 1 .009 7.48c-.02-1.154 0-2.307 0-3.439V2.825c0-.482.207-.713.682-.734C2.304 1.987 3.834 1.38 5.53.204c.393-.272.558-.272.972 0 1.282.902 2.419 1.447 3.618 1.72.31.063.62.104.95.146.104.021.228.021.331.042.497.063.6.399.6.671v2.432Zm-1-.509V2.983c-.098-.02-.176-.02-.275-.04-.313-.04-.647-.08-.98-.16-1.216-.28-2.412-.841-3.686-1.743C6.039 1.02 6.019 1 6 1c-.02.02-.04.04-.059.04C4.216 2.242 2.647 2.863 1 2.983v4.448c0 .34.04.68.118 1.041.176.802.607 1.543 1.294 2.264.921.962 2.098 1.703 3.568 2.264H6a3.8 3.8 0 0 0 .275-.12c.372-.16.764-.34 1.117-.521 1.177-.641 2.059-1.382 2.706-2.264.53-.741.804-1.482.843-2.244 0-.18.02-.36.02-.58v-.06l.02-1.784v-.72H11Z"
                fill="#2B2B2B"
                fill-rule="nonzero"
              />
              <g stroke="#2B2B2B" stroke-linecap="round">
                <path d="M6 4v6M3 7h6" />
              </g>
            </g>
          </svg>
          <span>Safe</span>
        </div>
      </div>
      <p style={{fontSize:"12px"}}>{desc}</p>
      <div className="fullbody_brand">
        <img src={img} alt="" />
        <p>{rating}</p>
        <span>ISO</span>
      </div>
      <div className="abcd">
        <p className="rupee">₹{price}</p>
        <del className="delete">₹{O_price}</del>
        <p className="discount">{discount}</p>
      </div>
    </div>
  );
}

export default FullBody;
