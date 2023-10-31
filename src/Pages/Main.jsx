import React  from 'react'
import NewsCard from './NewsCard'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import './Main.css'
const Main=({category})=> {

    const [News, setNews] = useState([]);
    // const [category, setCategory] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://linesnews.onrender.com/api/news-datas?category=${category}`);
                setNews(response.data.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

  const arr =[
    {
        title:"qwndkjsnd",
        desc:"loremacmnsdbaiwudhKJANX cJSHBiuahdKmcn X ASJDHGyqsgijnxmanxnqi9WUHqdn m cajsbcIUQSHIAJX Xjhdbiuqwdhij",
        img:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/ba/29/5c/img-worlds-of-adventure.jpg?w=1200&h=1200&s=1",
        date:"02-09-23",
        icon:"icon"
    },
    {
        title:"NEWS SPORTS",
        desc:"loremacmnsdbaiwudhKJANX cJSHBiuahdKmcn X ASJDHGyqsgijnxmanxnqi9WUHqdn m cajsbcIUQSHIAJX Xjhdbiuqwdhij",
        img:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/ba/29/5c/img-worlds-of-adventure.jpg?w=1200&h=1200&s=1",
        date:"02-09-23",
        icon:"icon"
    },
    {
        title:"NEWS SPORTS",
        desc:"loremacmnsdbaiwudhKJANX cJSHBiuahdKmcn X ASJDHGyqsgijnxmanxnqi9WUHqdn m cajsbcIUQSHIAJX Xjhdbiuqwdhij",
        img:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/ba/29/5c/img-worlds-of-adventure.jpg?w=1200&h=1200&s=1",
        date:"02-09-23",
        icon:"icon"
    },
    {
        title:"NEWS SPORTS",
        desc:"loremacmnsdbaiwudhKJANX cJSHBiuahdKmcn X ASJDHGyqsgijnxmanxnqi9WUHqdn m cajsbcIUQSHIAJX Xjhdbiuqwdhij",
        img:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/ba/29/5c/img-worlds-of-adventure.jpg?w=1200&h=1200&s=1",
        date:"02-09-23",
        icon:"icon"
    },
    {
        title:"NEWS SPORTS",
        desc:"loremacmnsdbaiwudhKJANX cJSHBiuahdKmcn X ASJDHGyqsgijnxmanxnqi9WUHqdn m cajsbcIUQSHIAJX Xjhdbiuqwdhij",
        img:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/ba/29/5c/img-worlds-of-adventure.jpg?w=1200&h=1200&s=1",
        date:"02-09-23",
        icon:"icon"
    },
    {
        title:"NEWS SPORTS",
        desc:"loremacmnsdbaiwudhKJANX cJSHBiuahdKmcn X ASJDHGyqsgijnxmanxnqi9WUHqdn m cajsbcIUQSHIAJX Xjhdbiuqwdhij",
        img:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/ba/29/5c/img-worlds-of-adventure.jpg?w=1200&h=1200&s=1",
        date:"02-09-23",
        icon:"icon"
    }
  ]  


  return (
    <div style={{width:"100%"}}>
      

      <h2 style={{textAlign:"center"}}>News App</h2>
      {News.length > 0 ?(
        News.map((article,index)=>(
        <Row className='Article'>
        <Col sm md style={{marginTop:"3rem"}}>
        <NewsCard desc = {article.attributes.headline} title = {article.attributes.hashtags} date = {article.attributes.createdAt}  icon={article.attributes.newsIcon} />
        </Col>
        </Row>
      ))):"No News"}
    </div>
  )
}

export default Main
