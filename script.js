// It was written to enable transition between sections in the classes field.//
function showContent(classType) {
    const description = document.getElementById('class-description');
    const image = document.getElementById('class-image');
    const tabs = document.querySelectorAll('.tab');

    tabs.forEach(tab => {
      tab.classList.remove('active');
    });

    if (classType === 'yoga') {
      description.innerHTML = `
        <h2>Why are your Yoga?</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur possimus voluptatem impedit odit perferendis dolorum placeat, exercitationem in officia autem maiores ab nostrum laboriosam sapiente nulla totam neque eum veniam.</p>
        <h2>When comes Yoga Your Time.</h2>
        <ul>
          <li>Saturday-Sunday: 8:00am - 10:00am</li>
          <li>Monday-Tuesday: 10:00am - 12:00pm</li>
          <li>Wednesday-Friday: 3:00pm - 6:00pm</li>
        </ul>`;
      image.src = "./images/yoga.jpg";
      image.alt = 'Yoga Image';
      document.querySelector('.tab[onclick="showContent(\'yoga\')"]').classList.add('active');
    } else if (classType === 'group') {
      description.innerHTML = `
        <h2>Why are your Group Classes?</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur possimus voluptatem impedit odit perferendis dolorum placeat, exercitationem in officia autem maiores ab nostrum laboriosam sapiente nulla totam neque eum veniam.</p>
        <h2>When comes Group Classes Your Time.</h2>
        <ul>
          <li>Saturday-Sunday: 10:00am - 12:00pm</li>
          <li>Monday-Tuesday: 1:00pm - 3:00pm</li>
          <li>Wednesday-Friday: 4:00pm - 6:00pm</li>
        </ul>`;
      image.src = './images/group.webp';
      image.alt = 'Group Image';
      document.querySelector('.tab[onclick="showContent(\'group\')"]').classList.add('active');
    } else if (classType === 'solo') {
      description.innerHTML = `
        <h2>Why are your Solo Classes?</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur possimus voluptatem impedit odit perferendis dolorum placeat, exercitationem in officia autem maiores ab nostrum laboriosam sapiente nulla totam neque eum veniam.</p>
        <h2>When comes Solo Classes Your Time.</h2>
        <ul>
          <li>Saturday-Sunday: 12:00pm - 2:00pm</li>
          <li>Monday-Tuesday: 3:00pm - 5:00pm</li>
          <li>Wednesday-Friday: 6:00pm - 8:00pm</li>
        </ul>`;
      image.src = './images/solo (1).jpg';
      image.alt = 'Solo Image';
      document.querySelector('.tab[onclick="showContent(\'solo\')"]').classList.add('active');
    } else if (classType === 'stretching') {
      description.innerHTML = `
        <h2>Why are your Stretching Classes?</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur possimus voluptatem impedit odit perferendis dolorum placeat, exercitationem in officia autem maiores ab nostrum laboriosam sapiente nulla totam neque eum veniam.</p>
        <h2>When comes Stretching Classes Your Time.</h2>
        <ul>
          <li>Saturday-Sunday: 2:00pm - 4:00pm</li>
          <li>Monday-Tuesday: 5:00pm - 7:00pm</li>
          <li>Wednesday-Friday: 8:00pm - 10:00pm</li>
        </ul>`;
      image.src = './images/stret (1).webp';
      image.alt = 'Stretching Image';
      document.querySelector('.tab[onclick="showContent(\'stretching\')"]').classList.add('active');
    }
  }

// It was written for calculations in the BMI field.//
function calculateBMI() {
    const height = document.getElementById('height').value;
    const weight = document.getElementById('weight').value;
    const bmiResult = document.getElementById('bmi-result');

    if (height && weight) {
      const heightInMeters = height / 100;
      const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(1);

      bmiResult.textContent = bmi;
      positionArrow(bmi);
    } else {
      bmiResult.textContent = "";
    }
  }

  function positionArrow(bmi) {
    const bmiArrow = document.getElementById('bmi-arrow');
    let leftPosition = 0;

    if (bmi < 18.5) {
      leftPosition = '10%';
    } else if (bmi >= 18.5 && bmi < 24.9) {
      leftPosition = '30%';
    } else if (bmi >= 25 && bmi < 29.9) {
      leftPosition = '50%';
    } else if (bmi >= 30 && bmi < 34.9) {
      leftPosition = '70%';
    } else {
      leftPosition = '90%';
    }

    bmiArrow.style.left = leftPosition;
  }

  // It was written to make the background colorful when scrolling down and transparent when it reaches the top.//

  (function(){


    'use strict';
    
        
    
        var header = document.getElementById("header");
        var headerScrolled = function(event){
            if(window.scrollY > 100){
                header.classList.add("header-scrolled")
            }else{
                header.classList.remove("header-scrolled")
            }
        }
    
        document.addEventListener("scroll", headerScrolled)
        })();