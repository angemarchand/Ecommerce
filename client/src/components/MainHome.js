import React from "react";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

function MainHome(){
    return (
        <div classNameName="container">
            {/* <div classNameName="row ">
                <div classNameName="col-12 specialProducts">
                    <div classNameName="d-flex">
                        <div classNameName="text-card">
                            <h4>Accessoires</h4>
                            <div classNameName="triangles"></div>
                        </div>
                         
                        <div classNameName="text-card">
                            <h4>Portables</h4>
                            <div classNameName="triangles"></div>
                        </div>
                        <div classNameName="text-card">
                            <h4>Péripheriques</h4>
                            <div classNameName="triangles"></div>
                        </div>
                        <div classNameName="text-card">
                            <h4>Customiseur</h4>
                            <div classNameName="triangles"></div>
                        </div>
                    </div>

                </div>
            </div> */}
            {/* <div classNameName="row"> */}
                {/* <div classNameName="col-12"> */}
                    {/* <h5> Ici afficher des photos</h5> */}
                    {/* <div classNameName="d-flex"> */}
                        {/* <div classNameName="bigPic"> */}
                            {/* <img src="#" alt="" /> */}
                        {/* </div> */}
                        {/* <div classNameName="somePics"> */}
                            {/* <div classNameName="d-flex leftProducts"> */}
                                {/* <div classNameName="card-title col-3 mb-auto newDiv"> */}
                                    {/* <img src="#" alt="" /> */}
                                    {/* <h4> Le produit </h4> */}
                                    {/* <p> Description de l'article</p> */}
                                    {/* <p> 20$</p> */}
                                {/* </div> */}
                                {/* <div classNameName="card-title mb-auto newDiv"> */}
                                    {/* <img src="#" alt="" /> */}
                                    {/* <h4> Le produit </h4> */}
                                    {/* <p> Description de l'article</p> */}
                                    {/* <p> 20$</p> */}
                                {/* </div> */}
                            {/* </div> */}
                            {/* <div classNameName="d-flex rightProducts"> */}
                                {/* <div classNameName="card-title mb-auto newDiv"> */}
                                    {/* <img src="#" alt="" /> */}
                                    {/* <h4> Le produit </h4> */}
                                    {/* <p> Description de l'article</p> */}
                                    {/* <p> 20$</p> */}
                                {/* </div> */}
                                {/* <div classNameName="card-title mb-auto newDiv"> */}
                                    {/* <img src="#" alt="" /> */}
                                    {/* <h4> Le produit </h4> */}
                                    {/* <p> Description de l'article</p> */}
                                    {/* <p> 20$</p> */}
                                {/* </div> */}
                            {/* </div> */}
                        {/* </div> */}
                        {/* <div classNameName="iconPrev"> */}
                            {/* <ArrowForwardIosIcon fontSize="large"></ArrowForwardIosIcon> */}
                        {/* </div> */}
                    {/* </div> */}
                {/* </div> */}
            {/* </div> */}

            <div className="row mt-3 p-5 border">
                <div className="col  border d-flex justify-content-end">
                    <img src="#" alt="" id="large-picture-left-banner" />
                </div>
                <div className="col my-auto border border-danger  d-none d-lg-block">
                    <div id="right-row-banner" className="row position-relative align-items-center border border-primary">
                        <div className="col-7 d-flex ">
                            <img className="small-picture-right-banner m-2" src="#" alt="" />
                            <img className="small-picture-right-banner m-2" src="#" alt="" />
                        </div>
                        <div className="col-7 d-flex ">
                            <img className="small-picture-right-banner m-2" src="#" alt="" />
                            <img className="small-picture-right-banner m-2" src="#" alt="" />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default MainHome;