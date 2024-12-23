import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"
import CourseDetails from "./pages/CourseDetails"
import Courses from "./pages/Courses"
import Notes from "./pages/Notes"
import MyCourses from "./pages/MyCourses"
import profile from './pages/Profile'
import AdminLogin from './pages/AdminLogin'
import AddInstructor from "./pages/AddInstructor"
import AdminDashboard from "./pages/AdminDashboard"
import InstructorLogin from "./pages/InstructorLogin"
import InstructorDashboard from "./pages/InstructorDashboard"
import MyClasses from "./pages/MyClasses"
import ManageLearners from "./pages/ManageLearners"
import ManageInstructors from "./pages/manageInstructors"
import ManageCourseModal from "./components/ManageCourseModal"
import CreateClass from "./components/CreateClass"
import AddAdmin from './pages/AddAdmin'
import ManageAdmin from "./pages/ManageAdmin"
import About from "./pages/About"
import ContactUs from "./pages/ContactUs"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" Component={Home}/>
        <Route path="/login" Component={Login}/>
        <Route path="/register" Component={Register} />
        {/* <Route path="/loading" Component={Loading } /> */}
        <Route path="/courses/:id" Component={CourseDetails} />
        <Route path="/courses" Component={Courses} />
        <Route path="/courses/:id/notes" Component={Notes} />
        <Route path="/mycourses" Component={MyCourses} />
        <Route path="/profile" Component={profile} />
        <Route path="/about" Component={About} />
        <Route path="/contact" Component={ContactUs} />
        <Route path="/adminlogin" Component={AdminLogin} />
        <Route path="/admindashboard" Component={AdminDashboard} />
        <Route path="/admindashboard/addinstructor" Component={AddInstructor} />
        <Route path="/instructorlogin" Component={InstructorLogin} />
        <Route path="/instructordashboard" Component={InstructorDashboard} />
        <Route path="/myclasses" Component={MyClasses} />
        <Route path="/:classCode/managelearners" Component={ManageLearners} />
        <Route path="/admindashboard/manageinstructors" Component={ManageInstructors} />
        <Route path="/:classCode/manageclass" Component={ManageCourseModal} />
        <Route path="/instructordashboard/createclass" Component={CreateClass} />
        <Route path="/admindashboard/addadmin" Component={AddAdmin} />
        <Route path="/admindashboard/manageadmin" Component={ManageAdmin} />
      </Routes>
    </>
  )
}

export default App
