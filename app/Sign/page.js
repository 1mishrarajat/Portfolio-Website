'use client';
import React from 'react'
import { useRouter } from 'next/navigation';
export default function page() {
	const Router =useRouter()
  return (
   <>
   <div className='sign-section'>
   <div class="form-structor">
	<div class="signup">
		<h2 class="form-title" id="signup"><span>or</span>Sign up</h2>
		<div class="form-holder">
			<input type="text" class="input" placeholder="Name" />
			<input type="email" class="input" placeholder="Email" />
			<input type="password" class="input" placeholder="Password" />
		</div>
		<button class="submit-btn" >Sign up</button>
		<button class="submit-btn" onClick={()=>Router.push("./Login")}>Login in</button>
	</div>
</div>
   </div>
   
   </>
  )
}
