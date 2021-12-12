import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchListing } from "../../actions/listing_actions";

export const ListingShow = (props) => {

    const params = useParams();
    const dispatch = useDispatch();
    const listingId = params.listingid;
    const listing = useSelector(state => state.entities.listings);
  
    useEffect(() => {
        dispatch(fetchListing(listingId))
    }, []);    

    return (
        <div className="modal-background" onClick={() => window.location = "#/buy"}>
            <div className="modal-child" onClick={e => e.stopPropagation()}>
                <div className="show-container">
                    <div className="show-photos-container">
                        <div className="photo1"></div>    
                        <div className="photo2"></div>    
                        <div className="photo3"></div>    
                        <div className="photo4"></div>   
                    </div>
                    <div className="show-info-container"></div>
                </div>   
            </div>
        </div>
    )
}








// import React from "react";
// import { connect, withRouter } from "react-router-dom";
// import { fetchListing } from "../../actions/listing_actions";

// export default class ListingShow extends React.Component {

//     constructor(props) {
//         super(props);
//     }

//     render() {
//         console.log(props);
//         return (
//             <div>
//                 HERE IN SHOWPAGE
//             </div>
//         )
//     }
// }

// const mDTP = (dispatch) => ({
//     fetchListing: listingId => dispatch(fetchListing(listingId))
// });

// export default withRouter(connect(null, mDTP)(ListingShow))