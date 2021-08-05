import { useEffect, useState } from "react";

const BreadCrumb = (props) => {

    const [content, setContent] = useState(null)

    useEffect(() => {
        if(!content) contentBread();
    })

    const contentBread = () => {
        if (props.page === "OneProduct") {
            setContent(
                <ol className="breadcrumb">
                    <li className="breadcrumb-item fs-5"><a href="/">Home</a></li>
                    <li className="breadcrumb-item fs-5"><a href="/products">ListingProducts</a></li>
                    <li className="breadcrumb-item active fs-5" aria-current="page">OneProduct</li>
                </ol>
            )
        }
    }

    return (
        <div className="container mt-3">
            <div className="row">
                <div className="col">
                    <nav aria-label="breadcrumb">
                        {content}
                    </nav>
                </div>
            </div>
        </div>
    );
}

export default BreadCrumb;