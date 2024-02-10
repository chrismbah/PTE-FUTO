import { collection, addDoc } from "firebase/firestore";
import { db } from "../../../config/firebase";
import { post1 } from "../../../utils/misc/blog/posts";
import { v4 as uuid } from "uuid";

export default function Blog() {
  const postsRef = collection(db, "blogPosts");
  const addPosts = async () => {
    try {
      await addDoc(postsRef, {
        id: uuid(),
        ...post1,
      });
      console.log("Posts added");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="min-h-screen">
      <div className="box-width ">
        <div className="page-section">
          <h2 className="py-4 border-b border-b-gray-200 w-full uppercase font-bold text-xl ss:text-xll mb-4">
            Latest Articles
          </h2>

        </div>
        <button
          className="bg-green1 text-white rounded-md p-4 hover:p-6"
          onClick={addPosts}
        >
          Add Posts
        </button>
      </div>
    </div>
  );
}
