import ClipLoader from "react-spinners/ClipLoader";

function Loading () {
    return (
        <center style={{display:"grid", placeItems:"center", height:" 100vh"}}>
<div>
    <ClipLoader color="red" size={400} />
</div>
        </center>
    )
}

export default Loading