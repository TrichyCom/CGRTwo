import React from "react";
import { Link } from "react-router-dom";
function AddWorkerThreeRight() {
    return (
        <>
            <div className="main-content">
                <div className="page-content">
                    <div className="container-fluid">
                        {/* start page title */}
                        <div className="row">
                            <div className="col-12">
                                <div className="page-title-box d-sm-flex align-items-center justify-content-between bg-galaxy-transparent">
                                    <h4 className="mb-sm-0">Basic Elements</h4>
                                    <div className="page-title-right">
                                        <ol className="breadcrumb m-0">
                                            <li className="breadcrumb-item">
                                                <a href="javascript: void(0);">Forms</a>
                                            </li>
                                            <li className="breadcrumb-item active">Page 3</li>
                                        </ol>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* end page title */}


                        <div className="row">
                            {/* certificate */}
                            <div className="col-lg-6">
                                <div className="card">
                                    <div className="card-header align-items-center d-flex">
                                        <h4 className="card-title mb-0 flex-grow-1">Input Example</h4>
                                        <div className="flex-shrink-0">
                                            check
                                        </div>
                                    </div>
                                    {/* end card header */}
                                    <div className="card-body">
                                        <div className="live-preview">
                                            <div className="row gy-4">

                                                <div class="col-xxl-6 col-md-6">
                                                    <label htmlFor="placeholderInput" className="form-label" > Input with Placeholder </label>
                                                    <div className="input-group">
                                                        <select class="form-select " aria-label="Default select example">
                                                            <option selected>Search for services</option>
                                                            <option value="1">Information Architecture</option>
                                                            <option value="2">UI/UX Design</option>
                                                            <option value="3">Back End Development</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-xxl-6 col-md-6">
                                                    <label htmlFor="placeholderInput" className="form-label" > Placeholder </label>
                                                    <div className="input-group">
                                                        <input type="file" className="form-control" id="inputGroupFile02" />
                                                    </div>
                                                </div>
                                                <div className="col-xxl-3 col-md-6">
                                                    <div>
                                                        <label htmlFor="placeholderInput" className="form-label" > Placeholder </label>
                                                        <input type="text" className="form-control" id="placeholderInput" placeholder="Placeholder" />
                                                    </div>
                                                </div>

                                                <div class="col-xxl-3 col-md-6">
                                                    <div>
                                                        <label for="exampleInputdate" class="form-label">Input Date</label>
                                                        <input type="date" class="form-control" id="exampleInputdate" />
                                                    </div>
                                                </div>
                                                <div class="col-xxl-3 col-md-6">
                                                    <div>
                                                        <label for="exampleInputdate" class="form-label">Input Date</label>
                                                        <input type="date" class="form-control" id="exampleInputdate" />
                                                    </div>
                                                </div>
                                                <div className="col-xxl-3 col-md-6">
                                                    <div>
                                                        <label htmlFor="placeholderInput" className="form-label" > Input  </label>
                                                        <input type="text" className="form-control" id="placeholderInput" placeholder="Placeholder" />
                                                    </div>
                                                </div>

                                                <div class="hstack gap-2 justify-content-center">
                                                    <button type="button" class="btn btn-info text-white">Update</button>
                                                </div>


                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            {/* education */}
                            <div className="col-lg-6">
                                <div className="card">
                                    <div className="card-header align-items-center d-flex">
                                        <h4 className="card-title mb-0 flex-grow-1">Input Example</h4>
                                        <div className="flex-shrink-0">
                                            check
                                        </div>
                                    </div>
                                    {/* end card header */}
                                    <div className="card-body">
                                        <div className="live-preview">
                                            <div className="row gy-4">
                                                <div className="col-xxl-6 col-md-6">
                                                    <div>
                                                        <label htmlFor="placeholderInput" className="form-label" > Input with Placeholder </label>
                                                        <input type="text" className="form-control" id="placeholderInput" placeholder="Placeholder" />
                                                    </div>
                                                </div>
                                                <div class="col-xxl-6 col-md-6">
                                                    <label htmlFor="placeholderInput" className="form-label" > Input with Placeholder </label>
                                                    <div class="input-group">
                                                        <input type="file" class="form-control" id="inputGroupFile02" />
                                                        <label class="input-group-text bg-info text-white" for="inputGroupFile02">Upload</label>
                                                    </div>
                                                </div>


                                                <div className="py-5"></div>
                                                <div className="py-1"></div>






                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>





                        </div>

                        <div className="py-5"></div>
                        <div className="pt-5">
                        <div class="flex-wrap gap-2 mb-3 mb-lg-0 text-center">
                            <button type="button" class="btn btn-success btn-label waves-effect waves-light w-25 text-white"><i class="ri-check-double-line label-icon align-middle fs-16 me-2"></i> Success</button>
                        </div>
                        </div>

                    </div>


                </div>

                <footer className="footer">

                    <div class="d-flex justify-content-center gap-2 mb-2">
                        <Link to='/addworkertwo'>
                            <div class="slider-button-prev">
                                <div class="avatar-title fs-18 rounded px-3 material-shadow">
                                    <i class="ri-arrow-left-s-line"></i>
                                </div>
                            </div>
                        </Link>
                        {/* <Link to='/addworkertwo'>
                            <div class="slider-button-next">
                                <div class="avatar-title fs-18 rounded px-3 material-shadow">
                                    <i class="ri-arrow-right-s-line"></i>
                                </div>
                            </div>
                        </Link> */}
                    </div>
                </footer>

            </div>

        </>
    )
}
export default AddWorkerThreeRight;