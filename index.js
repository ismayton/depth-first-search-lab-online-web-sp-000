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
          stack.push(edges[i][1]);
        }
        else if(edges[i][0] == currentNode)
        {
          stack.push(edges[i][0])
        }
      }
    }
  }
  return visited
}