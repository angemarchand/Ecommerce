import { useEffect, useState, useRef } from "react";

const BreadCrumb = (props) => {

    const [content, setContent] = useState(null)
    const isMounted = useRef(true);

    useEffect(() => {
        if(!content) 
            contentBread();
    })

    const contentBread = () => {
        if (props.page === "/oneProduct") {
            setContent(
                <ol className="breadcrumb">
                    <li className="breadcrumb-item fs-5"><a href="/">Home</a></li>
                    <li className="breadcrumb-item fs-5"><a href="/products">ListingProducts</a></li>
                    <li className="breadcrumb-item active fs-5" > {props.name}</li>
                </ol>
            )
        }
        else if (props.page == "/products")
        {
            setContent(
            <ol className="breadcrumb">
                    <li className="breadcrumb-item fs-5"><a href="/">Home</a></li>
                    <li className="breadcrumb-item active fs-5">ListingProducts</li>
                </ol>)
        }
        else if (props.page == "/home")
        {
            setContent(
            <ol className="breadcrumb">
                    <li className="breadcrumb-item active fs-5">Home</li>
            </ol>)
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