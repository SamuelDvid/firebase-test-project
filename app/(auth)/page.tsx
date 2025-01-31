import Logo from "@/components/logo";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "sign in",
    description: "sign in to get access to your product list"
}

const AuthPage = () => {
    return ( 
        <div className="flex justify-center items-center md:h-[95vh] md:px-10 lg:px-26">
            <div className="container h-[85vh] flex-col justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">

            {/* =======img======== */}

            <div className="relative hidden h-full flex-col p-10 text-white lg:flex">
                <div className="bg-auth absolute inset-0"></div>
                <Logo />

                <div className="relative z-20 mt-auto">
                    <p className="text-lg">This web app is a gide to undertand the use of firebase db</p>
                </div>
          
            </div>


            </div>
        </div>
    );
} 
 
export default AuthPage;