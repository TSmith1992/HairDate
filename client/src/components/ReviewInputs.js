import React, { useState } from "react";
import { useHistory } from "react-router";

export default function ReviewInputs({ currentUser, appt }) {
  const history = useHistory();
  const [review, setReview] = useState("");
  const [postCut, setPostCut] = useState("");
  const [rating, setRating] = useState("");
  const [errors, setErrors] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    fetch(`/appointments/${appt.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        rating,
        review,
        postcut_pic: postCut,
      }),
    }).then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          alert("Lookin Good!");
          history.push("/homepage");
          window.location.reload();
        });
      } else {
        res.json().then((errors) => {
          setErrors(errors);
          console.log(errors);
        });
      }
    });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <p></p>
        General Score:
        <p></p>
        <select
          onChange={(e) => setRating(e.target.value)}
          required
          placeholder="Rate from 1 to 5"
          className="form-control"
        >
          <option value="1">1: Horrible</option>
          <option value="2">2: Barely Passable</option>
          <option value="3">3: Average</option>
          <option value="4">4: Better Than Expected</option>
          <option value="5">5: Amazing!</option>
        </select>
        <p></p>
        <label htmlFor="review">Got anything to say? Let us know!</label>
        <p>
          <textarea
            type="review"
            name="review"
            value={review}
            onChange={(e) => setReview(e.target.value)}
          />
        </p>
        <p>
          <label htmlFor="postCut">
            Snap a pic of your new 'do so you can compare your hair for later.
          </label>
          <p></p>
          <input
            type="postCut"
            name="postCut"
            value={postCut}
            onChange={(e) => setPostCut(e.target.value)}
          />
        </p>
        <button type="submit">Submit Review</button>
        <p>
          {/* {errors ? (
            <>
              {errors.errors.map((error) => (
                <strong key={error}>
                  <li>{error}</li>
                </strong>
              ))}
            </>
          ) : (
            <></>
          )} */}
        </p>
      </form>
    </div>
  );
}
