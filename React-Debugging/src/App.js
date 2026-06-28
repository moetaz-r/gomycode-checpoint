import React, { useState } from "react";
import Filter from "./components/Filter";
import Header from "./components/Header";
import Addmovie from "./components/Addmovie";

function App() {
  const [movies, setMovies] = useState([
    {
      title: "The Shawshank Redemption",
      posterURL: "https://m.media-amazon.com/images/I/51NiGlapXlL._AC_.jpg",
      description:
        "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
      rating: 8.3,
    },
    {
      title: "Forrest Gump",
      posterURL:
        "https://www.aestheticwalldecor.com/cdn/shop/files/tom-hanks-is-forrest-gump-classic-movie-poster-aesthetic-wall-decor.jpg?v=1692555168",
      description:
        "The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with an IQ of 75, whose only desire is to be reunited with his childhood sweetheart.",
      rating: 7.8,
    },
    {
      title: "The Dark Knight",
      posterURL:
        "https://www.vintagemovieposters.co.uk/wp-content/uploads/2019/04/IMG_7966.jpeg",
      description:
        "When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham.",
      rating: 8.0,
    },
    {
      title: "Schindler's List",
      posterURL: "https://i.ebayimg.com/images/g/GKUAAMXQ3kRQ743D/s-l1200.jpg",
      description:
        "In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis",
      rating: 8.9,
    },
    {
      title: "Pulp Fiction",
      posterURL:
        "https://www.vintagemovieposters.co.uk/wp-content/uploads/2017/07/IMG_7348.jpg",

      description:
        "The lives of two mob hitmen, a boxer, a gangster's wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
      rating: 7.9,
    },
    {
      title: "The Lord of the Rings: The Return of the King",
      posterURL:
        "https://m.media-amazon.com/images/I/51Qvs9i5a+L._AC_SY679_.jpg",
      description:
        "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.",
      rating: 6.9,
    },
    {
      title: "Inception",
      posterURL:
        "https://www.tallengestore.com/cdn/shop/products/Inception-LeonardoDiCaprio-ChristopherNolan-HollywoodSciFiMoviePoster2_e9f0c697-8573-417e-b23d-c913402a6769.jpg?v=1685582027",
      description:
        "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
      rating: 6.8,
    },
    {
      title: "The Matrix",
      posterURL: "https://m.media-amazon.com/images/I/51EG732BV3L._AC_.jpg",
      description:
        "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
      rating: 8.7,
    },
    {
      title: "Goodfellas",
      posterURL: "https://i.ebayimg.com/images/g/sEIAAOSwccdlQ~p5/s-l1200.jpg",
      description:
        "The story of Henry Hill and his life in the mob, covering his relationship with his wife Karen Hill and his mob partners Jimmy Conway and Tommy DeVito in the Italian-American crime syndicate.",
      rating: 6.7,
    },
    {
      title: "Star Wars: Episode V - The Empire Strikes Back",
      posterURL:
        "https://m.media-amazon.com/images/I/81aA7hEEykL._AC_SY679_.jpg",
      description:
        "After the Rebels are brutally overpowered by the Empire on the ice planet Hoth, Luke Skywalker begins Jedi training with Yoda, while his friends are pursued by Darth Vader and a bounty hunter named Boba Fett all over the galaxy.",
      rating: 8.7,
    },
    {
      title: "One Flew Over the Cuckoo's Nest",
      posterURL:
        "https://mir-s3-cdn-cf.behance.net/project_modules/hd/8dcec892115867.5e52ace6cc205.jpg",
      description:
        "A criminal pleads insanity and is admitted to a mental institution, where he rebels against the oppressive nurse and rallies up the scared patients.",
      rating: 8.5,
    },
  ]);
  const [search, setSearch] = useState("");
  const [rating, setRating] = useState(0);
  const [newMovie, setNewMovie] = useState({});
  const handelAddNewMovie = (e) => {
    e.preventDefault();
    setMovies([...movies, newMovie]);
  };
  return (
    <div>
      <Header setSearch={setSearch} setRating={setRating} />
      <Filter movies={movies} search={search} rating={rating} />
      <Addmovie
        setNewMovie={setNewMovie}
        newMovie={newMovie}
        handelAddNewMovie={handelAddNewMovie}
      />
    </div>
  );
}

export default App;
