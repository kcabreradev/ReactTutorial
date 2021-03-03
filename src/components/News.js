import { useEffect, useState } from "react";

export const News = () => {
    const [news, setNews] = useState([]);
    const [searchQuery, setSearchQuery] = useState('react');

    const fetchNews = () => {
        fetch(`http://hn.algolia.com/api/v1/search?query=${searchQuery}`)
            .then(result => result.json())
            .then(data => setNews(data.hits))
            .catch(error => console.log(error));
    }

    const handleChange = (e) => {
        setSearchQuery(e.target.value)
    }

    useEffect(() => {
        fetchNews();
    }, [searchQuery]);

    return (
        <div>
            <h2>News</h2>
            <form>
                <input type="text" value={searchQuery} onChange={handleChange} />
                <button type="submit">Search</button>
            </form>
            {news.map((n, i) => (<p key={i}>{n.title}</p>))}
        </div>
    );
}