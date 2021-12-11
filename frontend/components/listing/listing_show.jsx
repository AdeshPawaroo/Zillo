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
                COMPONENET WILL GO HERE    
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