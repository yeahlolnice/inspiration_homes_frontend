import Carousel from "react-bootstrap/Carousel";

function GalleryPage() {
  return (
    <Carousel style={{ display: "flex", alignItems: "center" }}>
      <Carousel.Item style={{ minHeight: "60%", overflow: "hidden" }}>
        <img
          className="d-block w-100"
          src="https://scallyprojects.com.au/wp-content/uploads/2017/12/img-6-1.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>1 Beach Road</h3>
          <p>Deck construction. Build Date 01/20.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.refreshrenovations.global/images/uploads/gold_coast_home_extension_mob.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>60 Smegma Road</h3>
          <p>Extension and Renovation. Build Date 05/19.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://dawsonconstructions.com/wp-content/uploads/2019/04/IMG_0785.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>43 Mern Avenue</h3>
          <p>Kitchen renovation. Build Date 09/19.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://ultimatesf.com.au/wp-content/uploads/2015/03/stud-frame-shed-kits-3.jpg"
          alt="Fourth slide"
        />

        <Carousel.Caption>
          <h3>45 Test Street</h3>
          <p>Shed construction on existing site. Build Date 02/20</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default GalleryPage;

/* <img className="d-block w-100" src="https://dummyimage.com/640x360/fff/aaa" alt="Second slide"/>
      <img className="d-block w-100" src="https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png" alt="First slide"/> */
