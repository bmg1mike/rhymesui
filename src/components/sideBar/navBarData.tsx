import { AiOutlineDashboard } from "react-icons/ai"
import { VscGraph } from "react-icons/vsc";
import { HiOutlineClipboardList, HiOutlineUserGroup } from "react-icons/hi";
import { RiQuestionnaireLine } from "react-icons/ri";

const navBarItems = [
    {
        icon: <AiOutlineDashboard />,
        title: "Dashboard",
        link: "/dashboard"
    },
    {
        icon: <VscGraph />,
        title: "Author's Report",
        link: "/authorsReport"
    },
    {
        icon: <HiOutlineClipboardList />,
        title: "RH Books",
        link: "/rhbooks"
    },
    {
        icon: <HiOutlineUserGroup />,
        title: "RH Authors",
        link: "/rhAuthors"
    },
    {
        icon: <RiQuestionnaireLine />,
        title: "Book Request",
        link: "/bookRequest"
    }
]

export default navBarItems