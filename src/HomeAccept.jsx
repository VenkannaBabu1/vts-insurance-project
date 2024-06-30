import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function HomeAccept() {
    const [requests, setRequests] = useState([]);
    const navigate=useNavigate();

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_URL}/claim/getClaims`);
            setRequests(response.data);
        } catch (error) {
            console.log("fetching data error", error);
        }
    }



    return (
        <div className='container mt-4 shadow'>
            <h2 className="text-center mb-4"></h2>
           
                
                <table className="table table-striped text-center">
                    <thead>
                        <tr className='text-center'>
                            <th>S.No</th>
                            <th>Email</th>
                            <th>Policy Id</th>
                            <th>Policy No</th>
                            <th>Policy Name</th>
                            <th>HouseNo</th>
                            <th>Owner</th>
                            <th>Location</th>
                            <th>Image</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>

                        {requests && requests.map((req, index) =>
                            <tr key={req.id} >
                                <td style={{verticalAlign:"middle"}}>{index + 1}</td>
                                <td style={{verticalAlign:"middle"}}>{req.email}</td>
                                <td style={{verticalAlign:"middle"}}>{req.policyId}</td>
                                <td style={{verticalAlign:"middle"}}>{req.policyNo}</td>
                                <td  style={{verticalAlign:"middle"}}>{req.policyName}</td>
                                <td  style={{verticalAlign:"middle"}}>{req.houseno}</td>
                                <td style={{verticalAlign:"middle"}}>{req.owner}</td>
                                <td style={{verticalAlign:"middle"}}>{req.location}</td>
                                <td style={{verticalAlign:"middle"}}>
                                    <img src={`data:image/png;base64,${req.documentimage}`} alt="Claim" className="rounded-circle" />
                                </td>
                                <td style={{verticalAlign:"middle"}}>
                                          <button className='btn btn-success' onClick={() => navigate("/transaction",{state:{policy:req.policyNo, type:"HOME"}})}>View Transactions</button>
                                          </td>

                                       
                                          </tr>
                                                                  
                           
                        )}
                    </tbody>
                </table>
            </div>
        
    );
}

export default HomeAccept;