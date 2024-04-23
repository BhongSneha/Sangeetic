import Layout from "../../Layout/Layout";
import { FaAngleLeft, FaAngleRight, FaSearch, FaUser } from "react-icons/fa";
import Card from "../Card/Card";
import { Link } from "react-router-dom";
import SongBar from "../MasterBar/SongBar";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { userActor } from "../../states/Actors/UserActor";
import Navbar from "../Navbar";
import { useGlobalContext } from "../../states/Contet";
import Footer from "../Footer/Footer";

export const songs = [
  {
    id: Math.random() * Date.now(),
    title: "Arijit Singh",
    artist: "Tum Hi Ho",
    mp3: new Audio("/assets/mp3/Tum Hi Ho.mp3"),
    img: "/assets/images/Arijit-1.jpg",
  },
  {
    id: Math.random() * Date.now(),
    title: "Lata Mangeshkar",
    artist: "Tera Sath Hai To",
    mp3: new Audio("/assets/mp3/Tera Sath Hai To.mp3"),
    img: "/assets/images/latamangeshkar.jpg",
  },
  {
    id: Math.random() * Date.now(),
    title: "Arijit Singh",
    artist: "Jaan Nisar",
    mp3: new Audio("/assets/mp3/Jaan Nisar.mp3"),
    img: "/assets/images/Arijit-2.jpg",
  },
  {
    id: Math.random() * Date.now(),
    title: "Kishor Kumar",
    artist: "Sagar Kinare",
    mp3: new Audio("/assets/mp3/Sagar Kinare.mp3"),
    img: "/assets/images/kishor-1.jpg",
  },
  {
    id: Math.random() * Date.now(),
    title: "Shreya Ghoshal",
    artist: "Saathiya",
    mp3: new Audio("/assets/mp3/Saathiyaa.mp3"),
    img: "/assets/images/shreya-1.jpeg",
  },
  {
    id: Math.random() * Date.now(),
    title: "KK",
    artist: "Ajab Si",
    mp3: new Audio("/assets/mp3/Ajab Si.mp3"),
    img: "/assets/images/kk.jpg",
  },
  {
    id: Math.random() * Date.now(),
    title: "Monali Thakur",
    artist: "Moh Moh Ke Dhaage",
    mp3: new Audio("/assets/mp3/Moh Moh Ke Dhaage.mp3"),
    img: "/assets/images/MonaliThakur.jpeg",
  },
  {
    id: Math.random() * Date.now(),
    title: "Arijit Singh",
    artist: "Tu hi Hai Aashiqui",
    mp3: new Audio("/assets/mp3/Tu Hi Hai Aashiqui.mp3"),
    img: "/assets/images/Arijit-3.jpg",
  },
  {
    id: Math.random() * Date.now(),
    title: "Arijit Singh and Shreya Ghoshal",
    artist: "Manwa Lage",
    mp3: new Audio("/assets/mp3/Manwa Lage.mp3"),
    img: "/assets/images/manwa.jpeg",
  },
  {
    id: Math.random() * Date.now(),
    title: "Ashwini Shende and Hrishikesh Rande",
    artist: "Tu Havishi",
    mp3: new Audio("/assets/mp3/Tu Jarashi.mp3"),
    img: "/assets/images/Tu Havishi.jpeg",
  },
  {
    id: Math.random() * Date.now(),
    title: "Lata Mangeshkar",
    artist: "Mere Pyar Ki Umar Ho Itni",
    mp3: new Audio("/assets/mp3/Mre Pyar Ki Umar Ho Itni.mp3"),
    img: "/assets/images/latamangeshkar.jpg",
  },
  {
    id: Math.random() * Date.now(),
    title: "Arijit Singh",
    artist: "Tu hi Hai Aashiqui",
    mp3: new Audio("/assets/mp3/Tu Hi Hai Aashiqui.mp3"),
    img: "/assets/images/Arijit-2.jpg",
  },
];

const Home = () => {

  const { getUser } = useGlobalContext();

  useEffect(() => {
    getUser();
  }, []);
  return (
    <Layout>
      <Navbar />

      <div className="tertiary_bg ml-2 px-4 py-4 home ">
        <div className="flex justify-between mb-4 pt-4 items-center">
          <span className="text-xl font-bold hover:underline cursor-pointer">
            Focus
          </span>
          <span>Show All</span>
        </div>
        <div className="grid  gap-6 grid-cols-5">
          {songs.map((song, i) => {
            return <Card key={song.id} idx={i} song={song} />;
          })}
        </div>
        <div className="flex justify-between my-4 items-center">
          <span className="text-xl font-bold hover:underline cursor-pointer">
            Spotify List
          </span>
          <span>Show All</span>
        </div>
        <div className="grid  gap-6 grid-cols-5">
          {songs.map((song, i) => {
            return <Card key={song.id} idx={i} song={song} />;
          })}
        </div>
      </div>
      <Footer/>
      <SongBar />
    </Layout>
  );
};

export default Home;
