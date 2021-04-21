import { useParams } from "react-router-dom";
import { useData } from "../../Contexts";
import "./VideoPlayer.css";

export function VideoPlayer(){
    const { videoId } = useParams();
    console.log("VideoId: ", videoId)
    const { data } = useData();
    const { title, description, uploadedBy, likes, views, subscribers } = data.find( item => item.videoId === videoId )
    return (
        <>
            <div className="video-player">
                <div className="video">
                    <iframe width="100%" height="600px"
                    src={`https://www.youtube.com/embed/${videoId}`}
                    title={title} frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen="allowfullscreen">
                    </iframe>
                </div>
                <h1>{title}</h1>
                <div className="engagements">
                    <div class="inline">
                        <p>Views: {views}</p>
                        <p>Likes: {likes}</p>
                    </div>
                    <div>
                        <button class="btn btn-secondary" >Like</button>
                        <button class="btn btn-tertiary" >Watch Later</button>
                    </div>
                </div>
                <div className="uploaded-by">
                    <div>
                        <h2>{uploadedBy}</h2>
                        {/* <p>{subscribers} Subscribers</p> */}
                    </div>
                    <button class="btn btn-primary" >Subscribe</button>
                </div>
                
                <div className="description">
                    <p>{description}</p>
                </div>
            </div>
        </>
    )
} 