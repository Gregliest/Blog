import {
  CreateTableCommand,
  DynamoDBClient,
  GetItemCommand,
  UpdateItemCommand,
} from '@aws-sdk/client-dynamodb'

const REGION = 'us-west-2'
const LIKES_TABLE = 'LIKES'

const { DynamoDBDocument } = require('@aws-sdk/lib-dynamodb')

const client = new DynamoDBClient({
  credentials: {
    accessKeyId: process.env.NEXT_PUBLIC_AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY,
  },
  region: REGION,
})
const docClient = DynamoDBDocument.from(client)

async function createLikeTable() {
  const params = {
    TableName: LIKES_TABLE,
    KeySchema: [{ AttributeName: 'page_id', KeyType: 'HASH' }],
    AttributeDefinitions: [{ AttributeName: 'page_id', AttributeType: 'S' }],
    ProvisionedThroughput: {
      ReadCapacityUnits: 10,
      WriteCapacityUnits: 10,
    },
  }

  try {
    const data = await client.send(new CreateTableCommand(params))
    console.log('Table Created', data)
    return data
  } catch (err) {
    console.log('Error', err)
  }
}

export async function addPageView(path) {
  const params = {
    TableName: LIKES_TABLE,
    Key: {
      page_id: { S: path },
    },
    ExpressionAttributeNames: {
      '#views': 'views',
    },
    ExpressionAttributeValues: {
      ':start': { N: '0' },
      ':incr': { N: '1' },
    },
    UpdateExpression: 'SET #views = if_not_exists(#views, :start) + :incr',
    ReturnValues: 'UPDATED_NEW',
  }

  try {
    const data = await client.send(new UpdateItemCommand(params))
    console.log(data)
    return data
  } catch (err) {
    console.error(err)
  }

  return ''
}
export async function addLike(path) {
  const params = {
    TableName: LIKES_TABLE,
    Key: {
      page_id: { S: path },
    },
    ExpressionAttributeNames: {
      '#likes': 'likes',
    },
    ExpressionAttributeValues: {
      ':start': { N: '0' },
      ':incr': { N: '1' },
    },
    UpdateExpression: 'SET #likes = if_not_exists(#likes, :start) + :incr',
    ReturnValues: 'UPDATED_NEW',
  }

  try {
    const data = await client.send(new UpdateItemCommand(params))
    console.log(data)
    return data
  } catch (err) {
    console.error(err)
  }

  return ''
}

export async function getLikes(path) {
  console.log('Got likes ' + path)
  const params = {
    TableName: LIKES_TABLE,
    Key: {
      page_id: path,
    },
  }

  const response = await docClient.get(params)
  return response.Item != undefined ? response.Item.likes : 0
}

// export async function getLikes(path) {
//   console.log('Got likes ' + path)
//   const params = {
//     TableName: 'LIKES',
//     Key: {
//       page_id: { S: path },
//     },
//   }

//   const response = await client.send(new GetItemCommand(params))
//   console.log(response.Item)

//   return response
// }
