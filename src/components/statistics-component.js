import React, { useEffect, useState } from 'react';
import LoadingSpinner from './loading'; // Import the LoadingSpinner component


const App = () => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [statistics, setStatistics] = useState(null); // Initialize with null
  const token = localStorage.getItem('token');
  const [rest, setRest] = useState(true);

  useEffect(() => {
    const fetchStatistics = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_BASE_URL}/api/v1/card/statistics`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await response.json();
        if (data.success) {
          setStatistics(data.data);
          console.log(data.data)
        } else {
          console.error('Failed to fetch Statistics:', data.message);
        }
        setLoading(false);
      } catch (error) {
        console.error('Error fetching Statistics:', error);
        setLoading(false);
      }
    };

    fetchStatistics();
  }, [token]); 

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      setRest(storedUser.restaurants)
      // console.log(storedUser.restaurents)
    }
  }, []);
  if (loading) {
    return <LoadingSpinner/>;
  }

  if (!user) {
    return <div>User not found</div>;
  }

  const { role } = user;
console.log(user.restaurents)
  return (
    <div>
      {/* Other components */}
      {role === 'superadmin' && (
        <>
          {statistics && (

<div className="row">
          
           <div className="col-xl-4" data-aos="fade-up" data-aos-delay="100" style={{ paddingLeft: '0.7cm', marginTop: '0.5cm' }}>
                   <div className="row member" style={{padding:'0.2cm'}}>

                   <div className=" col-xl-4 col-md-6" style={{ backgroundColor: 'whitesmoke',borderRadius:'3px' }}>

                    <h1 style={{ fontSize: '73px', fontFamily: 'cursive', textAlign: 'center' }}>
                      {statistics.admin.users}
                    </h1>
                  </div>
                  <div className=" col-xl-7  col-md-6" style={{ margin: '0cm' }}>
                    <h5 style={{ textAlign: 'justify' }}>users</h5>

                    <p style={{textAlign: 'justify',fontFamily:'sans-serif' }}>
                      number of users in our system

                    </p>
                    <div className="d-flex justify-content-center justify-content-lg-start">
                    </div>
                  </div>

                </div>

                </div> 
                
                
                <div className="col-xl-4" data-aos="fade-up" data-aos-delay="100" style={{ paddingLeft: '0.7cm', marginTop: '0.5cm' }}>
                   <div className="row member" style={{padding:'0.2cm'}}>

                   <div className=" col-xl-4 col-md-6" style={{ backgroundColor: 'whitesmoke',borderRadius:'3px' }}>

                    <h1 style={{ fontSize: '73px', fontFamily: 'cursive', textAlign: 'center' }}>
                      {statistics.admin.restaurants}
                    </h1>
                  </div>
                  <div className=" col-xl-7  col-md-6" style={{ margin: '0cm' }}>
                    <h5 style={{ textAlign: 'justify' }}>restaurents</h5>

                    <p style={{textAlign: 'justify',fontFamily:'sans-serif' }}>
                      number of users in our system

                    </p>
                    <div className="d-flex justify-content-center justify-content-lg-start">
                    </div>
                  </div>

                </div>

                </div> 
                

                <div className="col-xl-4" data-aos="fade-up" data-aos-delay="100" style={{ paddingLeft: '0.7cm', marginTop: '0.5cm' }}>
                   <div className="row member" style={{padding:'0.2cm'}}>

                  <div className=" col-xl-4 col-md-6" style={{ backgroundColor: 'whitesmoke',borderRadius:'3px' }}>

                    <h1 style={{ fontSize: '73px', fontFamily: 'cursive', textAlign: 'center' }}>
                      {/* {statistics.admin.users} */}
                      ..
                    </h1>
                  </div>
                  <div className=" col-xl-7  col-md-6" style={{ margin: '0cm' }}>
                    <h5 style={{ textAlign: 'justify' }}>.......</h5>

                    <p style={{textAlign: 'justify',fontFamily:'sans-serif' }}>
                      number of .... in our system

                    </p>
                    <div className="d-flex justify-content-center justify-content-lg-start">
                    </div>
                  </div>
                </div>
                </div>          
                 </div>

            
          )}
        </>
      )}

      {role === 'restaurentadmin' && (
        <>
          {statistics && user.restaurents !== null && (
            <div className="row">
              <div className="col-xl-4" data-aos="fade-up" data-aos-delay="100" style={{ paddingLeft: '0.7cm', marginTop: '0.5cm' }}>
                   <div className="row member" style={{padding:'0.2cm'}}>
                   <div className=" col-xl-4 col-md-6" style={{ backgroundColor: 'whitesmoke',borderRadius:'3px' }}>
                    <h1 style={{ fontSize: '73px', fontFamily: 'cursive', textAlign: 'center' }}>
                      {statistics.resto.employees}
                    </h1>
                  </div>
                  <div className=" col-xl-7  col-md-6" style={{ margin: '0cm' }}>
                    <h5 style={{ textAlign: 'justify' }}>Employees</h5>
                    <p style={{textAlign: 'justify',fontFamily:'sans-serif' }}>
                      number of imployees in our restourent
                    </p>
                    <div className="d-flex justify-content-center justify-content-lg-start">
                    </div>
                  </div>

                </div>

              </div>

              <div className="col-xl-4" data-aos="fade-up" data-aos-delay="100" style={{ paddingLeft: '0.7cm', marginTop: '0.5cm' }}>
                             <div className="row member" style={{padding:'0.2cm'}}>

                             <div className=" col-xl-4 col-md-6" style={{ backgroundColor: 'whitesmoke',borderRadius:'3px' }}>

                            <h1 style={{ fontSize: '73px',fontFamily:'cursive' }}>
                              {statistics.resto.categories}
                              </h1>
                            </div>
                            <div className=" col-xl-7  col-md-6" style={{ margin: '0cm' }}>
                              <h5 style={{ textAlign: 'justify' }}>Categories</h5>

                              <p style={{ textAlign: 'justify',fontFamily:'sans-serif' }}>
                                we have only
                                &nbsp;{statistics.resto.categories} 
                                 &nbsp; in our restourent

                              </p>
                              <div className="d-flex justify-content-center justify-content-lg-start">
                              </div>
                            </div>

                          </div>

                        </div>




                        <div className="col-xl-4" data-aos="fade-up" data-aos-delay="100" style={{ paddingLeft: '0.7cm', marginTop: '0.5cm' }}>
                             <div className="row member" style={{padding:'0.2cm'}}>

                             <div className=" col-xl-4 col-md-6" style={{ backgroundColor: 'whitesmoke',borderRadius:'3px' }}>

                            <h1 style={{ fontSize: '73px',fontFamily:'cursive' }}>
                              {statistics.resto.cards}
                              </h1>
                            </div>
                            <div className=" col-xl-7  col-md-6" style={{ margin: '0cm' }}>
                              <h5 style={{ textAlign: 'justify',fontFamily:'sans-serif' }}>cards</h5>

                              <p style={{textAlign: 'justify',fontFamily:'sans-serif' }}>
                                we have only
                                &nbsp;{statistics.resto.cards} 
                                 &nbsp; cards in our restaurant

                              </p>
                              <div className="d-flex justify-content-center justify-content-lg-start">
                              </div>
                            </div>

                          </div>

                        </div>
















            </div>
          )}
        </>
      )}
    </div>
  );
};

export default App;
