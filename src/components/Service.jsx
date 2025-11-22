import "./Service.css";

export default function Service({ title, description, image, reverse }) {
  return (
    <div className={`service-block ${reverse ? 'reverse' : ''}`}>
      <div className="service-image-wrapper">
        <img src={image} alt={title} className="service-image" />
      </div>
      <div className="service-text">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}
