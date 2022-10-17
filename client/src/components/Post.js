import { Col } from 'react-bootstrap';

function Post({ post }) {
    return (
        <Col md={9} className='mx-auto'>

            <div className='card post-card'>
                <div className='card-header'>
                    <h5>{post.username}</h5>
                </div>
                <div className='card-body  mx-auto'>
                    <div>
                        <p>{post.message}</p>
                    </div>

                    <div className='row'>
                        {post.results.map((result, index) => {
                            return (
                                <div className='col-md-4'>
                                    <div className=" card result-card my-2" key={index}>
                                        <div className="card-header text-center">
                                            <h4>{result.name} </h4>
                                        </div>
                                        <div className="card-body">
                                            <div className='img-adjust mx-auto'>
                                                <img id={result.id} src={require(`../images/${result.img}`)} alt='card-back' className='img-fit'></img>
                                            </div>


                                        </div>
                                    </div>
                                </div>
                            )

                        })}

                    </div>

                </div>
            </div>

        </Col>
    )
}

export default Post;