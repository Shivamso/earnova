"use client"

import Link from "next/link"

function PrivacyPolicy() {
    return (
        <section>
    <div className="relative w-full dark:bg-darkblack">
        <div className="container">
            <div className='flex flex-col gap-1.5 py-10 md:py-20'>
                <p>
                    This Privacy Statement explains how personal information about our (potential) customers, 
                    freelancers, students, and other individuals using our services is collected, used, 
                    and disclosed by <span className="font-semibold">Earnova</span> ("us", "we", "our"). 
                    This Privacy Statement describes our practices regarding data privacy in relation to the use 
                    of our websites, customer portals, applications, software solutions (including LMS, HMS, and custom IT systems), 
                    and related services (the "Services").
                </p>

                <p>
                    By signing up for or using our Services and agreeing to our Terms of Service, 
                    you consent to the collection, usage, storage, and disclosure of your information 
                    as outlined in this Privacy Statement.
                </p>

                <p>
                    Our Services may contain links to third-party platforms or external services. 
                    The privacy practices and content of such external services are governed by their own privacy policies, 
                    and we are not responsible for them.
                </p>

                <p>
                    We may update this Privacy Statement from time to time. 
                    If material changes occur, we will update the "Last Updated" date at the top of this page 
                    and may provide additional notifications (such as via email or platform announcements). 
                    We encourage you to review this Privacy Statement periodically to stay informed about 
                    how we manage and safeguard your information.
                </p>

                {/* Personal Information Collection */}
                <div className="my-6">
                    <h4 className="font-semibold">Personal Information Collection</h4>
                    <p className="mt-6">
                        While using our Services, we may collect personally identifiable information that can be used 
                        to contact or identify you. This may include: your name, email address, phone number, 
                        company/organization details, profile information, and project-related data you choose to share with us.
                    </p>
                    <p>
                        We do not directly collect or store financial information (such as credit card numbers or banking details). 
                        All payments are securely handled through trusted third-party providers. 
                        Please refer to their Privacy Policy for more information.
                    </p>
                </div>

                {/* Personal Information You Provide */}
                <div className="my-6">
                    <h4 className="font-semibold">Personal Information You Provide to Us</h4>
                    <p className="mt-6">
                        You may provide personal information when you create an account, participate in projects, 
                        request customer support, submit proposals as a freelancer, or otherwise interact with our platform. 
                        This information helps us facilitate collaboration between businesses, freelancers, and experts.
                    </p>
                    <p className="mt-6">
                        As noted, financial details are not collected by Earnova directly. 
                        All transactions are processed through third-party payment gateways, 
                        and their privacy policies will apply to payment data.
                    </p>
                </div>
            </div>
        </div>
    </div>
</section>

    )
}

export default PrivacyPolicy;
