'use client' // Indica que este archivo es un Client Component

import React, { useState } from 'react'

function App() {
 const [searchQuery, setSearchQuery] = useState('')

 // Aquí están todos tus proyectos
 const projects = [
  {
   title: 'Perros Presupuesteros',
   image:
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR222AjBGnxGEhf4dSySShwCO3fG6sjDgv7Zw&s',
   link: 'https://67295b40722f3d9cfa7f38b8--perrospresupuesteros.netlify.app/',
  },
  {
   title: 'Perros Cagaderos',
   image:
    'https://qhubobucaramanga.com/wp-content/uploads/2021/10/dasdasgsdasd.jpg',
   link: 'https://perroscagaderos.netlify.app/',
  },
  {
   title: 'No Se Las Cree',
   image:
    'https://yt3.googleusercontent.com/ytc/AIdro_lqG0qurkPqLKpy2Rtdfsn5SYZxQteQ0f2X7ZGW9tI6uBk=s900-c-k-c0x00ffffff-no-rj',
   link: 'https://noselascree.netlify.app',
  },
  {
   title: 'calculadora',
   image:
    'https://http2.mlstatic.com/D_NQ_NP_959801-MCO73914436710_012024-O.webp',
   link:
    'https://66e181d60b7273f1716beb27--euphonious-dieffenbachia-e9e171.netlify.app/',
  },
  {
   title: 'Otra',
   image: 'https://i.scdn.co/image/ab6765630000ba8aeeaf4bb5125d1cda87fe87bc',
   link: 'https://github.com/donomargv/otra',
  },
  {
   title: 'Poderosa',
   image: 'https://i.scdn.co/image/ab67616d0000b2735cee9da5de300b80644da1ef',
   link: 'https://github.com/donomargv/poderosa',
  },
  {
   title: 'AGT LA BANDA',
   image:
    'https://i.etsystatic.com/33799060/r/il/d97e9d/4215368070/il_300x300.4215368070_fmep.jpg',
   link:
    'https://66b9424ca67c72cbece3ad1e--glowing-centaur-350176.netlify.app/',
  },
  {
   title: 'UMA SOPA DO MACACO',
   image: 'https://i1.sndcdn.com/artworks-000483381480-58sqgf-t500x500.jpg',
   link:
    'https://66b94276f205a4cc934fe2d4--marvelous-sfogliatella-77243c.netlify.app/',
  },
  {
   title: 'NO SEA TAN MALO MNRRR',
   image:
    'https://files.rcnradio.com/public/2022-06/P%C3%A9guelo%20Socio.jpg?VersionId=221sDvSMTWJ1GGd5bYr9XpWclmWXryVD',
   link:
    'https://66b942a4eded4fcddab338a7--amazing-melomakarona-637db8.netlify.app/',
  },
  {
   title: 'BANCO COMICO',
   image:
    'https://www.informador.mx/__export/1506068394073/sites/elinformador/img/historico/11/1072521.jpg_1902800913.jpg',
   link: 'https://66b942becc7773cd01d9bdf0--playful-wisp-9fe8b7.netlify.app/',
  },
  {
   title: 'PANTENE',
   image:
    'https://preview.redd.it/paadagargaluku-pantene-vazhangiya-nee-indru-mudhal-pantene-v0-ax600frz2tqd1.jpeg?width=640&crop=smart&auto=webp&s=54c4144fba2f27dcb88c75c5f388c5c1b0bb166b',
   link:
    'https://66b942eca366a4ca69aad781--vermillion-chimera-9f6fa6.netlify.app/',
  },
  {
   title: 'Scratch Project 1',
   image:
    'https://us-tuna-sounds-images.voicemod.net/90554d78-a98c-49b9-9653-3f3da4ef085b-1689555367894.jpg',
   link: 'https://scratch.mit.edu/projects/1047186152/',
  },
  {
   title: 'Hoja de Vida',
   image: 'https://media.tenor.com/MqOgRxIUenMAAAAe/cj-gta.png',
   link: 'https://github.com/donomargv/hoja-de-vida/blob/main/hojadevida.html',
  },
  {
   title: 'Scratch Project 2',
   image: 'https://i.scdn.co/image/ab67616d0000b273a4fbef208e509dbf6dfc61a5',
   link: 'https://scratch.mit.edu/projects/1020705262/',
  },
  {
   title: 'Scratch Project 3',
   image:
    'https://s.mxmcdn.net/images-storage/albums/9/5/3/7/2/7/30727359_500_500.jpg',
   link: 'https://scratch.mit.edu/projects/1020170106/',
  },
  {
   title: 'Scratch Project 4',
   image: 'https://i.scdn.co/image/ab67616d0000b2732b298e26b401a4c2d992428e',
   link: 'https://scratch.mit.edu/projects/1020193313/',
  },
  {
   title: "Penne's de Burro",
   image:
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUpSWYyRHAqiQfZkeTrLEpUlvi5le0OJx9sA&s',
   link: 'http://pennesdeburro.wuaze.com',
  },
  {
   title: 'Pepola Se Eterno',
   image:
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFDQq294O16-t4S8XK6zTkrlbnUQtRZtP0AQ&s',
   link: 'http://pepolaseterno.wuaze.com/',
  },
  {
   title: 'Perros sin Huesos',
   image:
    'https://supergracioso.com/wp-content/uploads/2016/01/Perros-que-tambi%C3%A9n-llevan-pantalones-Parte-II.jpg',
   link: 'http://perrosinhuesos.wuaze.com/',
  },
  {
   title: 'Menor Pelucas',
   image:
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRK7prpktJgLptDbkQ8iVhKczniNPjuBUG3Q&s',
   link: 'http://menorpelucas.wuaze.com/',
  },
  {
   title: 'Flappy Bird',
   image:
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKx5hT1Z7OxMBVf7I-6sLeGFEn4I8g9aWRVg&s',
   link: 'https://github.com/donomargv/flappy-bird',
  },
  {
   title: 'Heath Ledger',
   image: 'https://i.scdn.co/image/ab67616d0000b2731648f1154156f2e9619f424f',
   link: 'https://github.com/donomargv/',
  },
 ]

 // Código anterior...
 function ProjectList() {
  return (
   <div className='project-container'>
    {projects.map((project, index) => (
     <div key={index} className='project-item'>
      <a href={project.link} target='_blank' rel='noopener noreferrer'>
       <img src={project.image} alt={project.title} className='project-image' />
       <h3>{project.title}</h3>
      </a>
     </div>
    ))}
   </div>
  )
 }

 const filteredProjects = projects.filter((project) =>
  project.title.toLowerCase().includes(searchQuery.toLowerCase())
 )

 return (
  <div className='container mx-auto'>
   {/* Barra de tareas */}
   <div className='flex justify-between p-4 bg-gray-800 text-white'>
    <div className='flex space-x-6'>
     <button className='hover:text-gray-400'>Todo</button>
     <button className='hover:text-gray-400'>Mis Proyectos</button>
     {/* Aquí se cambia a un enlace estándar <a> */}
     <a
      href='https://pteportafolio.netlify.app/'
      target='_blank'
      rel='noopener noreferrer'
     >
      <button className='hover:text-gray-400'>Sobre Nosotros</button>
     </a>
    </div>

    {/* Barra de búsqueda */}
    <input
     type='text'
     className='p-2 rounded'
     placeholder='Buscar proyectos...'
     value={searchQuery}
     onChange={(e) => setSearchQuery(e.target.value)}
    />
   </div>

   {/* Sección de proyectos */}
   <div className='p-6'>
    <h2 className='text-2xl font-semibold mb-4'>𝒫𝒪𝑅𝒯𝒜𝐹𝒪𝐿𝐼𝒪 𝒫𝑅𝒪𝐹𝐸𝐼𝒪𝒩𝒶𝐿</h2>
    <p>
     𝑀𝒾 𝓅𝑜𝓇𝓉𝒶𝒻𝑜𝓁𝒾𝑜 𝒹𝑒 𝓉𝓇𝒶𝒷𝒶𝒿𝑜 𝑒𝓈 𝓊𝓃 𝓇𝑒𝒻𝓁𝑒𝒿𝑜 𝒹𝑒 𝓉𝑜𝒹𝑜 𝓁𝑜 𝓆𝓊𝑒 𝒽𝑒 𝒶𝓅𝓇𝑒𝓃𝒹𝒾𝒹𝑜 𝒹𝓊𝓇𝒶𝓃𝓉𝑒
     𝓊𝓃 𝒶ñ𝑜 𝑒𝓃 𝑒𝓁 𝒮𝐸𝒩𝒜, 𝑒𝓃 𝑒𝓁 𝒸𝑜𝓁𝑒𝑔𝒾𝑜 𝒞𝒶𝓇𝓁𝑜𝓈 𝒱𝒾𝒸𝑒𝓃𝓉𝑒 𝑅𝑒𝓎. 𝐸𝓈𝓉𝑒 𝓉𝒾𝑒𝓂𝓅𝑜 𝒽𝒶 𝓈𝒾𝒹𝑜
     𝒻𝓊𝓃𝒹𝒶𝓂𝑒𝓃𝓉𝒶𝓁 𝑒𝓃 𝓂𝒾 𝒹𝑒𝓈𝒶𝓇𝓇𝑜𝓁𝓁𝑜 𝒸𝑜𝓂𝑜 𝓅𝓇𝑜𝒻𝑒𝓈𝒾𝑜𝓃𝒶𝓁 𝑒𝓃 𝑒𝓁 𝒸𝒶𝓂𝓅𝑜 𝒹𝑒 𝓁𝒶 𝓉𝑒𝒸𝓃𝑜𝓁𝑜𝑔í𝒶
     𝓎 𝑒𝓁 𝒹𝒾𝓈𝑒ñ𝑜. 𝒜 𝓉𝓇𝒶𝓋é𝓈 𝒹𝑒 𝒹𝒾𝓋𝑒𝓇𝓈𝒶𝓈 𝑒𝓍𝓅𝑒𝓇𝒾𝑒𝓃𝒸𝒾𝒶𝓈, 𝓅𝓇𝑜𝓎𝑒𝒸𝓉𝑜𝓈 𝓎 𝓇𝑒𝓉𝑜𝓈, 𝒽𝑒
     𝒶𝒹𝓆𝓊𝒾𝓇𝒾𝒹𝑜 𝒽𝒶𝒷𝒾𝓁𝒾𝒹𝒶𝒹𝑒𝓈 𝓅𝓇á𝒸𝓉𝒾𝒸𝒶𝓈 𝓎 𝒸𝑜𝓃𝑜𝒸𝒾𝓂𝒾𝑒𝓃𝓉𝑜𝓈 𝓉é𝒸𝓃𝒾𝒸𝑜𝓈 𝓆𝓊𝑒 𝓂𝑒 𝒽𝒶𝓃
     𝓅𝑒𝓇𝓂𝒾𝓉𝒾𝒹𝑜 𝑒𝓃𝒻𝓇𝑒𝓃𝓉𝒶𝓇 𝒹𝑒𝓈𝒶𝒻í𝑜𝓈 𝓇𝑒𝒶𝓁𝑒𝓈. 𝐸𝓃 𝒸𝒶𝒹𝒶 𝓅𝓇𝑜𝓎𝑒𝒸𝓉𝑜, 𝒽𝑒 𝒶𝓅𝓇𝑒𝓃𝒹𝒾𝒹𝑜 𝒶
     𝒶𝓅𝓁𝒾𝒸𝒶𝓇 𝓉𝑒𝑜𝓇í𝒶 𝓎 𝒸𝓇𝑒𝒶𝓉𝒾𝓋𝒾𝒹𝒶𝒹 𝓅𝒶𝓇𝒶 𝑒𝓃𝒸𝑜𝓃𝓉𝓇𝒶𝓇 𝓈𝑜𝓁𝓊𝒸𝒾𝑜𝓃𝑒𝓈 𝒾𝓃𝓃𝑜𝓋𝒶𝒹𝑜𝓇𝒶𝓈. 𝑀𝒾 𝓅𝒶𝓈𝑜
     𝓅𝑜𝓇 𝑒𝓁 𝒮𝐸𝒩𝒜 𝓂𝑒 𝒽𝒶 𝑒𝓃𝓈𝑒ñ𝒶𝒹𝑜 𝒶 𝓈𝑒𝓇 𝒶𝓊𝓉𝑜𝒹𝒾𝒹𝒶𝒸𝓉𝒶, 𝒶 𝓉𝓇𝒶𝒷𝒶𝒿𝒶𝓇 𝑒𝓃 𝑒𝓆𝓊𝒾𝓅𝑜 𝓎 𝒶
     𝓂𝒶𝓃𝓉𝑒𝓃𝑒𝓇𝓂𝑒 𝒸𝑜𝓃𝓈𝓉𝒶𝓃𝓉𝑒 𝒻𝓇𝑒𝓃𝓉𝑒 𝒶 𝓁𝑜𝓈 𝑜𝒷𝓈𝓉á𝒸𝓊𝓁𝑜𝓈. 𝐸𝓈𝓉𝑒 𝓅𝑜𝓇𝓉𝒶𝒻𝑜𝓁𝒾𝑜 𝓃𝑜 𝓈𝑜𝓁𝑜
     𝓂𝓊𝑒𝓈𝓉𝓇𝒶 𝓂𝒾 𝓅𝓇𝑜𝑔𝓇𝑒𝓈𝑜, 𝓈𝒾𝓃𝑜 𝓉𝒶𝓂𝒷𝒾é𝓃 𝓂𝒾 𝓅𝒶𝓈𝒾ó𝓃 𝓅𝑜𝓇 𝓈𝑒𝑔𝓊𝒾𝓇 𝒶𝓅𝓇𝑒𝓃𝒹𝒾𝑒𝓃𝒹𝑜 𝓎
     𝓂𝑒𝒿𝑜𝓇𝒶𝓃𝒹𝑜. 𝒞𝒶𝒹𝒶 𝓅𝒾𝑒𝓏𝒶 𝒶𝓆𝓊í 𝓇𝑒𝒻𝓁𝑒𝒿𝒶 𝑒𝓁 𝑒𝓈𝒻𝓊𝑒𝓇𝓏𝑜 𝓎 𝓁𝒶 𝒹𝑒𝒹𝒾𝒸𝒶𝒸𝒾ó𝓃 𝓆𝓊𝑒 𝒽𝑒
     𝓅𝓊𝑒𝓈𝓉𝑜 𝑒𝓃 𝒸𝒶𝒹𝒶 𝓅𝓇𝑜𝓎𝑒𝒸𝓉𝑜, 𝒸𝑜𝓃 𝑒𝓁 𝑜𝒷𝒿𝑒𝓉𝒾𝓋𝑜 𝒹𝑒 𝒶𝓁𝒸𝒶𝓃𝓏𝒶𝓇 𝓁𝒶 𝑒𝓍𝒸𝑒𝓁𝑒𝓃𝒸𝒾𝒶 𝓎 𝑒𝓈𝓉𝒶𝓇
     𝓈𝒾𝑒𝓂𝓅𝓇𝑒 𝓅𝓇𝑒𝓅𝒶𝓇𝒶𝒹𝑜 𝓅𝒶𝓇𝒶 𝑒𝓁 𝒻𝓊𝓉𝓊𝓇𝑜. 𝕼𝖚𝖎𝖊𝖗𝖔 𝖊𝖝𝖙𝖊𝖓𝖉𝖊𝖗 𝖚𝖓 𝖆𝖌𝖗𝖆𝖉𝖊𝖈𝖎𝖒𝖎𝖊𝖓𝖙𝖔 𝖒𝖚𝖞
     𝖊𝖘𝖕𝖊𝖈𝖎𝖆𝖑 𝖆 𝕽𝖔𝖓𝖆𝖑 𝖞 𝖆𝖑 𝖅𝖔𝖗𝖘𝖆𝖓𝖔𝖎𝖉𝖊 𝕻𝖙𝖊. 𝖕𝖔𝖗 𝖘𝖚 𝖆𝖕𝖔𝖞𝖔 𝖎𝖓𝖈𝖔𝖓𝖉𝖎𝖈𝖎𝖔𝖓𝖆𝖑 𝖉𝖚𝖗𝖆𝖓𝖙𝖊
     𝖙𝖔𝖉𝖔 𝖊𝖘𝖙𝖊 𝖕𝖗𝖔𝖈𝖊𝖘𝖔 𝖉𝖊 𝖆𝖕𝖗𝖊𝖓𝖉𝖎𝖟𝖆𝖏𝖊 𝖞 𝖈𝖗𝖊𝖈𝖎𝖒𝖎𝖊𝖓𝖙𝖔. 𝕾𝖚 𝖈𝖔𝖑𝖆𝖇𝖔𝖗𝖆𝖈𝖎ó𝖓, 𝖈𝖔𝖓𝖘𝖊𝖏𝖔𝖘 𝖞
     𝖌𝖚í𝖆 𝖍𝖆𝖓 𝖘𝖎𝖉𝖔 𝖊𝖘𝖊𝖓𝖈𝖎𝖆𝖑𝖊𝖘 𝖕𝖆𝖗𝖆 𝖖𝖚𝖊 𝖕𝖚𝖉𝖎𝖊𝖗𝖆 𝖘𝖚𝖕𝖊𝖗𝖆𝖗 𝖑𝖔𝖘 𝖗𝖊𝖙𝖔𝖘 𝖞 𝖆𝖑𝖈𝖆𝖓𝖟𝖆𝖗 𝖒𝖎𝖘
     𝖒𝖊𝖙𝖆𝖘. 𝕲𝖗𝖆𝖈𝖎𝖆𝖘 𝖕𝖔𝖗 𝖘𝖎𝖊𝖒𝖕𝖗𝖊 𝖊𝖘𝖙𝖆𝖗 𝖆𝖍í, 𝖇𝖗𝖎𝖓𝖉𝖆𝖓𝖉𝖔 𝖘𝖚 𝖊𝖝𝖕𝖊𝖗𝖎𝖊𝖓𝖈𝖎𝖆 𝖞 𝖒𝖔𝖙𝖎𝖛𝖆𝖈𝖎ó𝖓
     𝖕𝖆𝖗𝖆 𝖘𝖊𝖌𝖚𝖎𝖗 𝖆𝖉𝖊𝖑𝖆𝖓𝖙𝖊. 𝕾𝖎𝖓 𝖘𝖚 𝖆𝖞𝖚𝖉𝖆, 𝖊𝖘𝖙𝖊 𝖑𝖔𝖌𝖗𝖔 𝖓𝖔 𝖍𝖚𝖇𝖎𝖊𝖗𝖆 𝖘𝖎𝖉𝖔 𝖕𝖔𝖘𝖎𝖇𝖑𝖊.
     ¡𝕰𝖘𝖙𝖔𝖞 𝖒𝖚𝖞 𝖆𝖌𝖗𝖆𝖉𝖊𝖈𝖎𝖉𝖔 𝖕𝖔𝖗 𝖙𝖔𝖉𝖔 𝖘𝖚 𝖆𝖕𝖔𝖞𝖔! {/* y más contenido */}
    </p>
    <img
     src='https://www.las2orillas.co/wp-content/uploads/2015/05/hqdefault1.jpg'
     alt='Descripción de mi imagen'
    />
   </div>

   {/* Proyecto Filtrado */}
   <div className='project-list'>
    {filteredProjects.length === 0 ? (
     <p>No hay proyectos para mostrar.</p>
    ) : (
     <ProjectList />
    )}
   </div>
  </div>
 )
}

export default App
