import React from "react";

import FormProgress from "./FormProgress";


type Props = { children: React.ReactNode; step: number; setStep: Function };

const ResumeBuilderFormLayout = ({ children, step, setStep }: Props) => {
	return (
		<div>
			<div
				className={`flex justify-between items-center p-5 text-white `}
			>
				<div>All the best for you future job।</div>
				<div className="font-satoshi">
					Let all be Happy!
				</div>
			</div>
			<div className="px-5 py-10 relative">
				<span className="font-satoshi font-bold absolute right-5 bottom-12">
					wel---come
				</span>
			</div>
			<FormProgress step={step} setStep={setStep} />
			<div>{children}</div>
			<div className="flex justify-between items-center px-5 py-2">
				<span className="text-2xl font-semibold text-primary-foreground">
					“Build your resume today”
				</span>
			</div>
		</div>
	);
};

export default ResumeBuilderFormLayout;
