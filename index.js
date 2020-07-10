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
        if(edges[i][0] === currentNode)
        {
          adjName = edges[i][1]
          for(let j = 0; j < vertices.length; j++)
          
        }
        else if(edges[i][1] == currentNode)
        {
          stack.push(edges[i][0])
        }
      }
    }
  }
  return visited
}