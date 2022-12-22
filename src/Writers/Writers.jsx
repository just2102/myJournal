import styles from "./Writers.css"
import Writer from "./Writer/Writer"

const Writers = (props) => {
    let writers = props.state.writersData
    let writersMapped = writers.map((writer)=> {
        return <Writer avatar={writer.avatar} username={writer.username} />
    })

    return ( 
        <div className="writers">
            {writersMapped}
        </div>
     );
}
 
export default Writers;