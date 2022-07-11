  $(document).ready(function(){
    $('.fade').slick({
        dots: false,
        infinite: true,
        speed: 400,
        slidesToShow: 1,
        autoplay: true,
        prevArrow: $('.banner-btn-left i'),
        nextArrow: $('.banner-btn-right i'),
    });

    $('.autoplay').slick({
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      arrows: false,
      dots: true,
      responsive: [
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            arrows: false,
            dots: true,
          }
        }
    ]
    });

    $('.swiper-list').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        lazyLoad: 'ondemand',
        arrows: false,
        responsive: [
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              arrows: false,
            }
          }
      ]
      });
  });

// -------- plat -----------
$(document).ready(function(){
  $('.plat-slick-track').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerPadding: 20,
    prevArrow: $('.plat-slick-arrow'),
    nextArrow: $('.plat-slick-arrow-r'),
    responsive: [
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            prevArrow: $('.plat-slick-arrow'),
            nextArrow: $('.plat-slick-arrow-r'),
          }
        }
    ]
  });
});

// --------- Call Api -------

var coursesApi = 'https://60d4611a61160900173cb070.mockapi.io/courses';

function start() {
  getUsers(renderCourses);
}

start();

function getUsers(callback) {
  fetch(coursesApi)
      .then(function(response) {
          return response.json();
      })
      .then(callback)
      .catch((err) => console.log(err))
      .finally(() => console.log("Loading courses list is done"))
}


var listCourses = document.querySelector('#list-courses');
function renderCourses(courses) {
  var htmls = courses.map(function(course) {

    let starList = [
      '<li><i class="fa-regular fa-star"></i></li>',
      '<li><i class="fa-regular fa-star"></i></li>',
      '<li><i class="fa-regular fa-star"></i></li>',
      '<li><i class="fa-regular fa-star"></i></li>',
      '<li><i class="fa-regular fa-star"></i></li>',
    ];
    for (let i = 0; i < course.rate; i++) {
      starList[i] = '<li><i class="fa-solid fa-star text-primary"></i></li>';
    }
      return `
              <div class="cou-slick-slide">
                <div style="background-color: #fff;
                            border-radius: 3px;
                            overflow: hidden;
                            box-shadow: none;">
                    <div class="thum relative">
                        <div>
                            <a href="">
                                <img src="${course.image}" />
                            </a>
                        </div>
                        <div class="edubin-course-lever absolute"><span>${course.level}</span></div>
                        <div class="edubin-course-mark absolute"><i class="fa-regular fa-bookmark"></i></div>
                    </div>
                    <div class="course-content">
                        <div class="edubin-course-rate items-center">
                            <div class="review-stars-rated flex">
                              <ul class="flex mr-4">
                              <!-- <li><i class="fa-solid fa-star"></i></li>
                                <li><i class="fa-solid fa-star"></i></li>
                                <li><i class="fa-solid fa-star"></i></li>
                                <li><i class="fa-solid fa-star"></i></li>
                                <li><i class="fa-solid fa-star"></i></li> -->
                                ${starList.toString().replaceAll(",", "")}   
                              </ul>
                            </div>
                            <span class="course-rating">${course.rate}</span>
                            <span class="course-reviews">(${course.rate_quantity})</span>
                        </div>
                        <h4 class="course-title">
                            <a href="">${course.name}</a>
                        </h4>
                        <div class="course-time">
                            <ul class="flex">
                                <li>
                                    <i class="fa-regular fa-user" style="padding-top: 2px;"></i>
                                    <span>${course.total_enrolled}</span>
                                </li>
                                <li class="ml-3">
                                    <i class='bx bx-time-five text-xl'></i>
                                    <span>${course.duration}</span>
                                </li>
                            </ul>
                        </div>
                        <div class="course-bottom flex items-center">
                            <div class="thum">
                                <a href="">
                                    <img src="./images/t-3.jpg" />
                                </a>
                            </div>
                            <div class="name flex">
                                <p>
                                    <span> by </span>
                                    <h6 class="ins-name ml-1">${course.teacher}</h6>
                                    <span class="ml-1"> In </span>
                                    <h6 class="ins-name ml-1">${course.categories}</h6>
                                </p>
                            </div>
                        </div>
                        <div class="course-cart flex justify-between">
                            <p class="">${course.price != 0 ? '£'+course.price : 'Free'}</p>
                            <div class="flex">
                                <i class='bx bx-cart-alt' style="padding-top: 2px;"></i>
                              <span class="ml-1" >${course.price != 0 ? 'Add to Cart' : 'Get Enrolled'}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          `;
  });
  listCourses.innerHTML = htmls.join('');

  $(document).ready(function(){
    $('.cou-slick-track').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 2000,
      centerPadding: 20,
      prevArrow: $('.arr-l'),
      nextArrow: $('.arr-r'),
      responsive: [
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            prevArrow: $('.arr-l'),
            nextArrow: $('.arr-r'),
          }
        }
    ]
    });
  });

}


// handle toggle youtube frame
document.querySelector(".facilities-left").addEventListener("click", () => {
    document.querySelector(".youtube-overlay").classList.add("visible");
  });
  document.querySelector(".youtube-overlay").addEventListener("click", () => {
    document.querySelector(".youtube-overlay").classList.remove("visible");
  });

// --- animas
AOS.init({
    easing: "ease-out-back",
    duration: 1500,
  });

// go to top

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// ----- validate Form ---------

function validateForm(){
	var objs = document.getElementsByClassName('form-control');
    for (var i = 0; i < objs.length; i++) {
    	var obj = objs[i];
        validateElement(obj);
    }
  
  var obj_firstName = document.getElementById('firstNameId');
  var firstName = obj_firstName.value;
  var obj_error_firstName = document.getElementById('firstName_error');
  var nameformat = /^[A-Za-z .]{3,15}$/;

   if (!firstName.match(nameformat)){
    obj_error_firstName.innerHTML = 'Vui lòng nhập đúng họ tên!';
    obj_firstName.style.borderColor = 'red';
    
    }else {
      obj_error_firstName.innerHTML = '';
      obj_firstName.style.borderColor = 'green';
     
      var obj_LastName = document.getElementById('LastNameId');
      var LastName = obj_LastName.value;
      var obj_error_LastName = document.getElementById('LastName_error');
      
      if (!LastName.match(nameformat)){
        obj_error_LastName.innerHTML = 'Vui lòng nhập đúng họ tên!';
        obj_LastName.style.borderColor = 'red';
        
        }else {
          obj_error_LastName.innerHTML = '';
          obj_LastName.style.borderColor = 'green';

          var obj_userName = document.getElementById('userNameId');
          var userName = obj_userName.value;
          var obj_error_userName = document.getElementById('userName_error');
          var passformat = /^[A-Za-z]\w{5,14}$/;

          if (!userName.match(passformat)){
            obj_error_userName.innerHTML = 'Vui lòng nhập User!';
            obj_userName.style.borderColor = 'red';
            
            }else {
              obj_error_userName.innerHTML = '';
              obj_userName.style.borderColor = 'green';

              var obj_email = document.getElementById('emailId');
              var email = obj_email.value;
              var obj_error_email = document.getElementById('email_error');
              var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

              if (!email.match(mailformat)){
                obj_error_email.innerHTML = 'Vui lòng nhập Emai!';
                obj_email.style.borderColor = 'red';
                
                }else {
                  obj_error_email.innerHTML = '';
                  obj_email.style.borderColor = 'green';
                
                var obj_password = document.getElementById('passwordId');
                var password = obj_password.value;
                var obj_error_password = document.getElementById('password_error');

                if (!password.match(passformat)){
                  obj_error_password.innerHTML = 'Vui lòng nhập Password';
                  obj_password.style.borderColor = 'red';
                  
                  }else {
                    obj_error_password.innerHTML = '';
                    obj_password.style.borderColor = 'green';

                    var obj_passwordConfirm = document.getElementById('passwordConfirmId');
                    var passwordConfirm = obj_passwordConfirm.value;
                    var obj_error_passwordConfirm = document.getElementById('passwordConfirm_error');

                    if (passwordConfirm !== password){
                      obj_error_passwordConfirm.innerHTML = 'Vui lòng nhập lại Password';
                      obj_passwordConfirm.style.borderColor = 'red';
                      
                      }else {
                        obj_error_passwordConfirm.innerHTML = '';
                        obj_passwordConfirm.style.borderColor = 'green';

                      }
                  }

                }
            }
        }
    }
}

function validateElement(obj){
	var obj_value = obj.value;
	var attrName = obj.getAttribute('name');
	var obj_error = document.getElementById(attrName+'Id');

  if (obj_value == ""){
      obj_error.style.borderColor = 'red';
    }else{
      obj_error.style.borderColor = 'green';
    }
}

// -------- menu mobile -----------

function menuMobile() {
  let menuMobi = document.querySelector('.mobile-menu');
  if (menuMobi.style.display === "block") {
    menuMobi.style.display = "none";
  } else {
    menuMobi.style.display = "block";
  }
}