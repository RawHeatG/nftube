import { VideoCard } from "../Components"


export function VideoListing() {
    const data = [
        { name: "Daft Punk", id: "V06bw_qyRFY"},
        { name: "Tove-Lo", id: "SYM-RJwSGQ8"},
        { name: "Tove-Lo", id: "SYM-RJwSGQ8"},
        { name: "Tove-Lo", id: "SYM-RJwSGQ8"},
        { name: "Tove-Lo", id: "SYM-RJwSGQ8"},
        { name: "Tove-Lo", id: "SYM-RJwSGQ8"},
        { name: "Tove-Lo", id: "SYM-RJwSGQ8"},
        { name: "Tove-Lo", id: "SYM-RJwSGQ8"},
        { name: "Tove-Lo", id: "SYM-RJwSGQ8"},
        { name: "Tove-Lo", id: "SYM-RJwSGQ8"},
        { name: "Tove-Lo", id: "SYM-RJwSGQ8"},
        { name: "Tove-Lo", id: "SYM-RJwSGQ8"},
        { name: "Tove-Lo", id: "SYM-RJwSGQ8"},
        { name: "Tove-Lo", id: "SYM-RJwSGQ8"},
        { name: "Tove-Lo", id: "SYM-RJwSGQ8"},
        { name: "Tove-Lo", id: "SYM-RJwSGQ8"},
        { name: "Tove-Lo", id: "SYM-RJwSGQ8"}
    ];
    return(
        <div style={{ display: "flex", flexWrap: "wrap" }} >
            {data.map(video => (
                <VideoCard video={video} />
            ))}
        </div>
    )
}