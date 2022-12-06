import { Col, Container } from "react-bootstrap"
import React, { useState, useEffect } from 'react'
import Post from './Post'
import axios from 'axios'
import '../css/home.css'

export default function Home() {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        const getAllPosts = async () => {
            const allPosts = await axios.get('/api/home/', {
                headers: {
                    'Content-Type': 'application/json',
                }
            })
            console.log(allPosts, `this is All Posts`)
            const recentPosts = allPosts.data;
            //const postsArr = [allPosts, ...recentPosts]
            setPosts(recentPosts)
            console.log(recentPosts, `this is recent posts`)
        }
        getAllPosts()
    }, [])
    return (

        <Container>
            <Col>
                <div className="card recent-posts transparent">
                    <div className="card-header">
                        <h3 className="links text-center"> Recent Posts</h3>
                    </div>
                    <div className="card-body">

                        {posts.map((post, index) => (
                            <Post post={post} key={index} />
                        ))}

                    </div>
                </div>

            </Col>


        </Container>
    )
}