import React from "react";
import { Link } from "react-router-dom";

function WorkerTableRight() {
    return (
        <>
            {/* <!-- Begin page --> */}
            <div id="layout-wrapper">
                <div class="main-content">

                    <div class="page-content">
                        <div class="container-fluid">

                            {/* <!-- start page title --> */}
                            <div class="row">
                                <div class="col-12">
                                    <div class="page-title-box d-sm-flex align-items-center justify-content-between bg-galaxy-transparent">
                                        <h4 class="mb-sm-0">Workers Data</h4>

                                        <div class="page-title-right">
                                            <ol class="breadcrumb m-0">
                                                <li class="breadcrumb-item"><a href="javascript: void(0);">Workers</a></li>
                                                <li class="breadcrumb-item active">Data</li>
                                            </ol>
                                        </div>

                                    </div>
                                </div>
                            </div>



                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="card">
                                        <div className="card-body">
<div className="row">
                                                <div class="col-xxl-3 col-md-6">
                                                <div>
                                                    <label for="exampleInputrounded" class="form-label">Filter Input</label>
                                                    <input type="text" class="form-control rounded-pill" id="exampleInputrounded" placeholder="Enter your name" />
                                                </div>
                                            </div>
                                            <div class="col-xxl-3 col-md-6">
                                                <div>
                                                    <label for="exampleInputrounded" class="form-label">Filter Input</label>
                                                    <input type="text" class="form-control rounded-pill" id="exampleInputrounded" placeholder="Enter your name" />
                                                </div>
                                            </div>
                                            <div class="col-xxl-3 col-md-6">
                                                <div>
                                                    <label for="exampleInputrounded" class="form-label">Filter Input</label>
                                                    <input type="text" class="form-control rounded-pill" id="exampleInputrounded" placeholder="Enter your name" />
                                                </div>
                                            </div>
                                            <div class="col-xxl-3 col-md-6">
                                                <div>
                                                    <label for="exampleInputrounded" class="form-label">Filter Input</label>
                                                    <input type="text" class="form-control rounded-pill" id="exampleInputrounded" placeholder="Enter your name" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </div>


                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="card">
                                        {/* <div className="card-header">
                                            <h5 className="card-title mb-0">Workers Data</h5>
                                        </div> */}
                                        <div className="card-body">
                                            <table
                                                id="example"
                                                className="table table-bordered dt-responsive nowrap table-striped align-middle"
                                                style={{ width: "100%" }}
                                            >
                                                <thead className="bg-light">
                                                    <tr>
                                                        <th data-ordering="false">SR No.</th>
                                                        <th data-ordering="false">ID</th>
                                                        <th data-ordering="false">Fin No</th>
                                                        <th data-ordering="false">Title</th>
                                                        <th data-ordering="false">User</th>
                                                        <th>Assigned To</th>
                                                        <th>Created By</th>
                                                        <th>Create Date</th>
                                                        <th>Status</th>
                                                        <th>Priority</th>
                                                        <th>Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>

                                                        <td>01</td>
                                                        <td>VLZ-452</td>
                                                        <td>VLZ1400087402</td>
                                                        <td>
                                                            <a href="#!">Post launch reminder/ post list</a>
                                                        </td>
                                                        <td>Joseph Parker</td>
                                                        <td>Alexis Clarke</td>
                                                        <td>Joseph Parker</td>
                                                        <td>03 Oct, 2021</td>
                                                        <td>
                                                            <span className="badge bg-info-subtle text-info">
                                                                Re-open
                                                            </span>
                                                        </td>
                                                        <td>
                                                            <span className="badge bg-danger">High</span>
                                                        </td>
                                                        <td>
                                                            <Link to='/viewworker'>
                                                                <span className="badge bg-info-subtle text-info">
                                                                    <i className="ri-eye-fill align-bottom me-2" />
                                                                    View
                                                                </span>
                                                            </Link>

                                                        </td>
                                                    </tr>
                                                    <tr>

                                                        <td>02</td>
                                                        <td>VLZ-453</td>
                                                        <td>VLZ1400087425</td>
                                                        <td>
                                                            <a href="#!">Additional Calendar</a>
                                                        </td>
                                                        <td>Diana Kohler</td>
                                                        <td>Admin</td>
                                                        <td>Mary Rucker</td>
                                                        <td>05 Oct, 2021</td>
                                                        <td>
                                                            <span className="badge bg-secondary-subtle text-secondary">
                                                                On-Hold
                                                            </span>
                                                        </td>
                                                        <td>
                                                            <span className="badge bg-info">Medium</span>
                                                        </td>
                                                        <td>
                                                            <span className="badge bg-info-subtle text-info">
                                                                <i className="ri-eye-fill align-bottom me-2" />
                                                                View
                                                            </span>
                                                        </td>
                                                    </tr>
                                                    <tr>

                                                        <td>03</td>
                                                        <td>VLZ-454</td>
                                                        <td>VLZ1400087438</td>
                                                        <td>
                                                            <a href="#!">Make a creating an account profile</a>
                                                        </td>
                                                        <td>Tonya Noble</td>
                                                        <td>Admin</td>
                                                        <td>Tonya Noble</td>
                                                        <td>27 April, 2022</td>
                                                        <td>
                                                            <span className="badge bg-danger-subtle text-danger">
                                                                Closed
                                                            </span>
                                                        </td>
                                                        <td>
                                                            <span className="badge bg-success">Low</span>
                                                        </td>
                                                        <td>
                                                            <span className="badge bg-info-subtle text-info">
                                                                <i className="ri-eye-fill align-bottom me-2" />
                                                                View
                                                            </span>
                                                        </td>
                                                    </tr>
                                                    <tr>

                                                        <td>04</td>
                                                        <td>VLZ-455</td>
                                                        <td>VLZ1400087748</td>
                                                        <td>
                                                            <a href="#!">Apologize for shopping Error!</a>
                                                        </td>
                                                        <td>Joseph Parker</td>
                                                        <td>Alexis Clarke</td>
                                                        <td>Joseph Parker</td>
                                                        <td>14 June, 2021</td>
                                                        <td>
                                                            <span className="badge bg-warning-subtle text-warning">
                                                                Inprogress
                                                            </span>
                                                        </td>
                                                        <td>
                                                            <span className="badge bg-info">Medium</span>
                                                        </td>
                                                        <td>
                                                            <span className="badge bg-info-subtle text-info">
                                                                <i className="ri-eye-fill align-bottom me-2" />
                                                                View
                                                            </span>
                                                        </td>
                                                    </tr>
                                                    <tr>

                                                        <td>05</td>
                                                        <td>VLZ-456</td>
                                                        <td>VLZ1400087547</td>
                                                        <td>
                                                            <a href="#!">Support for theme</a>
                                                        </td>
                                                        <td>Donald Palmer</td>
                                                        <td>Admin</td>
                                                        <td>Donald Palmer</td>
                                                        <td>25 June, 2021</td>
                                                        <td>
                                                            <span className="badge bg-danger-subtle text-danger">
                                                                Closed
                                                            </span>
                                                        </td>
                                                        <td>
                                                            <span className="badge bg-success">Low</span>
                                                        </td>
                                                        <td>
                                                            <span className="badge bg-info-subtle text-info">
                                                                <i className="ri-eye-fill align-bottom me-2" />
                                                                View
                                                            </span>
                                                        </td>
                                                    </tr>
                                                    <tr>

                                                        <td>06</td>
                                                        <td>VLZ-457</td>
                                                        <td>VLZ1400087245</td>
                                                        <td>
                                                            <a href="#!">Benner design for FB &amp; Twitter</a>
                                                        </td>
                                                        <td>Mary Rucker</td>
                                                        <td>Jennifer Carter</td>
                                                        <td>Mary Rucker</td>
                                                        <td>14 Aug, 2021</td>
                                                        <td>
                                                            <span className="badge bg-warning-subtle text-warning">
                                                                Inprogress
                                                            </span>
                                                        </td>
                                                        <td>
                                                            <span className="badge bg-info">Medium</span>
                                                        </td>
                                                        <td>
                                                            <span className="badge bg-info-subtle text-info">
                                                                <i className="ri-eye-fill align-bottom me-2" />
                                                                View
                                                            </span>
                                                        </td>
                                                    </tr>
                                                    <tr>

                                                        <td>07</td>
                                                        <td>VLZ-458</td>
                                                        <td>VLZ1400087785</td>
                                                        <td>
                                                            <a href="#!">Change email option process</a>
                                                        </td>
                                                        <td>James Morris</td>
                                                        <td>Admin</td>
                                                        <td>James Morris</td>
                                                        <td>12 March, 2022</td>
                                                        <td>
                                                            <span className="badge bg-primary-subtle text-primary">
                                                                Open
                                                            </span>
                                                        </td>
                                                        <td>
                                                            <span className="badge bg-danger">High</span>
                                                        </td>
                                                        <td>
                                                            <span className="badge bg-info-subtle text-info">
                                                                <i className="ri-eye-fill align-bottom me-2" />
                                                                View
                                                            </span>
                                                        </td>
                                                    </tr>
                                                    <tr>

                                                        <td>08</td>
                                                        <td>VLZ-460</td>
                                                        <td>VLZ1400087745</td>
                                                        <td>
                                                            <a href="#!">Support for theme</a>
                                                        </td>
                                                        <td>Nathan Cole</td>
                                                        <td>Nancy Martino</td>
                                                        <td>Nathan Cole</td>
                                                        <td>28 Feb, 2022</td>
                                                        <td>
                                                            <span className="badge bg-secondary-subtle text-secondary">
                                                                On-Hold
                                                            </span>
                                                        </td>
                                                        <td>
                                                            <span className="badge bg-success">Low</span>
                                                        </td>
                                                        <td>
                                                            <span className="badge bg-info-subtle text-info">
                                                                <i className="ri-eye-fill align-bottom me-2" />
                                                                View
                                                            </span>
                                                        </td>
                                                    </tr>
                                                    <tr>

                                                        <td>09</td>
                                                        <td>VLZ-461</td>
                                                        <td>VLZ1400087179</td>
                                                        <td>
                                                            <a href="#!">Form submit issue</a>
                                                        </td>
                                                        <td>Grace Coles</td>
                                                        <td>Admin</td>
                                                        <td>Grace Coles</td>
                                                        <td>07 Jan, 2022</td>
                                                        <td>
                                                            <span className="badge bg-success-subtle text-success">
                                                                New
                                                            </span>
                                                        </td>
                                                        <td>
                                                            <span className="badge bg-danger">High</span>
                                                        </td>
                                                        <td>
                                                            <span className="badge bg-info-subtle text-info">
                                                                <i className="ri-eye-fill align-bottom me-2" />
                                                                View
                                                            </span>
                                                        </td>
                                                    </tr>
                                                    <tr>

                                                        <td>10</td>
                                                        <td>VLZ-462</td>
                                                        <td>VLZ140008856</td>
                                                        <td>
                                                            <a href="#!">Edit customer testimonial</a>
                                                        </td>
                                                        <td>Freda</td>
                                                        <td>Alexis Clarke</td>
                                                        <td>Freda</td>
                                                        <td>16 Aug, 2021</td>
                                                        <td>
                                                            <span className="badge bg-danger-subtle text-danger">
                                                                Closed
                                                            </span>
                                                        </td>
                                                        <td>
                                                            <span className="badge bg-info">Medium</span>
                                                        </td>
                                                        <td>
                                                            <span className="badge bg-info-subtle text-info">
                                                                <i className="ri-eye-fill align-bottom me-2" />
                                                                View
                                                            </span>
                                                        </td>
                                                    </tr>
                                                    <tr>

                                                        <td>11</td>
                                                        <td>VLZ-463</td>
                                                        <td>VLZ1400078031</td>
                                                        <td>
                                                            <a href="#!">Ca i have an e-copy invoice</a>
                                                        </td>
                                                        <td>Williams</td>
                                                        <td>Admin</td>
                                                        <td>Williams</td>
                                                        <td>24 Feb, 2022</td>
                                                        <td>
                                                            <span className="badge bg-primary-subtle text-primary">
                                                                Open
                                                            </span>
                                                        </td>
                                                        <td>
                                                            <span className="badge bg-success">Low</span>
                                                        </td>
                                                        <td>
                                                            <span className="badge bg-info-subtle text-info">
                                                                <i className="ri-eye-fill align-bottom me-2" />
                                                                View
                                                            </span>
                                                        </td>
                                                    </tr>
                                                    <tr>

                                                        <td>12</td>
                                                        <td>VLZ-464</td>
                                                        <td>VLZ1400087416</td>
                                                        <td>
                                                            <a href="#!">Brand logo design</a>
                                                        </td>
                                                        <td>Richard V.</td>
                                                        <td>Admin</td>
                                                        <td>Richard V.</td>
                                                        <td>16 March, 2021</td>
                                                        <td>
                                                            <span className="badge bg-warning-subtle text-warning">
                                                                Inprogress
                                                            </span>
                                                        </td>
                                                        <td>
                                                            <span className="badge bg-danger">High</span>
                                                        </td>
                                                        <td>
                                                            <span className="badge bg-info-subtle text-info">
                                                                <i className="ri-eye-fill align-bottom me-2" />
                                                                View
                                                            </span>
                                                        </td>
                                                    </tr>
                                                    <tr>

                                                        <td>13</td>
                                                        <td>VLZ-466</td>
                                                        <td>VLZ1400089015</td>
                                                        <td>
                                                            <a href="#!">Issue with finding information about order ?</a>
                                                        </td>
                                                        <td>Olive Gunther</td>
                                                        <td>Alexis Clarke</td>
                                                        <td>Schaefer</td>
                                                        <td>32 March, 2022</td>
                                                        <td>
                                                            <span className="badge bg-success-subtle text-success">
                                                                New
                                                            </span>
                                                        </td>
                                                        <td>
                                                            <span className="badge bg-danger">High</span>
                                                        </td>
                                                        <td>
                                                            <span className="badge bg-info-subtle text-info">
                                                                <i className="ri-eye-fill align-bottom me-2" />
                                                                View
                                                            </span>
                                                        </td>
                                                    </tr>
                                                    <tr>

                                                        <td>14</td>
                                                        <td>VLZ-467</td>
                                                        <td>VLZ1400090324</td>
                                                        <td>
                                                            <a href="#!">Make a creating an account profile</a>
                                                        </td>
                                                        <td>Edwin</td>
                                                        <td>Admin</td>
                                                        <td>Edwin</td>
                                                        <td>05 April, 2022</td>
                                                        <td>
                                                            <span className="badge bg-warning-subtle text-warning">
                                                                Inprogress
                                                            </span>
                                                        </td>
                                                        <td>
                                                            <span className="badge bg-success">Low</span>
                                                        </td>
                                                        <td>
                                                            <span className="badge bg-info-subtle text-info">
                                                                <i className="ri-eye-fill align-bottom me-2" />
                                                                View
                                                            </span>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                                {/*end col*/}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*end row*/}
        </>

    )
}
export default WorkerTableRight;