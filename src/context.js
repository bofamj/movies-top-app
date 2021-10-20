import React,{useState,useEffect,useContext} from 'react'


const AppContext = React.createContext()

const API_KEY = 'api_key=86097fda51522c1e9eff55b07cf3f201'
const BAS_ULR = 'https://api.themoviedb.org/3'
const API_URL = `${BAS_ULR}/discover/movie?sort_by=popularity.desc&${API_KEY }`
//'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=86097fda51522c1e9eff55b07cf3f201'
//`${BAS_ULR}${API_URL}${API_KEY}`
const AppProvider = ({children})=>{
    const [movies,setMovies]=useState([])
    const [loading,setLoading]=useState(true)

    const moviesData =async ()=>{
        setLoading(true)
        try {
            const response = await fetch(`${API_URL}`)
            const data = await response.json()
            console.log(data.results);
            setLoading(false)
        } catch (error) {
            console.log(error);
        }
    }

useEffect(()=>{
    moviesData()
},[])


    return(
        <AppContext.Provider>
            {children}
        </AppContext.Provider>
    )
}
export const useGlobalContext = ()=>{
    return useContext(AppContext)
}

export {AppContext,AppProvider}