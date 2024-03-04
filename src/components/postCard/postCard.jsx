import React from 'react'
import styles from './postCard.module.css'
import Image from 'next/image'
import Link from 'next/link'

const PostCard = () => {
    return (
        <div className={styles.container}>

            <div className={styles.top}>
                <div className={styles.imgContainer}>
                    <Image src='https://images.pexels.com/photos/7529416/pexels-photo-7529416.jpeg' alt='' fill className={styles.img} />
                </div>
                <span className={styles.date}>03.01.2024</span>
            </div>

            <div className={styles.bottom}>
                <h1 className={styles.title}>Title</h1>
                <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio veniam enim, iure at molestiae minus dolores ipsa deserunt doloribus ratione fugiat quis ipsum. Nemo ullam error quidem expedita, debitis beatae!</p>
                <Link className={styles.link} href="/blog/post">READ MORE</Link>
            </div>

        </div>
    )
}

export default PostCard