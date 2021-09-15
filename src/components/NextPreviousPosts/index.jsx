import React, { Component } from 'react'
import { relatedPost } from '../../Services/posts.service'

class NextPreviousPosts extends Component {

    state = {
        posts : []
    }

   async componentDidMount() {
       let { data : { response : posts } } = await relatedPost(this.props.catId)
       this.setState( { posts } )
   }

   render() {
	return (
		<div className="row">
            { this.state.posts.length > 0 && this.state.posts.map((post, index) => (
                <div className="col-md-6" key={post._id}>
                    <div className="widget">
                        <div className="widget-next-post">
                            <div className="small-post">
                                <div className="image">
                                     <a href={`/detail/${post._id}`}>
                                        <img src="https://noonpost.netlify.app/html/template/assets/img/latest/1.jpg" alt="..." />
                                     </a>
                                </div>
                                <div className="content">
                                    <div>
                                     <a href={`/detail/${post._id}`} className="link">
                                           {index === 0 ? <span><i className="arrow_left"></i> Preview post </span> : <span> Next post <i className="arrow_right"></i></span> } 
                                       </a>
                                    </div>
                                    <a href={`/detail/${post._id}`}>{post.title}</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
             )) }
         {/*   <div className="col-md-6">
                <div className="widget">
                    <div className="widget-next-post">
                        <div className="small-post">
                            <div className="image">
                                <a href="post-default.html">
                                    <img src="https://noonpost.netlify.app/html/template/assets/img/latest/1.jpg" alt="..." />
                                </a>
                            </div>
                            <div className="content">
                                <div>
                                    <a className="link" href="post-default.html">
                                        <i className="arrow_left"></i>Preview post</a>
                                </div>
                                <a href="post-default.html">7 Healty Dinner Recipes for a Date Night at Home</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-6">
                <div className="widget">
                    <div className="widget-previous-post">
                        <div className="small-post">
                            <div className="image">
                                <a href="post-default.html">
                                    <img src="https://noonpost.netlify.app/html/template/assets/img/blog/2.jpg" alt="..." />
                                </a>
                            </div>
                            <div className="content">
                                <div>
                                    <a className="link" href="post-default.html">
                                        <span> Next post</span>
                                        <span className="arrow_right"></span>
                                    </a>
                                </div>
                                <a href="post-default.html">How to Choose Outfits for Work for woman and men</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>*/}
        </div>
	)
   }
}

export default NextPreviousPosts