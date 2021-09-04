import React, { Component } from 'react';
import Comments from '../../components/Comments/'
import Author from '../../components/Author';
import NextPreviousPosts from '../../components/NextPreviousPosts';
import { getHeader } from '../../FakeServices/heade.server'

let radix = false

class BlogDetail extends Component {
    state = {
        detail : getHeader().find(x => x.id === parseInt(this.props.match.params.id, radix))
    }

    render() {
    	return (
    	   <section className="section pt-55 ">
    	     <div className="container">
                <div className="row">
    	            <div className="col-lg-10 offset-lg-1 mb-20">
    	            <div className="post-single">
                            <div className="post-single-image">
                                <img src={this.state.detail.image} alt="BlogImage"/ >
                            </div>
                            <div className="post-single-content">
                                <a href="blog-grid.html
                                " className="categorie">{this.state.detail.category}</a> 
                                <h4>{this.state.detail.title}</h4>
                                <div className="post-single-info">
                                    <ul className="list-inline">
                                        <li><a href="author.html"><img src={this.state.detail.authorImg} alt="Author" /></a>
                                        </li>
                                        <li><a href="author.html">{this.state.detail.author}</a> </li>
                                        <li className="dot"></li>
                                        <li>{this.state.detail.date}</li>
                                        <li className="dot"></li>
                                        <li>3 comments</li>
                                    </ul>
                                </div>
                            </div>
                      
                            <div className="post-single-body">
                                <p>
                                    Its sometimes her behaviour are contented. Do listening am eagerness oh objection collected. Together gay feelings continue
                                    juvenile had off Unknown may service 
                                    subject her letters one bed. Child years noise ye in forty. Loud in this in both
                                    hold. My entrance me is disposal bachelor remember relation
                                </p>
                                <h5> 1 - Pick a sustainable travel destination </h5>

                                <p>
                                    Oh acceptance apartments up sympathize astonished delightful. Waiting him new lasting towards. Continuing melancholy especially
                                    so to. Me unpleasing  impossible in attachment announcing so astonished. What ask leaf may nor upon door. Tended remain
                                    my do stairs. Oh smiling amiable am so visited cordial in offices hearted.
                                </p>
                                <p>
                                    Oh acceptance apartments up sympathize astonished delightful. Waiting him new lasting towards. Continuing melancholy especially
                                    so to. Me unpleasing impossible in attachment announcing so astonished. What ask leaf may nor upon door. Tended remain
                                    my do stairs. Oh smiling amiable am so visited cordial in offices hearted.
                                </p>

                                <p> Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                                    in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                                    in culpa qui officia
                                    deserunt mollit anim id est laborum.
                                </p>
                                <h5>2 -  Research before booking</h5>
                            
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                                    irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                    cupidatat non proident.
                                </p>

                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                                    irure dolor Unknown may service in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                    cupidatat non proident.
                                </p>
                                <h5>3 - Pack light , Easy Sustainable Travel Tip</h5>
                                
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                                    irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                    cupidatat non proident.
                                &gt;sunt in culpa qui officia deserunt mollit anim id e st laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                    do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam.
                                </p>
                              
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                                    irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                    cupidatat non proident.
                                </p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                                    irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                </p>
                            </div>

                            <div className="post-single-footer">
                                <div className="tags">
                                    <ul className="list-inline">
                                        <li>
                                            <a href="blog-grid.html">Travel</a>
                                        </li>
                                        <li>
                                            <a href="blog-grid.html">Nature</a>
                                        </li>
                                        <li>
                                            <a href="blog-grid.html">tips</a>
                                        </li>
                                        <li>
                                            <a href="blog-grid.html">forest</a>
                                        </li>
                                        <li>
                                            <a href="blog-grid.html">beach</a>
                                        </li>
                                    
                                    </ul>
                                </div>                         
                            </div>
                        </div>
                        <Author Profile={false} />
                        <NextPreviousPosts />
    		            <Comments />
    	            </div>
                </div>
             </div>
           </section>
    	)
    }
}

export default BlogDetail