const TitleDes = ({ title, description }) => {
  
  return (
    <div className="info">
      <h3 dangerouslySetInnerHTML={{ __html: title }} className="title" />
      <p dangerouslySetInnerHTML={{ __html: description }} className="desc" />
    </div>
  )
}

export default TitleDes;