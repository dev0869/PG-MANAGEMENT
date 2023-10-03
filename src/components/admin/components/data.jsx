import {
	Briefcase,
    ListTask,
    People,
    Bullseye
} from 'react-bootstrap-icons';

export const ProjectsStats = [
  {
    id: 1,
    title: "Booking",
    value: 18,
    icon: <Briefcase size={18} />,
    statInfo: '<span className="text-dark me-2">2</span> Completed',
  },
  {
    id: 2,
    title: "Contact",
    value: 132,
    icon: <ListTask size={18} />,
    statInfo: '<span className="text-dark me-2">28</span> Completed',
  },
  {
    id: 3,
    title: "SINGLE OCCUPANCY",
    value: 12,
    icon: <People size={18} />,
    statInfo: '<span className="text-dark me-2">1</span> Completed',
  },
  {
    id: 4,
    title: "DOUBLE OCCUPANCY",
    value: "76",
    icon: <Bullseye size={18} />,
    statInfo: '<span className="text-dark me-2">5%</span> Completed',
  },
  {
    id: 5,
    title: "TRIPLE OCCUPANCY",
    value: "76",
    icon: <Bullseye size={18} />,
    statInfo: '<span className="text-dark me-2">5%</span> Completed',
  },
];
export default ProjectsStats;
