const TitleF = ({ selectedHotspot:{title} }) => {
  
  return (
      <h3 dangerouslySetInnerHTML={{ __html: title }} className="title" />
  )
}

export default TitleF;