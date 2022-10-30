import React from "react";
import location from "../images/location.png";

export default function Card(props) {
  return (
    <div className="flex-container">
      <img className="card--image" src={props.item.imageUrl} alt="" />

      <div className="card--details">
        <div className="card--heading">
          <img className="card--locationI" src={location} alt="" />
          <p>
            <a href={props.item.googleMapsUrl}> {props.item.location}</a>
          </p>
        </div>

        <h1 className="card--title">{props.item.title}</h1>
        <h2 className="card--dates">
          {props.item.startDate} - {props.item.endDate}
        </h2>
        <p className="card--description">{props.item.description}</p>
      </div>
    </div>
  );
}
