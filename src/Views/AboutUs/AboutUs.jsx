import './AboutUs.css';

const AboutUs = () => {
    return (
        <body className='cuerpo'>
            <div className='cabecera'>
                <h2>Sobre nosotros!</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat dolorem asperiores quisquam, enim incidunt aliquid, quae non sapiente cum, praesentium aperiam pariatur laboriosam maiores adipisci ad dolor id saepe provident.</p>
            </div>
            <div className='container-sobrenos'>
                <section className='sobrenos'>
                    <div className='imagen'>
                        <img src="public/aboutus.jpg"/>
                    </div>
                    <div className='contenido'>
                        <h2>MARKETPLACE</h2>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus illum deserunt eum tempore, sint quis eos minima similique praesentium beatae temporibus adipisci nostrum! Sapiente soluta similique, dolores veritatis temporibus laudantium!</p>
                        <a href="" className='mas'>Mas...</a>
                    </div>
                </section>
            </div>
        </body>
    )
}

export default AboutUs