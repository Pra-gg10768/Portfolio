import React, { useEffect } from 'react';

const Experience = () => {
  useEffect(() => {
    // Define variables
    const items = document.querySelectorAll(".timeline li");

    // Check if an element is in the viewport
    const isElementInViewport = (el) => {
      const rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    };

    // Callback function for adding "in-view" class
    const callbackFunc = () => {
      for (let i = 0; i < items.length; i++) {
        if (isElementInViewport(items[i])) {
          items[i].classList.add("in-view");
          items[i].offsetHeight; // Force reflow to ensure rendering
        }
        console.log(`Item ${i} in view: ${isElementInViewport(items[i])}`);
      }
    };

    // Run the callback after a short delay to ensure all elements are rendered
    setTimeout(() => {
      callbackFunc();
    }, 100);

    // Add event listeners
    window.addEventListener("resize", callbackFunc);
    window.addEventListener("scroll", callbackFunc);

    return () => {
      window.removeEventListener("resize", callbackFunc);
      window.removeEventListener("scroll", callbackFunc);
    };
  }, []);

  return (
    <div id="experience" className="experience-section">
       <h1 className="section-title">Experience</h1>
    <section className="timeline">
      <ul>
        <li>
          <div>
            <time>1934</time> At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
          </div>
        </li>
        <li>
          <div>
            <time>1937</time> Proin quam velit, efficitur vel neque vitae, rhoncus commodo mi. Suspendisse finibus mauris et bibendum molestie. Aenean ex augue, varius et pulvinar in, pretium non nisi.
          </div>
        </li>
        <li>
          <div>
            <time>1940</time> Proin iaculis, nibh eget efficitur varius, libero tellus porta dolor, at pulvinar tortor ex eget ligula. Integer eu dapibus arcu, sit amet sollicitudin eros.
          </div>
        </li>
        <li>
          <div>
            <time>1943</time> In mattis elit vitae odio posuere, nec maximus massa varius. Suspendisse varius volutpat mattis. Vestibulum id magna est.
          </div>
        </li>
        <li>
          <div>
            <time>1946</time> In mattis elit vitae odio posuere, nec maximus massa varius. Suspendisse varius volutpat mattis. Vestibulum id magna est.
          </div>
        </li>
        <li>
          <div>
            <time>1956</time> In mattis elit vitae odio posuere, nec maximus massa varius. Suspendisse varius volutpat mattis. Vestibulum id magna est.
          </div>
        </li>
        <li>
          <div>
            <time>1957</time> In mattis elit vitae odio posuere, nec maximus massa varius. Suspendisse varius volutpat mattis. Vestibulum id magna est.
          </div>
        </li>
      </ul>
    </section>
    </div>
  );
};

export default Experience;
