export default function GetListingsReducer (state = null, action) {
    switch(action.type) {
        case 'GET_LISTING_ID':
            return action.payload;
        default:
    }
    return state;
}
