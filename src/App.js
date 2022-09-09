import { storage } from "./firebase";
import { ref, getDownloadURL, listAll } from "firebase/storage";
import { useState, useEffect } from "react";
// import { db } from "./firebase"
// import { collection, getDocs, onSnapshot } from "firebase/firestor";

function App() {
  //useStateで、データをブラウザに表示
  const [image,setImage] = useState([]);
  const [posts,setPosts] = useState([]);
  //setPostsに、新しい配列として"posts"のデータを展開
  useEffect(()=>{
    const postData = collection(db,"posts");
    getDocs(postData).then((snapShot)=>{
      setPosts(snapShot.docs.map((doc)=> doc.data()));
  });
    //リアルタイムデーを表示させる
    onSnapshot(postData,(post)=>{
      setPosts(post.docs.map((doc)=> doc.data()))
    })

    const getUrl = async ()=>{
      const listRef = ref(storage,"gs://post-cbff4.appspot.com/images");
      const list = await listAll(listRef);
      const urls = await Promise.all(
        list.items.map((itemRef)=>
        getDownloadURL(ref(storage,itemRef)))
      )
      setImage(urls);
    }
    getUrl()
  },[])

  const image1 = image[0];
  const image2 = image[1];

  const Aleat1 = ()=>{
    alert(image1);
  }
  const Aleat2 = ()=>{
    alert(image2);
  }

  return(
    <>
     <div>
      {posts.map((post)=>{
        return(
        <div key={post.title}>
          <h1>{post.name}</h1>
          <p>{post.title}</p>
          <p>{post.text}</p>
        </div>
        )
      })}
    </div>
      <img onClick={Aleat1} src={image1}/>
      <img onClick={Aleat2} src={image2}/>
    </>
  );
}

export default App;