import React, { useEffect, useState } from 'react';
import jwtDecode from "jwt-decode";
import './App.css';
import Posts from './components/admin/posts';
import PostLoadingComponent from './components/posts/postLoading';
import axiosInstance from './axios';

function Admin() {
    const PostLoading = PostLoadingComponent(Posts);
    const [appState, setAppState] = useState({
        loading: true,
        posts: null,
    });

    // 작성자 정보 가져오기
    const token = localStorage.getItem("access_token")
    const decode = jwtDecode(token)
    const author = decode.user_id

    useEffect(() => {
        axiosInstance.get(`admin/authorlist/` + author).then((res) => {
            const allPosts = res.data;
            setAppState({ loading: false, posts: allPosts });
            console.log(res.data);
        });
    }, [setAppState]);

    return (
        <div className="App">
            <h1>Latest Posts</h1>
            <PostLoading isLoading={appState.loading} posts={appState.posts} />
        </div>
    );
}
export default Admin;