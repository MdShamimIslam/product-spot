const TitleF = ({ selectedHotspot }) => {
  const {title} = selectedHotspot || {};
  
  return (
      <h3 dangerouslySetInnerHTML={{ __html: title }} className="title" />
  )
}

export default TitleF;