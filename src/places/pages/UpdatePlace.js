import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
} from "../../shared/util/validators";
import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import { useForm } from "../../shared/hooks/form-hook";

import "./PlaceForm.css";

const DUMMY = [
  {
    id: "p1",
    title: "Empire State Building",
    description: "A famous place",
    imageUrl:
      "https://imgs.search.brave.com/y8m0zPAggkrJ7wgXAuanDFJYFERm5dnsGbZhyYRjx8s/rs:fit:355:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5r/MjZKYVlfTmtLRHZv/MWhMQ0FVQzFBSGFK/NCZwaWQ9QXBp",
    address: "20 W 34th St, New York, NY 10001",
    location: {
      lat: 40.7484405,
      lng: -73.9878584,
    },
    creator: "u1",
  },
  {
    id: "p2",
    title: "Empire State Building",
    description: "A famous place",
    imageUrl:
      "https://imgs.search.brave.com/y8m0zPAggkrJ7wgXAuanDFJYFERm5dnsGbZhyYRjx8s/rs:fit:355:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5r/MjZKYVlfTmtLRHZv/MWhMQ0FVQzFBSGFK/NCZwaWQ9QXBp",
    address: "20 W 34th St, New York, NY 10001",
    location: {
      lat: 40.7484405,
      lng: -73.9878584,
    },
    creator: "u2",
  },
];

const UpdatePlace = (props) => {
    const [isLoading, setIsLoading] = useState(true)
  const { placeId } = useParams();

  const [formState, inputHandler, setFormData] = useForm(
    {
      title: {
        value: "",
        isValid: false,
      },
      description: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const identifiedPlace = DUMMY.find((p) => p.id === placeId);

  useEffect(() => {
    setFormData(
      {
        title: {
          value: identifiedPlace.title,
          isValid: true,
        },
        description: {
          value: identifiedPlace.description,
          isValid: true,
        },
      },
      true
    );
    setIsLoading(false)
  }, [setFormData, identifiedPlace]);

  const placeUpdateSubmitHandler = (e) => {
    e.preventDefault();
    console.log(formState.inputs);
  };

  if (!identifiedPlace) {
    return (
      <div className="center">
        <h2>Could not find place!</h2>
      </div>
    );
  }


  if (isLoading) {
      return (
        <div className="center">
          <h2>Loading.....</h2>
        </div>
      );
  }
  return (
      
    <form className="place-form" onSubmit={placeUpdateSubmitHandler}>
      <Input
        id="title"
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid title"
        onInput={inputHandler}
        initialValue={formState.inputs.title.value}
        initialValid={formState.inputs.title.isValid}
      />
      <Input
        id="description"
        element="textarea"
        label="Description"
        validators={[VALIDATOR_MINLENGTH()]}
        errorText="Please enter a valid description (atleast 5 characters)"
        onInput={inputHandler}
        initialValue={formState.inputs.description.value}
        initialValid={formState.inputs.description.isValid}
      />
      <Button type="submit" disabled={!formState.isValid}>
        UPDATE PLACE
      </Button>
    </form>
      
  );
};

export default UpdatePlace;
