export function VideoCard({video}){
    console.log("video:", video)
    const { id, name } = video;
    console.log("Id:", id)
    return(
        <>
            <div class="card">
                <iframe 
                    width="100%" height="100%" src={`https://www.youtube.com/embed/${id}`} 
                    title="YouTube video player" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen="allowfullscreen">
                </iframe>
                <h2 class="card-heading">{name}</h2>
            </div>
            
        </>
    )
}