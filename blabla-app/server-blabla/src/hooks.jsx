import React, { useState } from 'react'


function useAuth(){
     return sessionStorage.getItem("email") !=="" &&  sessionStorage.getItem("email") !== null  
}

export default useAuth;