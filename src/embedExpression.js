function EmbeddingExpression(){
  const companyName = 'Dumbways.id'

  function getMajor(){
      return " Full Stack "
  }

  function getBatch(number){
      return <>Batch {number}</>
  }
  return (
      <div>
          <h1>Welcome to {companyName} Class</h1>
          <p>{getMajor()} {getBatch(25)}</p>
      </div>
  )
}

export default EmbeddingExpression