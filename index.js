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
      

      for(let i = 0; i < edges.length; i++)
      {
        ///if current node is the first entry
        if(edges[i][1] === currentNode.name)
        {
          let adjName = edges[i][0]
          console.log(`found in edge`)
          console.log(adjName)
          visited.push(adjName)
          for(let j = 0; j < vertices.length; j++)
          {
            if(vertices[j].name == adjName)
            {
              stack.push(vertices[j])
              console.log(`added to stack:`)
              console.log(stack)
            }
          }
        }
        ///if current node is second entry
        else if(edges[i][0] == currentNode.name)
        {
          let adjName = edges[i][1]
          console.log(`found in edge`)
          console.log(adjName)
          visited.push(adjName)
          for(let j = 0; j < vertices.length; j++)
          {
            if(vertices[j].name == adjName)
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