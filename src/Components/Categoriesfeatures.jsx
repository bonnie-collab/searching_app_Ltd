import React from 'react'
import '../css/Categoriesfeatures.css'   // ✅ Import external CSS for styling

// ✅ Sample categories data (can later be fetched from API or imported)
const categories = [
  {
    id: 1,
    name: "Excavators",
    image: "/images/excavator2.jpg",
    count: 248
  },
  {
    id: 2,
    name: "Cranes",
    image: "/images/cranes.jpg",
    count: 87
  },
  {
    id: 3,
    name: "Bulldozers",
    image: "/images/bulldozer2.jpg",
    count: 64
  },
  {
    id: 4,
    name: "Industrial Plants",
    image: "/images/shovel.jpg",
    count: 31
  },
  {
    id: 5,
    name: "Power Tools",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    count: 312
  },
  {
    id: 6,
    name: "Welders & Grinders",
    image: "https://images.unsplash.com/photo-1581091215367-59ab6b1b4b3c",
    count: 119
  }
];

const Categoriesfeatures = () => {
  return (
    //  Bootstrap container to center and give spacing
    <div className="container my-5">

      {/*  Section heading */}
      <h2 className="text-center mb-4 fw-bold">
        Featured Categories
      </h2>

      {/* Bootstrap grid row with spacing (g-4 = gap) */}
      <div className="row g-4 justify-content-center">

        {/*  Loop through categories and display each as a card */}
        {categories.map((cat) => (
          
          // Responsive columns (6 per row on md screens, 2 per row on small)
          <div key={cat.id} className="col-md-2 col-sm-6">

            {/* Custom styled card */}
            <div className="category-card">

              {/* Category image */}
              <img
                src={cat.image}
                alt={cat.name}
                className="category-img"
              />

              {/* Card body (text content) */}
              <div className="category-body">

                {/*  Category name */}
                <h6>{cat.name}</h6>

                {/*  Number of available items */}
                <p className='text-success'>{cat.count} available</p>

              </div>

            </div>

          </div>
        ))}

      </div>

    </div>
  )
}

export default Categoriesfeatures;