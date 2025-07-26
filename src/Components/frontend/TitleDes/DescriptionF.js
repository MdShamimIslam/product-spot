const DescriptionF = ({ selectedHotspot:{description} }) => {
  
  return (
      <p dangerouslySetInnerHTML={{ __html: description }} className="desc" />
  )
}

export default DescriptionF;