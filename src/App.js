import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaFacebookF, FaTwitter, FaInstagramSquare } from "react-icons/fa";


function App() {
  const [formValues, setFormValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    password: '',
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const validate = () => {
    let newErrors = {};

    if (!formValues.firstName) {
      newErrors.firstName = 'First name is required';
    }
    if (!formValues.lastName) {
      newErrors.lastName = 'Last name is required';
    }
    if (!formValues.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
      newErrors.email = 'Email address is invalid';
    }
    if (!formValues.phoneNumber) {
      newErrors.phoneNumber = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formValues.phoneNumber)) {
      newErrors.phoneNumber = 'Phone number must be 10 digits';
    }
    if (!formValues.password) {
      newErrors.password = 'Password is required';
    } else if (formValues.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters long';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      const formattedData = {
        first_name: formValues.firstName,
        last_name: formValues.lastName,
        phone_number: formValues.phoneNumber,
        email: formValues.email,
        password: formValues.password,
      };
      console.log('Form submitted:', formattedData);
    } else {
      console.log('Form has errors');
    }
  };

  return (
    <div>
      <div>
        <div className='h-[100px] flex justify-between'>
          <div className='flex items-center ml-7'>
            <img src='/union.jpg' alt="Logo" />
            <p>Logo</p>
          </div>
          <div className="flex items-center">
            <ul className="flex items-center">
              <li className="mr-4">Features</li>
              <li className="mr-4">Pricing</li>
              <li className="mr-4">Community</li>
              <li className="mr-4">Support</li>
            </ul>
          </div>
          <div className='flex justify-around items-center'>
            <div className='flex justify-around'>
              <button className="btn btn-outline-primary ">Login</button>
              <button className="btn btn-primary mx-4">Register</button>
            </div>
          </div>
        </div>

        <div className='bgimg flex flex-col items-center justify-end pb-10'>
          <h1 className='text-white '>The largest community of photo enthusiasts</h1>
          <button className='btn btn-primary mt-9'>Join Today</button>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h1 className='font-[Montserrat] mt-3'>Snap photos and share like never before</h1>
            </div>
            <div className="row mt-4">
              <div className="col-md-6">
                <h4>Sed ut perspiciatis</h4>
                <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.</p>
                <button className='btn btn-primary'>Learn more</button>
              </div>
              <div className="col-md-6">
                <h4>Lorem ipsum dolor</h4>
                <p>Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.</p>
                <button className='btn btn-primary'>Learn more</button>
              </div>
            </div>

            <div className="row mt-5">
              <div className="col-md-6">
                <h4>Sed ut perspiciatis</h4>
                <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.</p>
                <button className='btn btn-primary'>Learn more</button>
              </div>
              <div className="col-md-6">
                <h4>Lorem ipsum dolor</h4>
                <p>Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.</p>
                <button className='btn btn-primary'>Learn more</button>
              </div>
            </div>
          </div>
        </div>

        <div className='flex '>
        </div>
      </div>

      <div className='pt-8'>
        <div className='text-center'>
          <h1 className='mt-8'>Have you ever posted any photo on social media?</h1>
          <p className='my-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
        </div>
        <div className="container">
          <div className="row ">
            <div className="col-md-5 flex flex-col justify-center">
              <div>
                <h1>Sed ut perspiciatis</h1>
                <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.</p>
              </div>
              <div className='my-4'>
                <h1>Sed ut perspiciatis</h1>
                <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.</p>
              </div>
              <div>
                <h1>Sed ut perspiciatis</h1>
                <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.</p>
              </div>
            </div>
            <div className="col-md-7">
              <img src="/build.png" className='-[740px]' alt="Build" />
            </div>
          </div>
        </div>
      </div>

      <div className=''>
        <div className='text-center mt-5'>
          <h1>Make your photos more stylish</h1>
          <p className='my-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
        </div>
        <div className="container mt-4">
          <div className="row flex justify-around">
            <div className='col-3 border text-center'>
              <img src="/back.png" alt="Back" />
              <h5>Sed ut perspiciatis</h5>
              <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia.</p>
            </div>
            <div className='col-3 border text-center '>
              <img src="/busi.png" alt="Busi" />
              <h5>Lorem ipsum dolor</h5>
              <p>Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
            </div>
            <div className='col-3 border text-center'>
              <img src="/hands.png" alt="Hands" />
              <h5>Sed ut perspiciatis</h5>
              <p>Consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
            </div>
          </div>
        </div>
      </div>

      <div className=''>
        <div className='text-center mt-5'>
          <h1>Ready to take a free trial?</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
        </div>
      </div>

      <div className='flex justify-center'>
        <div className='w-[50vw] border-2'>
          <div className='container'>
            <p className='font-bold'>Sign up for free Account</p>
            <form onSubmit={handleSubmit}>
              <div className='row'>
                <div className='col-md-6'>
                  <input
                    name='firstName'
                    placeholder='First Name'
                    type='text'
                    className='form-control'
                    value={formValues.firstName}
                    onChange={handleInputChange}
                  />
                  {errors.firstName && <p className='text-danger'>{errors.firstName}</p>}
                </div>
                <div className='col-md-6 '>
                  <input
                    name='lastName'
                    placeholder='Last Name'
                    type='text'
                    className='form-control'
                    value={formValues.lastName}
                    onChange={handleInputChange}
                  />
                  {errors.lastName && <p className='text-danger'>{errors.lastName}</p>}
                </div>
              </div>
              <div className='row my-4'>
                <div className='col-md-6'>
                  <input
                    name='email'
                    placeholder='Email'
                    type='email'
                    className='form-control'
                    value={formValues.email}
                    onChange={handleInputChange}
                  />
                  {errors.email && <p className='text-danger'>{errors.email}</p>}
                </div>
                <div className='col-md-6'>
                  <input
                    name='phoneNumber'
                    placeholder='Phone number'
                    type='number'
                    className='form-control'
                    value={formValues.phoneNumber}
                    onChange={handleInputChange}
                  />
                  {errors.phoneNumber && <p className='text-danger'>{errors.phoneNumber}</p>}
                </div>
              </div>
              <div className='col-md-12'>
                <input
                  name='password'
                  placeholder='Password'
                  type='password'
                  className='form-control'
                  value={formValues.password}
                  onChange={handleInputChange}
                />
                {errors.password && <p className='text-danger'>{errors.password}</p>}
              </div>
              <button type='submit' className='btn my-3 btn-primary'>Save</button>
            </form>
          </div>
        </div>
      </div>

      <div className='bg-gray-500 text-white'>
        <div className="container">
          <div className="row pt-4">
            <div className='col-md-6 flex'>
              <img src='/union.jpg' alt="Logo" className='h-[20px]' />
              <p>Logo</p>
            </div>
            <div className='col-md-6 flex justify-between'>
              <div>
                <h5 className='font-bold'>Mobile App</h5>
                <p>Website</p>
                <p>API</p>
                <p>Wesenkj</p>
              </div>

              <div>
                <h5 className='font-bold'>Mobile App</h5>
                <p>Website</p>
                <p>API</p>
                <p>Wesenkj</p>
              </div>

              <div>
                <h5 className='font-bold'>Mobile App</h5>
                <p>Website</p>
                <p>API</p>
                <p>Wesenkj</p>
              </div>

              <div className='flex flex-col'>
                <button className='btn btn-primary '>Login</button>
                <button className='btn btn-warning mt-3'>Register</button>

              </div>

            </div>
          </div>

          <hr />
          <div className='flex justify-between items-center'>
            <p>© Photo, Inc. 2019. We love our users!</p>
            <div className='flex'>
              <p>Follow Us</p>
              <FaFacebookF />
              <FaTwitter className='mx-2' />
              <FaInstagramSquare />

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
