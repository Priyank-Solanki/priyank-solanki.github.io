import * as React from "react";

const AjaxLoader = (props) => (
    <>
        <div className="ajax-loading hide-in-preloading" v-show="isAjaxLoading">
            <span></span>
        </div>
    </>
);

export default AjaxLoader;