# GraphQL 

- GraphQL is a Query Language
- Alternative to using a REST API

GraphQL syntax example
```graphql
Query {
    books {
        title,
        author,
        price
    }
}
```

## Endpoints
`pokemonsite.com/api/pokemon`
`pokemonsite.com/api/pokenmon/123`

## Drawbacks using REST API
1. Over fetching  
    Getting back more data than we need
2. Under fetching  
    Getting back less data than we need (need addtional request)

## Example Syntax
```graphql
Query {
    course(id: "1") {
        id, 
        title, 
        thumbnail_url,
        author {
            name,
            id, 
            courses {
                id,
                title,
                thumbnail_url
            }
        }
    }
}
```