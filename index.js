function depthFirstSearch(rootNode, vertices, edges)
{
  let stack = [];
  let visited = [];
  stack.push(rootNode)
  
  
  console.log(`starting stack`)
  console.log(stack)
  
  while(stack.length > 0)
  {
    let currentNode = stack.pop()
    console.log(`remaining stack:`)
    if(currentNode.discovered === null)
    {
      currentNode.discovered = true
      visited.push(currentNode)
      console.log(`visited updated`)
      console.log(visited)
      for(let i = 0; i < edges.length; i++)
      {
        if(edges[i][0] === currentNode)
        {
          let adjName = edges[i][1]
          console.log(`found in stack`)
          console.log(adjName)
          for(let j = 0; j < vertices.length; j++)
          {
             if(vertices[j][name] === adjName)
             {
               stack.push(vertices[j])
               console.log(`added to stack:`)
               console.log(stack)
             }
          }
        }
        
        else if(edges[i][1] == currentNode.name)
        {
          let adjName = edges[i][0]
          console.log(`found in stack`)
          console.log(adjName)
          for(let j = 0; j < vertices.length; j++)
          {
             if(vertices[j][name] === adjName)
             {
               stack.push(vertices[j])
               console.log(`added to stack:`)
               console.log(stack)
             }
          }
        }
        
      }
    }
  }
  return visited
}