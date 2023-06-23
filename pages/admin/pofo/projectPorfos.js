
import { deletePortfolio, getPortfolios,} from "../../../api/profile";
import { useEffect, useState } from "../../../lib";

const ProjectPorfos = () => {
  const [data, setData] = useState([]);
  // chạy sau khi render

  useEffect(() => {
    getPortfolios().then((data) => {
      setData(data);
    });
  }, []);

  useEffect(function () {
    const btns = document.querySelectorAll(".btn-remove");
    for (let btn of btns) {
      // btn là 1 phần tử trong mảng?
      const id = btn.dataset.id;
      btn.addEventListener("click", function () {
        deletePortfolio(id).then(() => {
          const newData = data.filter((project) => project.id != id);
          setData(newData);
        });
      });
    }
    // const btnsEdit = document.querySelectorAll(".btn-edit");
    // for (let btn of btnsEdit) {
    // // btn là 1 phần tử trong mảng?
    // const id = btn.dataset.id;
    // btn.addEventListener("click", function () {
    //   const newData = data.find((project) => project.id == id);
    //render(() => AdminEditProjectsPage(newData), app)
    // router.navigate(`/admin/projectpage/${newData.id}/edit`);

    //   });
    // }
  });

  return `
  <!-- Favicon -->
  <link href="/../../assetsadmin/img/favicon.ico" rel="icon">

  <!-- Google Web Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Heebo:wght@400;500;600;700&display=swap" rel="stylesheet">
  
  <!-- Icon Font Stylesheet -->
  <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css" rel="stylesheet">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css" rel="stylesheet">

  <!-- Libraries Stylesheet -->
  <link href="/../../assetsadmin/lib/owlcarousel/assets/owl.carousel.min.css" rel="stylesheet">
  <link href="/../../assetsadmin/lib/tempusdominus/css/tempusdominus-bootstrap-4.min.css" rel="stylesheet" />

  <!-- Customized Bootstrap Stylesheet -->
  <link href="/../../assetsadmin/css/bootstrap.min.css" rel="stylesheet">

  <!-- Template Stylesheet -->
  <link href="/../../assetsadmin/css/style.css" rel="stylesheet">
  <body>
  <div class="container-xxl position-relative bg-white d-flex p-0">
      <!-- Spinner Start -->
     
      <!-- Spinner End -->


      <!-- Sidebar Start -->
      <div class="sidebar pe-4 pb-3">
          <nav class="navbar bg-light navbar-light">
              <a href="/admin" class="navbar-brand mx-4 mb-3">
                  <h3 class="text-primary"><i class="fa fa-hashtag me-2"></i>ADMIN</h3>
              </a>
              <div class="d-flex align-items-center ms-4 mb-4">
                  <div class="position-relative">
                      <img class="rounded-circle" src="/../../assetsadmin/img/avatar2.jpg" alt="" style="width: 40px; height: 40px;">
                      <div class="bg-success rounded-circle border border-2 border-white position-absolute end-0 bottom-0 p-1"></div>
                  </div>
                  <div class="ms-3">
                      <h6 class="mb-0">VA 501.F</h6>
                      <span>Admin</span>
                  </div>
              </div>
              <div class="navbar-nav w-100">
                  <a href="" class="nav-item nav-link active"><i class="fa fa-tachometer-alt me-2"></i>Portfolio</a>
                  <div class="nav-item dropdown">
                      <a href="./admin" class="nav-link dropdown-toggle" data-bs-toggle="dropdown"><i class="far fa-file-alt me-2"></i>Dashboard</a>
                      <div class="dropdown-menu bg-transparent border-0">
                          <a href="add_element/add_services.html" class="dropdown-item">New Services</a>
                          <a href="list_element/list_service.html" class="dropdown-item">Add Servicess</a>
                      </div>
                  </div>
                  
                  <div class="nav-item dropdown">
                      <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown"><i class="far fa-file-alt me-2"></i>Profile</a>
                      <div class="dropdown-menu bg-transparent border-0">
                          <a href="add_element/add_profile.html" class="dropdown-item">New Profile</a>
                          <a href="list_element/list_profile.html" class="dropdown-item">Add Profiles</a>
                      </div>
                  </div>
                  
                  <div class="nav-item dropdown">
                      <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown"><i class="far fa-file-alt me-2"></i>Contact</a>
                      <div class="dropdown-menu bg-transparent border-0">
                          <a href="add_element/add_contact.html" class="dropdown-item">New Contact</a>
                          <a href="list_element/list_contact.html" class="dropdown-item">Add Contacts</a>
                      </div>
                  </div>
              </div>
          </nav>
      </div>
      <!-- Sidebar End -->


      <!-- Content Start -->
      <div class="content">
          <!-- Navbar Start -->
          <nav class="navbar navbar-expand bg-light navbar-light sticky-top px-4 py-0">
              <a href="../index.html" class="navbar-brand d-flex d-lg-none me-4">
                  <h2 class="text-primary mb-0"><i class="fa fa-hashtag"></i></h2>
              </a>
              <a href="#" class="sidebar-toggler flex-shrink-0">
                  <i class="fa fa-bars"></i>
              </a>
              <form class="d-none d-md-flex ms-4">
                  <input class="form-control border-0" type="search" placeholder="Search">
              </form>
              <div class="navbar-nav align-items-center ms-auto">
                  <div class="nav-item dropdown">
                      <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                          <i class="fa fa-envelope me-lg-2"></i>
                          <span class="d-none d-lg-inline-flex">Message</span>
                      </a>
                      <div class="dropdown-menu dropdown-menu-end bg-light border-0 rounded-0 rounded-bottom m-0">
                          <a href="#" class="dropdown-item">
                              <div class="d-flex align-items-center">
                                  <img class="rounded-circle" src="../img/user.jpg" alt="" style="width: 40px; height: 40px;">
                                  <div class="ms-2">
                                      <h6 class="fw-normal mb-0">Jhon send you a message</h6>
                                      <small>15 minutes ago</small>
                                  </div>
                              </div>
                          </a>
                          <hr class="dropdown-divider">
                          <a href="#" class="dropdown-item">
                              <div class="d-flex align-items-center">
                                  <img class="rounded-circle" src="../img/user.jpg" alt="" style="width: 40px; height: 40px;">
                                  <div class="ms-2">
                                      <h6 class="fw-normal mb-0">Jhon send you a message</h6>
                                      <small>15 minutes ago</small>
                                  </div>
                              </div>
                          </a>
                          <hr class="dropdown-divider">
                          <a href="#" class="dropdown-item">
                              <div class="d-flex align-items-center">
                                  <img class="rounded-circle" src="../img/user.jpg" alt="" style="width: 40px; height: 40px;">
                                  <div class="ms-2">
                                      <h6 class="fw-normal mb-0">Jhon send you a message</h6>
                                      <small>15 minutes ago</small>
                                  </div>
                              </div>
                          </a>
                          <hr class="dropdown-divider">
                          <a href="#" class="dropdown-item text-center">See all message</a>
                      </div>
                  </div>
                  <div class="nav-item dropdown">
                      <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                          <i class="fa fa-bell me-lg-2"></i>
                          <span class="d-none d-lg-inline-flex">Notificatin</span>
                      </a>
                      <div class="dropdown-menu dropdown-menu-end bg-light border-0 rounded-0 rounded-bottom m-0">
                          <a href="#" class="dropdown-item">
                              <h6 class="fw-normal mb-0">Profile updated</h6>
                              <small>15 minutes ago</small>
                          </a>
                          <hr class="dropdown-divider">
                          <a href="#" class="dropdown-item">
                              <h6 class="fw-normal mb-0">New user added</h6>
                              <small>15 minutes ago</small>
                          </a>
                          <hr class="dropdown-divider">
                          <a href="#" class="dropdown-item">
                              <h6 class="fw-normal mb-0">Password changed</h6>
                              <small>15 minutes ago</small>
                          </a>
                          <hr class="dropdown-divider">
                          <a href="#" class="dropdown-item text-center">See all notifications</a>
                      </div>
                  </div>
                  <div class="nav-item dropdown">
                      <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                          <img class="rounded-circle me-lg-2" src="/../../assetsadmin/img/avatar2.jpg" alt="" style="width: 40px; height: 40px;">
                          <span class="d-none d-lg-inline-flex">VA 501.F</span>
                      </a>
                      <div class="dropdown-menu dropdown-menu-end bg-light border-0 rounded-0 rounded-bottom m-0">
                          <a href="#" class="dropdown-item">My Profile</a>
                          <a href="#" class="dropdown-item">Settings</a>
                          <a href="#" class="dropdown-item">Log Out</a>
                      </div>
                  </div>
              </div>
          </nav>
          <!-- Navbar End -->


          <!-- Sale & Revenue Start -->
       
          <!-- Sale & Revenue End -->


          <!-- Sales Chart Start -->
         
          <!-- Sales Chart End -->


          <!-- Recent Sales Start -->
     
          <!-- Recent Sales End -->


          <!-- Widgets Start -->
          <div class="container-fluid pt-4 px-4">
              <div class="col-sm-12 col-xl-12">
                  <div class="bg-light rounded h-100 p-4">
                      <h6 class="mb-4">List Menu</h6>
                      <a href="/addpofor"><button class="btn btn-info m-2"> Add Portfolio</button></a>
                      <table class="table table-bordered">
                          <thead>
                              <tr>
                                  <th scope="col">ID</th>
                                  <th scope="col">Name</th>
                                  <th scope="col">Describer</th>
                                  <th scope="col">Image</th>
                                  <th scope="col">Thao Tác</th>

                              </tr>
                          </thead>
                          <tbody>
                          ${data
                            .map((project, index) => {
                              return `
                              <tr>
                                  <th scope="row">${index + 1}</th>
                                  <td>${project.name}</td>
                                  <td>${project.describe}</td>
                                  <td><img style="width: 100px;" src="https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80" alt=""></td>
                                  
                                  <td><button class="btn btn-danger btn-remove m-2" data-id="${
                                    project.id
                                  }">Delete</button> <a href="/updateporfos/${
                                project.id
                              }/edit"<button class="btn btn-outline-success m-2">Update</button></td>
                              </tr>
                              `;
                            })
                            .join("")}
                          </tbody>
                      </table>
                  </div>
              </div>
          </div>
          <!-- Widgets End -->


          <!-- Footer Start -->
          <div class="container-fluid pt-4 px-4">
              <div class="bg-light rounded-top p-4">
                  <div class="row">
                      <div class="col-12 col-sm-6 text-center text-sm-start">
                          &copy; <a href="#">Your Site Name</a>, All Right Reserved. 
                      </div>
                      <div class="col-12 col-sm-6 text-center text-sm-end">
                          <!--/*** This template is free as long as you keep the footer author’s credit link/attribution link/backlink. If you'd like to use the template without the footer author’s credit link/attribution link/backlink, you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". Thank you for your support. ***/-->
                          Designed By <a href="https://htmlcodex.com">501.F</a>
                      </br>
                      Distributed By <a class="border-bottom" href="https://themewagon.com" target="_blank">Nguyen Viet Anh</a>
                      </div>
                  </div>
              </div>
          </div>
          <!-- Footer End -->
      </div>
      <!-- Content End -->


      <!-- Back to Top -->
      <a href="#" class="btn btn-lg btn-primary btn-lg-square back-to-top"><i class="bi bi-arrow-up"></i></a>
  </div>

  `;
};

export default ProjectPorfos;
