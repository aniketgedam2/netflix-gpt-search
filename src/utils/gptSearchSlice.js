import {createSlice} from "@reduxjs/toolkit";

const gptSearchSlice = createSlice({
    name:"gptSearch",
    initialState:{
        showGptSearch:false,
        gptMovies:null,
        movieNames:null,
    },
    reducers:{
        toggleGptSearchView:(state)=>{
            state.showGptSearch = !state.showGptSearch
        },
        addGptMovieResult:(state,action)=>{
            const  {movieNames, movieResults} = action.payload;
            state.gptMovies = movieResults;
            state.movieNames = movieNames;
        }
    }
})

export const {toggleGptSearchView,addGptMovieResult} = gptSearchSlice.actions;

export default gptSearchSlice.reducer;