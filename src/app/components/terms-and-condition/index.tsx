function TermsAndCondition() {
    return (
       <section>
    <div className="dark:bg-darkblack">
        <div className="container">
            <div className='flex flex-col py-10 md:py-20'>
                <p>
                    These Earnova Terms of Service (“<span className="font-semibold">Agreement</span>”) are entered into by and between 
                    Earnova (“<span className="font-semibold">Earnova</span>”) and the entity or individual accessing or using our 
                    Services (“<span className="font-semibold">Customer</span>”). This Agreement sets forth the terms and conditions 
                    under which Earnova provides its IT solutions, platforms, and related services. 
                    The “<span className="font-semibold">Effective Date</span>” of this Agreement is the earlier of 
                    (a) Customer’s initial access to the Services through any registration, subscription, or order process 
                    or (b) the Effective Date of the first Order Form. This Agreement will govern Customer’s initial use as 
                    well as all future engagements with Earnova that reference this Agreement. 
                    Earnova may update this Agreement from time to time as outlined in Section 13.4 (Amendments).
                </p>
                <p className="mt-5 ">
                    Capitalized terms shall have the meanings set forth in Section 1, or in the section where they are first defined.
                </p>

                {/* Section 1: Definitions */}
                <div className="my-6">
                    <h4 className="font-semibold">1. Definitions</h4>
                    <ul className="mt-6 ">
                        <li>
                            <p>
                                <span className="font-semibold">1.1 “Authorized Devices”</span>
                                means computers, servers, or mobile devices through which the Services may be securely accessed.
                            </p>
                        </li>
                        <li className="mt-5">
                            <p>
                                <span className="font-semibold">1.2 “Content”</span>
                                means data, documents, code, reports, or other materials uploaded, created, or managed within the Services by Customer or its Users.
                            </p>
                        </li>
                        <li className="mt-5">
                            <p>
                                <span className="font-semibold">1.3 “Documentation”</span>
                                refers to the technical guides, user manuals, and instructions provided by Earnova to assist Customer and its Users in using the Services.
                            </p>
                        </li>
                        <li className="mt-5">
                            <p>
                                <span className="font-semibold">1.4 “Services”</span>
                                means Earnova’s proprietary IT solutions, including but not limited to software development, learning management systems (LMS), hospital management systems (HMS), cloud deployment, and related support services. 
                                Each Order Form or Service Agreement will identify the scope and details of Customer’s subscription or project engagement.
                            </p>
                        </li>
                        <li className="mt-5">
                            <p>
                                <span className="font-semibold">1.5 “Order Form”</span>
                                means a signed agreement, statement of work, or subscription document specifying the Services to be provided by Earnova to Customer pursuant to this Agreement.
                            </p>
                        </li>
                        <li className="mt-5">
                            <p>
                                <span className="font-semibold">1.6 “Freelancer Network”</span>
                                means the community of freelance professionals, students, and contractors engaged through Earnova’s platform to contribute to Customer’s projects under the supervision of industry experts.
                            </p>
                        </li>
                        <li className="mt-5">
                            <p>
                                <span className="font-semibold">1.7 “User”</span>
                                means an employee, contractor, freelancer, student, or other authorized individual who has been provisioned by Customer with access to the Services.
                            </p>
                        </li>
                        <li className="mt-5">
                            <p>
                                <span className="font-semibold">1.8 “Packages”</span>
                                or
                                <span className="font-semibold">“Modules”</span>
                                means add-on features, integrations, or software components offered within the Services. Packages or Modules may be developed by Earnova, Customer, or third parties.
                            </p>
                        </li>
                    </ul>
                </div>

                {/* Section 2: License and Use Rights */}
                <div className="my-6">
                    <h4 className="font-semibold">2. License and Use Rights</h4>
                    <ul className="mt-6 ">
                        <li>
                            <p>
                                <span className="font-semibold">2.1 Services License</span>
                                Earnova grants Customer a non-exclusive, non-transferable, limited license during the Term 
                                (as defined in Section 12) to access and use the Services solely for Customer’s internal 
                                business operations and in accordance with the Documentation. 
                                Services may be accessed via cloud deployment, SaaS platforms, or installed applications 
                                where applicable.
                            </p>
                        </li>
                        <li className="mt-5">
                            <p>
                                <span className="font-semibold">2.2 Provisioning Access</span>
                                Earnova will provide Customer with the required login credentials, APIs, or access protocols 
                                (“Access Credentials”) to enable authorized Users to access the Services. 
                                Customer may designate administrators who will manage, control, and provision access for its Users. 
                                Customer is responsible for all activities conducted under its account, including those by freelancers, 
                                employees, and contractors it authorizes.
                            </p>
                        </li>
                        <li className="mt-5">
                            <p>
                                <span className="font-semibold">2.3 Restrictions</span>
                                Except as expressly permitted under this Agreement, Customer shall not: 
                                (a) sublicense, resell, or commercially exploit the Services outside the scope of this Agreement; 
                                (b) reverse engineer, copy, or attempt to extract source code; 
                                (c) use the Services to process unlawful, harmful, or unauthorized data.
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</section>

    )
}

export default TermsAndCondition

