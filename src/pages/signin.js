import React from 'react'
import { scrollToTop } from 'react-scroll/modules/mixins/animate-scroll'
import SignIn from '../componenets/Signin'

const SigninPage = () => {
    return (
        <div>
            <scrollToTop />
            <SignIn />
        </div>
    )
}

export default SigninPage
