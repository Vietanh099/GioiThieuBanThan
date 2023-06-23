import { render, router } from "./lib";
import AboutPage from "./pages/about";
import EditPortfolio from "./pages/admin/pofo/products-edit";
import ProjectPorfos from "./pages/admin/pofo/projectPorfos";
import AddProjectPorfo from "./pages/admin/pofo/projects-add";
import EditProjectPost from "./pages/admin/post/products-edit";
import ProjectPosts from "./pages/admin/post/projects";
import AddProjectPost from "./pages/admin/post/projects-add";
import ContactPage from "./pages/contact";
import HomePage from "./pages/home";
import PortfolioPage from "./pages/portfolio";
import SkillsPage from "./pages/skills";

const app = document.querySelector('#app');
router.on('/', () => {
  router.navigate('/home');
});
router.on('/home', () => render(HomePage, app));
router.on('/about', () => render(AboutPage, app));
router.on('/contact', () => render(ContactPage, app));
router.on('/portfolio', () => render(PortfolioPage, app));
router.on('/skills', () => render(SkillsPage, app));
router.on('/admin', () => render(ProjectPosts, app));
router.on('/addpost', () => render(AddProjectPost, app));
router.on('/putpost', () => render(AddProjectPost, app));
router.on('/updatepost/:id/edit', ({ data }) => render(() => EditProjectPost(data), app));
router.on('/addpofor', () => render(AddProjectPorfo, app));
router.on('/projectporfos', () => render(ProjectPorfos, app));
router.on('/updateporfos/:id/edit', ({ data }) => render(() => EditPortfolio(data), app));

router.resolve();