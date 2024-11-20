document.addEventListener("DOMContentLoaded", function () {
  // Register plugins
  gsap.registerPlugin(CSSRulePlugin, ScrollTrigger);

  // Initialize timelines
  const menuTimeline = gsap.timeline({ paused: true });

  // Menu animation
  let activeItemIndicator = CSSRulePlugin.getRule(".menu-item p#active::after");
  const toggleButton = document.querySelector(".burger");
  let isOpen = false;

  gsap.set(".menu-item p", { y: 255 });

  menuTimeline
    .to(".overlay", {
      duration: 1.5,
      display: "flex",
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      opacity: 1,
      ease: "power4.inOut",
    })
    .to(
      ".menu-item p",
      {
        duration: 1.5,
        y: 0,
        stagger: 0.2,
        ease: "power4.out",
      },
      "-=1"
    )
    .to(
      activeItemIndicator,
      {
        width: "100%",
        duration: 1,
        ease: "power4.out",
        delay: 0.5,
      },
      "<"
    )
    .to(
      ".sub-nav",
      {
        bottom: "5%",
        opacity: 1,
        duration: 0.5,
        delay: 0.5,
      },
      "<"
    );

  // Toggle button click event
  toggleButton.addEventListener("click", function () {
    if (isOpen) {
      menuTimeline.reverse();
    } else {
      menuTimeline.play();
    }
    isOpen = !isOpen;
  });

  // Close overlay when a menu item is clicked
  document.querySelectorAll(".menu-item p").forEach((item) => {
    item.addEventListener("click", function () {
      if (isOpen) {
        menuTimeline.reverse();
        isOpen = false;
      }
    });
  });

  // Scroll animation
  // Ensure GSAP and ScrollTrigger plugins are loaded
  gsap.registerPlugin(ScrollTrigger);

  // Set up the animation
  gsap.to("#scroll-para", {
    x: "-85%",
    scrollTrigger: {
      trigger: ".scroll-div",
      scroller: "body",
      start: "top top",
      end: "200% 50%",
      scrub: 2, // Reduced scrub value for smoother performance on mobile
      pin: true, // Set to true only if necessary
    },
  });

  // Adjusted timeline
  let timel = gsap.timeline({
    scrollTrigger: {
      trigger: ".main-section",
      pin: true,
      start: "top top",
      end: "bottom top",
      scrub: true,
      // markers: true,
    },
  });

  timel
    .to("#animation", {
      opacity: 1,
      filter: "blur(0px)",
    })
    .to("#logo", {
      opacity: 1,
      filter: "blur(0px)",
      delay: -0.3,
    })
    .to("#social", {
      opacity: 1,
      filter: "blur(0px)",
      delay: -0.3,
    })
    .to("#seo", {
      opacity: 1,
      filter: "blur(0px)",
      delay: -0.3,
    })
    .to("#adobe", {
      opacity: 1,
      filter: "blur(0px)",
      delay: -0.3,
    })
    .to("#reels", {
      opacity: 1,
      filter: "blur(0px)",
      delay: -0.3,
    })
    .to("#html", {
      opacity: 1,
      filter: "blur(0px)",
      delay: -0.3,
    })
    .to("#digital", {
      opacity: 1,
      filter: "blur(0px)",
      delay: -0.3,
    })
    .to("#webflow", {
      opacity: 1,
      filter: "blur(0px)",
      delay: -0.3,
    })
    .to("#figma", {
      opacity: 1,
      filter: "blur(0px)",
      delay: -0.3,
    })
    .to("#javascript", {
      opacity: 1,
      filter: "blur(0px)",
      delay: -0.3,
    })
    .to("#wordpress", {
      opacity: 1,
      filter: "blur(0px)",
      delay: -0.3,
    })
    .to("#css", {
      opacity: 1,
      filter: "blur(0px)",
      delay: -0.3,
    })
    .to("#tailwind-css", {
      opacity: 1,
      filter: "blur(0px)",
      delay: -0.3,
    })
    .to("#django", {
      opacity: 1,
      filter: "blur(0px)",
      delay: -0.3,
    })
    .to("#gsap", {
      opacity: 1,
      filter: "blur(0px)",
      delay: -0.3,
    })
    .to("#scroll-trigger", {
      opacity: 1,
      filter: "blur(0px)",
      delay: -0.3,
    })
    .to("#expressjs", {
      opacity: 1,
      filter: "blur(0px)",
      delay: -0.3,
    })
    .to("#nodejs", {
      opacity: 1,
      filter: "blur(0px)",
      delay: -0.3,
    })
    .to("#nextjs", {
      opacity: 1,
      filter: "blur(0px)",
      delay: -0.3,
    })
    .to("#rest-api", {
      opacity: 1,
      filter: "blur(0px)",
      delay: -0.3,
    })
    .to("#typescript", {
      opacity: 1,
      filter: "blur(0px)",
      delay: -0.3,
    })
    .to("#ui-ux", {
      opacity: 1,
      filter: "blur(0px)",
      delay: -0.3,
    })
    .to("#motion-graphic", {
      opacity: 1,
      filter: "blur(0px)",
      delay: -0.3,
    })
    .to("#reactjs", {
      opacity: 1,
      filter: "blur(0px)",
      delay: -0.3,
    });

  // New timeline ml
  var ml = gsap.timeline({
    scrollTrigger: {
      trigger: "#main",
      // markers: true,
      start: "top top",
      end: "bottom top",
      scrub: 2,
      pin: true,
    },
  });

  ml.to(
    ".text",
    {
      top: "-7%",
    },
    "a"
  )
    .to(
      "#card-one",
      {
        top: "35%",
      },
      "a"
    )
    .to(
      "#card-two",
      {
        top: "130%",
      },
      "a"
    )
    .to(
      "#card-two",
      {
        top: "42%",
      },
      "b"
    )
    .to(
      "#card-one",
      {
        width: "65%",
        height: "65vh",
      },
      "b"
    )
    .to(
      "#card-three",
      {
        top: "130%",
      },
      "b"
    )
    .to(
      "#card-three",
      {
        top: "50%",
      },
      "c"
    )
    .to(
      "#card-two",
      {
        width: "70%",
        height: "70vh",
      },
      "c"
    );
});
