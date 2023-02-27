import axios from "axios";

async function main(number){
    try {
        async function user_id(number){
            // const {data:users}=await axios("https://jsonplaceholder.typicode.com/users/"+number)
            const {data:users}=await axios(`https://jsonplaceholder.typicode.com/users/${number}`);
            console.log(users)
        }
        async function post_id(number){
            // const {data:post}=await axios("https://jsonplaceholder.typicode.com/posts?id="+number)
            const {data:post}=await axios(`https://jsonplaceholder.typicode.com/posts?id=${number}`);
            console.log(post)
        }

        // console.log(await user_id(number));
        // console.log(await post_id(number));

        const user=await user_id(number)
        const post=await post_id(number)
        return user+post


    }catch (e){
        console.log(e)
    }
}

export default main;