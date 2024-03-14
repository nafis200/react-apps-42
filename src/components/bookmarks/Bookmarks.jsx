import Bookmark from "../bookmark/Bookmark";


const Bookmarks = ({bookmarks,reading}) => {
    
    return (
        <div className="md:w-1/3">
            <div>
                <h3 className="text-2xl">Reading Time:{reading}</h3>
            </div>
            <h2>Bookmarks:{bookmarks.length}</h2>
            {
                bookmarks.map((bookmark,idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark> )
            }
            
        </div>
    );
};

export default Bookmarks;