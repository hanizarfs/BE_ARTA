// import { useState } from "react";
// import { FIREBASE_STORAGE } from "../../FirebaseConfig";
// import { ref, getDownloadURL, uploadBytesResumable, UploadTaskSnapshot } from "firebase/storage";

// function App() {
//   const [imgUrl, setImgUrl] = useState<string | null>(null);
//   const [progressPercent, setProgressPercent] = useState<number>(0);

//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     const file = (e.target[0] as HTMLInputElement)?.files?.[0];
//     if (!file) return;

//     const storageRef = ref(FIREBASE_STORAGE, `${file.name}`);
//     const uploadTask = uploadBytesResumable(storageRef, file);

//     uploadTask.on(
//       "state_changed",
//       (snapshot: UploadTaskSnapshot) => {
//         const progress = Math.round(
//           (snapshot.bytesTransferred / snapshot.totalBytes) * 100
//         );
//         setProgressPercent(progress);
//       },
//       (error) => {
//         alert(error);
//       },
//       () => {
//         getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
//           setImgUrl(downloadURL);
//         });
//       }
//     );
//   };

//   return (
//     <div className="App">
//       <form onSubmit={handleSubmit} className="form">
//         <input type="file" />
//         <button type="submit">Upload</button>
//       </form>
//       {!imgUrl && (
//         <div className="outerbar">
//           <div className="innerbar" style={{ width: `${progressPercent}%` }}>
//             {progressPercent}%
//           </div>
//         </div>
//       )}
//       {imgUrl && <img src={imgUrl} alt="uploaded file" height={200} />}
//     </div>
//   );
// }

// export default App;


const Firestore = () => {
  return (
    <div>Firestore</div>
  )
}

export default Firestore