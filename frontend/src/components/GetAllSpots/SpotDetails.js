import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchSingleSpot, getSpots } from "../../store/spots";
import { useParams } from "react-router-dom";
import './SpotDetails.css'
import CreateReview from "../Reviews/CreateReview";

const SpotDetails = () => {
  const {spotId} = useParams()
  console.log('spotId', spotId)
  const dispatch = useDispatch();
  // console.log('spots', spots)
  // const spotDetails = Object.values(spots)
  // console.log('spotDetails',spotDetails)
const spot = useSelector(state=>state.spotStates.singleSpot)


  useEffect(()=>{
    dispatch(fetchSingleSpot(spotId))
},[dispatch])

console.log('spot',spot)
if(!spot.SpotImages) return null;
  return (
    <>
    <div className="spot-card">
      <h1>Spot Details</h1>
      <h1>{spot.name}</h1>
      <h4 ><i class="fa-solid fa-star" ></i>{`${spot.avgStarRating}`} </h4>
      <h4>{spot.city}{spot.state}{spot.country}</h4>
      <img src={spot.SpotImages[0].url} className='spot-image'/> 
      <h2>{spot.description}</h2>
      <h2>Located in {spot.address}</h2>
    </div>
    <CreateReview/>

    </>
  );
}

export default SpotDetails;