import React from 'react'

const NextPreviousPosts = () => {
	return (
		<div className="row">
            <div className="col-md-6">
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
            </div>
        </div>
	)
}

export default NextPreviousPosts