function loco() {
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
  });





  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();

}
loco()
window.addEventListener("mousemove", function (dets) {
  gsap.to(".cursor", {
    x: dets.x,
    y: dets.y,
  })
})

function cursoreffect() {
  document.querySelector("#part2").addEventListener("mouseenter", function () {
    gsap.to(".cursor", {
      scale: 3
    })

  })
  document.querySelector("#part2").addEventListener("mouseleave", function () {
    gsap.to(".cursor", {
      scale: 1
    })

  })
  document.querySelector("#part1").addEventListener("mouseenter", function () {
    gsap.to(".cursor", {
      scale: 5
    })

  })
  document.querySelector("#part1").addEventListener("mouseleave", function () {
    gsap.to(".cursor", {
      scale: 1
    })

  })
}
cursoreffect()




function animate() {
  var footeText = document.querySelectorAll(".bounding h1")
  footeText.forEach(function (elem) {
    var textCont = elem.textContent;
    var splitted = textCont.split("");
    var clutter = "";
    splitted.forEach(function (e) {
      clutter += `<span>${e}</span>`
    })
    elem.innerHTML = clutter
  })


  var tl = gsap.timeline()
  tl.to("#kuch-bhi h5", {
    y: -90,
    delay: 0.5,
    duration: 2,
  })
  .to("#text-anime", {
    y: -60,
    rotateX: -90,
    duration: 0.8,
    opacity: 0
  })
  .to("#loader1", {
    height: 0,
    duration: 0.8,
    delay: 0.5
  })
  .to("#loader2", {
    height: 0,
    duration: 0.8,
  }, "-=0.3")
  .to("#loader3", {
    height: 0,
    duration: 0.8,
  }, "-=1")
  .to("#loader4", {
    height: 0,
    duration: 0.8,
  }, "-=0.7")
  .to("#loader", {
    top: "-100vh",
    duration: 0.1
  })

  .from(".bounding h1 span", {
    y: 250,
    duration: 1,
    stagger: {
      amount: 0.3
    },
    rotate: "-80deg"
  })

  tl.to(".bounding img", {
    opacity: 1,
  })

  tl.from("#nav", {
    opacity: 0,
    y: -300,
    stagger: 0.4,
  }, "-=0.5")

  document.addEventListener("DOMContentLoaded", function () {
    let progressElement = document.querySelector('.progress');

    function updateProgressBar() {
      let width = parseInt(progressElement.style.width, 10) || 0;
      if (width < 100) {
        width++;
        progressElement.style.width = width + '%';
        setTimeout(updateProgressBar, 50); // Adjust the speed here
      } else {
        // Change color randomly
        let randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
        progressElement.style.backgroundColor = randomColor;
        progressElement.style.width = '0%';
        setTimeout(updateProgressBar, 100); // Start again after 50ms
      }
    }

    updateProgressBar();
  });
  var h2text = document.querySelector("#part h2")
  var textc = h2text.textContent
  var splittedtext = textc.split("")
  var clut = ""
  splittedtext.forEach(function (t) {
    clut += `<span>${t}</span>`
  })
  h2text.innerHTML = clut

  tl.from("#part h2 span", {
    y: 50,
    rotate: "-180deg",
    stagger: {
      amount: 0.5
    },
    repeat: -1,
    yoyo: true,
    opacity: 0,
    duration: 0.8
  })
  var tlm = gsap.timeline({
    scrollTrigger: {
      trigger: ".bounding h1",
      scroller: "#main",
      scrub: 4,
      start: "top 0%",
      end: "top -10%",
      // markers:true,
      pin: true
    }
  })

  tlm.to("#page2", {
    y: -200,
    ease: "power4",
  }, "a")
    .to("#page1", {
      filter: "blur(10px)",
      opacity: 0
    }, "a")
    .from(".elemh h1", {
      opacity: 0,
      y: 40,
      stagger: 0.5
    })
    .from(".svg svg", {
      opacity: 0,
      duration: 0.5,
      scale: 0
    })
    .from(".image", {
      opacity: 0,
      duration: 0.5,
      delay: 0.5,
      scale: 0

    })
    .from(".imagetext ", {
      opacity: 0,
      duration: 0.5,
      scale: 0

    })
    .from(".imagetext h2 ", {
      opacity: 0,
      duration: 0.5,
      // scale:0,
      y: 100,
      stagger: 0.5

    })
  var tll = gsap.timeline({
    scrollTrigger: {
      trigger: "#growth",
      scroller: "#main",
      scrub: 3,
      start: "top -25%",
      end: "top -35%",
      // markers:true,
      // pin:true
    }
  })
  tll.from(".textp h1", {
    opacity: 0,
    y: 100,
  })
  tll.from(".textp h2", {
    opacity: 0,
    y: 100,
  })
  tll.from(".container h1", {
    opacity: 0,
    y: 100,
  })
  tll.from(".container h3", {
    opacity: 0,
    y: 100,
  })




  var h3text = document.querySelector(".texts h1")

  var textco = h3text.textContent
  var splittedtexth3 = textco.split("")
  var clutt = ""
  splittedtexth3.forEach(function (h) {
    clutt += `<span>${h}</span>`
  })
  h3text.innerHTML = clutt
  gsap.from(".texts h1 span", {
    y: 150,
    stagger: {
      amount: 0.5
    },
    scrollTrigger: {
      trigger: ".texts",
      scroller: "#main",
      // scrub:2,
      // markers:true,
      start: "top 40%",
      end: "top 25%",
      rotate: "270deg"
    }

  })
}
animate()



function toggleContent(contentNum) {
  var content = document.getElementById('content' + contentNum);
  var container = document.getElementById('container' + contentNum);
  var header1 = container.querySelector('h1');
  var header3 = container.querySelector('h3');

  if (content.style.display === 'none' || !content.style.display) {
    content.style.display = 'block';
    container.style.height = 'auto';
    if (header1 && header1.innerText.includes('Web Development')) {
      header1.innerText = 'Web Development -';
    }
    if (header3 && header3.innerText.includes('Web Design')) {
      header3.innerText = 'Web Design -';
    }
  } else {
    content.style.display = 'none';
    container.style.height = 'auto'; // Resetting height
    if (header1 && header1.innerText.includes('Web Development')) {
      header1.innerText = 'Web Development +';
    }
    if (header3 && header3.innerText.includes('Web Design')) {
      header3.innerText = 'Web Design +';
    }
  }
}




var contain = document.querySelectorAll(".contain")

contain.forEach(function (imageselem) {
  imageselem.addEventListener("mouseenter", function () {
    var first = imageselem.querySelector(".first");
    var second = imageselem.querySelector(".second");
    var cursor = document.querySelector(".cursor")
    cursor.style.width = "100px"
    cursor.style.height = "100px"
    cursor.innerHTML = "View"
    gsap.to(first, {
      y: -50,
      duration: 0.5
    });
    gsap.to(second, {
      y: -50,
      duration: 0.5
    });

  });

  imageselem.addEventListener("mouseleave", function () {
    var first = imageselem.querySelector(".first");
    var second = imageselem.querySelector(".second");
    var cursor = document.querySelector(".cursor")

    gsap.to(first, {
      y: 0,
      duration: 0.5
    });
    gsap.to(second, {
      y: 0,
      duration: 0.5
    });
    cursor.style.width = "1vw"
    cursor.style.height = "1vw"
    cursor.innerHTML = ""
  });
});
document.querySelector("#contain1").addEventListener("mouseenter", function () {

  gsap.to("#main", {
    backgroundColor: "#614B63"
  })
})
document.querySelector("#contain2").addEventListener("mouseenter", function () {

  gsap.to("#main", {
    backgroundColor: "#FFCA39"
  })
})
document.querySelector("#contain3").addEventListener("mouseenter", function () {

  gsap.to("#main", {
    backgroundColor: "green"
  })
})
document.querySelector("#contain4").addEventListener("mouseenter", function () {

  gsap.to("#main", {
    backgroundColor: "#FE5238"
  })
})
document.querySelector("#contain5").addEventListener("mouseenter", function () {

  gsap.to("#main", {
    backgroundColor: "#0657A2"
  })
})
document.querySelector("#contain6").addEventListener("mouseenter", function () {

  gsap.to("#main", {
    backgroundColor: "#071421"
  })
})

document.querySelector("#contain1").addEventListener("mouseleave", function () {

  gsap.to("#main", {
    backgroundColor: "#0A0A0A"
  })
})
document.querySelector("#contain2").addEventListener("mouseleave", function () {

  gsap.to("#main", {
    backgroundColor: "#0A0A0A"
  })
})
document.querySelector("#contain3").addEventListener("mouseleave", function () {

  gsap.to("#main", {
    backgroundColor: "#0A0A0A"
  })
})
document.querySelector("#contain4").addEventListener("mouseleave", function () {

  gsap.to("#main", {
    backgroundColor: "#0A0A0A"
  })
})
document.querySelector("#contain5").addEventListener("mouseleave", function () {

  gsap.to("#main", {
    backgroundColor: "#0A0A0A"
  })
})
document.querySelector("#contain6").addEventListener("mouseleave", function () {

  gsap.to("#main", {
    backgroundColor: "#0A0A0A"
  })
})
document.getElementById('paixy').addEventListener('click', function () {
  var imageURL = this.src;
  window.open("https://nishchalnamdeo.github.io/obys-agency/", '_blank');
});
document.getElementById('obys').addEventListener('click', function () {
  var imageURL = this.src; 
  window.open("https://agencyin.vercel.app/", '_blank');
});
document.getElementById('ast').addEventListener('click', function () {
  var imageURL = this.src;
  window.open("https://nishchalnamdeo.github.io/apple.web/", '_blank');
});
document.getElementById('notepad').addEventListener('click', function () {
  var imageURL = this.src;
  window.open(" https://devdynamow.github.io/Notepad/", '_blank');
});
document.getElementById('musicplayer').addEventListener('click', function () {
  var imageURL = this.src;
  window.open(" https://devdynamow.github.io/music/", '_blank');
});
document.getElementById('island').addEventListener('click', function () {
  var imageURL = this.src;
  window.open("https://nishchalnamdeo.github.io/NAgency/", '_blank');
});



document.querySelector(".scroller").addEventListener("mouseenter", function () {

  gsap.to(".cursor", {
    scale: 8
  })
})
document.querySelector(".scroller").addEventListener("mouseleave", function () {

  gsap.to(".cursor", {
    scale: 1
  })
})
function displayIndiaTime() {
  var options = { timeZone: 'Asia/Kolkata', hour12: false, timeStyle: 'long' };
  var indiaTime = new Date().toLocaleString('en-US', options);
  document.getElementById('india-time').textContent = "India ka live time: " + indiaTime;
}

// Update time every second
setInterval(displayIndiaTime, 1000);

// Display time immediately
displayIndiaTime();



