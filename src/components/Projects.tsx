import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper'

import 'swiper/swiper.min.css'
import 'swiper/css/pagination'

import { TitleSection, DisplayProject } from './others'

const Projects = () => {
  const projects = [
    {
      name: 'LetsCode - Solve Problem Collaboratively',
      images: [
        '/images/lc1.webp',
        '/images/lc2.webp',
        '/images/lc3.webp',
        '/images/lc4.webp',
        '/images/lc5.webp',
        '/images/lc6.webp',
        '/images/lc7.webp'
      ]
    },
    {
      name: 'BCDev Landing Page',
      images: [
        '/images/bc1.webp',
        '/images/bc2.webp',
        '/images/bc3.webp',
        '/images/bc4.webp'
      ]
    },
    {
      name: 'Online Learning',
      images: [
        '/images/ol1.webp',
        '/images/ol2.webp',
        '/images/ol3.webp',
        '/images/ol4.webp',
        '/images/ol5.webp',
        '/images/ol6.webp',
        '/images/ol7.webp',
        '/images/ol8.webp',
        '/images/ol9.webp'
      ]
    },
    {
      name: 'Sakinah Residence Marketing Website',
      images: [
        '/images/sk1.webp',
        '/images/sk2.webp',
        '/images/sk3.webp',
        '/images/sk4.webp',
        '/images/sk5.webp',
        '/images/sk6.webp'
      ]
    },
    {
      name: 'Event Plus Landing Page',
      images: [
        '/images/ev1.webp',
        '/images/ev2.webp',
        '/images/ev3.webp',
        '/images/ev4.webp',
        '/images/ev5.webp',
        '/images/ev6.webp'
      ]
    }
  ]
  return (
    <div
      id="projects"
      className="w-full flex flex-col items-center justify-center gap-5 pt-20 px-5 lg:px-24"
    >
      <TitleSection title="Projects" />

      <div className="w-full flex h-64">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
              slidesPerGroup: 1,
              spaceBetween: 0
            },
            376: {
              slidesPerView: 1,
              slidesPerGroup: 1,
              spaceBetween: 0
            },
            576: {
              slidesPerView: 1,
              slidesPerGroup: 1,
              spaceBetween: 0
            },
            768: {
              slidesPerView: 2,
              slidesPerGroup: 2,
              spaceBetween: 30
            },
            992: {
              slidesPerView: 2,
              slidesPerGroup: 2,
              spaceBetween: 30
            },
            1200: {
              slidesPerView: 3,
              slidesPerGroup: 3,
              spaceBetween: 30
            }
          }}
          modules={[Autoplay]}
          className="mySwiper w-full h-full flex flex-col space-y-3"
        >
          <div className="w-full flex flex-row space-x-4">
            {projects.map((project, index) => (
              <SwiperSlide key={index} className="w-full h-full">
                <div className="w-full h-full flex flex-col space-y-5 items-center justify-center">
                  <DisplayProject images={project.images} />
                  <h4 className="text-center text-xl font-medium">
                    {project.name}
                  </h4>
                </div>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
    </div>
  )
}

export default Projects
