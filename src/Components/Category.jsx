
import axios from "axios";
import { Button, ButtonGroup } from "flowbite-react";
import { useEffect, useState } from "react";

const Category = () => {
    let API_key = import.meta.env.VITE_NEWS_API_KEY
    const [cat, setCat] = useState("general")
    const baseURL = `https://newsapi.org/v2/everything?q=${cat}&apiKey=${API_key}`
    useEffect(() => {
        const fetchDate = async () => {
            try {
                const response = await axios.get(`${baseURL}`)
                setCat(response)
            }
            catch { e => console.error(e) }
        }
        fetchDate()
    }, [])
    return (
        <div>
            {console.log('cat ', cat)}
            <div className=" text-center m-8">
                <ButtonGroup>
                    <Button color="gray">Profile</Button>
                    <Button color="gray">Settings</Button>
                    <Button color="gray">Messages</Button>
                </ButtonGroup>
            </div>
        </div>
    );
};

export default Category;