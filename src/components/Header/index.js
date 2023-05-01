import React from "react";
import "./styles.css";
import { BsFillFileEarmarkXFill } from "react-icons/bs";
import Imagelogo from "./Imagelogo.png";
import { CiSearch } from "react-icons/ci";
import { BiChevronDown } from "react-icons/bi";
function Index() {
    return (
        <div className="bg-container-details">
            <div className="bg-container-header">
                <div className="rampedup-logo">
                    <img src="https://basic.rampedup.io/client/images/logo2-04-sub.png" alt="logo" width={130} height={25} />
                </div>
                <div className="rampedup">
                    <h6 className="rampedup-name">Martin Leo</h6>
                    <img src={Imagelogo} alt="profile" width={30} height={30} className="image-rampedup" />
                </div>
            </div>

            <div className="search-bar-container">
                < CiSearch className="ci-icon" size={20} />


                <input type="text" placeholder="search by keywords" />
                <p className="search-side">search</p>
            </div>
            <div className="middle-container">
                <div className="row-container">
                    <div className="list-container">
                        <p className="links-container">Links</p>
                    </div>
                    <div className="list-elements">
                        <ul>
                            <li className="list-container-Access">Access G2 Data</li>
                            <li className="list-container-Access">Apply Filters</li>
                            <li className="list-container-Access">Populate G2 Crowd</li>
                        </ul>
                        <BsFillFileEarmarkXFill className="icon-bs" size={25} />
                    </div>
                </div>
                <div className="company-details">


                    <div className="checkbox-container">
                        <input type="checkbox" id="cb1" />
                    </div>
                    <div className="data-container">
                        <p>Data</p>
                        <BiChevronDown />
                    </div>
                    <div className="data-container">
                        <p>Analyst Name</p>
                        <BiChevronDown />
                    </div>
                    <div className="data-container">
                        <p>keyword</p>
                        <BiChevronDown />
                    </div>
                    <div className="data-container">
                        <p>Source URL</p>
                        <BiChevronDown />
                    </div>
                    <div className="data-container">
                        <p>Company</p>
                        <BiChevronDown />
                    </div>
                    <div className="data-container">
                        <p>Website URL</p>
                        <BiChevronDown />
                    </div>
                    <div className="data-container">
                        <p>Description</p>
                        <BiChevronDown />
                    </div>
                    <div className="data-container">
                        <p>Technology</p>
                        <BiChevronDown />
                    </div>
                    <div className="data-container">
                        <p>Sector</p>
                        <BiChevronDown />
                    </div>


                </div>
                <div className="candidates-container">
                    <div className="checkbox-container">
                        <input type="checkbox" id="cb1" />
                    </div>
                    <p>15/03/2023</p>
                    <p>Myla Clark</p>
                    <p>Testmonials</p>
                    <p>www.rapidglobal.com/</p>
                    <p>company1</p>
                    <p>www.company1.com</p>
                    <p>when type and scrambled</p>
                    <p>HubSpot</p>
                    <p>Agriculture</p>
                    <p></p>
                </div>
                <div className="candidates-container">
                    <div className="checkbox-container">
                        <input type="checkbox" id="cb1" />
                    </div>
                    <p>15/03/2023</p>
                    <p>Milla Norman</p>
                    <p>Testmonials</p>
                    <p>www.rapidglobal.com/</p>
                    <p>company2</p>
                    <p>www.company2.com</p>
                    <p>when type and scrambled</p>
                    <p>Basic Metal Production</p>
                    <p>Agriculture</p>
                    <p></p>
                </div>
                <div className="candidates-container">
                    <div className="checkbox-container">
                        <input type="checkbox" id="cb1" />
                    </div>
                    <p>15/03/2023</p>
                    <p>simon Torres</p>
                    <p>Testmonials</p>
                    <p>www.rapidglobal.com/</p>
                    <p>company3.</p>
                    <p>www.company3.com</p>
                    <p>when type and scrambled</p>
                    <p>Mallichimp</p>
                    <p>Commercial Industries</p>

                </div>
                <div className="candidates-container">
                    <div className="checkbox-container">
                        <input type="checkbox" id="cb1" />
                    </div>
                    <p>15/03/2023</p>
                    <p>Taylor Gomez</p>
                    <p>Testmonials</p>
                    <p>www.rapidglobal.com/</p>
                    <p>company4.</p>
                    <p>www.company4.com</p>
                    <p>when type and scrambled</p>
                    <p>JIRA</p>
                    <p>Commerce</p>

                </div>
                <div className="candidates-container">
                    <div className="checkbox-container">
                        <input type="checkbox" id="cb1" />
                    </div>
                    <p>15/03/2023</p>
                    <p>Jonah Howard</p>
                    <p>Testmonials</p>
                    <p>www.rapidglobal.com/</p>
                    <p>company4.</p>
                    <p>www.company4.com</p>
                    <p>when type and scrambled</p>
                    <p>Hubspot</p>
                    <p>Construction</p>

                </div>
                <div className="candidates-container">
                    <div className="checkbox-container">
                        <input type="checkbox" id="cb1" />
                    </div>
                    <p>15/03/2023</p>
                    <p>simon Torres</p>
                    <p>Testmonials</p>
                    <p>www.rapidglobal.com/</p>
                    <p>company3.</p>
                    <p>www.company3.com</p>
                    <p>when type and scrambled</p>
                    <p>Mallichimp</p>
                    <p>Commercial Industries</p>

                </div>
                <div className="candidates-container">
                    <div className="checkbox-container">
                        <input type="checkbox" id="cb1" />
                    </div>
                    <p>15/03/2023</p>
                    <p>Alane Lindsey</p>
                    <p>Testmonials</p>
                    <p>www.rapidglobal.com/</p>
                    <p>company6.</p>
                    <p>www.company6.com</p>
                    <p>when type and scrambled</p>
                    <p>Quickbook </p>
                    <p>Education</p>

                </div>
                <div className="candidates-container">
                    <div className="checkbox-container">
                        <input type="checkbox" id="cb1" />
                    </div>
                    <p>15/03/2023</p>
                    <p>Malcolm Harris</p>
                    <p>Testmonials</p>
                    <p>www.rapidglobal.com/</p>
                    <p>company7.</p>
                    <p>www.company7.com</p>
                    <p>when type and scrambled</p>
                    <p>Mallichimp</p>
                    <p>Financial services</p>

                </div>
                <div className="candidates-container">
                    <div className="checkbox-container">
                        <input type="checkbox" id="cb1" />
                    </div>
                    <p>15/03/2023</p>
                    <p>Clayton Mccarty</p>
                    <p>Testmonials</p>
                    <p>www.rapidglobal.com/</p>
                    <p>company8.</p>
                    <p>www.company8.com</p>
                    <p>when type and scrambled</p>
                    <p>JIRA</p>
                    <p>Agriculture</p>

                </div>
                <div className="candidates-container">
                    <div className="checkbox-container">
                        <input type="checkbox" id="cb1" />
                    </div>
                    <p>15/03/2023</p>
                    <p>Adelynm Ward</p>
                    <p>Testmonials</p>
                    <p>www.rapidglobal.com/</p>
                    <p>company9.</p>
                    <p>www.company9.com</p>
                    <p>when type and scrambled</p>
                    <p>HubSpot</p>
                    <p>Basic Metal Production</p>

                </div>
                <div className="candidates-container">
                    <div className="checkbox-container">
                        <input type="checkbox" id="cb1" />
                    </div>
                    <p>15/03/2023</p>
                    <p>Tushar Thomas</p>
                    <p>Testmonials</p>
                    <p>www.rapidglobal.com/</p>
                    <p>company10.</p>
                    <p>www.company10.com</p>
                    <p>when type and scrambled</p>
                    <p>Quickbook</p>
                    <p>Chemical Industries</p>

                </div>
                <div className="candidates-container">
                    <div className="checkbox-container">
                        <input type="checkbox" id="cb1" />
                    </div>
                    <p>15/03/2023</p>
                    <p>kriti Boase</p>
                    <p>Testmonials</p>
                    <p>www.rapidglobal.com/</p>
                    <p>company11.</p>
                    <p>www.company11.com</p>
                    <p>when type and scrambled</p>
                    <p>Mallichimp</p>
                    <p>Commererce</p>

                </div>
                <div style={{ fontSize: "13px", margin: "10px", display: "flex" }}>
                    <div className="footer-container">

                        <p className="footer">Rows per Page</p>
                        <p className="footer">10</p>
                        <BiChevronDown className="footer" />
                        <p className="footer">100</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Index
