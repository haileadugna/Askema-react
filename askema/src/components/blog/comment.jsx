import React, { useEffect } from 'react';
import 'flatpickr/dist/themes/light.css';
import { useTranslation } from 'react-i18next';

export default function Comment() {
  useEffect(() => {
    // ... (unchanged JavaScript code for CountUp and flatpickr)

    const intervalId = setInterval(() => {
      const carousel = document.getElementById('testimonialCarousel');
      const currentIndex = Array.from(carousel.querySelectorAll('.carousel-item')).findIndex(
        (item) => item.classList.contains('active')
      );
      const nextIndex = (currentIndex + 1) % 3; // Adjust the number of items in the carousel

      carousel.querySelector('.carousel-item.active').classList.remove('active');
      carousel.querySelectorAll('.carousel-item')[nextIndex].classList.add('active');
    }, 5000);

    // Clear the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []);

  const {t} = useTranslation();

  return (
    <section className="bg-light py-3">
      
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="bg-secondary text-center text-white p-5 rounded">
              <div className="mb-4">
                <i className="fas opacity-10 fa-quote-right fa-3x text-primary"></i>
              </div>
              <h2 className="h4 mb-4 text-success">{t("What Our Clients Are Saying")}</h2>
            </div>
          </div>
          <div className="col-lg-6">
            <div id="testimonialCarousel" className="carousel slide">
              <div className="carousel-inner">
                <div className="carousel-item active">
                <div className="text-center">
                    <img
                      className="w-50 mb-4 img-fluid rounded-circle"
                      src="https://demos.creative-tim.com/soft-ui-design-system-pro/assets/img/team-2.jpg"
                      alt=""
                    />
                    <p className="lead">
                      "We’re not always in the position that we want to be at. We’re constantly growing. We’re
                      constantly making mistakes. We’re constantly trying to express ourselves and actualize our
                      dreams."
                    </p>
                    <div className="author justify-content-center">
                      <div className="name ps-2">
                        <span>Mathew Goat</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                <div className="text-center">
                    <img
                      className="w-50 mb-4 img-fluid rounded-circle"
                      src="https://demos.creative-tim.com/soft-ui-design-system-pro/assets/img/team-2.jpg"
                      alt=""
                    />
                    <p className="lead">
                      "We’re not always in the position that we want to be at. We’re constantly growing. We’re
                      constantly making mistakes. We’re constantly trying to express ourselves and actualize our
                      dreams."
                    </p>
                    <div className="author justify-content-center">
                      <div className="name ps-2">
                        <span>John Don</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                <div className="text-center">
                    <img
                      className="w-50 mb-4 img-fluid rounded-circle"
                      src="https://demos.creative-tim.com/soft-ui-design-system-pro/assets/img/team-2.jpg"
                      alt=""
                    />
                    <p className="lead">
                      "We’re not always in the position that we want to be at. We’re constantly growing. We’re
                      constantly making mistakes. We’re constantly trying to express ourselves and actualize our
                      dreams."
                    </p>
                    <div className="author justify-content-center">
                      <div className="name ps-2">
                        <span>Mathew Goat</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='p-4 bg-white'></div>
    </section>
  );
}
