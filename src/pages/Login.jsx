// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { UserAuth } from '../context/AuthContext';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const navigate = useNavigate();
//   const { signIn } = UserAuth();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError('')
//     try {
//       await signIn(email, password);
//       alert("로그인 완료");
//       navigate('/account');
//     } catch (e) {
//       setError(e.message);
//       alert(e.message)
//     }
//   };

//   return (
//     <div className='max-w-[700px] mx-auto my-16 p-4'>
//       <div>
//         <h1 className='text-2xl font-bold py-2'>Sign in to your account</h1>
//         <p className='py-2'>
//           Don't have an account yet?{' '}
//           <Link to='/signup' className='underline'>
//             Sign up.
//           </Link>
//         </p>
//       </div>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Email Address</label>
//           <input onChange={(e) => setEmail(e.target.value)} type='email' />
//         </div>
//         <div>
//           <label>Password</label>
//           <input onChange={(e) => setPassword(e.target.value)} type='password' />
//         </div>
//         <button>Sign In</button>
//       </form>
//     </div>
//   );
// };

// export default Login;