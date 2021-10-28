import React,{useState,useEffect,useContext} from 'react';
import axios from 'axios';


const AppContext = React.createContext()

const API_KEY = 'api_key=86097fda51522c1e9eff55b07cf3f201'
const BAS_ULR = 'https://api.themoviedb.org/3'
const API_URL = `${BAS_ULR}/discover/movie?sort_by=popularity.desc&${API_KEY }`
const THE_API = `${BAS_ULR}/discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22&${API_KEY }`
//const THE_API=`https://api.themoviedb.org/3/discover/movie?primary_release_year=2010&sort_by=vote_average.//desc&api_key=86097fda51522c1e9eff55b07cf3f201`
//'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=86097fda51522c1e9eff55b07cf3f201'
//`${BAS_ULR}${API_URL}${API_KEY}`
// movies in Theaters // IMDP API
const API_KEYS='k_6di256ry'
const API_THEA=`https://imdb-api.com/en/API/BoxOffice/${API_KEYS}`
//CONMING SOON API
const API_SOON =`https://imdb-api.com/en/API/ComingSoon/${API_KEYS}`
const AppProvider = ({children})=>{
    const [movies,setMovies]=useState([])
    const [loading,setLoading]=useState(true)
    const [theatres,setTheatres]=useState([])
    const [inTheaters,setInTheaters]=useState([])
    const [comingSoon,setComingSoone]=useState([])

    const moviesData =async ()=>{
        setLoading(true)
        try {
            const responseTop = axios.get(API_URL);
            const responseMov = axios.get(THE_API);
            const responseThea = axios.get(API_THEA);
            const responseSoon = axios.get(API_SOON);
            axios.all([responseTop,responseMov,responseThea,responseSoon])
            .then(
                axios.spread((...response)=>{
                    if(response[0].status === 200) {
                        setMovies(response[0].data.results) 
                        //console.log(response[0].data.results);
                    }
                    if(response[1].status === 200) {
                        setTheatres(response[1].data.results) 
                        //console.log(response[1].data.results);
                    }
                    if(response[2].status === 200) {
                        setInTheaters(response[2].data.items) 
                        //console.log(response[2].data.items);
                    }
                    if(response[3].status === 200) {
                        setComingSoone(response[3].data.items) 
                        console.log(response[3].data.items);
                    }
                })
            )
            /* const response = await fetch(url)
            const data = await response.json()
            //console.log(data.results);
            setMovies(data.results) */
            setLoading(false)
        } catch (error) {
            console.log(error);
        }
    }
    
    
//console.log(movies);
useEffect(()=>{
    moviesData()
    
},[])


    return(
        <AppContext.Provider value={{movies,loading,theatres,inTheaters,comingSoon}}>
            {children}
        </AppContext.Provider>
    )
}
export const useGlobalContext = ()=>{
    return useContext(AppContext)
}

export {AppContext,AppProvider}