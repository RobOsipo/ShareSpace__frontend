import React from "react";

import Card from "../../shared/components/UIElements/Card";
import PlaceItem from "./PlaceItem";

import "./PlaceList.css";

const PlaceList = (props) => {
  if (props.items.length === 0) {
    return (
      <div className="place-list center">
        <Card>
          <h2>No Places Found... Maybe Create One?</h2>
          <button>Share Place</button>
        </Card>
      </div>
    );
  }

  const mapPlaces = () => {
     return props.items.map((place) => {
       return <PlaceItem
        key={place.id}
        id={place.id}
        image={place.imageUrl}
        title={place.title}
        description={place.description}
        address={place.address}
        creatorId={place.creator}
        coordinates={place.location}
      />
      })
  }

  return (
    <ul className="place-list">
      {mapPlaces()}
    </ul>
  );
};

export default PlaceList;
