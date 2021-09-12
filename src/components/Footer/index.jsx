import React from  'react';
import Member from '../Member';

const Footer = ({User}) =>  {
   return (
     <React.Fragment>
         {!User && <Member/>}
         <footer className="footer">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="copyright">
                            <p>All rights reserved by omega team.</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
     </React.Fragment>
   );
}

export default Footer