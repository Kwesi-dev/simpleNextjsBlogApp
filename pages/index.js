import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import Link from 'next/link'
export default function Home({ posts }) {
  const myPosts = posts.slice(0, 6)
  return (
    <div className={styles.home}>
      <Navbar/>
      <h1 className={styles.blogHeader}>My Blogs</h1>
      {myPosts.map((post)=>
        <Link href={`/blog/${post.id}`} key={post.id}>
          <div className={styles.blogsBody}>
            <span className={styles.blogTitle}>{post.title}</span>
            <span className={styles.bloghead}>
              {post.body}
            </span>
          </div> 
        </Link>
      )}
    </div>
  )
}

export const getStaticProps = async () => {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts")
        const posts = await res.json()

        return{
          props: {posts}
        }
}
