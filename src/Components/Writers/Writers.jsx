import styles from "./Writers.module.css"
//import Writer from "./Writer/Writer"

const Writers = (props) => {
    let writers = props.state.writersData
    return ( 
        <div className={styles.writers}>
            {
                writers.map(writer => {
                    return (
                        <div className={styles.writer}>
                            <div className={styles.writer_avatar}><img src={writer.avatar} alt="" /></div>
                            <div className={styles.writer_username}>{writer.username}</div>
                            {writer.followed === true 
                            ? <button className={styles.unfollow_button} onClick={() => props.onUnfollow(writer.id)}>Following</button> 
                            : <button className={styles.follow_button}   onClick={() => props.onFollow(writer.id)}>Not following</button>}
                        </div>
                    )
                })
            }
        </div>
     );
}
 
export default Writers;