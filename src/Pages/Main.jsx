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
       console.log("cat ",category)
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://linesnews.onrender.com/api/news-datas?category=${category}`);
                console.log("res is ",response.data)
                setNews(response.data.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [category]);


  return (
    <div style={{width:"100%"}}>
      

      <p className='title' style={{textAlign:"center",fontSize:"2rem",fontWeight:"bold"}}>{category===""?"GLOBAL":category} NEWS</p>
      {/* {News.length >  0 ?(
        News.map((article,index)=>(
        <Row className='Article'>
        <Col sm md style={{marginTop:"3rem"}}>
        <NewsCard desc = {article.attributes.headline} title = {article.attributes.hashtags} date = {article.attributes.createdAt}  icon={article.attributes.newsIcon} />
        </Col>
        </Row>
      ))):"No News"} */}

      {News.length >  0  ?(
        News.map((article,index)=>(
            

            <>
            {  (category==='' || category===article.attributes.category) &&
                <Row className='Article'>
        <Col sm md style={{marginTop:"3rem"}}>
        <NewsCard desc = {article.attributes.headline} title = {article.attributes.hashtags} date = {article.attributes.createdAt}  icon={article.attributes.newsIcon} />
        </Col>
        </Row>
            }
            </>
        
            
      ))):"No News"}


    </div>
  )
}

export default Main
