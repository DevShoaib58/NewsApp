import axios from "axios";
import { useEffect, useState } from "react";
// {
//     "source": {
//         "id": null,
//         "name": "Publickey1.jp"
//     },
//     "author": "jniino",
//     "title": "Webブラウザで3Dモデルを高速に描画する「Babylon.js 7.0」正式リリース。MMD（MikuMikuDance）やApple Vision Proサポート",
//     "description": "Webブラウザで3Dモデルを高速に描画する「Babylon.js 7.0」正式リリース。MMD（MikuMikuDance）やApple Vision Pro、WebXRなどをサポートし、よりリアルなレンダリングを実現する機能追加も行われた。",
//     "url": "https://www.publickey1.jp/blog/24/web3dbabylonjs_70mmdmikumikudanceapple_vision_pro.html",
//     "urlToImage": null,
//     "publishedAt": "2024-03-31T15:15:42Z",
//     "content": "マイクロソフトは、Webブラウザ上で2Dや3Dモデルの高速なレンダリングなどを可能にするオープンソースのJavaScriptライブラリ「Babylon.js」の最新版「Babylon.js 7.0」正式版をリリースしました。 We are proud to announce that Babylon.js 7.0 has officially been released! The next st… [+42 chars]"
// }
const Intro = () => {
    const [data, setData] = useState([])
    // const newsapi = import.meta.env.NEWS_API_KEY;
    useEffect(() => {
        axios.get('https://newsapi.org/v2/everything?q=apple&from=2024-03-31&to=2024-03-31&sortBy=popularity&apiKey=abf1d39c4cd5409c944176ef0b5c62da')
            // axios.get(`https://newsapi.org/v2/everything?q=apple&from=2024-03-31&to=2024-03-31&sortBy=popularity&apiKey=${newsapi}`)
            .then((res) => {
                setData(res.data.articles);
            })
    }, [])
    return (
        <div>
            {/* {console.log("data :", data)} */}
            <h1 className="text-4xl text-center">News App</h1>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col">
                        <div className="h-1 bg-gray-200 rounded overflow-hidden">
                            <div className="w-24 h-full bg-purple-500"></div>
                        </div>
                        <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
                            <h1 className="sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0">Space The Final Frontier</h1>
                            <p className="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">Street art subway tile salvia four dollar toast bitters selfies quinoa yuccie synth meditation iPhone intelligentsia prism tofu. Viral gochujang bitters dreamcatcher.</p>
                        </div>
                    </div>
                    <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
                        {data.map((obj) => {
                            return (
                                <>
                                    <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
                                        <div className="rounded-lg h-64 overflow-hidden">
                                            <img alt="content" className="object-cover object-center h-full w-full" src={obj.urlToImage} />
                                        </div>
                                        <h2 className="text-xl font-medium title-font text-gray-900 mt-5">{obj.title}</h2>
                                        <p className="text-base leading-relaxed mt-2">{obj.description}</p>
                                        <a className="text-purple-500 inline-flex items-center mt-3" href={obj.url} target="blank">Learn More
                                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                                            </svg>
                                        </a>
                                    </div>
                                    {console.log(obj)}
                                </>
                            )
                        })}


                    </div>
                </div>
            </section>
        </div>
    );
};

export default Intro;