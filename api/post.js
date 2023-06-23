import instance from "./config";

const getPosts = () => {
    return instance.get("/posts");
};
const getPost = (id) => {
    return instance.get(`/posts/${id}`);
};
const addPost = (project) => {
    return instance.post("/posts", project);
};
const deletePost = (id) => {
    return instance.delete(`/posts/${id}`);
};
const updatePost = (project) => {
    return instance.put(`/posts/${project.id}`, project);
};

export { getPosts, getPost, addPost, deletePost, updatePost };