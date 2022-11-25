import './article.css';


const Artical = ({imgUrl , date ,title }) => {
    return ( 
        <div className='blog-container-article'>
            <div className="blog-container-article-image">
                <img src={imgUrl} alt="Blog Image" />
            </div>
            <div className="blog-container-article-content">
                <div>
                    <p>{date}</p>
                    <h3>{title}</h3>
                    <p>Read Full Article</p>
                </div>
            </div>
           
        </div>

     );
}
 
export default Artical ;