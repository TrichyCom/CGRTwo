import React, { useEffect, useState } from "react";
import { useLocation,Link } from "react-router-dom";
import axios from "axios";
import ComLogo from '../../../../../../public/assets/img/Logo/Clogo.jpeg'
// import '../../../../../../public/assets/css/owncss/SignupLogin.css'
// import '../../../../../../public/assets/css/owncss/Admin/ViewWorkerForm.css'

// import { User } from 'lucide-react';
// import { FaIdBadge } from 'react-icons/fa';
// import { FaUserTie } from "react-icons/fa";
// import { FaUser } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
// import { FaVenusMars } from "react-icons/fa";
// import { FaRegCalendarAlt } from "react-icons/fa";
import { FaBuilding } from "react-icons/fa";
import { FaBriefcase } from "react-icons/fa";
import { FaLayerGroup } from "react-icons/fa";
import { FaSitemap } from "react-icons/fa";
import { FaCalendarCheck } from "react-icons/fa";
import { FaBirthdayCake } from "react-icons/fa";
// import { FaFolder } from 'react-icons/fa';

function ViewWorkerAdminRight(){

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { state } = useLocation();
  const worker = state?.worker || {};


  const [certificates, setCertificates] = useState([]);

  useEffect(() => {
    if (worker.FinNo) {
      const apiUrl = import.meta.env.VITE_API_URL;
      axios
        .get(`${apiUrl}/certificates/${worker.FinNo}`) // Fetch specific FinNo
        .then((response) => {
          setCertificates(response.data);
        })
        .catch((error) => {
          console.error("Error fetching certificate data:", error);
        });
    }
  }, [worker.FinNo]);


  const [selectedWorker, setSelectedWorker] = useState(null);

  useEffect(() => {
    if (!worker?.FinNo) return;

    const fetchWorker = async () => {
      try {
        const apiUrl = import.meta.env.VITE_API_URL;
        const response = await axios.get(`${apiUrl}/addworker/${worker.FinNo}`);
        setSelectedWorker(response.data);
      } catch (error) {
        console.error("Error fetching worker details:", error);
      }
    };

    fetchWorker();
  }, [worker?.FinNo]);



  const [alldata, setalldata] = useState(""); // "" means OverView is selected



  const [reportData, setReportData] = useState(null);

  useEffect(() => {
    if (worker.FinNo) {
      const apiUrl = import.meta.env.VITE_API_URL;
      axios
        .get(`${apiUrl}/workerreportfiles/${worker.FinNo}`)
        .then((res) => setReportData(res.data))
        .catch((err) => console.error("Error fetching worker report data:", err));
    }
  }, [worker.FinNo]);

  const fileFields = [
    "IPA",
    "Passport",
    "Bond",
    "Onboard",
    "Medical",
    "Issuance",
    "MOMThumbPrint",
    "IC",
    "Contract"
  ];



  const handleView = (filename) => {
    window.open(`${apiUrl}/view/workerreportfile/${filename}`, '_blank');
  };

  const handleDownload = (filename) => {
    const link = document.createElement('a');
    link.href = `${apiUrl}/download/workerreportfile/${filename}`;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };





  const [educationData, setEducationData] = useState([]);

  useEffect(() => {
    if (worker.FinNo) {
      const apiUrl = import.meta.env.VITE_API_URL;
      axios
        .get(`${apiUrl}/education/${worker.FinNo}`)
        .then((res) => setEducationData(res.data))
        .catch((err) => console.error("Error fetching education data", err));
    }
  }, [worker.FinNo]);











  const safe = (value) => {
    if (
      value === undefined ||
      value === null ||
      value === "undefined" ||
      value === "null" ||
      (typeof value === "string" && value.trim().toLowerCase() === "undefined")
    ) {
      return "";
    }
    return value;
  };

  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    const firstName = safe(worker.FirstName);
    const lastName = safe(worker.LastName);
    const empPosition = safe(worker.EmpPosition) || "—";
    const companyName = safe(worker.CompanyName) || "—";
    const expYear = safe(worker.ExpYear) || "—";
    const selectFields = Array.isArray(worker.SelectFeilds)
      ? worker.SelectFeilds.filter(f => safe(f)).join(", ")
      : safe(worker.SelectFeilds) || "—";
    const department = safe(worker.Department) || "—";
    const onboardDate = safe(worker.DO_Onboard) || "—";
    const dob = safe(worker.DOB) || "—";
    const age = safe(worker.Age) || "—";
    const empId = safe(worker.EmpId) || "—";

    const story = `MMeet ${firstName} ${lastName}, currently working as a ${empPosition} at ${companyName}.With ${expYear} years of experience, ${firstName} brings skills in ${selectFields} to the team.They are part of the ${department} department and officially joined us on ${onboardDate}. Born on ${dob}, ${firstName} is ${age} years old and continues to be a valuable asset to our growing company.Employee ID: ${empId} — we're lucky to have ${firstName} on board!`;

    let i = 0;
    setDisplayedText("");
    const interval = setInterval(() => {
      if (i < story.length) {
        setDisplayedText((prev) => prev + story.charAt(i));
        i++;
      } else {
        clearInterval(interval);
      }
    }, 20);

    return () => clearInterval(interval);
  }, [worker]); // only depends on worker



  const apiUrl = import.meta.env.VITE_API_URL;
    return(
<>
<div id="layout-wrapper">
  <div className="main-content">
    <div className="page-content">
      <div className="container-fluid">
        <div className="profile-foreground position-relative mx-n4 mt-n4">
          <div className="profile-wid-bg">
            <img
              src="assets/images/profile-bg.jpg"
              alt=""
              className="profile-wid-img"
            />
          </div>
        </div>
        <div className="pt-4 mb-4 mb-lg-3 pb-lg-4 profile-wrapper">
          <div className="row g-4">
            <div className="col-auto">
              <div className="avatar-lg">
            
              

{selectedWorker?.ProfileImg && (
  <img
    src={`${apiUrl}/${selectedWorker.ProfileImg}`}
    alt="Profile-img"
    className="img-thumbnail rounded-circle w-100 h-100"
    style={{ objectFit: 'cover' }}
  />
)}
              </div>
            </div>
            {/*end col*/}
            <div className="col">
              <div className="p-2">
                <h3 className="text-white mb-1">{worker.FirstName} {worker.LastName}</h3>
                <p className="text-white text-opacity-75">
                {worker.EmpPosition}
                </p>
                {/* <div className="hstack text-white-50 gap-1">
                  <div className="me-2">
                    <i className="ri-map-pin-user-line me-1 text-white text-opacity-75 fs-16 align-middle" />
                    California, United States
                  </div>
                  <div>
                    <i className="ri-building-line me-1 text-white text-opacity-75 fs-16 align-middle" />
                    Themesbrand
                  </div>
                </div> */}
              </div>
            </div>
            {/*end col*/}
            <div className="col-12 col-lg-auto order-last order-lg-0">
              <div className="row text text-white-50 text-center">
                
                <div className="col-lg-12 col-4">
                  <div className="p-2 rounded bg-danger">
                    <h6 className="text-white mb-1">Emp FinNo</h6>
                    <p className="fs-14 mb-0">{worker.FinNo}</p>
                  </div>
                </div>
                {/* <div className="col-lg-6 col-4">
                  <div className="p-2">
                    <h4 className="text-white mb-1">24.3K</h4>
                    <p className="fs-14 mb-0">Followers</p>
                  </div>
                </div> */}
              </div>
            </div>
            {/*end col*/}
          </div>
          {/*end row*/}
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div>
              <div className="d-flex profile-wrapper">
                {/* Nav tabs */}
                <ul
                  className="nav nav-pills animation-nav profile-nav gap-2 gap-lg-3 flex-grow-1"
                  role="tablist"
                >
                  <li className="nav-item">
                    <a
                      className="nav-link fs-14 active"
                      data-bs-toggle="tab"
                      href="#overview-tab"
                      role="tab"
                    >
                      <i className="ri-airplay-fill d-inline-block d-md-none" />{" "}
                      <span className="d-none d-md-inline-block p-1">Overview</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link fs-14"
                      data-bs-toggle="tab"
                      href="#certificate"
                      role="tab"
                    >
                      <i className="ri-list-unordered d-inline-block d-md-none" />{" "}
                      <span className="d-none d-md-inline-block p-1">
                      Certificate
                      </span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link fs-14"
                      data-bs-toggle="tab"
                      href="#Documents"
                      role="tab"
                    >
                      <i className="ri-price-tag-line d-inline-block d-md-none" />{" "}
                      <span className="d-none d-md-inline-block p-1">Documents</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link fs-14"
                      data-bs-toggle="tab"
                      href="#Education"
                      role="tab"
                    >
                      <i className="ri-folder-4-line d-inline-block d-md-none" />{" "}
                      <span className="d-none d-md-inline-block p-1">
                      Education
                      </span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link fs-14"
                      data-bs-toggle="tab"
                      href="#EmergencyCont"
                      role="tab"
                    >
                      <i className="ri-folder-4-line d-inline-block d-md-none" />{" "}
                      <span className="d-none d-md-inline-block p-1">
                      Emergency Cont
                      </span>
                    </a>
                  </li>
                </ul>

              </div>
              {/* Tab panes */}
              <div className="tab-content pt-4 text-muted">
                <div
                  className="tab-pane active"
                  id="overview-tab"
                  role="tabpanel"
                >
                  <div className="row">
                    <div className="col-xxl-3">
                     
                      <div className="card">
                        <div className="card-body">
                          {/* <h5 className="card-title mb-3">Info</h5> */}
                          <span class="badge bg-warning-subtle text-warning align-middle card-title fs-6" >Info</span>
                          <div className="table-responsive">
                            <table className="table table-borderless mb-0">
                              <tbody>
                                <tr>
                                  <th className="ps-0" scope="row">
                                    Full Name 
                                  </th>
                                  <td className="fw-bold">:</td>
                                  <td className="text-muted">{worker.FirstName || "—"} {worker.LastName || ""}</td>
                                </tr>
                                <tr>
                                  <th className="ps-0" scope="row">
                                    Mobile 
                                  </th>
                                  <td className="fw-bold">:</td>
                                  <td className="text-muted">{worker.ContNum || "—"}</td>
                                </tr>
                                <tr>
                                  <th className="ps-0" scope="row">
                                    Age 
                                  </th>
                                  <td className="fw-bold">:</td>
                                  <td className="text-muted">
                                  {worker.Age || "—"}
                                  </td>
                                </tr>
                                <tr>
                                  <th className="ps-0" scope="row">
                                  Gender 
                                  </th>
                                  <td className="fw-bold">:</td>
                                  <td className="text-muted">
                                  {worker.Gender || "—"}
                                  </td>
                                </tr>
                                <tr>
                                  <th className="ps-0" scope="row">
                                  DOB 
                                  </th>
                                  <td className="fw-bold">:</td>
                                  <td className="text-muted">{worker.DOB || "—"}</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                        {/* end card body */}
                      </div>
                      {/* end card */}



                    </div>
                    {/*end col*/}
                    <div className="col-xxl-9">
                      <div className="card pb-4">
                        <div className="card-body">
                          {/* <h5 className="card-title mb-1">About</h5> */}
                          <span class="badge bg-info-subtle text-info align-middle card-title fs-6" >About</span>
                          <div className="pt-2">
                          <span className="text-primary fw-bold">Employee Story...</span>
                          </div>
                          <div style={{ whiteSpace: "pre-wrap" }} className="py-3">
                   
                    <p className="text-muted">                    
                      {displayedText}
                    

                    <span className="blinking-cursor">|</span>
                    </p>
                  </div>
                          
                          <div className="row">
                            <div className="col-6 col-md-4">
                              <div className="d-flex mt-3">
                                <div className="flex-shrink-0 avatar-xs align-self-center me-3">
                                  <div className="avatar-title bg-light rounded-circle fs-16 text-primary material-shadow">
                                    <i className="ri-user-2-fill" />
                                  </div>
                                </div>
                                <div className="flex-grow-1 overflow-hidden">
                                  <p className="mb-1">Designation :</p>
                                  <h6 className="text-truncate mb-0">
                                  {worker.EmpPosition}
                                  </h6>
                                </div>
                              </div>
                            </div>
                            {/*end col*/}
                            <div className="col-6 col-md-4">
                              <div className="d-flex mt-3">
                                <div className="flex-shrink-0 avatar-xs align-self-center me-3">
                                  <div className="avatar-title bg-light rounded-circle fs-16 text-primary material-shadow">
                                    <i className="ri-global-line" />
                                  </div>
                                </div>
                                <div className="flex-grow-1 overflow-hidden">
                                  <p className="mb-1">Website :</p>
                                  <a href="" className="fw-semibold">
                                    www.cgr.com
                                  </a>
                                </div>
                              </div>
                            </div>
                            {/*end col*/}
                          </div>
                          {/*end row*/}
                        </div>
                        {/*end card-body*/}
                      </div>
                      {/* end card */}

 
                    </div>
                    {/*end col*/}
                  </div>
                  {/*end row*/}





                  <div
                  className="tab-pane"
                  id="overview-tab"
                  role="tabpanel"
                >
                  <div className="row">
                    <div className="col-xxl-12">
                     
                      <div className="card">
                        <div className="card-body">
                <span class="badge bg-primary-subtle text-primary align-middle card-title fs-6 mb-3" >OverAll Details</span>

                <div className="card card-animate overflow-hidden m-0 bg-success-subtle">
                              
                              <div className="card-body" style={{ zIndex: 1 }}>
                                <div className="d-flex align-items-center">
                                  <div className="flex-grow-1 overflow-hidden">
                <div className="row border border-2 border-white py-5 rounded mx-1">
                  <div className="col-md-4 border-3 border-end">
                    <tr>
                      <td className="px-4 py-3 fw-bold">
                        <FaBuilding className="fs-4 text-success mx-1" /> Company Name
                      </td>
                      <td className="fw-bold">:</td>
                      <td className="px-4 py-3 text-muted">{worker.CompanyName || "—"}</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 fw-bold">
                        <FaBriefcase className="fs-4 text-success mx-1" /> Exp Year
                      </td>
                      <td className="fw-bold">:</td>
                      <td className="px-4 py-3 text-muted">{worker.ExpYear || "—"}</td>
                    </tr>
                  </div>

                  <div className="col-md-4 border-3 border-end">
                    <tr>
                      <td className="px-4 py-3 fw-bold">
                        <FaLayerGroup className="fs-4 text-success mx-1" /> Feilds
                      </td>
                      <td className="fw-bold">:</td>
                      <td className="px-4 py-3 text-muted">
                        {worker.SelectFeilds || ""}
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 fw-bold">
                        <FaSitemap className="fs-4 text-success mx-1" /> Department
                      </td>
                      <td className="fw-bold">:</td>
                      <td className="px-4 py-3 text-muted"> {worker.Department || "—"}</td>
                    </tr>
                  </div>

                  <div className="col-md-4">
                    <tr>
                      <td className="px-4 py-3 fw-bold">
                        <FaCalendarCheck className="fs-4 text-success mx-1" /> DO Onboard
                      </td>
                      <td className="fw-bold">:</td>
                      <td className="px-4 py-3 text-muted">{worker.DO_Onboard || "—"}</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 fw-bold">
                        <FaBirthdayCake className="fs-4 text-success mx-1" /> DOB
                      </td>
                      <td className="fw-bold">:</td>
                      <td className="px-4 py-3 text-muted">{worker.DOB || "—"}</td>
                    </tr>
                  </div>
                </div>

                </div>
                </div>
                </div>
                </div>
                </div>
                          </div>
                          </div>
                          </div>
                          </div>



                </div>

   




              













                <div className="tab-pane fade" id="certificate" role="tabpanel">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title mb-3">Certificate</h5>
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="table-responsive">
                          {certificates.length > 0 ? (
                            <table className="table table-borderless align-middle mb-0" >
                              <thead className="table-light">
                                <tr>
                                  <th scope="col">File Name</th>
                                  <th>Cert No</th>
                                  <th>Issue Date</th>
                                  <th>Expiry</th>
                                  {/* <th>Balance Days</th> */}
                                  <th scope="col">View</th>
                                  <th scope="col">Download</th>
                                </tr>
                              </thead>
                              <tbody>

    {certificates.map((certificate, index) => (
      <tr key={index}>
        <td>
          <div className="d-flex align-items-center">
            <div className="avatar-sm">
              <div className="avatar-title bg-info-subtle text-info rounded fs-20 material-shadow">
                <i className="ri-folder-line" />
              </div>
            </div>
            <div className="ms-3 flex-grow-1">
              <h6 className="fs-15 mb-0">
                {certificate.CertificateName}
              </h6>
            </div>
          </div>
        </td>
        <td>
        {certificate.CertNo || "-" }
        </td>
        <td>{certificate.IssueDate || "-" }</td>
        <td>{certificate.Expiry || "-" }</td>
        {/* <td>{certificate.BalanceDays}</td> */}
        <td>
          <a
            href={`${apiUrl}/uploads/${certificate.CertificateFile}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-sm me-2"
          >
            <div className="bg-success-subtle btn btn-success text-success py-1">
              <i className="ri-eye-fill me-2 align-middle" />
              View
            </div>
          </a>
        </td>
        <td>
          <a
            href={`${apiUrl}/download/${certificate.CertificateFile}`}
            className="btn-sm"
          >
            <div className="bg-info-subtle btn btn-info text-info py-1">
              <i className="ri-download-2-fill me-2 align-middle" />
              Download
            </div>
          </a>
        </td>
      </tr>
    ))}

</tbody>

                            </table>
                                ) : (
                                  <tr>
                                    <td colSpan="3">No certificates found for this FinNo.</td>
                                  </tr>
                                )}           
                          </div>
                          
                        </div>
                      </div>
                    </div>
                    {/*end card-body*/}
                  </div>
                  {/*end card*/}
                </div>
                {/*end tab-pane*/}
                <div className="tab-pane fade" id="Documents" role="tabpanel">
                  <div className="card">
                  <div className="card-body">
                      <h5 className="card-title mb-3">Documents</h5>
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="table-responsive">
                          {reportData ? (
                            <table className="table table-borderless align-middle mb-0" >
                              <thead className="table-light">
                                <tr>
                                  <th scope="col">File Name</th>
                                  <th scope="col">View</th>
                                  <th scope="col">Download</th>
                                </tr>
                              </thead>
                              <tbody>
                              {fileFields.map((field) => (
                              reportData[field] && (
      <tr key={field}>
        <td>
          <div className="d-flex align-items-center">
            <div className="avatar-sm">
              <div className="avatar-title bg-warning-subtle text-warning rounded fs-20 material-shadow">
                <i className="ri-folder-line" />
              </div>
            </div>
            <div className="ms-3 flex-grow-1">
              <h6 className="fs-15 mb-0">
              {field}
              </h6>
            </div>
          </div>
        </td>
        <td>
          <div
            onClick={() => handleView(reportData[field])}
            className="btn-sm me-2"
          >
            <div className="bg-success-subtle btn btn-success text-success py-1">
              <i className="ri-eye-fill me-2 align-middle" />
              View
            </div>
          </div>
        </td>
        <td>
          <div
            onClick={() => handleDownload(reportData[field])}
            className="btn-sm"
          >
            <div className="bg-info-subtle btn btn-info text-info py-1">
              <i className="ri-download-2-fill me-2 align-middle" />
              Download
            </div>
          </div>
        </td>
      </tr>
    )
  ))}
</tbody>

                            </table>
                          ) : (
                            <p>No data found for this worker.</p>
                          )}                
                          </div>
                          
                        </div>
                      </div>
                    </div>
                    {/*end card-body*/}
                  </div>
                  {/*end card*/}
                </div>
                {/*end tab-pane*/}
                <div className="tab-pane fade" id="Education" role="tabpanel">
                  <div className="card">
                    <div className="card-body">
                      <div className="d-flex align-items-center mb-4">
                        <h5 className="card-title flex-grow-1 mb-0">
                        Education
                        </h5>
                        <div className="flex-shrink-0">
                          <input
                            className="form-control d-none"
                            type="file"
                            id="formFile"
                          />
                          {/* <label htmlFor="formFile" className="btn btn-danger">
                            <i className="ri-upload-2-fill me-1 align-bottom" />{" "}
                            Upload File
                          </label> */}
                        </div>
                      </div>
                     
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="table-responsive">
                          {educationData.length > 0 ? (
                            <table className="table table-borderless align-middle mb-0" >
                              <thead className="table-light">
                                <tr>
                                  <th scope="col">File Name</th>
                                  <th scope="col">View</th>
                                  <th scope="col">Download</th>
                                </tr>
                              </thead>
                              <tbody>
                              {educationData.map((edu, index) => (
      <tr key={edu.Id}>
        <td>
          <div className="d-flex align-items-center">
            <div className="avatar-sm">
              <div className="avatar-title bg-danger-subtle text-danger rounded fs-20 material-shadow">
                <i className="ri-folder-line" />
              </div>
            </div>
            <div className="ms-3 flex-grow-1">
              <h6 className="fs-15 mb-0">
              {edu.Education}
              </h6>
            </div>
          </div>
        </td>
        <td>
        <a
                              href={`${apiUrl}/uploads/${edu.EducationFile}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="btn-sm"
                            >
            <div className="bg-success-subtle btn btn-success text-success py-1">
              <i className="ri-eye-fill me-2 align-middle" />
              View
            </div>
          </a>
        </td>
        <td>
        <a
                              href={`${apiUrl}/download/${edu.EducationFile}`}
                              className="btn-sm"
                            >
            <div className="bg-info-subtle btn btn-info text-info py-1">
              <i className="ri-download-2-fill me-2 align-middle" />
              Download
            </div>
          </a>
        </td>
      </tr>
  ))}
</tbody>

                            </table>
                        ) : (
                          <p className="px-3">No education records found for this FinNo.</p>
                        )}             
                          </div>
                          
                        </div>
                      </div>


                    </div>
                  </div>
                </div>
                {/*end tab-pane*/}




                <div
                  className="tab-pane fade"
                  id="EmergencyCont"
                  role="tabpanel"
                >
                  <div className="row">
                    <div className="col-xxl-12">
                     
                      <div className="card">
                        <div className="card-body">
                <span class="badge bg-primary-subtle text-primary align-middle card-title fs-6 mb-3" >Emergency Contant</span>

                <div className="card card-animate overflow-hidden m-0 bg-success-subtle">
                              
                              <div className="card-body" style={{ zIndex: 1 }}>
                                <div className="d-flex align-items-center">
                                  <div className="flex-grow-1 overflow-hidden">
                <div className="row border border-2 border-white py-5 rounded mx-1">
                  <div className="col-md-4 border-3 border-end">
                    <tr>
                      <td className="px-4 py-3 fw-bold">
                      <FaBuilding className="fs-3 text-warning me-2" /> Emergency Cont Num
                      </td>
                      <td className="fw-bold">:</td>
                      <td className="px-4 py-3 text-muted">{worker.EmergencyContNum || "—"}</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 fw-bold">
                      <FaPhoneAlt className="fs-4 text-warning me-2" /> Contact Number 
                      </td>
                      <td className="fw-bold">:</td>
                      <td className="px-4 py-3 text-muted">{worker.ContNum || "—"}</td>
                    </tr>
                  </div>




                </div>

                </div>
                </div>
                </div>
                </div>
                </div>
                          </div>
                          </div>
                          </div>
                          </div>




              </div>
              {/*end tab-content*/}
            </div>
          </div>
          {/*end col*/}
        </div>
        {/*end row*/}
      </div>
      {/* container-fluid */}
    </div>
    {/* End Page-content */}
    <footer className="footer">
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-6">© CGR.</div>
          <div className="col-sm-6">
            <div className="text-sm-end d-none d-sm-block">
            century.com
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
  </div>
  {/* end main content*/}
  {/* END layout-wrapper */}
</>

    )
}
export default ViewWorkerAdminRight;