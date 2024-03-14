
import PropTypes from 'prop-types'

const Blog = ({blog}) => {
    const {title,author_img,reading_time,author,cover,posted_date,hashtags} = blog;
    return (
        <div className='p-4 mt-4'>
            <img src={author_img} className='w-52' alt="" />
            <div className='flex justify-between'>
                <div className=''>
                  <img src={cover} className='mt-4' alt="not shown" />
                  <div>
                    <h3 className='text-2xl'>{author}</h3>
                    <p>{posted_date}</p>
                  </div>
                </div>
                <section>
                     <span>{reading_time} min read</span>
                </section>
            </div>
           <h2 className="text-4xl">{title}</h2> 
           <p>
            {
                hashtags.map((hash,idx) => <span key={idx}> <a href="">#{hash}</a></span> )
            }
           </p>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired
}

export default Blog;