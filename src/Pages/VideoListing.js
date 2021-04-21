import { VideoCard } from "../Components"
import { useData } from "../Contexts"

export function VideoListing() {

    const { data } = useData();
    
    return(
        <div style={{ display: "flex", flexWrap: "wrap" }} >
            {data.map(video => (
                <VideoCard video={video} />
            ))}
        </div>
    )
}