const DescriptionF = ({ selectedHotspot }) => {
  const {description} = selectedHotspot || {};
  
  return (
      <p dangerouslySetInnerHTML={{ __html: description }} className="desc" />
  )
}

export default DescriptionF;