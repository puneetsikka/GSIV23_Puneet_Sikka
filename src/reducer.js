var intialState = {
    page_count: 1,
    movie_list: {},
    movie_details_page: {},
    search_list: {}
}
const counterReducer = (state = intialState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                ...state,
                page_count: state.page_count + 1,
            }
        case 'DECREMENT':
            return {
                ...state,
                page_count: state.page_count - 1,
            }
        case 'RESETPAGECOUNT':
            return {
                ...state,
                page_count: 1,
            }
        case 'RESETSEARCH':
            return {
                ...state,
                search_list: {},
            }
        case 'SEARCH':
            return {
                ...state,
                search_list: { ...state.search_list, ...action.payload },
            }
        case 'Movie_Details':
            return {
                ...state,
                movie_details_page: action.payload,
            }
        case 'Append_Movie_List':
            return {
                ...state,
                movie_list: { ...state.movie_list, ...action.payload },
            }
        default:
            return state;
    }
};

export default counterReducer;
