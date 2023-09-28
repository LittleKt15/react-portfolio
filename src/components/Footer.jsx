import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-[#001b5e] text-white py-6">
            <div className="container mx-auto text-center">
                <p className="text-lg font-semibold">Contact Information</p>
                <p className="mt-2">Email: your.email@example.com</p>
                <p>Phone: (123) 456-7890</p>
                <div className="mt-4 flex justify-center space-x-4">
                    <a
                        href="https://www.linkedin.com/in/your-profile"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xl hover:text-gray-300 transition duration-300"
                    >
                        <i className="fab fa-linkedin"></i>
                    </a>
                    <a
                        href="https://twitter.com/your-twitter"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xl hover:text-gray-300 transition duration-300"
                    >
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a
                        href="https://github.com/your-github"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xl hover:text-gray-300 transition duration-300"
                    >
                        <i className="fab fa-github"></i>
                    </a>
                </div>
            </div>
            <div className="mt-6 text-center text-gray-400 text-sm">
                &copy; {new Date().getFullYear()} Your Name. All Rights Reserved.
            </div>
        </footer>
    );
};

export default Footer;
