import axios from "axios";
import { useEffect, useState } from "react";
import Category from "../Components/Category";
const Home = () => {
    // const API_key = import.meta.env.NEWS_API_KEY
    const API_key = "abf1d39c4cd5409c944176ef0b5c62da"
    const baseURL = "https://newsapi.org/v2/everything?q=bitcoin&apiKey="
    const [data, setData] = useState([])
    useEffect(() => {
        const fetchDate = async () => {
            try {
                const response = await axios.get(`${baseURL}${API_key}`)
                setData(response.data.articles)
            }
            catch {
                (error) => console.error(error)

            }
        }
        fetchDate()
    }, [])
    return (
        <div>
            {/* <Category /> */}
            <form className="max-w-md mx-auto">
                <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                    </div>
                    <input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Your News" required />
                    <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                </div>
            </form>

            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto" >
                    <div className="flex flex-wrap -m-4" >
                        {data.map((obj, index) => {
                            return (
                                <div className="p-4 md:w-1/3" key={index}>
                                    <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden" >
                                        <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={obj.urlToImage ? obj.urlToImage : "https://dummyimage.com/720x400"} alt="blog" />
                                        <div className="p-6">
                                            <div className="flex items-center flex-wrap ">
                                                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">{obj.author}</h2>
                                                <h2 className="tracking-widest lg:ml-auto md:ml-0 ml-auto text-xs title-font font-medium text-gray-400 mb-1">{obj.source.name}</h2>
                                            </div>
                                            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{obj.title}</h1>
                                            <p className="leading-relaxed mb-3">{obj.description}</p>
                                            <div className="flex items-center flex-wrap ">
                                                <a href={obj.url} className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                                                    <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                        <path d="M5 12h14"></path>
                                                        <path d="M12 5l7 7-7 7"></path>
                                                    </svg>
                                                </a>
                                                <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                                                    <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                                                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                                        <circle cx="12" cy="12" r="3"></circle>
                                                    </svg>1.2K
                                                </span>
                                                <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                                                    <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                                                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                                    </svg>6
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>

                </div>
            </section>
        </div>
    );
};

export default Home;