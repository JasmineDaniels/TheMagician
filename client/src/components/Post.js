import { Col } from 'react-bootstrap';
import moment from 'moment';
function Post({ post }) {
    return (
        <Col md={9} className='mx-auto my-3'>

            <div className='card post-card'>
                <div className='card-header'>
                    <h5 className='float-start'>{post.username}</h5>
                    <p className='float-end'>{moment(post.createdAt).format('LLL')}</p>
                </div>
                <div className='card-body  mx-auto'>
                    <div>
                        <p className='text-center'>{post.message}</p>
                    </div>

                    <div className='row'>
                        {post.reading.results.map((result, index) => {
                            return (
                                <div className='col-md-4'>
                                    <div className=" card result-card my-2" key={index}>
                                        <div className="card-header text-center">
                                            <h4>{result.name} </h4>
                                        </div>
                                        <div className="card-body">
                                            <div className='img-adjust mx-auto'>
                                                <img id={result._id} src={require(`../images/${result.img}`)} alt='card-back' className='img-fit'></img>
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