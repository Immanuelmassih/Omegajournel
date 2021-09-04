import React from "react";
import { Link } from "react-router-dom";

const Member = () =>  {
	return (
	 <section className="newslettre">
        <div className="container-fluid">
            <div className="newslettre-width text-center">
                <div className="newslettre-info">
                    <h5>Become a Paid Member</h5>
                    <p>GET A MEMBERSHIP TODAY</p>
                    <Link to="/register">
                        <button type="button" name="submit" className="btn-custom">Become a Member</button>
                    </Link>
                </div>
            </div>
        </div>
    </section>
	)
}

export default Member