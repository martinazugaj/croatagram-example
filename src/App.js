import "./App.scss";
import Post from "./components/Post/Post";

function App() {
  const posts = [
    {
      id: 1,
      user_nickname: "bloger12",
      user_location: "London",
      user_image:
        "https://thumbs.dreamstime.com/b/flat-male-avatar-image-beard-hairstyle-businessman-profile-icon-vector-179285629.jpg",
      src: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/33/f5/de/london.jpg?w=700&h=500&s=1",
      caption: "Beautiful view",
      likes: 734,
    },
    {
      id: 2,
      user_nickname: "sammy35",
      user_location: "Sydney",
      user_image:
        "https://img.freepik.com/premium-vector/avatar-icon001_750950-50.jpg",
      src: "https://media.tatler.com/photos/6141d37b9ce9874a3e40107d/16:9/w_2560%2Cc_limit/social_crop_sydney_opera_house_gettyimages-869714270.jpg",
      caption: "Fun fun fun",
      likes: 1625,
    },
    {
      id: 3,
      user_nickname: "bloger12",
      user_location: "London",
      user_image:
        "https://thumbs.dreamstime.com/b/flat-male-avatar-image-beard-hairstyle-businessman-profile-icon-vector-179285629.jpg",
      src: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/33/f5/de/london.jpg?w=700&h=500&s=1",
      caption: "Beautiful view",
      likes: 734,
    },
    {
      id: 4,
      user_nickname: "sammy35",
      user_location: "Sydney",
      user_image:
        "https://img.freepik.com/premium-vector/avatar-icon001_750950-50.jpg",
      src: "https://media.tatler.com/photos/6141d37b9ce9874a3e40107d/16:9/w_2560%2Cc_limit/social_crop_sydney_opera_house_gettyimages-869714270.jpg",
      caption: "Fun fun fun",
      likes: 1625,
    },
  ];

  return (
    <div className="c-app">
      <h1 className="c-app__title">Croatagram</h1>
      <h2 className="c-app__subtitle">Feed</h2>
      <div className="c-app__content">
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}

export default App;
