import React , { Component } from "react";
import * as paymentService from '../../Services/paymentService';
import { getPlans } from '../../Services/subscriptionPlan.service';
import { getCurrentUser } from '../../Services/authService';

export class Subscription extends Component {

   state = {
		list : []
	}


	async subscriptionList() {
	  const { data } = await getPlans()
	  this.setState({ list : data })
	}

   async componentDidMount() {
    await this.subscriptionList();
  }

 render() {

	function loadScript (src) {
		return new Promise((resolve) => {
        const script = document.createElement("script");
        script.src = src;
        script.onload = () => {
            resolve(true);
        };
        script.onerror = () => {
            resolve(false);
        };
        document.body.appendChild(script);
    });
	}

	async function displayRazorpay (item) {
        const res = await loadScript(
            "https://checkout.razorpay.com/v1/checkout.js"
        );

        if (!res) {
            alert("Razorpay SDK failed to load. Are you online?");
            return;
        }

        const result = await paymentService.Order()

        if (!result) {
            alert("Server error. Are you online?");
            return;
        }

        const { id: order_id, currency } = result.data;
        const { name, duration, price } = item
        const options = {
            key: "rzp_test_nLnpBsUU9I1m10", // Enter the Key ID generated from the Dashboard
            amount: price,
            currency: currency,
            name: name,
            description: `${duration} duration`,
            order_id: order_id,
            handler: async function (response) {
                const data = {
                    orderCreationId: order_id,
                    razorpayPaymentId: response.razorpay_payment_id,
                    razorpayOrderId: response.razorpay_order_id,
                    razorpaySignature: response.razorpay_signature,
                    package : item._id,
                    email : getCurrentUser().email
                };

                const result = await paymentService.Success(data)
                //const result = await axios.post("http://localhost:5000/payment/success", data);

                alert(result.data.msg);
            },
            prefill: {
                name: "Emanuel",
                email: "Immanuelmassih@gmail.com",
                contact: "6239835381",
            },
            notes: {
                address: "Omega Team Pesto",
            },
            theme: {
                color: "#61dafb",
            },
        };

        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
    }

	  return (
	  	<React.Fragment>
		    <section className="categorie-section">
		        <div className="container-fluid">
		            <div className="row">
		                <div className="col-lg-8">
		                    <div className="categorie-title"> 
		                        <h3>Subscription Plans</h3>
		                        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.
		                            Incidunt quae explicabo, ducimus necessitatibus eum aut enim modi
		                            saepe perspiciatis fugit
		                        </p>
		                    </div>
		                </div>
		            </div>
		        </div>
		    </section>
		    <section className="categorie-section">
		        <div className="container-fluid">
		            <div className="row">
		                <div className="col-lg-12 mt-30">
		                    <div className="row">
		                    {this.state.list.map(item => (
		                        <div className="col-lg-4 col-md-4" key={item._id}>
		                            <div className="post-card">
		                                <div className="post-card-image">
		                                    <a href="post-default.html">
		                                        <svg className="bd-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Image cap"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image cap</text></svg>
		                                    </a>
		                                </div>
		                                <div className="post-card-content">
		                                    <h5>
		                                        <a href="post-default.html">{item.name}</a>
		                                        <small className="muted">{item.duration}</small>
		                                        <a href="post-default.html" className="pl-2">${item.price}</a>
		                                    </h5>
		                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit quam atque ipsa laborum sunt distinctio.</p>
		                                    <div className="post-card-info">
		                                        <button type="button" className="btn-custom" onClick={() =>  displayRazorpay(item)}>buy</button>
		                                    </div>
		                                </div>
		                            </div>
		                        </div>
		                     ))}
		                    </div>
		                </div>
		            </div>
		        </div>
		    </section>
	  	</React.Fragment>
	  )
    }
};

export default Subscription;