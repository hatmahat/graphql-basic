# GraphQL 

- GraphQL is a Query Language
- Alternative to using a REST API

## Drawbacks using REST API
1. Over fetching  
    Getting back more data than we need
2. Under fetching  
    Getting back less data than we need (need addtional request)

## Example Syntax
```graphql
Query {
    books {
        title,
        author,
        price
    }
}
```

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

## Tools
- Apollo Explorer