import { useEffect, useState } from "react";

export const News = () => {
    const [news, setNews] = useState([]);
    const [searchQuery, setSearchQuery] = useState('react');
    const [url, setUrl] = useState(`http://hn.algolia.com/api/v1/search?query=${searchQuery}`);
    const [loading, setLoading] = useState(false);

    const fetchNews = () => {
        setLoading(true);
        fetch(url)
            .then(result => result.json())
            .then(data => (setNews(data.hits), setLoading(false)))
            .catch(error => console.log(error));
    }

    const handleChange = (e) => {
        setSearchQuery(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setUrl(`http://hn.algolia.com/api/v1/search?query=${searchQuery}`)
    }

    useEffect(() => {
        fetchNews();
    }, [url]);

    return (
        <div>
            <h2>News</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" value={searchQuery} onChange={handleChange} />
                <button type="submit">Search</button>
            </form>
            { loading ? 'Loading...' : news.map((n, i) => (<p key={i}>{n.title}</p>))}
        </div>
    );
}