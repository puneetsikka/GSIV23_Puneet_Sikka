export const increment = () => {
    return {
      type: 'INCREMENT'
    };
  };
  
  export const decrement = () => {
    return {
      type: 'DECREMENT'
    };
  };
  export const resetPageCount = () => {
    return {
      type: 'RESETPAGECOUNT'
    };
  };
  export const movie_details = (data) => {
    return {
      type: 'Movie_Details',
      payload:data,
    };
  };
  export const ListMovies = (data) => {
    return {
      type: 'Movie_List',
      payload:data,
    };
  };
  export const append = (data) => {
    return {
      type: 'Append_Movie_List',
      payload:data,
    };
  };
  export const search = (data) => {
    return {
      type: 'SEARCH',
      payload:data,
    };
  };
  export const resetSearch = () => {
    return {
      type: 'RESETSEARCH'
    };
  };
  