'use client'

import UserPostBottom from "@/components/molecules/UserPost/UserPostBottom/UserPostBottom";
import UserPostHeader from "@/components/molecules/UserPost/UserPostHeader/UserPostHeader";
import UserPostBody from "@/components/molecules/UserPost/UserPostBody/UserPostBody";


export default function UserPost(
    {post}

){
    return (
    <div className="flex flex-col rounded-md w-full font-sans mb-4 bg-white">
        <UserPostHeader user_avatar={post.user_avatar} user_fullname={post.user_fullname} date_created={post.date_created}/>
        <UserPostBody image_urls={post.image_urls} content={post.content}/>
        <UserPostBottom user_avatar={post.user_avatar} comments_count={post.comments_count} likes_count={post.likes_count} />
    </div>
    );
}