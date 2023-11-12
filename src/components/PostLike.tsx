export default function PostLike(){
    return (
        <button 
            onClick={() => alert('Hello island!')}
            className="px-3 py-1 rounded-md bg-pink-700 hover:bg-orange-800"
        >
            Like
        </button>
    )
}