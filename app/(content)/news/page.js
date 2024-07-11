import NewsList from "@/components/main-header/news-list";
import { getAllNews } from "@/lib/news";

export default async function NewsPage(){
    // http fetch
    // const response = await fetch('http://localhost:8080/news')

    // if(!response.ok){
    //     throw new Error('Failed to fetch news.')
    // }

    // const news = await response.json()

    //sqlite fetch
    const news = await getAllNews()

    return(
        <>
        <h1>News Page</h1>
        <NewsList news={news} />
        </>
    )
}