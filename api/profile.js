import instance from "./config";

const getPortfolios = () => {
    return instance.get("/portfolio");
};
const getPortfolio = (id) => {
    return instance.get(`/portfolio/${id}`);
};
const addPortfolio = (project) => {
    return instance.post("/portfolio", project);
};
const deletePortfolio = (id) => {
    return instance.delete(`/portfolio/${id}`);
};
const updatePortfolio = (project) => {
    return instance.put(`/portfolio/${project.id}`, project);
};

export { getPortfolio,getPortfolios,addPortfolio,deletePortfolio,updatePortfolio };