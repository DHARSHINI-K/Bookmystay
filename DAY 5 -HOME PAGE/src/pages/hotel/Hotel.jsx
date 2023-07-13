import {
   faCircleLeft,
   faCircleRight,
   faCircleXmark,
   faLocationDot,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import MailList from '../../components/mailList/MailList';
import Navbar from '../../components/navbar/Navbar';
import Reserve from '../../components/reserve/Reserve';
import { AuthContext } from '../../context/AuthContext';
import { SearchContext } from '../../context/SearchContext';
import useFetch from '../../hooks/useFetch';
import './Hotel.css';

const Hotel = () => {
   const location = useLocation();
   const id = location.pathname.split('/')[2];

   const [slideNumber, setSlideNumber] = useState(0);
   const [open, setOpen] = useState(false);
   const [openModal, setOpenModal] = useState(false);

   const { data, loading, error } = useFetch(
      `http://192.168.0.117:8800/api/hotels/find/${id}`
   );

   const { dates, options } = useContext(SearchContext);

   const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;
   function dayDifference(date1, date2) {
      const timeDiff = Math.abs(date2.getTime() - date1.getTime());
      const diffDays = Math.ceil(timeDiff / MILLISECONDS_PER_DAY);
      return diffDays;
   }

   const days = dayDifference(dates[0].endDate, dates[0].startDate);

   const handleOpen = (index) => {
      setSlideNumber(index);
      setOpen(true);
   };

   const handleMove = (direction) => {
      let newSlideNumber;

      if (direction === 'l') {
         newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
      } else if (direction === 'r') {
         newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
      }

      setSlideNumber(newSlideNumber);
   };

   const { user } = useContext(AuthContext);
   const navigate = useNavigate();

   const handleBook = () => {
      if (user) {
         setOpenModal(true);
      } else {
         navigate('/login');
      }
   };

   return (
      <div>
         <Navbar />
         <Header type="list" />
         {loading ? (
            'loading'
         ) : (
            <div className="hotelContainer">
               {open && (
                  <div className="slider">
                     <FontAwesomeIcon
                        icon={faCircleXmark}
                        className="close"
                        onClick={() => setOpen(false)}
                     />
                     <FontAwesomeIcon
                        icon={faCircleLeft}
                        className="arrow"
                        onClick={() => handleMove('l')}
                     />
                     <div className="sliderWrapper">
                        <img
                           src={data.photos[slideNumber]}
                           alt=""
                           className="sliderImg"
                        />
                     </div>
                     <FontAwesomeIcon
                        icon={faCircleRight}
                        className="arrow"
                        onClick={() => handleMove('r')}
                     />
                  </div>
               )}
               <div className="hotelWrapper">
                  <button className="bookNow">Reserve or Book Now!</button>
                  <h1 className="hotelTitle">{data.name}</h1>
                  <div className="hotelAddress">
                     <FontAwesomeIcon icon={faLocationDot} />
                     <span>{data.address}</span>
                  </div>
                  <div className="hotelDistance">
                     Excellent location – {data.distance}m from center
                  </div>
                  <div className="hotelPriceHighlight">
                     Book a stay over ${data.cheapestPrice} at this property and
                     get a free airport taxi
                  </div>
                  <div className="hotelImages">
                     {data.photos?.map((photo, index) => (
                        <div className="hotelImgWrapper" key={index}>
                           <img
                              src={photo}
                              alt=""
                              className="hotelImg"
                              onClick={() => handleOpen(index)}
                           />
                        </div>
                     ))}
                  </div>
                  <div className="hotelDetails">
                     <div className="hotelDetailsTexts">
                        <h1 className="hotelTitle">{data.title}</h1>
                        <p className="hotelDesc">{data.desc}</p>
                     </div>
                     <div className="hotelDetailsPrice">
                        <h1>Perfect for a {days}-night stay!</h1>
                        <span>
                           Located in the real heart of Krakow, this property
                           has an excellent location score of 8.8!
                        </span>
                        <h2>
                           <b>${days * data.cheapestPrice * options.room}</b> (
                           {days} nights)
                        </h2>
                        <button onClick={handleBook}>
                           Reserver or Book Now!
                        </button>
                     </div>
                  </div>
               </div>
               <MailList />
               <Footer />
            </div>
         )}
         {openModal && <Reserve setOpen={setOpenModal} hotelId={id} />}
      </div>
   );
};

export default Hotel;
