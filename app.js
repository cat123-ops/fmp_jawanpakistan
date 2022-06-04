var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 1200,
      modifier: 1,
      slideShadows: false,
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });

  var sidenav = document.getElementById('sidenav');
  var sidenav = document.getElementById('sidenav');
  sidenav.style.width="0px";
  menubar.onclick=function(){
      if(sidenav.style.width=="0px"){
          sidenav.style.width="250px";
      }
      else{
          sidenav.style.width="0px";
      }
  }

  const firebaseConfig = {
    apiKey: "AIzaSyDWbjNU_w7ThK-k_96NZA2yzrqckbWQf18",
    authDomain: "restaurant-e3501.firebaseapp.com",
    databaseURL: "https://restaurant-e3501-default-rtdb.firebaseio.com",
    projectId: "restaurant-e3501",
    storageBucket: "restaurant-e3501.appspot.com",
    messagingSenderId: "274041750471",
    appId: "1:274041750471:web:652bc446bd37bc85b84fe2"
  };

  firebase.initializeApp(firebaseConfig);


  var contactUs = firebase.database().ref('contactPage');

  document.getElementById('contactPage').addEventListener('submit', submitForm);

  function submitForm(e){
      e.preventDefault();
  
      var name = getElementVal("name");
      var email = getElementVal("email");
      var content = getElementVal("content");
  
      saveMessages(name, email, content);
  
      document.querySelector('.alert').style.display = 'block';
  
      setTimeout(() =>{
          document.querySelector('.alert').style.display = 'none';
      }, 3000);
  
  
      document.getElementById('contactPage').reset();
  }
  
  
  const saveMessages = (name, email, email) =>{
      var newContactForm = contactUs.push();
  
      newContactForm.set({
          name : name,
          email : email,
          content : content,
      })
  };
  
  
  
  const getElementVal = (id) =>{
      return document.getElementById(id).value;
  }