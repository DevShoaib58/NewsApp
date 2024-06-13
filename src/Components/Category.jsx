// import axios from "axios";
// import { ListGroup, ListGroupItem } from "flowbite-react";
// import { useEffect, useState } from "react";

const Category = (props) => {

    // const [category, setCategory] = useState("general")
    // const Cat_key = "abf1d39c4cd5409c944176ef0b5c62da"
    // const [data, setData] = useState([])
    // useEffect(() => {
    //     const fetchingData = async () => {
    //         try {
    //             const response = await axios.get(`https://newsapi.org/v2/top-headlines/sources?category=business&apiKey=${Cat_key}`)
    //             setData(response.data.sources)

    //         }
    //         catch { (e) => console.error(e); }
    //     }
    //     fetchingData()
    // }, [])
    return (
        <div>
            {/* {console.log('Category: ', data)} */}
            {console.log('baseURL: ', props.myprop)}
            {/* <ListGroup className="w-48">
                {data.map((obj, index) => {
                    return (
                        <>

                            <ListGroupItem key={index}>{obj}</ListGroupItem>

                        </>
                    )
                })}
            </ListGroup> */}

        </div>
    );
};

export default Category;