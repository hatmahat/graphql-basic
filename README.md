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
- [Apollo Explorer](https://studio.apollographql.com/sandbox/explorer)

## Run Server
```bash
npx nodemon index.js 
```

### Sample query
```graphql
query ReviewQuery($id: ID!) {
  review(id: $id) {
    rating,
    content
  }
  author(id: $id) {
    name,
    verified
  }
  game(id: $id) {
    title,
    platform
  }
}
```
##### variables
```json
{
  "id": "2",
}
```

#### > Game and Author resolver sample query
```graphql
query GameQuery($id: ID!) {
  game(id: $id) {
    title,
    reviews {
      rating
      content
    }
  }
  author(id: $id) {
    name,
    reviews {
      rating,
      content
    }
  }
}
```
##### variables
```json
{
  "id": "2",
}
```

#### > Reviews resolver sample query
```graphql
query ReviewQuery($id: ID!) {
  review(id: $id) {
    rating,
    game {
      title,
      platform,
      reviews {
        rating
      }
    },
    author {
      name,
      verified
    }
  }
}
```
##### variables
```json
{
  "id": "2",
}
```

#### > Delete mutation
```graphql
mutation DeleteMutation($id: ID!) {
  deleteGame(id: $id) {
    id,
    title,
    platform
  }
}
```
###### variables
```json
{
  "id": "2"
}
```

#### > Add mutation
```graphql
mutation AddMutation($game: AddGameInput!) {
  addGame(game: $game) {
    id, 
    title, 
    platform
  }
}
```
###### variables
```json
{
  "game": {
    "title": "a new game",
    "platform": ["switch", "ps5"]
  }
}
```

#### > Edit mutation
```graphql
mutation EditMutation($edits: EditGameInput!, $id: ID!) {
  updateGame(edits: $edits, id: $id) {
    title, 
    platform
  }
}
```
###### variables
```json
{
  "edits": {
    "title": "dark souls",
    "platform": ["PS2"]
  },
  "id": "2"
}
```