import DashboardIcon from "../Icons/DashboardIcon"
import BookmarkIcon from "../Icons/BookmarkIcon"
import GroupIcon from "../Icons/GroupIcon"
import FramePersonIcon from "../Icons/FramePersonIcon"
import PersonIcon from "../Icons/PersonIcon"
import WorkIcon from "../Icons/WorkIcon"
import TreeIcon from "../Icons/TreeIcon"
import FolderIcon from "../Icons/FolderIcon"
import HelpCenterIcon from "../Icons/HelpCenterIcon"


export function Sidebar() {
return (
<div className="flex flex-col  pt-[20px]  bg-[#F4F5F9] w-[60px] h-screen ">
  <div className="hover:bg-blue-200 h-[50px] w-[60px] p-[15px] cursor-pointer">
 <DashboardIcon />
 </div>
 <div className="hover:bg-blue-200 h-[50px] w-[60px] p-[15px] cursor-pointer">
 <BookmarkIcon/>
 </div>
 <div className="hover:bg-blue-200 h-[50px] w-[60px] p-[15px] cursor-pointer">
 <GroupIcon/>
 </div>
 <div className="hover:bg-blue-200 h-[50px] w-[60px] p-[15px] cursor-pointer">
 <FramePersonIcon/>
 </div>
 <div className="hover:bg-blue-200 h-[50px] w-[60px] p-[15px] cursor-pointer">
 <PersonIcon/>
 </div>
 <div className="hover:bg-blue-200 h-[50px] w-[60px] p-[15px] cursor-pointer">
 <WorkIcon/>
 </div>
 <div className="hover:bg-blue-200 h-[50px] w-[60px] p-[15px] cursor-pointer">
 <TreeIcon/>
 </div>
 <div className="hover:bg-blue-200 h-[50px] w-[60px] p-[15px] cursor-pointer">
 <FolderIcon/>
 </div>
 <div className="hover:bg-blue-200 h-[50px] w-[60px] p-[15px] cursor-pointer">
 <HelpCenterIcon/>
 </div>
</div>
)
}

export default Sidebar

