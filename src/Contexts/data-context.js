import { createContext, useContext, useReducer } from "react";

const DataContext = createContext();

export function DataProvider({ children }) {
  let data = [
    {
      videoId: "zpROwouRo_M",
      title:
        "NFTs Are Fueling a Boom in Digital Art. Here’s How They Work | WSJ",
      uploadedBy: "Wall Street Journal",
      description:
        "Non-fungible tokens, or NFTs, have exploded onto the digital art scene this past year. Proponents say they are a way to make digital assets scarce, and therefore more valuable. WSJ explains how they work, and why skeptics question whether they’re built to last. Photo Illustration: Jacob Reynolds/WSJ",
      likes: "12K",
      views: "643,359",
      subscribers: "3.01M",
    },
    {
      videoId: "uZ_9HXU67RY",
      title:
        "The NFT Bubble: Why 97% of All NFT Art Right Now Is a Bad Investment | The Outer Realm Podcast",
      uploadedBy: "GaryVee",
      description:
        "There is no doubt in my mind that non-fungible tokens will be a part of our lives for a long time. The problem right now is because it is such a new concept for many, people are rushing in and making large investments without doing the proper research and education. Today’s episode is an interview that I did on the podcast “The Outer Realm“ hosted by  Eric Paul Rhodes. We talk about my macro overview of the NFT space, why I believe that I’m going to be involved in it for the rest of my life, and why I believe that 99% of current NFT projects won’t end up as remarkable investments. Enjoy! Let me know what you thought.",
      likes: "4K",
      views: "153,005",
      subscribers: "3.11M",
    },
    {
      videoId: "a8ww4aNlPQU",
      title: "What is an NFT? (Crypto Beginners)",
      uploadedBy: "Rhett / Mankind",
      description:
        "So I'm going to describe what an NFT is in the most basic terms as I can. NFT stands for Non Fungible Token.",
      likes: "9.7K",
      views: "517,150",
      subscribers: "36K",
    },
    {
      videoId: "nTmF26NUZTA",
      title: "Beeple Explains The Absurdity Of NFTs | So Expensive",
      uploadedBy: "Business Inside",
      description:
        "Mike Winkelmann, better known as Beeple, has sold the most expensive digital artwork in history. It’s part of an explosion in the market for NFTs — tokens that prove ownership of things like digital art that you can’t even touch.",
      likes: "14K",
      views: "630,887",
      subscribers: "4.8M",
    },
    {
      videoId: "9zTpJJoHmnE",
      title: "This MF sold some JPGs for $3.5M last weekend - Beeple Art Drop",
      uploadedBy: "Rhett / Mankind",
      description:
        "So Beeple. This mother f*cker who many of us in the digital art world have know for a long time just put some of his images together in a collection, made a slide show, chucked a bar code on it, put it in a digital frame and included some hair in a jar that's not even his pubes. Put it up for sale and just made $3.5M dollars this weekend. What the F*ck!",
      likes: "23K",
      views: "546,357",
      subscribers: "36K",
    },
    {
      videoId: "Xdkkux6OxfM",
      title:
        "What Are NFTs and How Can They Be Used in Decentralized Finance? DEFI Explained",
      uploadedBy: "Finematics",
      description:
        "So what are NFTs all about? And how can they be used in decentralized finance? You’ll find answers to these questions in this video.",
      likes: "6.6K",
      views: "193,949",
      subscribers: "177K",
    },
    {
      videoId: "_V0-HGMB8SI",
      title:
        "NFTs - If You Don’t Know, Now You Know | The Daily Social Distancing Show",
      uploadedBy: "The Daily Show with Trevor Noah",
      description:
        "NFTs, or nonfungible tokens, are a new craze breaking out in the world of cryptocurrency, but what are you actually buying? #DailyShow​ #TrevorNoah​ #NFTs",
      likes: "18K",
      views: "877,530",
      subscribers: "9.31M",
    },
  ];

  const reducer = (state, { type, payload }) => {
    switch (type) {
      case "ADD_TO_PLAYLIST": {
        // data = data.map( item => item.videoId === payload.videoId ? {...item, videoId: item.videoId + 1} : item )
        // console.log(data)
        // const playlist = state.playlists.find( list => list.id === payload.id )
        return {
          ...state,
          playlists: state.playlists.map((playlist) => {
            return playlist.id === payload.playlistId
              ? { ...playlist, videos: [...playlist.videos, payload.videoId] }
              : playlist;
          }),
        };
      }
      case "REMOVE_FROM_PLAYLIST": {
        // data = data.map( item => item.videoId === payload.videoId ? {...item, videoId: item.videoId - 1} : item )
        return {
          ...state,
          playlists: state.playlists.map((playlist) => {
            return playlist.id === payload.playlistId
              ? {
                  ...playlist,
                  videos: playlist.videos.filter(
                    (item) => item !== payload.videoId
                  ),
                }
              : playlist;
          }),
        };
      }

      default: {
        return state;
      }
    }
  };

  const [{ playlists }, dispatch] = useReducer(reducer, {
    playlists: [
      {
        name: "Liked Videos",
        id: "liked",
        videos: [],
      },
      {
        name: "Watch Later",
        id: "watched",
        videos: [],
      },
      {
        name: "History",
        id: "history",
        videos: [],
      },
      {
        name: "",
        id: "",
        videos: [],
      },
    ],
  });

  return (
    <DataContext.Provider value={{ data, dispatch, playlists }}>
      {children}
    </DataContext.Provider>
  );
}

export function useData() {
  return useContext(DataContext);
}
