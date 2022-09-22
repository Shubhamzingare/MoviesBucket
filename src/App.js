import { useState } from "react";
import "./styles.css";

var type1 = {
  scifi: "Interstellar",
  marvel: "Iron Man 3",
  thriller: "Ratsasan",
  series: "Game of Thrones"
};
var type2 = {
  scifi: "The Martian",
  marvel: "Captain America: First Avenger",
  thriller: "Murder on the Orient Express",
  series: "Peaky Blinders"
};
var type3 = {
  scifi: "Gravity",
  marvel: "Avengers: Endgame",
  thriller: "Haseen Dillruba",
  series: "The Family Man"
};
var star1 = {
  scifi: "⭐⭐⭐⭐☆",
  marvel: "⭐⭐⭐☆☆",
  thriller: "⭐⭐⭐⭐☆",
  series: "⭐⭐⭐⭐☆"
};
var star2 = {
  scifi: "⭐⭐⭐⭐☆",
  marvel: "⭐⭐⭐☆☆",
  thriller: "⭐⭐☆☆☆",
  series: "⭐⭐⭐⭐☆"
};
var star3 = {
  scifi: "⭐⭐⭐☆☆",
  marvel: "⭐⭐⭐⭐☆",
  thriller: "⭐⭐⭐☆☆",
  series: "⭐⭐⭐⭐☆"
};

var rating1 = {
  scifi: "Rating: 8.6/10",
  marvel: "Rating: 7.1/10",
  thriller: "Rating: 8.3/10",
  series: "Rating: 9.2/10"
};
var rating2 = {
  scifi: "Rating: 8/10",
  marvel: "Rating: 6.9/10",
  thriller: "Rating: 6.3/10",
  series: "Rating: 8.8/10"
};
var rating3 = {
  scifi: "Rating: 7.7/10",
  marvel: "Rating: 8.4/10",
  thriller: "Rating: 6.9/10",
  series: "Rating: 8.7/10"
};

export default function App() {
  const [typeOne, setTypeOne] = useState("");
  const [typeTwo, setTypeTwo] = useState("");
  const [typeThree, setTypeThree] = useState("");
  const [starOne, setStarOne] = useState("");
  const [starTwo, setStarTwo] = useState("");
  const [starThree, setStarThree] = useState("");
  const [ratingOne, setRatingOne] = useState("");
  const [ratingTwo, setRatingTwo] = useState("");
  const [ratingThree, setRatingThree] = useState("");

  return (
    <div className="App">
      <h1>🎭 My Favorite Movies 🎬</h1>
      <p id="sub-heading">
        My favorite movies are listed here. Tap on genre to know more !
      </p>

      <div id="container">
        <div id="input-container">
          <div id="category">
            <p onClick={() => clickHandeler("scifi")}>SCI-FI 🛰️🚀</p>
            <p onClick={() => clickHandeler("marvel")}>Marvel 🎬🎭</p>
            <p onClick={() => clickHandeler("thriller")}>Thriller 🎥</p>
            <p onClick={() => clickHandeler("series")}>Film Series 🎦</p>
          </div>
        </div>

        <div id="output-container">
          <div className="output">
            <strong>{typeOne}</strong>
            <br></br>
            {starOne}
            <br></br>
            <p>{ratingOne}</p>
          </div>

          <div className="output">
            <strong>{typeTwo}</strong>
            <br></br>
            {starTwo}
            <br></br>
            <p>{ratingTwo}</p>
          </div>

          <div className="output">
            <strong>{typeThree}</strong>
            <br></br>
            {starThree}
            <br></br>
            <p>{ratingThree}</p>
          </div>
        </div>
      </div>
    </div>
  );

  function clickHandeler(key) {
    var typeOne = type1[key];
    setTypeOne(typeOne);

    var typeTwo = type2[key];
    setTypeTwo(typeTwo);

    var typeThree = type3[key];
    setTypeThree(typeThree);

    var starOne = star1[key];
    setStarOne(starOne);

    var starTwo = star2[key];
    setStarTwo(starTwo);

    var starThree = star3[key];
    setStarThree(starThree);

    var ratingOne = rating1[key];
    setRatingOne(ratingOne);

    var ratingTwo = rating2[key];
    setRatingTwo(ratingTwo);

    var ratingThree = rating3[key];
    setRatingThree(ratingThree);
  }
}
