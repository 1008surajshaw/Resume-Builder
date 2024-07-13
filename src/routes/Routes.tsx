import { Suspense } from "react";
import { Routes as RoutesList, Route, BrowserRouter } from "react-router-dom";
import ResumeBuilder from "../pages/ResumeBuilderPage/index"
import Error404 from "../pages/Errors/index"
import Home from "../pages/Home/index"
import { Loader } from "../components/common/Loader";
import Auth from "../pages/Auth";
import InnerDashboard from "../pages/Dashboard";
import ResumeCreation from "../pages/ResumeBuilderPage/index";
import Template1 from "../components/template/Template1";
type Props = {};

const Routes = (props: Props) => {
	return (
		<BrowserRouter>
			<Suspense fallback={<Loader />}>
				<RoutesList>
					<Route path="/" element={<Home />} />
					<Route path="*" element={<Error404 />} />
                    <Route path="/resume" element={<ResumeBuilder />} />
					<Route path="/dashboard" element={<InnerDashboard />} />
					 <Route path='/res' element={<Template1/>}/>
					 <Route path="/template/:id" element={<ResumeCreation />} />
					 <Route path="/auth" element={<Auth />} />
				</RoutesList>
			</Suspense>
		</BrowserRouter>
	);
};

export default Routes;
