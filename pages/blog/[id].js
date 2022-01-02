import Navbar from "../../components/Navbar";
import styles from '../../styles/blog.module.css'
const  singleBlog= ({post}) => {
    return ( 
        <div className={styles.singlePost}>
            <Navbar/>
            <div className={styles.blogBody}>
                <h1>{post.title}</h1>
                <span>{post.body}</span>
            </div>
        </div>
    );
}
 
export default singleBlog;

export const getStaticPaths =  async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts")
    const posts = await res.json()

    const paths = posts.map((post)=>(
        {
            params: {id: JSON.stringify(post.id)}
        }
    ))

    return{
        paths,
        fallback: false
    }
}

export const getStaticProps = async ({params}) => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts/"+ params.id)
    const post = await res.json()

    return{
        props: {post}
    }
}