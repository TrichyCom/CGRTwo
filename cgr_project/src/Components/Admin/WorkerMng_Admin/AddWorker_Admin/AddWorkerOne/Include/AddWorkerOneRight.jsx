import React, { useState, useEffect,useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function AddWorkerOneRight() {

    const navigate = useNavigate();
    // const roles = ["Electrician", "Plumber", "Welder", "Steel Fixer", "Painter"]; 
    const [roles, setRoles] = useState([]); // Store fetched roles
  
    // Fetch roles from feilds table
    useEffect(() => {
      fetchRoles();
    }, []);
  
    const fetchRoles = async () => {
      const apiUrl = import.meta.env.VITE_API_URL;
      try {
        const response = await axios.get(`${apiUrl}/feilds`); // Replace with your API URL
        const roleNames = response.data.map((item) => item.Feilds); // Extract Feilds column
        setRoles(roleNames);
      } catch (error) {
        console.error("Error fetching roles:", error);
      }
    };
  
    const [formData, setFormData] = useState({
      EmpId: "",
      EmpPosition: "",
      CompanyName: "",
      Department: "",
      FirstName: "",
      LastName: "",
      SelectSupervisor: "",
      Age: "",
      ExpYear: "",
      Gender: "Male",
      ContNum: "",
      EmergencyContNum: "",
      BankAccNum: "",
      SelectFeilds: [],
      PanTaxId: "",
      SelectRole: "",
    });
  
    // Load stored data
    // useEffect(() => {
    //   const storedData = JSON.parse(localStorage.getItem("workerData")) || {};
    //   setFormData((prevData) => ({
    //     ...prevData,
    //     ...storedData,
    //     SelectFields: storedData.SelectFields || [], // Ensure it's an array
    //   }));
    // }, []);
  
    // Handle input change
    // const handleChange = (e) => {
    //   setFormData({ ...formData, [e.target.name]: e.target.value });
    // };
  
    // Handle checkbox selection
    // const handleCheckboxChange = (role) => {
    //   setFormData((prevData) => ({
    //     ...prevData,
    //     SelectFields: prevData.SelectFields.includes(role)
    //       ? prevData.SelectFields.filter((r) => r !== role) // Remove if already selected
    //       : [...prevData.SelectFields, role], // Add if not selected
    //   }));
    // };
  
    // const handleCheckboxChange = (role) => {
    //   setFormData((prevData) => ({
    //     ...prevData,
    //     SelectFeilds: prevData.SelectFeilds.includes(role)
    //       ? prevData.SelectFeilds.filter((r) => r !== role) // Remove if already selected
    //       : [...prevData.SelectFeilds, role], // Add if not selected
    //   }));
    // };
  
    const handleRoleChange = (e) => {
      const selectedOptions = Array.from(e.target.selectedOptions, (option) => option.value);
      setFormData((prevData) => ({
        ...prevData,
        SelectFeilds: selectedOptions,
      }));
    };
  
  
  
    // Handle navigation to next form
    const handleNext = () => {
      localStorage.setItem("workerData", JSON.stringify(formData));
      navigate("/addworkertwo");
    };
  
  
  
  
  
  
  
  
    const [isOpen, setIsOpen] = useState(false); // State to handle toggle
  
    useEffect(() => {
      const storedData = JSON.parse(localStorage.getItem("workerData")) || {};
      setFormData((prevData) => ({
        ...prevData,
        ...storedData,
        SelectFields: storedData.SelectFields || [],
      }));
    }, []);
  
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
    const handleCheckboxChange = (role) => {
      setFormData((prevData) => ({
        ...prevData,
        SelectFeilds: prevData.SelectFeilds.includes(role)
          ? prevData.SelectFeilds.filter((r) => r !== role)
          : [...prevData.SelectFeilds, role],
      }));
    };
  
    // const handleNext = () => {
    //   localStorage.setItem("workerData", JSON.stringify(formData));
    //   navigate("/addworkerformtwomain");
    // };
  
  
  
    // add role
    const [roless, setRoless] = useState([]); // Store roles from DB
  
    useEffect(() => {
      fetchRoless(); // Fetch roles on component load
    }, []);
  
    // Fetch roles from the database
    const fetchRoless = async () => {
      const apiUrl = import.meta.env.VITE_API_URL;
      try {
        const response = await axios.get(`${apiUrl}/roles`); // Replace with your API URL
        setRoless(response.data);
      } catch (error) {
        console.error("Error fetching roles:", error);
      }
    };
  
  
  
  
    // department
    const [departments, setDepartments] = useState([]);
  
    useEffect(() => {
      const apiUrl = import.meta.env.VITE_API_URL;
      axios
        .get(`${apiUrl}/departments`) // Update the API endpoint based on your backend route
        .then((response) => {
          setDepartments(response.data);
        })
        .catch((error) => {
          console.error("Error fetching departments:", error);
        });
    }, []);
  
  
  
     const fileInputRef = useRef(null); // Reference for file input
     const [selectedFile, setSelectedFile] = useState(null);
     const previewImg = localStorage.getItem("workerProfileImg");
  
  
     const handleFileChange = (e) => {
       const file = e.target.files[0];
       if (file) {
         const reader = new FileReader();
         reader.onloadend = () => {
           localStorage.setItem("workerProfileImg", reader.result); // base64 string
           setSelectedFile(file); // save file in state for later use
         };
         reader.readAsDataURL(file); // convert to base64
       }
     };
  
  
  
  
  
  
  
     const [companyOptions, setCompanyOptions] = useState([]);
  
     useEffect(() => {
      const apiUrl = import.meta.env.VITE_API_URL;
      axios.get(`${apiUrl}/getCompanies`)
        .then((res) => setCompanyOptions(res.data))
        .catch((err) => console.error(err));
    }, []);
    
     
    return (
        <>
            <div className="main-content">
                <div className="page-content pb-2">
                    <div className="container-fluid">
                        {/* start page title */}
                        <div className="row">
                            <div className="col-12">
                                <div className="page-title-box d-sm-flex align-items-center justify-content-between bg-galaxy-transparent">
                                    <h4 className="mb-sm-0">WORKERS  MANAGEMENT</h4>
                                    <div className="page-title-right">
                                        <ol className="breadcrumb m-0">
                                            <li className="breadcrumb-item">
                                                <a href="javascript: void(0);">Forms</a>
                                            </li>
                                            <li className="breadcrumb-item active">Page 1</li>
                                        </ol>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* end page title */}
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="card">
                                    <div className="card-header align-items-center d-flex">
                                        <h4 className="card-title mb-0 flex-grow-1">Workers Details ...</h4>
                                        <div className="flex-shrink-0">
                                        {previewImg && (
  <img src={previewImg} alt="Preview" width={50} height={50} className="rounded-5 "/>)}
                                        </div>
                                    </div>
                                    {/* end card header */}
                                    <div className="card-body">
                                        <div className="live-preview">
                                            <div className="row gy-4">
                                                <div className="col-xxl-4 col-md-6">
                                                    <div>
                                                        <label className="form-label" htmlFor="exampleFormControlInput1">Employee ID</label>
                                                        <input type="text" className="form-control input" name="EmpId" id="exampleFormControlInput1" placeholder="Employee ID" onChange={handleChange} value={formData.EmpId} required />

                                                    </div>
                                                </div>
                                                <div className="col-xxl-4 col-md-6">
                                                    <div>
                                                        <label className="form-label" htmlFor="exampleFormControlInput1">Employee Position</label>
                                                        <select
                                                            className="form-select selectinput"
                                                            name="EmpPosition"
                                                            value={formData.EmpPosition}
                                                            onChange={handleChange}
                                                        >
                                                            <option value="">Select Position</option>
                                                            {["Supervisor", "ProjectManager", "OfficePersonel", "Worker"].map((position) => (
                                                                <option key={position} value={position}>
                                                                    {position}
                                                                </option>
                                                            ))}
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-xxl-4 col-md-6">
                                                    <div>
                                                        <label className="form-label" htmlFor="exampleFormControlInput1">Company</label>
                                                        <select
                                                            className="form-select selectinput"
                                                            name="CompanyName"
                                                            onChange={handleChange}
                                                            value={formData.CompanyName}
                                                            id="exampleFormControlInput1"
                                                        >
                                                            <option value="" className="text-dark">Select Company</option>
                                                            {companyOptions.map((company) => (
                                                                <option
                                                                    key={company.id}
                                                                    value={company.CompanyList}
                                                                    className="text-dark"
                                                                >
                                                                    {company.CompanyList}
                                                                </option>
                                                            ))}
                                                        </select>

                                                    </div>
                                                </div>
                                                <div className="col-xxl-4 col-md-6">
                                                    <div>
                                                        <label className="form-label" htmlFor="exampleFormControlInput1">Department</label>
                                                        <select
                                                            className="form-select selectinput"
                                                            id="exampleFormControlSelect1"
                                                            name="Department"
                                                            onChange={handleChange}
                                                            value={formData.Department}
                                                        >
                                                            <option value="">Select Department</option>
                                                            {departments.map((dept) => (
                                                                <option key={dept.id} value={dept.Department}>
                                                                    {dept.Department}
                                                                </option>
                                                            ))}
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-xxl-4 col-md-6">
                                                    <div className="row">
                                                    <div className="col-xxl-6 col-md-6">
                                                    <div>
                                                        <label className="form-label" htmlFor="exampleFormControlInput1"> First Name</label>
                                                        <input type="text" className="form-control input" id="exampleFormControlInput1" placeholder="First Name" name="FirstName" onChange={handleChange} value={formData.First} required />

                                                    </div>
                                                    </div>
                                                    <div className="col-xxl-6 col-md-6">
                                                    <div>
                                                        <label className="form-label" htmlFor="exampleFormControlInput1"> Last Name</label>
                                                        <input type="text" className="form-control input" id="exampleFormControlInput1" placeholder="Last Name" name="LastName" onChange={handleChange} value={formData.LastName} />
                                                    </div>
                                                    </div>
                                                    </div>
                                               
                                                </div>
                                                <div className="col-xxl-4 col-md-6">
                                                <div>
                                                        <label className="form-label" htmlFor="exampleFormControlSelect1">Select Supervisor</label>
                                                        <select className="form-select selectinput" id="exampleFormControlSelect1" name="SelectSupervisor" onChange={handleChange} value={formData.SelectSupervisor} >
                                                            <option>name 1</option>
                                                            <option>name 2</option>
                                                        </select> 
                                                        </div>
                                                </div>
                                                <div className="col-xxl-4 col-md-6">
                                                    <div>
                                                        <label className="form-label" htmlFor="exampleFormControlInput1">Age</label>
                                                        <input type="text" className="form-control input" id="exampleFormControlInput1" placeholder="Age" name="Age" onChange={handleChange} value={formData.Age} required />
                                                    </div>
                                                </div>
                                                <div className="col-xxl-4 col-md-6">
                                                    <div>
                                                        <label className="form-label" htmlFor="exampleFormControlSelect1">Gender</label>
                                                        <select className="form-select selectinput" id="exampleFormControlSelect1" name="Gender" onChange={handleChange} value={formData.Gender} >
                                                            <option>Male</option>
                                                            <option>Female</option>
                                                        </select> 
                                                        </div>
                                                </div>
                                                <div className="col-xxl-4 col-md-6">
                                                    <div>
                                                        <label className="form-label" htmlFor="exampleFormControlInput1">Experience in Year</label>
                                                        <input type="text" className="form-control input" id="exampleFormControlInput1" placeholder="Experience in Year" name="ExpYear" onChange={handleChange} value={formData.ExpYear} />
                                                    </div>
                                                </div>


                                                <div className="col-xxl-4 col-md-6">
                                                    <label className="form-label" htmlFor="exampleFormControlInput1">PAN/TAX ID</label>
                                                    <input type="text" className="form-control input" id="exampleFormControlInput1" placeholder="PAN/TAX ID" name="PanTaxId" onChange={handleChange} value={formData.PanTaxId} />

                                                </div>
                                                <div className="col-xxl-4 col-md-6">
                                                    <label className="form-label" htmlFor="exampleFormControlInput1">Contact Number</label>
                                                    <input type="text" className="form-control input" id="exampleFormControlInput1" placeholder="Contact Number" name="ContNum" onChange={handleChange} value={formData.ContNum} />

                                                </div>
                                                <div className="col-xxl-4 col-md-6">
                                                    <label className="form-label" htmlFor="exampleFormControlInput1">Emergency Contact Number</label>
                                                    <input type="text" className="form-control input" id="exampleFormControlInput1" placeholder="Emergency Contact Number" name="EmergencyContNum" onChange={handleChange} value={formData.EmergencyContNum} />

                                                </div>
                                                <div className="col-xxl-4 col-md-6">
                                                    <label className="form-label" htmlFor="exampleFormControlInput1">Bank Account Number</label>
                                                    <input type="text" className="form-control input" id="exampleFormControlInput1" placeholder="Bank Account Number" name="BankAccNum" onChange={handleChange} value={formData.BankAccNum} />

                                                </div>
                                                <div class="col-xxl-4 col-md-6">
                                                    <label className="form-label" htmlFor="placeholderInput">Profile</label>
                                                    <div className="input-group">
                                                        <input
                                                            type="file"
                                                            className="form-control input"
                                                            id="inputGroupFile02"
                                                            accept="image/*"
                                                            name="ProfileImg"
                                                            ref={fileInputRef}
                                                            onChange={handleFileChange}
                                                        />


                                                    </div>
                                                </div>

                                                <div className="col-xxl-4 col-md-6">
                                                    <label className="form-label" htmlFor="exampleFormControlSelect1">Select Feilds</label>
                                                    <button
                                                        className="btn btn-warning fw-bold mb-1 p-1 rounded px-1 mx-4 "
                                                        onClick={(e) => {
                                                            e.preventDefault(); // Prevents the form from submitting
                                                            setIsOpen(!isOpen);
                                                        }}
                                                    >
                                                        {isOpen ? "Close" : "Open"} Feilds
                                                    </button>

                                                    {isOpen && (
                                                        <div className="checkbox-container">
                                                            {roles.map((role) => (
                                                                <div key={role} className="checkbox-item">
                                                                    <input
                                                                        type="checkbox"
                                                                        className="form-check-input"
                                                                        id={`role-${role}`}
                                                                        value={role}
                                                                        checked={Array.isArray(formData.SelectFeilds) && formData.SelectFeilds.includes(role)}
                                                                        onChange={() => handleCheckboxChange(role)}
                                                                    />
                                                                    <label className="form-check-label" htmlFor={`role-${role}`}>
                                                                        {role}
                                                                    </label>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    )}
                                                </div>



                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>



                    </div>


                </div>

                <footer className="foote pt-1">

                    <div class="d-flex justify-content-center gap-2 mb-2">
                        <Link to='/addworkerone'>
                            <div class="slider-button-prev">
                                <div class="avatar-title fs-18 rounded px-3 material-shadow">
                                    <i class="ri-arrow-left-s-line"></i>
                                </div>
                            </div>
                        </Link>
                  
                            <div class="slider-button-next" onClick={handleNext} style={{cursor:'pointer'}}>
                                <div class="avatar-title fs-18 rounded px-3 material-shadow">
                                    <i class="ri-arrow-right-s-line"></i>
                                </div>
                            </div>
                   
                    </div>
                    {/* <div className="container-fluid">
        <div className="row">
          <div className="col-sm-6">© CGR.</div>
          <div className="col-sm-6">
            <div className="text-sm-end d-none d-sm-block">
              Design &amp; Develop by 
            </div>
          </div>
        </div>
      </div> */}
                </footer>

            </div>

        </>
    )
}
export default AddWorkerOneRight;