import * as React from "react";

const ScrollTopButton = (props) => (
    <button className="scroll-to-top" ref={React.useRef("scrollTopBtn")} title="Back To Top" data-show-at="50" {...props}>
        {/* @click="scrollToTop" */}
        <svg width="100%" height="100%" viewBox="-1 -1 102 102">
            <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
        </svg>
    </button>
);

export default ScrollTopButton;
