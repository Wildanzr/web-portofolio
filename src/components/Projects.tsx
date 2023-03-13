import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper'

import 'swiper/swiper.min.css'
import 'swiper/css/pagination'

import { TitleSection, DisplayProject } from './others'

const Projects = () => {
  const projects = [
    {
      name: 'LetsCode - Solve Problem Collaboratively',
      images: [
        '/images/lc1.png',
        '/images/lc2.png',
        '/images/lc3.png',
        '/images/lc4.png',
        '/images/lc5.png',
        '/images/lc6.png',
        '/images/lc7.png'
      ]
    },
    {
      name: 'Online Learning',
      images: [
        '/images/ol1.png',
        '/images/ol2.png',
        '/images/ol3.png',
        '/images/ol4.png',
        '/images/ol5.png',
        '/images/ol6.png',
        '/images/ol7.png',
        '/images/ol8.png',
        '/images/ol9.png'
      ]
    },
    {
      name: 'BCDev Landing Page',
      images: [
        '/images/bc1.png',
        '/images/bc2.png',
        '/images/bc3.png',
        '/images/bc4.png'
      ]
    },
    {
      name: 'Sakinah Residence Marketing Website',
      images: [
        '/images/sk1.png',
        '/images/sk2.png',
        '/images/sk3.png',
        '/images/sk4.png',
        '/images/sk5.png',
        '/images/sk6.png'
      ]
    },
    {
      name: 'Event Plus Landing Page',
      images: [
        '/images/ev1.png',
        '/images/ev2.png',
        '/images/ev3.png',
        '/images/ev4.png',
        '/images/ev5.png',
        '/images/ev6.png'
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
          pagination={{
            clickable: true
          }}
          modules={[Pagination]}
          className="mySwiper w-full h-full flex flex-col space-y-3"
        >
          <div className="w-full flex flex-row space-x-4">
            {projects.map((project, index) => (
              <SwiperSlide key={index} className="w-full h-full">
                <div className="w-full h-full flex flex-col space-y-3">
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
