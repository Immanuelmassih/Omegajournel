import React, { Component } from 'react';
import Comments from '../../components/Comments/'
import Author from '../../components/Author';
import NextPreviousPosts from '../../components/NextPreviousPosts';
import { getDetail } from '../../Services/posts.service';
import { getCurrentUser } from "../../Services/authService";
class BlogDetail extends Component {
    state = {
        detail : []
    }

   async componentDidMount() {
    await this.getPost();
   }

   async getPost () {
     let { data : { response } } = await getDetail(this.props.match.params.id);
     response.map(x => {
        if ( x.date ) {
            let postDate = new Date(x.date)
            let Day   = postDate.getDate()
            let Month = postDate.getMonth() + 1
            let Year  = postDate.getFullYear()
            x.date = `${Day}/${Month}/${Year}`
        }
        return null
     })
     if ( response.length > 0 ) {
       this.setState({ detail : response })
     }
   }

    render() {
    	return (
    	   <section className="section pt-55 ">
    	     <div className="container">
                <div className="row">
    	            <div className="col-lg-10 offset-lg-1 mb-20">
                    { this.state.detail.length > 0 && this.state.detail.map(post => (
                        <div className="post_detail" key={post._id}>
                          <div className="post-single">
                              <div className="post-single-image">
                                <img src="https://noonpost.netlify.app/html/template/assets/img/hero/1.jpg" alt="BlogImage"/ >
                            </div>
                            <div className="post-single-content">
                                <a href="blog-grid.html
                                " className="categorie">{post.category_info.name}</a> 
                                <h4>{post.title}</h4>
                                <div className="post-single-info">
                                    <ul className="list-inline">
                                        <li>
                                            <img src="https://noonpost.netlify.app/html/template/assets/img/author/1.jpg" alt="Author" />
                                        </li>
                                        <li><a href="author.html">{post.authorName}</a> </li>
                                        <li className="dot"></li>
                                        <li>{post.date}</li>
                                        <li className="dot"></li>
                                        <li>3 comments</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="post-single-body">
                                 <div  dangerouslySetInnerHTML={{__html: post.content}} />
                            </div>
                             <div className="post-single-footer">
                                <div className="tags">
                                    <ul className="list-inline">
                                        {post.tag_Info.map(tag => (
                                            <li key={tag._id}>
                                                <a href="blog-grid.html">{tag.name}</a>
                                            </li>
                                         ))}
                                    </ul>
                                </div>                         
                            </div>
                          </div>
                            {getCurrentUser() && <Author Profile={false} />}
                            <NextPreviousPosts catId={post.category_info._id} />
                            {getCurrentUser() && <Comments postId={post._id} />}
                        </div>
                        ))
                     }
                    </div>
                </div>
             </div>
           </section>
    	)
    }
}

export default BlogDetail