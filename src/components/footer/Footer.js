import * as React from "react";

const Footer = (props) => (
    <>
        <footer>
            <div className="container">
            <div className="row">
                <div className="col-lg-6">
                <div className="logo" title="Priyank">
                    <h1><a href="%PUBLIC_URL%">Priyank Solanki</a></h1>
                </div>
                </div>
                <div className="col-lg-6">
                &copy; {props.copyrightDate} Proudly Powered by
                <a href="https://themeforest.net/user/webrouk/portfolio" target={"_blank"} ref={React.useRef("noreferrer")} rel="noreferrer">Webrouk</a>
                </div>
            </div>
            </div>
        </footer>
    </>
);

export default Footer;