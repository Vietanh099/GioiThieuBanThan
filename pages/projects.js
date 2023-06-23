import Header from "../components/Header";
import ProjectList from "../components/ProjectList";
import { useEffect, useState } from "../lib";
import { getProjects } from "../api/project";
const ProjectsPage = () => {
    const [projects, setProjects] = useState([]);
    useEffect(() => {

        getProjects().then(({ data }) => console.log(data));
    }, []);
    return `
    <div>
        ${ProjectList({ projects })}
    </div>
    `;
};
export default ProjectsPage;

