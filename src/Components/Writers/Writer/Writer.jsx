// styles for this file are located in the Writers.css file ("../Writers.css")
const Writer = (props) => {
    return (
        <div className="writer">
            <div className="writer_avatar"><img src={props.avatar} alt="" /></div>
            <div className="writer_username">{props.username}</div>
        </div>
     );
}
 
export default Writer;