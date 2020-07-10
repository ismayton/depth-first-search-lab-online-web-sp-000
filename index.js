function depthFirstSearch(rootNode, vertices, edges)
{
  let stack = [];
  let visited = [];
  stack.push(rootNode)
  
  while(stack.length > 0)
  {
    let currentNode = stack.pop()
    if(currentNode.discovered === null)
    {
      currentNode.discovered = true
      visited.push(currentNode)

      for(let i = 0; i < edges.length; i++)
      {
        if(edges[i][0] === currentNode.name)
        {
          let adjName = edges[i][1]
          console.log(`found in edge`)
          console.log(adjName)
          if(vertices.name == adjName)
          {
          stack.push(vertices)
          console.log(`added to stack:`)
          console.log(stack)
        }
        
        else if(edges[i][1] == currentNode)
        {
          let adjName = edges[i][0]
          console.log(`found in edge`)
          console.log(adjName)
          stack.push(vertices.adjName)
          console.log(`added to stack:`)
          console.log(stack)
        }
             
          
        }
      }
    }
  }
  return visited;
}



function findObjectByKey(array, key, value) 
{
  for (var i = 0; i < array.length; i++) 
  {
    if (array[i].key === value) 
    {
      return array[i];
    }
  }
return null;
}