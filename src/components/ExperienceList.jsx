import ExperienceCard from "./ResultCard";

export default function ExperienceList({ experiences, favorites, onToggleFavorite }) {
  if (!experiences.length) {
    return <div style={{textAlign:'center',color:'#bbb',margin:'2rem 0'}}>No experiences available</div>;
  }
  return (
    <div style={{ maxWidth: 900, margin: "0 auto" }}>
      {experiences.map((exp) => (
        <ExperienceCard
          key={exp.id}
          image={exp.image}
          title={exp.name}
          desc={exp.description}
          price={exp.discount ? <><span style={{textDecoration:'line-through',color:'#bbb',marginRight:6}}>${exp.price}</span><span>${exp.price-exp.discount}</span></> : `$${exp.price}`}
          badge={exp.badge}
          isEco={exp.isEco}
          isFavorite={favorites.includes(exp.id)}
          onToggleFavorite={() => onToggleFavorite(exp.id)}
        />
      ))}
    </div>
  );
}
