import styles from "./Writers.module.css"
//import Writer from "./Writer/Writer"
import writerAvatar from '../../img/just2102_avatar.png'

const Writers = (props) => {
    let writers = props.writersData
    let numberOfPages = Math.ceil(props.totalWriters / props.writersOnPage)
    let pages = []
    for (let i = 1 ; i<=numberOfPages; i++) {
        pages.push(i)
    }
    return ( 
        <div className={styles.writers}>
            <div className={styles.pages}>
                {pages.map(page => 
                    {return <span 
                        onClick={() => props.onPageClick(page)} 
                        className={page===props.currentPage ? styles.active_page : styles.inactive_page}>{page}
                    </span> })
                }
            </div>
            {
                writers.map(writer => {
                    return (
                        <div className={styles.writer}>
                            <div className={styles.writer_avatar}>
                                <img src={writerAvatar}
                                // {writer.avatar}
                                alt="" />
                            </div>
                            <div className={styles.writer_username}>{writer.username}</div>
                            {writer.followed === true 
                            ? <button className={styles.unfollow_button} onClick={() => props.unfollow(writer.id)}>Following</button> 
                            : <button className={styles.follow_button}   onClick={() => props.follow(writer.id)}>Not following</button>}
                        </div>
                    )
                })
            }
        </div>
     );
}
 
export default Writers;